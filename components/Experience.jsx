import React, { useEffect, useState } from "react";
import Button from "./Button";
import logo from "../public/logo.png";
import Image from "next/image";
import EditButton from "./EditButton";
import ExperienceEdit from "./ExperienceEdit";
import axios from "axios";

const XpContainer = ({ time, type, company, position, from, to }) => {
  return (
    <div className="my-4 flex justify-between border border-slate-300 rounded-xl py-4 px-8">
      <div className="flex w-full flex-col">
        <div className="flex  w-full">
          <div className="flex-1 font-medium">
            &#40;{new Date(from).getFullYear()} &#45;&nbsp;
            {new Date(to).getFullYear()}&#41;
          </div>
          <div className="flex-1 font-medium">{type}</div>
        </div>
        <div className="flex">
          <div className="flex-1 text-slate-500">{company}</div>
          <div className="flex-1 text-slate-500 -ml-8">--{position}</div>
        </div>
      </div>
      <Image
        src={logo}
        width={47}
        height={23}
        alt="logo"
        style={{ objectFit: "contain", width: "auto", height: "auto" }}
      />
    </div>
  );
};

function Experience() {
  const [openXpEdit, setOpenXpEdit] = useState(false);
  const [experienceDetail, setExperienceDetail] = useState(null);

  const editSaveHandler = async (values) => {
    let response;
    try {
      response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/experience/64d909907edaf01af598b4b8`,
        { ...values }
      );
    } catch (error) {
      console.log(error);
    }

    setExperienceDetail({ ...response?.data.experience });
  };

  useEffect(() => {
    console.log(process.env.NEXT_API_URL);
    const getXp = async () => {
      let response;
      try {
        response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/experience/64d909907edaf01af598b4b8`
        );
      } catch (error) {
        console.log(error);
      }

      console.log();

      setExperienceDetail({ ...response?.data.experience });
    };

    getXp();
  }, []);

  return (
    <>
      <div className="my-8">
        <div className="flex justify-between items-center">
          <span className="font-medium">Experience</span>
          <EditButton onClick={() => setOpenXpEdit(true)}>Edit</EditButton>
        </div>
        {/* {xpData.map((xp) => (
          <XpContainer {...xp} key={xp.time} />
        ))} */}
        <XpContainer {...experienceDetail} />
      </div>

      {openXpEdit && (
        <ExperienceEdit
          setExperienceDetail={setExperienceDetail}
          experienceDetail={experienceDetail}
          onClick={editSaveHandler}
          onClose={() => {
            setOpenXpEdit(false);
          }}
        />
      )}
    </>
  );
}

export default Experience;
