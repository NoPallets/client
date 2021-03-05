import Head from "next/head";
import Footer from "./Footer";
import Nav from "./Nav";

type LayoutProps = React.PropsWithChildren<{
  title?: string;
}>;

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <div className="max-w-screen-2xl mx-auto my-0">
      <Head>
        <title>{title}</title>
        <link
          rel="preload"
          href="/fonts/universbold2.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
