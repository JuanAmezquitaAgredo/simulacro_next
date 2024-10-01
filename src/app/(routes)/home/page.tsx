'use client'
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  const { status, data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/login");
     // redirect to login
  };

  return (
    <div>
      <h3>Home Page</h3>
      {status === "authenticated" && (
        <div>
          <p>page</p>
          <p>{session.user.email}</p>
          <button onClick={handleSignOut}>Signout</button>
        </div>

      )}
    </div>
  );
}
