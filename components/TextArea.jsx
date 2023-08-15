import React, { useState } from "react";
import { useField } from "formik";

function TextArea({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="w-full my-4">
      <label className="block text-slate-600 " htmlFor={props.id || props.name}>
        {label}
      </label>
      <textarea
        rows={5}
        className={`text-area px-4 py-2  w-full resize-none overflow-hidden border  rounded-md border-slate-300
        bg-transparent`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-xs text-red-500 my-1  ">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default TextArea;
