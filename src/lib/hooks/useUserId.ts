import { useSession } from "next-auth/client";
import { parseJwt } from "../helpers";

export const useUserId = () => {
  const [session] = useSession();
  const userId = session?.token ? parseJwt(session.token).sub : null;
  return [userId, session];
};
