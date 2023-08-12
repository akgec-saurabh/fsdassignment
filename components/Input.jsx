import React from "react";
import { useField } from "formik";

function Input({ label, editMode = true, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="my-4 w-full">
      <label className="block text-slate-600 " htmlFor={props.id || props.name}>
        {label}
      </label>
      <div className="w-full flex justify-between">
        <input
          disabled={!editMode}
          className={`text-input px-4 py-2  border  rounded-md ${
            editMode ? "border-slate-300" : "border-transparent"
          } bg-transparent  w-full`}
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
