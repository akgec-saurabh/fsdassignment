import UserCard from "@/components/UserCard";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const user = {
  name: "Vishnu Swaroop",
  role: "Full Stack Developer",
  company: "Oruphones",
};
function MyConnections() {
  const { data: session } = useSession();
  const [users, setUsers] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const getAllUser = async () => {
      let response;
      try {
        response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/connect/${session.userId}`
        );
      } catch (error) {
        console.log(error);
      }
      if (response) {
        setUsers(response?.data.users);
      }
    };
    getAllUser();
  }, []);

  useEffect(() => {
    if (!session) {
      router.push("/auth/login");
    }
  }, []);

  return (
    <div>
      <UserCard {...user} />
      {users.map((user) => (
        <UserCard {...user} />
      ))}
    </div>
  );
}

export default MyConnections;
