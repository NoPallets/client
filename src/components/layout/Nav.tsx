import { useSession, getSession } from "next-auth/client";
import Link from "next/link";
import SignIn from "./SignIn";

const Nav = () => {
  const [session] = useSession();
  return (
    <header className="w-auto mx-auto sticky top-0 z-10 mb-20">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/about">
            <a className="cursor-pointer hover:opacity-50 mr-2">About NP</a>
          </Link>
          <Link href="/contact">
            <a className="cursor-pointer hover:opacity-50">Contact NP</a>
          </Link>
        </div>
        <Link href="/">
          <a className="cursor-pointer text-6xl text-bold ">NoPallets</a>
        </Link>
        <div>
          {session && (
            <>
              <Link href="/dashboard">
                <a className="mr-3 hover:opacity-50">Dashboard</a>
              </Link>
              <Link href="/upload">
                <a className="mr-3 hover:opacity-50">Upload</a>
              </Link>
            </>
          )}
          <SignIn />
        </div>
      </div>
    </header>
  );
};

export default Nav;
