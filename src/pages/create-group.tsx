import React, { useState } from "react";
import { Group } from "@/types";
import { v4 as uuidv4 } from "uuid";
import { useGroupContext } from "@/contexts/GroupContext";

const CreateGroupPage = () => {
  const [newGroupDetails, setNewGroupDetails] = useState<Group>({
    name: "",
    id: uuidv4(),
    members: [],
    profilePicture: "",
  });
  const createGroup = () => {};
  const handleMemberChange = () => {};
  const handleAddMember = () => {};

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row p-4 rounded-lg justify-center">
        <div className="flex flex-col items-start p-2">
          <img
            src={newGroupDetails.profilePicture || "/brandlogo.jpg"}
            alt="Brand Logo"
            className="h-48 w-48 object-cover rounded-sm"
          />
          <input
            type="file"
            accept="image/*"
            className="m-5 font-thin"
            onChange={(e) => {
              setNewGroupDetails((prev) => ({
                ...prev,
                profilePicture: e.target.value,
              }));
            }}
          />
        </div>
        <div className="flex flex-col items-start mt-8">
          <div className="font-semibold text-gray-300 mb-2">
            START A NEW GROUP
          </div>
          <div className="text-xl font-light mb-1 text-gray-500">
            My group shall be called...
          </div>
          <div className="p-1">
            <input
              type="text"
              placeholder="Group Name"
              onChange={(e) => {
                setNewGroupDetails((prev) => ({
                  ...prev,
                  name: e.target.value,
                }));
              }}
              className="w-full p-1 border border-gray-300 rounded-md mb-4"
            />
          </div>
          <button
            onClick={createGroup}
            className="bg-[#ff652f] text-[#fff] rounded-md px-3 py-1 hover:bg-[#ff5216]"
            type="button"
          >
            Save me
          </button>
        </div>
      </div>
      {newGroupDetails.name.trim() !== "" && (
        <div className="flex flex-col items-center m-1">
          <div className="text-gray-500 font-semibold text-xs mb-4">
            Group Members
          </div>
          {newGroupDetails.members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-white p-6 rounded-lg mb-4"
            >
              <div className="flex flex-row items-center mb-">
                <img
                  src="/mprofileimage.jpg"
                  alt="Profile"
                  className="h-6 w-6 rounded-full mx-2"
                />
                <input
                  type="text"
                  placeholder="Name"
                  value={member.name}
                  onChange={(e) => {
                    // handleMemberChange(index, "name", e.target.value)
                  }}
                  className="mr-2 border border-gray-400 rounded-md shadow-lg px-2 py-1 text-xs"
                />
                <input
                  type="email"
                  placeholder="Email Address (optional)"
                  value={member.email}
                  onChange={(e) => {
                    // handleMemberChange(index, "email", e.target.value)
                  }}
                  className="mr-2 border border-gray-400 rounded-md shadow-lg px-2 py-1 text-xs"
                />
              </div>
            </div>
          ))}
          <button
            onClick={handleAddMember}
            className="mb-2 text-xs text-[#0088cc]"
          >
            + Add a person
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateGroupPage;
