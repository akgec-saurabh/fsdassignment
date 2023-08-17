import { Form, Formik } from "formik";
import React from "react";
import Input from "./Input";
import Button from "./Button";
import Image from "next/image";
import close from "@/public/close.svg";
import * as Yup from "yup";
import axios from "axios";

function CertificationsEdit({
  onSave,
  certificationDetail,
  setCertificationDetail,
  onClose,
}) {
  return (
    <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full max-w-xl bg-white  px-8 py-8 shadow-md rounded-xl z-20">
      <div className="flex justify-between">
        <div className="font-medium">Certifications</div>
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
        enableReinitialize
        initialValues={...certificationDetail }
        validationSchema={Yup.object({
          course: Yup.string().required("Required"),
          company: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          setCertificationDetail(values);
          onSave(values);
          onClose();
        }}
      >
        <Form>
          <Input name="course" label="Course" placeholder="Python" />
          <Input name="company" label="Company" placeholder="Coding Ninjas" />
          <Button type="submit">Save</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default CertificationsEdit;
