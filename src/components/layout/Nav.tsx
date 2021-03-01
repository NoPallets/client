import Link from "next/link";

const Nav = () => {
  return (
    <header className="w-auto xl:w-4/5 mx-auto sticky z-10 mb-20">
      <div className="flex justify-between items-center">
        <Link href="/about">
          <a className="cursor-pointer hover:opacity-50">About NP</a>
        </Link>
        <Link href="/">
          <a className="cursor-pointer text-6xl text-bold ">NoPallets</a>
        </Link>
        <Link href="/contact">
          <a className="cursor-pointer hover:opacity-50">Contact NP</a>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
