import { Form, Formik } from "formik";
import React from "react";
import Input from "./Input";
import Button from "./Button";

function Skills() {
  const handleEdit = () => {};
  return (
    <Formik>
      <Form>
        <div>Skills</div>
        <Button onClick={handleEdit}>Edit</Button>
        <Input name="skill" label="skill" />
      </Form>
    </Formik>
  );
}

export default Skills;
