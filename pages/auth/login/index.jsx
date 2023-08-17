import Input from "@/components/Input";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-violet-500 w-full min-h-screen flex justify-center items-center relative">
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
            signIn("credentials", {
              ...values,
              redirect: false,
            });
          }}
        >
          <Form>
            <Input name="email" label="Email" />
            <Input name="password" type="password" label="Password" />
            <Button type="submit">Login</Button>
          </Form>
        </Formik>
        <Button border onClick={() => router.push("/auth/register")}>
          Register
        </Button>
      </div>
    </div>
  );
}

export default Login;
