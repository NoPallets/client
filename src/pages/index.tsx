import { useFetchUser } from "../lib/user";
import { withApollo } from "../lib/withApollo";
import { ProductForm } from "../components/ProductForm/ProductForm";

const IndexPage = () => {
  const { user } = useFetchUser();
  console.log(user);
  return (
    <>
      <ProductForm />
      <div className="test">test</div>{" "}
    </>
  );
};

export default withApollo({ ssr: true })(IndexPage);

// enable the line below for client side rendering of <TodoPrivateWrapper />
// export default withApollo()(IndexPage)
