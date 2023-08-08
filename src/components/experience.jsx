import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";

function Experience({ data, setData, handleChange }) {
  const [addExperience, setAddExperience] = useState(false);
  return (
    <div>
      <div>
        <div className="mt-7">
          <div className="flex space-x-10 mt-7">
            <div className="">
              <p className="font-semibold text-gray-400">Position</p>
              <input
                className="mt-3 pl-4 w-[250px] p-2 bg-gray-100 rounded-md focus:outline-none"
                type="text"
                name="position"
                value={data.experience[0].position}
                onChange={(e) => handleChange(e, 0)}
                required
              />
            </div>
            <div className="">
              <p className="font-semibold text-gray-400">Company</p>
              <input
                className="mt-3 pl-4 w-[250px] p-2 bg-gray-100 rounded-md focus:outline-none"
                type="text"
                name="company"
                value={data.experience[0].company}
                onChange={(e) => handleChange(e, 0)}
                required
              />
            </div>
          </div>
          <div className="flex space-x-10 mt-7">
            <div className="">
              <p className="font-semibold text-gray-400">Start</p>
              <input
                className="mt-3 pl-4 w-[250px] p-2 bg-gray-100 rounded-md focus:outline-none"
                type="date"
                name="start"
                value={data.experience[0].start}
                onChange={(e) => handleChange(e, 0)}
                required
              />
            </div>
            <div className="">
              <p className="font-semibold text-gray-400">End</p>
              <input
                className="mt-3 pl-4 w-[250px] p-2 bg-gray-100 rounded-md focus:outline-none"
                type="date"
                name="end"
                value={data.experience[0].end}
                onChange={(e) => handleChange(e, 0)}
                required
              />
            </div>
          </div>
          <div className="mt-7">
            <p className="font-semibold text-gray-400">Job Description</p>
            <textarea
              className="mt-3 pl-4 w-full h-40 p-2 bg-gray-100 rounded-md focus:outline-none"
              name="jobdescri"
              value={data.experience[0].jobdescri}
              onChange={(e) => handleChange(e, 0)}
              required
            />
          </div>
        </div>
        <div className="mt-10  text-green-800 flex justify-end">
          {!addExperience && (
            <MdAddCircle
              className="w-[50px] h-10 cursor-pointer"
              onClick={() => setAddExperience(true)}
            />
          )}
          {addExperience && (
            <MdAddCircle
              className="w-[50px] h-10 cursor-pointer"
              onClick={() => setAddExperience(false)}
            />
          )}
        </div>
        {addExperience && (
          <div className="mt-7">
            <div className="flex space-x-10 mt-7">
              <div className="">
                <p className="font-semibold text-gray-400">Position</p>
                <input
                  className="mt-3 pl-4 w-[250px] p-2 bg-gray-100 rounded-md focus:outline-none"
                  type="text"
                  name="position"
                  value={data.experience[1].position}
                  onChange={(e) => handleChange(e, 1)}
                  required
                />
              </div>
              <div className="">
                <p className="font-semibold text-gray-400">Company</p>
                <input
                  className="mt-3 pl-4 w-[250px] p-2 bg-gray-100 rounded-md focus:outline-none"
                  type="text"
                  name="company"
                  value={data.experience[1].company}
                  onChange={(e) => handleChange(e, 1)}
                  required
                />
              </div>
            </div>
            <div className="flex space-x-10 mt-7">
              <div className="">
                <p className="font-semibold text-gray-400">Start</p>
                <input
                  className="mt-3 pl-4 w-[250px] p-2 bg-gray-100 rounded-md focus:outline-none"
                  type="date"
                  name="start"
                  value={data.experience[1].start}
                  onChange={(e) => handleChange(e, 1)}
                  required
                />
              </div>
              <div className="">
                <p className="font-semibold text-gray-400">End</p>
                <input
                  className="mt-3 pl-4 w-[250px] p-2 bg-gray-100 rounded-md focus:outline-none"
                  type="date"
                  name="end"
                  value={data.experience[1].end}
                  onChange={(e) => handleChange(e, 1)}
                  required
                />
              </div>
            </div>
            <div className="mt-7">
              <p className="font-semibold text-gray-400">Job Description</p>
              <textarea
                className="mt-3 pl-4 w-full h-40 p-2 bg-gray-100 rounded-md focus:outline-none"
                name="jobdescri"
                value={data.experience[1].jobdescri}
                onChange={(e) => handleChange(e, 1)}
                required
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;
