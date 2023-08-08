import React, { useState, useEffect } from "react";
import { MdAccountCircle, MdMenuBook, MdWork } from "react-icons/md";
import { TfiArrowCircleRight } from "react-icons/tfi";

function Viewcv() {
  const [myCv, setMyCv] = useState([]);

  const DisplayCv = () => {
    const item = localStorage.getItem("details");
    setMyCv(JSON.parse(item));
    console.log(myCv);
  };

  useEffect(() => {
    DisplayCv();
  }, []);

  return (
    <div className="font-abc bg-gray-300 px-80 py-20">
      {myCv.map((data) => (
        <div
          className="bg-white rounded-sm textalign-center px-20 py-20 space-y-10"
          key={data.id}
        >
          {" "}
          <div>
            <h1 className="font-bold">{data.fullName}</h1>
            <div className="flex">
              <p>{data.email} | </p>
              <p>{data.phoneNumber} | </p>
              <p> {data.linkedin}</p>
            </div>
            <p className=" mt-5 bg-green-800 h-1 w-full"></p>
          </div>
          <div className=" ">
            <div className="flex gap-4">
              <div className="text-green-800 ">
                <MdAccountCircle className="w-[40px] h-8" />
              </div>
              <h1 className="text-green-800 font-bold text-lg pt-1">
                PROFESSIONAL SUMMARY
              </h1>
            </div>
            <p className="mt-5">
              I am a software developer who is passionate about my work. I've
              created many web applications and websites using different
              programming languages and technologies such as React J.S., Node
              J.S., JavaScript, next Js, and Tailwind CSS. I'm always excited to
              learn and try out new technologies and keep up with the latest
              trends in the industry
            </p>
          </div>
          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="text-green-800">
                <MdWork className="w-[40px] h-8" />
              </div>

              <h1 className="text-green-800 font-bold text-lg pt-1">
                WORK EXPERIENCE
              </h1>
            </div>
            <div className="space-y-5">
              <div className="flex gap-3 ">
                <TfiArrowCircleRight className="text-green-800 text-sm mt-2" />
                <h2 className="font-bold text-xl">
                  {data.experience[0].position}
                </h2>
              </div>
              <div className="grid grid-cols-2 font-semibold">
                <h3>{data.experience[0].company}</h3>
                <p className="flex justify-end">
                  {data.experience[0].start}-{data.experience[0].end}
                </p>
              </div>
              <p>{data.experience[0].jobdescri}</p>
            </div>
            <div className="space-y-5">
              <div className="flex gap-3 ">
                <TfiArrowCircleRight className="text-green-800 text-sm mt-2" />
                <h2 className="font-bold text-xl">
                  {data.experience[1].position}
                </h2>
              </div>
              <div className="grid grid-cols-2 font-semibold">
                <h3>{data.experience[1].company}</h3>
                <p className="flex justify-end">
                  {data.experience[1].start}-{data.experience[1].end}
                </p>
              </div>
              <p>{data.experience[1].jobdescri}</p>
            </div>
          </div>
          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="text-green-800">
                <MdMenuBook className="w-[40px] h-8" />
              </div>

              <h1 className="text-green-800 font-bold text-lg pt-1">
                EDUCATION
              </h1>
            </div>
            <div className="flex gap-3 ">
              <TfiArrowCircleRight className="text-green-800 text-sm mt-1" />
              <p className="font-bold">
                {data.education[0].start}-{data.education[0].end}
              </p>
            </div>
            <h2 className="font-semibold">{data.education[0].degree}</h2>
            <p>{data.education[0].institution}</p>
            <div className="flex gap-3 ">
              <TfiArrowCircleRight className="text-green-800 text-sm mt-1" />
              <p className="font-bold">
                {data.education[1].start}-{data.education[1].end}
              </p>
            </div>
            <h2 className="font-semibold">{data.education[1].degree}</h2>
            <p>{data.education[1].institution}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Viewcv;
