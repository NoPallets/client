import { useSession, getSession } from "next-auth/client";
import Link from "next/link";
import SignIn from "./SignIn";

const Nav = () => {
  const [session] = useSession();
  return (
    <header className="w-auto mx-auto sticky top-0 z-10 mb-20">
      <div className="flex justify-between items-center">
        <Link href="/about">
          <a className="cursor-pointer hover:opacity-50">About NP</a>
        </Link>
        <Link href="/">
          <a className="cursor-pointer text-6xl text-bold ">NoPallets</a>
        </Link>
        <div>
          <Link href="/contact">
            <a className="cursor-pointer hover:opacity-50">Contact NP</a>
          </Link>
          {session && (
            <>
              <Link href="/dashboard">
                <a
                  style={{ margin: "5px" }}
                  className="cursor-pointer hover:opacity-50"
                >
                  Dashboard
                </a>
              </Link>
              <Link href="/upload">
                <a
                  style={{ margin: "5px" }}
                  className="cursor-pointer hover:opacity-50"
                >
                  Upload
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
      <SignIn />
    </header>
  );
};

export default Nav;
