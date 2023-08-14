import Button from "@/components/Button";
import CertificationsEdit from "@/components/CertificationsEdit";
import EducationEdit from "@/components/EducationEdit";
import ExperienceEdit from "@/components/ExperienceEdit";
import Input from "@/components/Input";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import EditButton from "@/components/EditButton";
import * as Yup from "yup";
import BasicDetailsEdit from "@/components/BasicDetailsEdit";
import Image from "next/image";
import check from "@/public/check.svg";
import { useRouter } from "next/router";

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

  const [basicDetail, setBasicDetail] = useState(null);
  const [certificationDetail, setCertificationDetail] = useState(null);
  const [experienceDetail, setExperienceDetail] = useState(null);
  const [educationDetail, setEducationDetail] = useState(null);

  return (
    <div className="bg-slate-300 w-full min-h-screen flex justify-center items-center relative">
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
            setSubmitting(false);
          }}
        >
          <Form>
            <Input name="name" label="Your Name" />
            <Input name="email" label="Email" />
            <Input name="password" type="password" label="Password" />

            <div className="flex">
              <EditButton type="button" onClick={() => setBasic(true)} icon>
                Add Basic Details
              </EditButton>
              {basicDetail && (
                <Image
                  className="-ml-2"
                  src={check}
                  width={18}
                  height={18}
                  alt="check"
                />
              )}
            </div>
            {/* Certificaiton  */}
            <div className="flex">
              <EditButton
                type="button"
                onClick={() => setCertification(true)}
                icon
              >
                Add Certification
              </EditButton>
              {certificationDetail && (
                <Image
                  className="-ml-2"
                  src={check}
                  width={18}
                  height={18}
                  alt="check"
                />
              )}
            </div>

            {/* Xp  */}
            <div className="flex">
              <EditButton
                type="button"
                onClick={() => setExperience(true)}
                icon
              >
                Add Experience
              </EditButton>

              {experienceDetail && (
                <Image
                  className="-ml-2"
                  src={check}
                  width={18}
                  height={18}
                  alt="check"
                />
              )}
            </div>

            {/* Eductaion  */}
            <div className="flex">
              <EditButton type="button" onClick={() => setEducation(true)} icon>
                Add Education
              </EditButton>
              {educationDetail && (
                <Image
                  className="-ml-2"
                  src={check}
                  width={18}
                  height={18}
                  alt="check"
                />
              )}
            </div>

            <Button type="submit">Register</Button>
          </Form>
        </Formik>
        <Button border onClick={() => router.push("/auth/login")}>
          Login
        </Button>
      </div>

      {basic && (
        <div className="absolute z-10 top-0 left-0 w-screen h-screen bg-black/50">
          <BasicDetailsEdit
            basicDetail={basicDetail}
            setBasicDetail={setBasicDetail}
            onClick={() => setBasic(false)}
          />
        </div>
      )}
      {certification && (
        <div className="absolute z-10 top-0 left-0 w-screen h-screen bg-black/50">
          <CertificationsEdit
            certificationDetail={certificationDetail}
            setCertificationDetail={setCertificationDetail}
            onClick={() => setCertification(false)}
          />
        </div>
      )}

      {experience && (
        <div className="absolute z-10 top-0 left-0 w-screen h-screen bg-black/50">
          <ExperienceEdit
            experienceDetail={experienceDetail}
            setExperienceDetail={setExperienceDetail}
            onClick={() => setExperience(false)}
          />
        </div>
      )}

      {education && (
        <div className="absolute z-10 top-0 left-0 w-screen h-screen bg-black/50">
          <EducationEdit
            educationDetail={educationDetail}
            setEducationDetail={setEducationDetail}
            onClick={() => setEducation(false)}
          />
        </div>
      )}
    </div>
  );
}

export default Register;
