import Head from "next/head";
import Footer from "./Footer";

type LayoutProps = React.PropsWithChildren<{
  title?: string;
}>;

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}

      <Footer />
    </>
  );
}
