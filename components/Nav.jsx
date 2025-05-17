import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { getIndexReturns } from '../lib/getIndexReturns';

const Nav = () => {
  const { data: session } = useSession();
  const [indexData, setIndexData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getIndexReturns();
        setIndexData(data);
      } catch (err) {
        console.error('Failed to fetch index data:', err);
      }
    };

    fetchData();
  }, []);

  const formatChange = (value) => {
    const color = value >= 0 ? 'text-green-400' : 'text-red-400';
    const sign = value >= 0 ? '+' : '';
    return <span className={color}>{sign}{value.toFixed(2)}%</span>;
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 px-8 lg:px-16 bg-[#021222] bg-opacity-90 text-white border-b border-white z-20 flex justify-between items-center">
      {/* Left Section */}
      <div className="text-xl font-semibold tracking-wide">
        <Link href="/" className="hover:text-primary-300 transition">
          Stock Analyzer
        </Link>
      </div>

      {/* Center Section */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-4 text-sm transition-opacity duration-500 ${indexData ? 'opacity-100' : 'opacity-0'}`}>
        <div>S&P 500: {indexData ? formatChange(indexData.sp500) : '...'}</div>
        <div>NASDAQ: {indexData ? formatChange(indexData.nasdaq) : '...'}</div>
        <div>Dow: {indexData ? formatChange(indexData.dow) : '...'}</div>
      </div>

      {/* Right Section: Auth Controls */}
      <ul className="flex flex-row items-center gap-4 md:gap-4">
        {session ? (
          <>
            <li className="hidden lg:block text-sm text-gray-300">
              Welcome, {session.user.name.split(' ')[0]}
            </li>
            <li>
              {session.user.image && (
                <Image
                  src={session.user.image}
                  alt="profile"
                  width={32}
                  height={32}
                  className="rounded-full border border-white"
                />
              )}
            </li>
            <li>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded transition"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </li>
          </>
        ) : (
          <li>
            <button
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-1.5 rounded transition"
              onClick={() => signIn('google')}
            >
              Sign in with Google
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
