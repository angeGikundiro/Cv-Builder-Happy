import React, { useState, useEffect } from "react";
import { MdAccountCircle, MdMenuBook, MdWork } from "react-icons/md";
import { TfiArrowCircleRight } from "react-icons/tfi";

function Viewcv() {
  const [myCv, setMyCv] = useState([]);

  const PDF_FILE_URL = "http://window.location.origin/file_pdf.pdf";
  const DisplayCv = () => {
    const item = localStorage.getItem("details");
    setMyCv(JSON.parse(item));
    console.log(myCv);
  };

  useEffect(() => {
    DisplayCv();
  }, []);

  const downloadCvFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "fileName");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="font-abc bg-gray-300 px-2 py-10 xl:px-80 lg:px-20 md:px-20 sm:px-10 ">
      {myCv.map((data) => (
        <div
          className="bg-white rounded-sm textalign-center px-5 py-20 space-y-10 xl:px-20"
          key={data.id}
        >
          {" "}
          <div>
            <h1 className="font-bold">{data.fullName}</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 text-18 text-sm mt-3 lg:text-lg xl:text-sm">
              <div className=" mb-3 flex justify-center">
                <p>
                  {data.email}
                  <span className="mr-2 ml-2 ">|</span>
                </p>{" "}
              </div>
              <div className=" flex justify-center">
                <p>
                  {" "}
                  {data.phoneNumber} <span className="mr-2 ml-2">|</span>
                </p>
              </div>
              <div>
                <p> {data.linkedin}</p>
              </div>
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
            <p className="mt-5 text-sm leading-6 lg:text-lg md:text-lg sm:text-base xl:text-sm">
              {data.profession}
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
              <div className="grid grid-cols-3 font-semibold">
                <h3 className="col-span-1">{data.experience[0].company}</h3>
                <p className="flex justify-end col-span-2">
                  <span className="  p-2 rounded-md">
                    {data.experience[0].starting}
                  </span>
                  <p className="mt-2 mr-2 ml-2">-</p>
                  <span className="p-2 rounded-md">
                    {data.experience[0].ending}
                  </span>
                </p>
              </div>
              <p className="text-sm leading-6 lg:text-lg md:text-lg sm:text-base xl:text-sm">
                {data.experience[0].jobdescri}
              </p>
            </div>

            <div>
              {data.experience[1].position && data.experience[1].company && (
                <div className="space-y-5">
                  <div className="flex gap-3 ">
                    <TfiArrowCircleRight className="text-green-800 text-sm mt-2" />
                    <h2 className="font-bold text-xl">
                      {data.experience[1].position}
                    </h2>
                  </div>
                  <div className="grid grid-cols-3 font-semibold ">
                    <h3 className="col-span-1">{data.experience[1].company}</h3>
                    <p className="flex justify-end col-span-2">
                      <span className="p-2 rounded-md">
                        {data.experience[1].starting}
                      </span>
                      <p className="mt-2 mr-2 ml-2">-</p>
                      <span className="p-2 rounded-md">
                        {data.experience[1].ending}
                      </span>
                    </p>
                  </div>
                  <p className="text-sm leading-6 lg:text-lg md:text-lg sm:text-base xl:text-sm">
                    {data.experience[1].jobdescri}
                  </p>
                </div>
              )}
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
                {data.education[0].start}
                <span className="mt-2 mr-4 ml-4">-</span>
                {data.education[0].end}
              </p>
            </div>
            <h2 className="font-semibold">{data.education[0].degree}</h2>
            <p className="text-sm leading-6 lg:text-lg md:text-lg sm:text-base xl:text-sm">
              {data.education[0].institution}
            </p>

            <div>
              {data.education[1].degree && data.education[1].institution && (
                <div>
                  <div className="flex gap-3 ">
                    <TfiArrowCircleRight className="text-green-800 text-sm mt-1" />
                    <p className="font-bold">
                      {data.education[1].start}
                      <span className="mt-2 mr-2 ml-2">-</span>
                      {data.education[1].end}
                    </p>
                  </div>
                  <h2 className="font-semibold">{data.education[1].degree}</h2>
                  <p className="text-sm leading-6 lg:text-lg md:text-lg sm:text-base xl:text-sm">
                    {data.education[1].institution}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-green-700 px-5 py-3 font-bold rounded-md text-white hover:border-green-700 hover:border-opacity-75 hover:bg-white hover:text-green-800 hover:border-2"
              onClick={() => {
                // downloadCvFile(PDF_FILE_URL);
              }}
            >
              Download Cv
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Viewcv;
