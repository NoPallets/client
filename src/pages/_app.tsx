import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: any): any {
  return <Component {...pageProps} />;
}
