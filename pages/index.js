import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      console.log("Session Exist");
      router.replace("/dashboard");
    } else {
      console.log("Session Does not Exist");
      router.replace("/auth/login");
    }
  }, []);
  return null;
}
