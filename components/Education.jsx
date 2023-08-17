import React, { useEffect, useState } from "react";
import Button from "./Button";
import EditButton from "./EditButton";
import EducationEdit from "./EducationEdit";
import axios from "axios";
import { useSession } from "next-auth/react";

function Education() {
  const [edu, setEdu] = useState(false);
  const [eduDetails, setEduDetails] = useState();

  const { data: session } = useSession();

  const saveHandler = async (values) => {
    let response;
    try {
      response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/edu/${session?.userId}`,
        { ...values }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getEdu = async () => {
      let response;
      try {
        response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/edu/${session?.userId}`
        );
      } catch (error) {
        console.log(error);
      }

      console.log(response?.data);
      setEduDetails(response?.data.edu);
    };

    getEdu();
  }, []);
  return (
    <>
      <div className="my-8">
        <div className="flex justify-between">
          <span className="font-medium">Education</span>
          <EditButton gray={true} onClick={() => setEdu(true)}>
            Edit
          </EditButton>
        </div>
        <div className="border border-slate-400 rounded-xl py-4 px-8 my-4 ">
          <div className="text-violet-900 font-medium">
            {eduDetails?.college}
          </div>
          <div className="font-medium flex justify-between my-2">
            <span>
              &#40;{new Date(eduDetails?.from).getFullYear()} &#45;&nbsp;
              {new Date(eduDetails?.to).getFullYear()}&#41;
            </span>
            <span>{eduDetails?.course}</span>
          </div>
          <div className="text-slate-500">{eduDetails?.desc}</div>
        </div>
      </div>
      {edu && (
        <>
          <div
            onClick={() => setEdu(false)}
            className="fixed top-0 left-0 w-screen h-screen bg-black/50"
          ></div>
          <EducationEdit
            onClose={() => setEdu(false)}
            onSave={saveHandler}
            educationDetail={eduDetails}
            setEducationDetail={setEduDetails}
          />
        </>
      )}
    </>
  );
}

export default Education;
