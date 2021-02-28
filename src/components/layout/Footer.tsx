const Footer = () => {
  return (
    <footer className="fixed bottom-5 w-full flex justify-center z-10 text-sm font-bold">
      <span className="mx-2">Copyright © {new Date().getFullYear()}.</span>
      <span>NoPallets</span>
    </footer>
  );
};

export default Footer;
