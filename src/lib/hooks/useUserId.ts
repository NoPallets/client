import { useSession } from "next-auth/client";
import { parseJwt } from "../helpers";

export const useUserId = () => {
  const [session] = useSession();
  return session?.token ? parseJwt(session.token).sub : null;
};
