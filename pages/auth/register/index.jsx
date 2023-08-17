import Button from "@/components/Button";
import CertificationsEdit from "@/components/CertificationsEdit";
import EducationEdit from "@/components/EducationEdit";
import ExperienceEdit from "@/components/ExperienceEdit";
import Input from "@/components/Input";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import EditButton from "@/components/EditButton";
import * as Yup from "yup";
import BasicDetailsEdit from "@/components/BasicDetailsEdit";
import Image from "next/image";
import check from "@/public/check.svg";
import { useRouter } from "next/router";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";

const basicInitialValues = {
  name: "",
  email: "",
  password: "",
};

function Register() {
  const router = useRouter();
  const [basic, setBasic] = useState(false);
  const [certification, setCertification] = useState(false);
  const [experience, setExperience] = useState(false);
  const [education, setEducation] = useState(false);
  const [error, setError] = useState(null);

  const [basicDetail, setBasicDetail] = useState({
    phone: "",
    skills: "",
    about: "",
  });
  const [certificationDetail, setCertificationDetail] = useState({
    course: "",
    company: "",
  });
  const [experienceDetail, setExperienceDetail] = useState({
    position: "",
    company: "",
    type: "",
    from: "",
    to: "",
  });
  const [educationDetail, setEducationDetail] = useState({
    college: "",
    course: "",
    from: "",
    to: "",
    desc: "",
  });

  const { data: session, status } = useSession();

  const regHandler = async (data) => {
    let response;
    try {
      response = await axios.post("/api/register", { data });
    } catch (error) {
      console.log(error.response);
      setError(error.response.data?.message);
      //Show error
      setTimeout(() => {
        setError(null);
      }, 5000);
    }

    if (response) {
      signIn("credentials", {
        redirect: false,
        ...data,
      });
    }
  };

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <div className="bg-violet-500 w-full min-h-screen flex justify-center items-center relative">
      {error && (
        <div className="absolute top-8 mx-auto bg-white px-8 py-2 rounded-full">
          {error}
        </div>
      )}
      <div className="max-w-xl w-full bg-white shadow-md rounded-xl px-8 py-8">
        <div className="font-medium text-2xl text-center uppercase ">
          Register
        </div>
        <Formik
          initialValues={basicInitialValues}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Required")
              .min(5, "Min Length Should be 5"),
            email: Yup.string().email("Not Valid Email").required("Required"),
            password: Yup.string()
              .required("Required")
              .min(5, "Min Length should be 5"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(
              values,
              basicDetail,
              certificationDetail,
              educationDetail,
              experienceDetail
            );

            regHandler({
              ...values,
              basic: basicDetail,
              cert: certificationDetail,
              xp: experienceDetail,
              edu: educationDetail,
            });

            setSubmitting(false);
          }}
        >
          <Form>
            <Input name="name" label="Your Name" />
            <Input name="email" label="Email" />
            <Input name="password" type="password" label="Password" />

            <EditButton type="button" onClick={() => setBasic(true)} icon>
              Add Basic Details
            </EditButton>

            {/* Certificaiton  */}
            <EditButton
              type="button"
              onClick={() => setCertification(true)}
              icon
            >
              Add Certification
            </EditButton>

            {/* Xp  */}
            <EditButton type="button" onClick={() => setExperience(true)} icon>
              Add Experience
            </EditButton>

            {/* Eductaion  */}
            <EditButton type="button" onClick={() => setEducation(true)} icon>
              Add Education
            </EditButton>

            <Button type="submit">Register</Button>
          </Form>
        </Formik>
        <Button border onClick={() => router.push("/auth/login")}>
          Login
        </Button>
      </div>

      {basic && (
        <>
          <div
            onClick={() => setBasic(false)}
            className="absolute top-0 left-0 w-screen h-screen bg-black/50"
          ></div>
          <div>
            <BasicDetailsEdit
              basicDetail={basicDetail}
              setBasicDetail={setBasicDetail}
              onClose={() => setBasic(false)}
              onSave={() => {}}
            />
          </div>
        </>
      )}
      {certification && (
        <>
          <div
            onClick={() => setCertification(false)}
            className="absolute top-0 left-0 w-screen h-screen bg-black/50"
          ></div>
          <CertificationsEdit
            certificationDetail={certificationDetail}
            setCertificationDetail={setCertificationDetail}
            onClose={() => setCertification(false)}
            onSave={() => {}}
          />
        </>
      )}

      {experience && (
        <>
          <div
            onClick={() => setExperience(false)}
            className="absolute top-0 left-0 w-screen h-screen bg-black/50"
          ></div>

          <ExperienceEdit
            experienceDetail={experienceDetail}
            setExperienceDetail={setExperienceDetail}
            onClose={() => setExperience(false)}
            onSave={() => {}}
          />
        </>
      )}

      {education && (
        <>
          <div
            onClick={() => setEducation(false)}
            className="absolute top-0 left-0 w-screen h-screen bg-black/50"
          ></div>
          <EducationEdit
            educationDetail={educationDetail}
            setEducationDetail={setEducationDetail}
            onClose={() => setEducation(false)}
            onSave={() => {}}
          />
        </>
      )}
    </div>
  );
}

export default Register;
