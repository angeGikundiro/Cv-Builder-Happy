import React, { useState } from "react";
import PersonalInfo from "../components/personalInfo";
import Education from "../components/education";
import Experience from "../components/experience";
import Viewcv from "./viewcv";

function Makecv() {
  const [page, setPage] = useState(0);

  const FormTitles = [
    "Personal Info",
    " Work experience",
    "Educational Background",
  ];

  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    linkedin: "",
    education: [
      { degree: "", institution: "", start: "", end: "" },
      { degree: "", institution: "", start: "", end: "" },
    ],
    experience: [
      { position: "", company: "", start: "", end: "", jobdescri: "" },
      { position: "", company: "", start: "", end: "", jobdescri: "" },
    ],
  });

  const handleChange = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;
    const updatedEducation = [...data.education];
    updatedEducation[index] = { ...updatedEducation[index], [name]: value };
    const updatedExperience = [...data.experience];
    updatedExperience[index] = { ...updatedExperience[index], [name]: value };
    setData({
      ...data,
      education: updatedEducation,
      experience: updatedExperience,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = localStorage.getItem("details");
    let listOfItem = [];

    if (item) {
      listOfItem = JSON.parse(item);
    }
    listOfItem.push(data);

    localStorage.setItem("details", JSON.stringify(listOfItem));
    console.log(localStorage);

    setData({
      fullName: "",
      email: "",
      phoneNumber: "",
      linkedin: "",
      education: [
        { degree: "", institution: "", start: "", end: "" },
        { degree: "", institution: "", start: "", end: "" },
      ],
      experience: [
        { position: "", company: "", start: "", end: "", jobdescri: "" },
        { position: "", company: "", start: "", end: "", jobdescri: "" },
      ],
    });
    console.log(data);
  };

  const pageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo data={data} setData={setData} />;
    } else if (page === 1) {
      return (
        <Experience data={data} setData={setData} handleChange={handleChange} />
      );
    } else {
      return (
        <Education data={data} setData={setData} handleChange={handleChange} />
      );
    }
  };

  return (
    <div className="bg-gray-300 px-80 py-10">
      {/* sm:bg-yellow-300 md:bg-green-300 lg:bg-pink-300 xl:bg-blue-300 2xl:bg-red-300 */}
      <div className="bg-white rounded-md textalign-center font-abc px-40 py-20">
        <h1 className="font-bold text-xl text-green-800">{FormTitles[page]}</h1>

        <div>
          <div>{pageDisplay()}</div>
          <div className="flex justify-end gap-3">
            <button
              className=" transition-1 bg-green-800 mt-10 px-8 py-2 text-white font-semibold rounded-full 
              hover:bg-green-700"
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Previous
            </button>
            <button
              className=" transition-1 bg-green-800 mt-10 px-8 py-2 text-white 
              font-semibold rounded-full hover:bg-green-700
               flex justify-end"
              onClick={(e) => {
                if (page == FormTitles.length - 1) {
                  handleSubmit(e);
                  alert("Wowwwww");
                  // return <Viewcv data={data} />;
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Makecv;
