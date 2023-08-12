import Input from "@/components/Input";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import Button from "@/components/Button";

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  return (
    <div className="bg-slate-300 w-full min-h-screen flex justify-center items-center relative">
      <div className="max-w-xl w-full bg-white shadow-md rounded-xl px-8 py-8">
        <div className="font-medium text-2xl text-center uppercase ">Login</div>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
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
            <Input name="email" label="Email" />
            <Input name="password" type="password" label="Password" />
            <Button type="submit">Login</Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
