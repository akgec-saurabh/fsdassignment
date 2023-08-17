import React from "react";
import Input from "./Input";
import { Form, Formik } from "formik";
import TextArea from "./TextArea";
import Image from "next/image";
import close from "@/public/close.svg";
import Button from "./Button";
import * as Yup from "yup";

function EducationEdit({
  onSave,
  onClose,
  educationDetail,
  setEducationDetail,
}) {
  return (
    <div className=" fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full max-w-xl bg-white  px-8 py-8 shadow-md rounded-xl z-20">
      <div className="flex justify-between">
        <div className="font-medium">Education</div>
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
        initialValues={...educationDetail}
        validationSchema={Yup.object({
          college: Yup.string().required("Required"),
          course: Yup.string().required("Required"),
          from: Yup.string().required("Required"),
          to: Yup.string().required("Required"),
          desc: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          setEducationDetail(values);
          onSave(values);
          onClose();
        }}
      >
        <Form>
          <Input name="college" label="College" placeholder="IIT HYDERABAD" />
          <Input name="course" label="Course" placeholder="B.Tech" />
          <div className="">
            <span className="block text-slate-600 mt-4 -mb-2">Duration</span>
            <div className="flex justify-between gap-4 ">
              <Input type="date" name="from" label="From" />
              <Input type="date" name="to" label="To" />
            </div>
          </div>
          <TextArea name="desc" label="Description" />
          <Button type="submit">Save</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default EducationEdit;
