import React, { useEffect, useState } from "react";
import Image from "next/image";
import certificate from "../public/certificate.svg";
import Button from "./Button";
import EditButton from "./EditButton";
import CertificationsEdit from "./CertificationsEdit";
import axios from "axios";

function Certifications() {
  console.log();
  const [certification, setCertification] = useState(false);
  const [certificationDetail, setCertificationDetail] = useState({
    course: "",
    company: "",
  });

  const certEditHandler = async (values) => {
    console.log(values);
    let response;
    try {
      response = await axios.patch(
        "http://localhost:5000/api/cert/64d909907edaf01af598b4b8",
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
          "http://localhost:5000/api/cert/64d909907edaf01af598b4b8"
        );
      } catch (error) {
        console.log(error);
      }

      console.log(response?.data);
      setCertificationDetail(response?.data.cert);
    };

    getCert();
  }, []);
  return (
    <>
      <div className="my-8">
        <div className="flex justify-between items-center">
          <span className="font-medium">Certifications</span>
          <EditButton onClick={() => setCertification(true)}>Edit</EditButton>
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
            <div className="text-slate-500">{certificationDetail.course}</div>
            <div className="text-sm text-slate-500">
              {certificationDetail.company}
            </div>
          </div>
        </div>
      </div>
      {certification && (
        <div className="absolute z-10 top-0 left-0 w-screen h-screen bg-black/50">
          <CertificationsEdit
            certificationDetail={certificationDetail}
            setCertificationDetail={setCertificationDetail}
            onClick={(values) => certEditHandler(values)}
            onClose={() => {
              setCertification(false);
            }}
          />
        </div>
      )}
    </>
  );
}

export default Certifications;
