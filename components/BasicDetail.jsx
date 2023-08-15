import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import EditButton from "./EditButton";
import BasicDetailsEdit from "./BasicDetailsEdit";
import axios from "axios";
import { useSession } from "next-auth/react";

function BasicDetail() {
  const [basic, setBasic] = useState(false);
  const [basicDetails, setBasicDetails] = useState(null);
  const { data: session } = useSession();
  console.log(session);

  const saveHandler = async (values) => {
    let response;
    try {
      response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/basic/64d909907edaf01af598b4b8`,
        { ...values }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getBasic = async () => {
      let response;
      try {
        response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/basic/64d909907edaf01af598b4b8`
        );
      } catch (error) {
        console.log(error);
      }

      console.log(response?.data);
      setBasicDetails(response?.data.basic);
    };

    getBasic();
  }, []);

  return (
    <>
      <div className="border border-slate-300 px-4 rounded-md my-6">
        <div className="py-4 px-4 ">
          <div className="text-slate-600">Your Name</div>
          <div className="flex justify-between my-1 items-center ">
            <div>{basicDetails?.name}</div>
            <EditButton
              onClick={() => {
                setBasic(true);
              }}
            >
              Edit
            </EditButton>
          </div>
        </div>
        <div className="py-4 px-4 ">
          <div className="text-slate-600">Email</div>
          <div className="flex justify-between my-1 items-center ">
            <div>{session?.user.email}</div>
            <EditButton
              onClick={() => {
                setBasic(true);
              }}
            >
              Edit
            </EditButton>
          </div>
        </div>
        <div className="py-4 px-4 ">
          <div className="text-slate-600">Phone Number</div>
          <div className="flex justify-between my-1 items-center ">
            <div>{basicDetails?.phone}</div>
            <EditButton
              onClick={() => {
                setBasic(true);
              }}
            >
              Edit
            </EditButton>
          </div>
        </div>
      </div>
      <div className="border border-slate-300 px-4 rounded-md my-6">
        <div className="px-4 py-4">
          <div className="flex justify-between  items-center">
            <div>
              About <span>{basicDetails?.name}</span>
            </div>
            <EditButton
              onClick={() => {
                setBasic(true);
              }}
            >
              Edit
            </EditButton>
          </div>
          <div>{basicDetails?.about}</div>
        </div>
      </div>

      <div className="border border-slate-300 px-4 rounded-md my-6">
        <div className="px-4 py-4">
          <div className="flex justify-between  items-center">
            <div>Skills</div>
            <EditButton
              onClick={() => {
                setBasic(true);
              }}
            >
              Edit
            </EditButton>
          </div>
          {basicDetails?.skills.split(",")?.map((skill) => (
            <div key={skill} className="py-1">
              {skill}
            </div>
          ))}
        </div>
      </div>
      {basic && (
        <BasicDetailsEdit
          basicDetail={basicDetails}
          setBasicDetail={setBasicDetails}
          onClose={() => setBasic(false)}
          onSave={(val) => saveHandler(val)}
        />
      )}
    </>
  );
}

export default BasicDetail;
