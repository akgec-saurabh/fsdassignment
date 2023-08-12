import { Form, Formik } from "formik";
import React from "react";
import Input from "./Input";
import Button from "./Button";
import Image from "next/image";
import close from "@/public/close.svg";
import * as Yup from "yup";

const initialValues = {
  phone: "",
  skills: "",
};

function BasicDetailsEdit({ onClick, basicDetail, setBasicDetail }) {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full max-w-xl bg-white  px-8 py-8 shadow-md rounded-xl">
      <div className="flex justify-between">
        <div className="font-medium">Certifications</div>
        <Image
          onClick={onClick}
          className="cursor-pointer"
          src={close}
          width={24}
          height={24}
          alt="close"
        />
      </div>
      <Formik
        initialValues={basicDetail || initialValues}
        validationSchema={Yup.object({
          phone: Yup.string()
            .min(10, "Must be 10 character")
            .max(10, "Must be 10 character")
            .required("Required"),
          skills: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          console.log(values);
          setBasicDetail(values);
          onClick();
        }}
      >
        <Form>
          <Input name="phone" label="Your Phone" placeholder="9415793535" />
          <Input
            name="skills"
            label="Skills"
            placeholder="Java,Flutter,React"
          />
          <Button type="submit">Save</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default BasicDetailsEdit;