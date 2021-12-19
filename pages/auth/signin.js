import { getProviders, signIn as signInto} from "next-auth/react"

function signIn({providers}) {
    return (
        <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signInto(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
    )
}

//server side rendering
export async function getServerSideProps(){
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signIn
