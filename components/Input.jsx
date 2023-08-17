import React from "react";
import { useField } from "formik";

function Input({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="my-4 w-full">
      <label className="block text-slate-600 " htmlFor={props.id || props.name}>
        {label}
      </label>
      <div className="w-full flex justify-between">
        <input
          className="text-input px-4 py-2 border  rounded-md 
         border-slate-300 w-full bg-transparent"
          {...field}
          {...props}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="error text-xs text-red-500 my-1">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default Input;
