import Image from "next/image";
import React from "react";
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

function Dashboard(props) {
  console.log(props);
  return (
    <div className="h-full w-full pr-16">
      <div className="bg-violet-900 h-44 w-full rounded-xl mt-4 ">
        <div className="text-white mx-4 py-2">MY PROFILE</div>
        <div className="flex gap-44 mt-14 bg-white mx-11 px-8 py-8 rounded-xl">
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <Image
                src={user}
                width={88}
                height={88}
                style={{ objectFit: "cover" }}
                alt="profile"
              />
              <EditButton>Upload Photo</EditButton>
            </div>
            <div>
              <BasicDetail />

              <Formik
                initialValues={{
                  about:
                    "Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.",
                }}
              >
                <Form className="border border-slate-300 px-4 py-4 rounded-md my-6">
                  <TextArea
                    name="about"
                    label={
                      <span>
                        About <span className="text-violet-900">Vishnu</span>
                      </span>
                    }
                  />
                </Form>
              </Formik>
              <Skills />
            </div>
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
