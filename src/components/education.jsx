import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";

function Education({ data, setData, handleChange }) {
  const [addEducation, setAddEducation] = useState(false);
  return (
    <div>
      <div>
        <div>
          <div className="mt-7">
            <p className="font-semibold text-gray-400">
              Degree(Example: Bachelor of Arts | GPA 3.5)
            </p>
            <input
              className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
              type="text"
              name="degree"
              value={data.education[0].degree}
              onChange={(e) => handleChange(e, 0)}
              required
            />
          </div>
          <div className="mt-7">
            <p className="font-semibold text-gray-400">
              Institution Name (School, University, etc)
            </p>
            <input
              className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
              type="text"
              name="institution"
              value={data.education[0].institution}
              onChange={(e) => handleChange(e, 0)}
              required
            />
          </div>
          <div className="flex space-x-10 mt-7">
            <div className="">
              <p className="font-semibold text-gray-400">Start</p>
              <input
                className="mt-3 pl-4 w-[250px] p-2 bg-gray-100 rounded-md focus:outline-none"
                type="date"
                name="start"
                value={data.education[0].start}
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
                value={data.education[0].end}
                onChange={(e) => handleChange(e, 0)}
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-10  text-green-800 flex justify-end">
          {!addEducation && (
            <MdAddCircle
              className="w-[50px] h-10 cursor-pointer"
              onClick={() => setAddEducation(true)}
            />
          )}
          {addEducation && (
            <MdAddCircle
              className="w-[50px] h-10 cursor-pointer"
              onClick={() => setAddEducation(false)}
            />
          )}
        </div>
        {addEducation && (
          <div>
            <div className="mt-7">
              <p className="font-semibold text-gray-400">
                Degree(Example: Bachelor of Arts | GPA 3.5)
              </p>
              <input
                className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                type="text"
                name="degree"
                value={data.education[1].degree}
                onChange={(e) => handleChange(e, 1)}
                required
              />
            </div>
            <div className="mt-7">
              <p className="font-semibold text-gray-400">
                Institution Name (School, University, etc)
              </p>
              <input
                className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                type="text"
                name="institution"
                value={data.education[1].institution}
                onChange={(e) => handleChange(e, 1)}
                required
              />
            </div>
            <div className="flex space-x-10 mt-7">
              <div className="">
                <p className="font-semibold text-gray-400">Start</p>
                <input
                  className="mt-3 pl-4 w-[250px] p-2 bg-gray-100 rounded-md focus:outline-none"
                  type="date"
                  name="start"
                  value={data.education[1].start}
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
                  value={data.education[1].end}
                  onChange={(e) => handleChange(e, 1)}
                  required
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Education;
