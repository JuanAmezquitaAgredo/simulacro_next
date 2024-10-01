"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import FormLoginComponent from "@/components/molecules/FormLogin/FormLogin";


interface User {
    id: string;
    name: string;
    email: string;
    tokenJWT: string;
}

export default function LoginPage() {
    const router = useRouter();
    const { status, data: session } = useSession();

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log({ status: status, session });
        if (status === "authenticated") {
            const name = session.user.name;
            const email = session.user.email;
            const tokenJWT = session.user.tokenJWT;
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("tokenJWT", tokenJWT);
            router.push("/home");
            router.refresh();
        }
    }, [status, session]);

    const handleSignIn = async (email: string, password: string) => {
        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        console.log({ result });

        if (result?.error) {
            setError(result.error);
        } else {
            router.push("/home");
        }
    };

    return (
        <div>
            {status === "loading" && <p>Loading...</p>}

            {status === "unauthenticated" && (
                <div>
                    <h3>Login</h3>
                    <FormLoginComponent onSignIn={handleSignIn} /> {/* Usamos el formulario aquí */}
                    {/* Mostrar error si lo hay */}
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
            )}
        </div>
    );
}
