import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const Nav = () => {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 w-full h-16 px-16 bg-[#021222] bg-opacity-80 text-white border-b-[0.5px] border-white z-20 flex justify-start items-center">
      <ul className="flex flex-row items-center list-none space-x-8">
        <li>
          <Link href='/'>
            Stock Analyzer
          </Link>
        </li>
        {/* Add a conditional for sign-in/out */}
        {session ? (
          <>
            <li className="text-sm">
              Welcome, {session.user.name}
            </li>
            <li>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </li>
          </>
        ) : (
          <li>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
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
