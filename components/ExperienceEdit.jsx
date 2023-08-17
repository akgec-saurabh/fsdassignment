import React from "react";
import Select from "./Select";
import { Form, Formik } from "formik";
import Input from "./Input";
import close from "@/public/close.svg";
import Image from "next/image";
import Button from "./Button";
import * as Yup from "yup";

function ExperienceEdit({
  onSave,
  setExperienceDetail,
  experienceDetail,
  onClose,
}) {
  return (
    <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full max-w-xl bg-white  px-8 py-8 shadow-md  rounded-xl z-20">
      <div className="flex justify-between">
        <div className="font-medium">Experience</div>
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
        initialValues={...experienceDetail}
        validationSchema={Yup.object({
          position: Yup.string().required("Required"),
          company: Yup.string().required("Required"),
          type: Yup.string().required("Required"),
          from: Yup.string().required("Required"),
          to: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          setExperienceDetail(values);
          onSave(values);
          onClose();
        }}
      >
        <Form>
          <Input
            name="position"
            label="Position"
            placeholder="Full Stack Developer"
          />
          <Input name="company" label="Company" placeholder="Oruphones" />
          <Select name="type" label="Type">
            <option value="">Select a job type</option>
            <option value="Full-time">Full-time</option>
            <option value="Internship">Internship</option>
            <option value="Part Time">Part-time</option>
            <option value="Remote">Remote</option>
            <option value="Freelance">Freelance</option>
            <option value="Contract">Contract</option>
            <option value="Temporary">Temporary</option>
          </Select>
          <div className="">
            <span className="block text-slate-600 mt-4 -mb-2">Duration</span>
            <div className="flex justify-between gap-4 ">
              <Input type="date" name="from" label="From" />
              <Input type="date" name="to" label="To" />
            </div>
          </div>
          <Button type="submit">Save</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default ExperienceEdit;
