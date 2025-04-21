import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const Nav = () => {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 w-full h-16 px-8 md:px-16 bg-[#021222] bg-opacity-90 text-white border-b border-white z-20 flex justify-between items-center">
      <div className="text-xl font-semibold tracking-wide">
        <Link href="/" className="hover:text-primary-300 transition">
          Stock Analyzer
        </Link>
      </div>

      <ul className="flex flex-row items-center gap-4 md:gap-6">
        {session ? (
          <>
            <li className="hidden md:block text-sm text-gray-300">
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
