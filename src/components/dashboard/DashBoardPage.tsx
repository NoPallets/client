import { useSession } from "next-auth/client";
import Layout from "../layout/Layout";

const DashBoardPage = () => {
  const [session] = useSession();
  if (session) {
    return (
      <Layout title="Nopallets Dashboard">
        <>
          <div>Hello from DashBoard for {session?.user?.email}</div>
        </>
      </Layout>
    );
  }
  return (
    <Layout title="Access Denied">
      <p>Access Denied</p>
    </Layout>
  );
};

export default DashBoardPage;
