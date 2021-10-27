import { signIn, signOut, useSession, getSession } from "next-auth/client";

const SignIn = () => {
  const [session] = useSession();
  return (
    <span className="hover:opacity-50">
      {!session && (
        <a
          href={`/api/auth/signin`}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Sign in
        </a>
      )}
      {session && (
        <>
          <a
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out
          </a>
        </>
      )}
    </span>
  );
};

export default SignIn;

//Pass session to the Provider inside _app
export async function getServerSideProps(ctx) {
  return { props: { session: await getSession(ctx) } };
}
