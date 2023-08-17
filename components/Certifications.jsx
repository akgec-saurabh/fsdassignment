import React, { useEffect, useState } from "react";
import Image from "next/image";
import certificate from "../public/certificate.svg";
import Button from "./Button";
import EditButton from "./EditButton";
import CertificationsEdit from "./CertificationsEdit";
import axios from "axios";
import { useSession } from "next-auth/react";

function Certifications() {
  const [certification, setCertification] = useState(false);
  const [certificationDetail, setCertificationDetail] = useState({
    course: "",
    company: "",
  });

  const { data: session } = useSession();

  const certEditHandler = async (values) => {
    let response;
    try {
      response = await axios.patch(
        `http://localhost:5000/api/cert/${session?.userId}`,
        {
          ...values,
        }
      );
    } catch (error) {
      console.log(error);
    }
    setCertificationDetail(response?.data.cert);
  };

  useEffect(() => {
    const getCert = async () => {
      let response;
      try {
        response = await axios.get(
          `http://localhost:5000/api/cert/${session?.userId}`
        );
      } catch (error) {
        console.log(error);
      }

      setCertificationDetail(response?.data.cert);
    };

    getCert();
  }, []);
  return (
    <>
      <div className="my-8">
        <div className="flex justify-between items-center">
          <span className="font-medium">Certifications</span>
          <EditButton gray={true} onClick={() => setCertification(true)}>
            Edit
          </EditButton>
        </div>
        <div className="relative flex justify-center items-center border border-slate-300 rounded-full py-4 px-8 my-4">
          <Image
            className="absolute left-8"
            src={certificate}
            width={32}
            height={32}
            style={{ objectFit: "cover", width: "auto", height: "auto" }}
            alt="certy logo"
          />
          <div className=" ">
            <div className="text-slate-500">{certificationDetail?.course}</div>
            <div className="text-sm text-slate-500">
              {certificationDetail?.company}
            </div>
          </div>
        </div>
      </div>
      {certification && (
        <>
          <div
            onClick={() => setCertification(false)}
            className="fixed top-0 left-0 w-screen h-screen bg-black/50"
          ></div>
          <CertificationsEdit
            certificationDetail={certificationDetail}
            setCertificationDetail={setCertificationDetail}
            onSave={(values) => certEditHandler(values)}
            onClose={() => {
              setCertification(false);
            }}
          />
        </>
      )}
    </>
  );
}

export default Certifications;
