import { useField } from "formik";
import React from "react";

function Select({ label, editMode = true, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label className="block text-slate-600 " htmlFor={props.id || props.name}>
        {label}
      </label>
      <select
        className={`w-full bg-transparent  text-input px-4 py-2  border  rounded-md ${
          editMode ? "border-slate-300" : "border-transparent"
        } bg-transparent  w-full`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error  text-xs text-red-500 my-1">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default Select;
