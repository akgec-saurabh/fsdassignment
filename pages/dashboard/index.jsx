import Image from "next/image";
import React, { useEffect } from "react";
import user from "../../public/user.png";
import { Form, Formik } from "formik";

import Skills from "@/components/Skills";
import BasicDetail from "@/components/BasicDetail";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ProfessionalDetails from "@/components/ProfessionalDetails";
import EditButton from "@/components/EditButton";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import PhotoWrapper from "@/components/PhotoWrapper";

function Dashboard(props) {
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
      <div className="h-full w-full">
        <div className="bg-violet-900 h-44 w-full rounded-xl px-4 ">
          <div className="text-white mx-4 py-2">MY PROFILE</div>
          <div className="sm:block lg:flex   gap-16  mt-14 bg-white sm:mx-5 lg:mx-11 px-8 py-8 rounded-xl shadow-md">
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <PhotoWrapper>
                  <Image
                    src={user}
                    width={88}
                    height={88}
                    style={{ objectFit: "cover" }}
                    alt="profile"
                  />
                </PhotoWrapper>

                <EditButton gray={true}>Upload Photo</EditButton>
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
    </>
  );
}

export default Dashboard;
