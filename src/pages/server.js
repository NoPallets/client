import { useSession, getSession, signIn } from 'next-auth/client'

export default function Page() {
    // As this page uses Server Side Rendering, the `session` will be already
    // populated on render without needing to go through a loading stage.
    // This is possible because of the shared context configured in `_app.js` that
    // is used by `useSession()`.
    const [session, loading] = useSession()

    return (
        <>
            <>
                <h1>Access Denied</h1>
                <p>
                    <a href="/api/auth/signin"
                        onClick={(e) => {
                            e.preventDefault()
                            signIn()
                        }}>You must be signed in to view this page</a>
                </p>
            </>

        </>
    )
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
    return {
        props: {
            session: await getSession(context)
        }
    }
}
