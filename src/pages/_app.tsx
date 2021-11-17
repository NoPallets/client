import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import { Provider } from "next-auth/client";

import "swiper/swiper.scss";
import "../styles/globals.css";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  console.log("pageprops are", pageProps);
  return (
    <Provider
      session={pageProps.session}
      options={{
        clientMaxAge: 10 * 60,
      }}
    >
      <ApolloProvider client={apolloClient}>
        <div style={{ margin: "20px" }}>
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    </Provider>
  );
}
