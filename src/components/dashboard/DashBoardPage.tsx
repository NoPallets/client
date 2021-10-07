import { useSession } from "next-auth/client";
import Layout from "../layout/Layout";
import { useUserId } from "../../lib/hooks/useUserId";

const DashBoardPage = () => {
  const [session] = useSession();
  const userId = useUserId();
  return (
    <Layout title="Nopallets Dashboard">
      <>
        <div>Hello from DashBoard for {session?.user?.email}</div>
      </>
    </Layout>
  );
};

export default DashBoardPage;
