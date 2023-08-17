import { Form, Formik } from "formik";
import React from "react";
import Input from "./Input";
import Button from "./Button";
import Image from "next/image";
import close from "@/public/close.svg";
import * as Yup from "yup";
import TextArea from "./TextArea";

function BasicDetailsEdit({ onSave, onClose, basicDetail, setBasicDetail }) {
  console.log("Basic Form ", basicDetail);
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full max-w-xl bg-white  px-8 py-8 shadow-md rounded-xl z-20">
      <div className="flex justify-between">
        <div className="font-medium">Basic Details</div>
        <Image
          onClick={onClose}
          className="cursor-pointer"
          src={close}
          width={24}
          height={24}
          alt="close"
        />
      </div>
      <Formik
        enableReinitialize={true}
        initialValues={{ ...basicDetail }}
        validationSchema={Yup.object({
          phone: Yup.string()
            .min(10, "Must be 10 character")
            .max(10, "Must be 10 character")
            .required("Required"),
          skills: Yup.string().required("Required"),
          // name: Yup.string().required("Required"),
          about: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          setBasicDetail(values);
          onSave(values);
          onClose();
        }}
      >
        <Form>
          {/* <Input name="name" label="Your Name" placeholder="Vishnu Swaroop" /> */}

          <Input name="phone" label="Your Phone" placeholder="9415793535" />
          <Input
            name="skills"
            label="Skills"
            placeholder="Java,Flutter,React"
          />
          <TextArea name="about" label="About" placeholder="Your About" />
          <Button type="submit">Save</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default BasicDetailsEdit;
