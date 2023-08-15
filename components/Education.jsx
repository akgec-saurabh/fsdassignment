import React, { useEffect, useState } from "react";
import Button from "./Button";
import EditButton from "./EditButton";
import EducationEdit from "./EducationEdit";
import axios from "axios";

function Education() {
  const [edu, setEdu] = useState(false);
  const [eduDetails, setEduDetails] = useState();

  const saveHandler = async (values) => {
    let response;
    try {
      response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/edu/64d909907edaf01af598b4b8`,
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
          `${process.env.NEXT_PUBLIC_API_URL}/api/edu/64d909907edaf01af598b4b8`
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
          <EditButton onClick={() => setEdu(true)}>Edit</EditButton>
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
        <EducationEdit
          onClose={() => setEdu(false)}
          onSave={saveHandler}
          eduDetails={eduDetails}
          setEduDetails={setEduDetails}
        />
      )}
    </>
  );
}

export default Education;
