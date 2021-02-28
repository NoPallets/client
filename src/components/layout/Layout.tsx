import Head from "next/head";
import Footer from "./Footer";

type LayoutProps = React.PropsWithChildren<{
  title?: string;
}>;

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
      <Footer />
    </>
  );
};

export default Layout