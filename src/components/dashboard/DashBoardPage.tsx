import { useSession } from "next-auth/client";

const DashBoardPage = () => {
  const [session, loading] = useSession();
  return <div>Hello from DashBoard for {session.user.email}</div>;
};

export default DashBoardPage;
