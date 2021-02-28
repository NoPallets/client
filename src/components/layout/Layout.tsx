import Head from "next/head";
import Footer from "./Footer";
import Nav from "./Nav";

type LayoutProps = React.PropsWithChildren<{
  title?: string;
}>;

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;