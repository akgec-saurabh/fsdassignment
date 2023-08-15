import Image from "next/image";
import React, { useEffect } from "react";
import user from "../../public/user.png";
import { Form, Formik } from "formik";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import Skills from "@/components/Skills";
import BasicDetail from "@/components/BasicDetail";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ProfessionalDetails from "@/components/ProfessionalDetails";
import EditButton from "@/components/EditButton";
import axios from "axios";
import BasicDetailsEdit from "@/components/BasicDetailsEdit";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

function Dashboard(props) {
  console.log(props);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session) {
      router.push("/auth/login");
    }
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="h-full w-full pr-16">
        <div className="bg-violet-900 h-44 w-full rounded-xl mt-4 ">
          <div className="text-white mx-4 py-2">MY PROFILE</div>
          <div className="flex gap-44 mt-14 bg-white mx-11 px-8 py-8 rounded-xl">
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div className="rounded-full w-[88px] h-[88px] bg-rose-300 overflow-hidden">
                  <Image
                    src={user}
                    width={88}
                    height={88}
                    style={{ objectFit: "cover" }}
                    alt="profile"
                  />
                </div>
                <EditButton>Upload Photo</EditButton>
              </div>
              <BasicDetail />
            </div>
            <div className="flex-1">
              <ProfessionalDetails />
              <Certifications />
              <Experience />
              <Education />
            </div>
          </div>
        </div>
      </div>
      {/* <BasicDetailsEdit /> */}
    </>
  );
}

// export async function getStaticProps() {
//   let response;
//   try {
//     response = await axios.get(
//       "http://localhost:5000/api/cert/64d909907edaf01af598b4b8"
//     );
//     // response = await fetch(
//     //   "http://localhost:5000/api/cert/64d909907edaf01af598b4b8"
//     // );
//   } catch (error) {
//     console.log(error);
//   }

//   const data = await response.data;

//   console.log(data);

//   return {
//     props: { data: data },
//   };
// }

export default Dashboard;
