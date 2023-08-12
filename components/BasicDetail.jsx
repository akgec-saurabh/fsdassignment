import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import Input from "./Input";
import Button from "./Button";
const initalValues = {
  name: "Vishnu Swaroop",
  email: "vishnu@oruphones.com",
  phone: "+91 49652845732",
};

function BasicDetail() {
  const [editModeName, setEditModeName] = useState(false);
  const [editModeEmail, setEditModeEmail] = useState(false);
  const [editModePhone, setEditModePhone] = useState(false);

  return (
    <div className="border border-slate-300 px-4 rounded-md my-6">
      <Formik
        initialValues={{ name: "Vishnu Swaroop" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(20, "Must be 20 character or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          // onclick is running first so !editmode will be false for edit

          // send req only when user save
          if (!editModeName) {
            setSubmitting(false);
            console.log(values);
          }
        }}
      >
        <Form className="flex justify-between items-center">
          <Input name="name" label="Your Name" editMode={editModeName} />
          <Button type="submit" onClick={() => setEditModeName((prv) => !prv)}>
            {!editModeName ? "Edit" : "Save"}
          </Button>
        </Form>
      </Formik>
      {/* EMAIL */}
      <Formik
        initialValues={{ email: "vishnu@oruphones.com" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email Address")
            .max(20, "Must be 20 character or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          if (!editModeEmail) {
            setSubmitting(false);
            console.log(values);
          }
        }}
      >
        <Form className="flex justify-between items-center">
          <Input name="email" label="Email" editMode={editModeEmail} />
          <Button type="submit" onClick={() => setEditModeEmail((prv) => !prv)}>
            {!editModeEmail ? "Edit" : "Save"}
          </Button>
        </Form>
      </Formik>
      {/* Phone */}
      <Formik
        initialValues={{ phone: "+91 49652845732" }}
        validationSchema={Yup.object({
          phone: Yup.string()
            .max(14, "Must be 14 character or less")
            .min(9, "Must be 9 character or above")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          if (!editModePhone) {
            setSubmitting(false);
            console.log(values);
          }
        }}
      >
        <Form className="flex justify-between items-center">
          <Input name="phone" label="Phone Number" editMode={editModePhone} />
          <Button type="submit" onClick={() => setEditModePhone((prv) => !prv)}>
            {!editModePhone ? "Edit" : "Save"}
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default BasicDetail;
