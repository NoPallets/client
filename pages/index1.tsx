import { withApollo } from "../lib/withApollo";
import ProductForm from "../components/Product/ProductForm";

const IndexPage1 = () => {
  return <ProductForm />;
};

export default withApollo({ ssr: true })(IndexPage1);

// enable the line below for client side rendering of <TodoPrivateWrapper />
// export default withApollo()(IndexPage)
