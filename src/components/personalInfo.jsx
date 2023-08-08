import React from "react";

function PersonalInfo({ data, setData }) {
  return (
    <div>
      <div>
        <div className="mt-10">
          <p className="font-semibold text-gray-400">Full Name</p>
          <input
            className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
            type="text"
            value={data.fullName}
            name="teamName"
            onChange={(e) => setData({ ...data, fullName: e.target.value })}
            required
          />
        </div>
        <div className="mt-7">
          <p className="font-semibold text-gray-400">Email</p>
          <input
            className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
            type="text"
            value={data.email}
            name="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />
        </div>
        <div className="mt-7">
          <p className="font-semibold text-gray-400">Phone Number</p>
          <input
            className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
            type="text"
            value={data.phoneNumber}
            name="phoneNumber"
            onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
            required
          />
        </div>
        <div className="mt-7">
          <p className="font-semibold text-gray-400">LinkedIn url</p>
          <input
            className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
            type="text"
            value={data.linkedin}
            name="linkedin"
            onChange={(e) => setData({ ...data, linkedin: e.target.value })}
            required
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
