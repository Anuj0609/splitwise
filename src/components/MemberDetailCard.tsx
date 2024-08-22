import React, { useState } from "react";

const AddMemberDetails = () => {
  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");

  return (
    <div className="flex justify-center m-1">
      <div className="flex flex-col items-start bg-white p-6 rounded-lg ">
        <div className="text-gray-500 font-semibold text-xs mb-4">
          Group Members
        </div>
        <div className="flex flex-row items-center mb-4">
          <img
            src="/mprofileimage.jpg"
            alt="Profile"
            className="h-6 w-6 rounded-full mx-2"
          />
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setMemberName(e.target.value)}
            className="mr-2 border border-gray-400 rounded-md shadow-lg px-2 py-1 text-xs"
          />
          <input
            type="email"
            placeholder="Email Address (optional)"
            onChange={(e) => setMemberEmail(e.target.value)}
            className="mr-2 border border-gray-400 rounded-md shadow-lg px-2 py-1 text-xs"
          />
        </div>
        <button className="mb-2 text-xs text-[#0088cc]">+ Add a person</button>
        <button className="bg-[#ff652f] px-3 py-1 rounded-md text-white">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddMemberDetails;
