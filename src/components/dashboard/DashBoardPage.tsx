import { useSession } from "next-auth/client";
import Layout from "../layout/Layout";

const DashBoardPage = () => {
  const [session, loading] = useSession();
  return (
    <Layout title="Nopallets Dashboard">
      <div>Hello from DashBoard for {session.user.email}</div>
    </Layout>
  );
};

export default DashBoardPage;
