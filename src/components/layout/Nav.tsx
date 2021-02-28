const Nav = () => {
  return (
    <header className="w-auto xl:w-4/5 mx-auto sticky z-10">
      <div className="flex justify-between items-center">
        <span className="cursor-pointer hover:opacity-50">About NP</span>
        <a className="cursor-pointer text-6xl text-bold ">NoPallets</a>
        <a className="cursor-pointer hover:opacity-50">Contact NP</a>
      </div>
    </header>
  );
};

export default Nav;
