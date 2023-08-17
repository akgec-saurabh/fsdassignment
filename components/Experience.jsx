import React, { useEffect, useState } from "react";
import Button from "./Button";
import logo from "../public/logo.png";
import Image from "next/image";
import EditButton from "./EditButton";
import ExperienceEdit from "./ExperienceEdit";
import axios from "axios";
import { useSession } from "next-auth/react";

const XpContainer = ({ type, company, position, from, to }) => {
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
  const { data: session } = useSession();

  const editSaveHandler = async (values) => {
    console.log(values);

    let response;
    try {
      response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/experience/${session?.userId}`,
        { ...values }
      );
    } catch (error) {
      console.log(error);
    }

    console.log(response?.data);

    setExperienceDetail({ ...response?.data.exp });
  };

  useEffect(() => {
    console.log(process.env.NEXT_API_URL);
    const getXp = async () => {
      let response;
      try {
        response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/experience/${session?.userId}`
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
          <EditButton gray={true} onClick={() => setOpenXpEdit(true)}>
            Edit
          </EditButton>
        </div>
        {/* {xpData.map((xp) => (
          <XpContainer {...xp} key={xp.time} />
        ))} */}
        <XpContainer {...experienceDetail} />
      </div>

      {openXpEdit && (
        <>
          <div
            onClick={() => setOpenXpEdit(false)}
            className="fixed top-0 left-0 w-screen h-screen bg-black/50"
          ></div>
          <ExperienceEdit
            setExperienceDetail={setExperienceDetail}
            experienceDetail={experienceDetail}
            onSave={(val) => editSaveHandler(val)}
            onClose={() => {
              setOpenXpEdit(false);
            }}
          />
        </>
      )}
    </>
  );
}

export default Experience;
