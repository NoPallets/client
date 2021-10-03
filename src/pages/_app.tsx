import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import { Provider } from "next-auth/client";

import "swiper/swiper.scss";
import "../styles/globals.css";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/navigation/navigation.scss";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <Provider session={pageProps.session}>
      <ApolloProvider client={apolloClient}>
        <div style={{ margin: "20px" }}>
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    </Provider>
  );
}
