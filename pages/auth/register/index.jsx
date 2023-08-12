import Button from "@/components/Button";
import CertificationsEdit from "@/components/CertificationsEdit";
import EducationEdit from "@/components/EducationEdit";
import ExperienceEdit from "@/components/ExperienceEdit";
import Input from "@/components/Input";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import EditButton from "@/components/EditButton";
import * as Yup from "yup";

const basicInitialValues = {
  name: "",
  email: "",
  password: "",
};

function Register() {
  const [certification, setCertification] = useState(false);
  const [experience, setExperience] = useState(false);
  const [education, setEducation] = useState(false);
  const [basic, setBasic] = useState(false);

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
            console.log(values);
            setSubmitting(false);
          }}
        >
          <Form>
            <Input name="name" label="Your Name" />
            <Input name="email" label="Email" />
            <Input name="password" type="password" label="Password" />

            <div className="flex flex-wrap">
              <EditButton
                type="button"
                onClick={() => setCertification(true)}
                icon
              >
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
              <EditButton
                type="button"
                onClick={() => setExperience(true)}
                icon
              >
                Add Experience
              </EditButton>

              {/* Eductaion  */}
              <EditButton type="button" onClick={() => setEducation(true)} icon>
                Add Education
              </EditButton>
            </div>

            <Button type="submit">Register</Button>
          </Form>
        </Formik>
      </div>

      {certification && (
        <div className="absolute z-10 top-0 left-0 w-screen h-screen bg-black/50">
          <CertificationsEdit onClick={() => setCertification(false)} />
        </div>
      )}

      {experience && (
        <div className="absolute z-10 top-0 left-0 w-screen h-screen bg-black/50">
          <ExperienceEdit onClick={() => setExperience(false)} />
        </div>
      )}

      {education && (
        <div className="absolute z-10 top-0 left-0 w-screen h-screen bg-black/50">
          <EducationEdit onClick={() => setEducation(false)} />
        </div>
      )}
    </div>
  );
}

export default Register;
