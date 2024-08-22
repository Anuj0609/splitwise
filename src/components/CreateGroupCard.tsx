import React from "react";
import { useState } from "react";
import { GroupDetail } from "@/types/groupDetail";

const GroupCard = ({ setGroupName }) => {
  const [groupImage, setGroupImage] = useState("");
  const [groupList, setGroupList] = useState<GroupDetail[]>([]);

  const addGroup = () => {
    if (groupImage && setGroupName) {
      const groupDetails: GroupDetail = {
        image: groupImage,
        name: setGroupName,
      };

      const updatedGroupList = [...groupList, groupDetails];
      localStorage.setItem("groupLists", JSON.stringify(updatedGroupList));
      setGroupList(updatedGroupList);
    }
  };

  return (
    <div className="flex flex-row p-4 rounded-lg justify-center">
      <div className="flex flex-col items-start p-2">
        <img
          src="/brandlogo.jpg"
          alt="Brand Logo"
          className="h-48 w-48 object-cover rounded-sm"
        />
        <input
          type="file"
          accept="image/*"
          className="m-5 font-thin"
          onChange={(e) => {
            setGroupImage(e.target.value);
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
              setGroupName(e.target.value);
            }}
            className="w-full p-1 border border-gray-300 rounded-md mb-4"
          />
        </div>
        <button
          onClick={addGroup}
          className="bg-[#ff652f] text-[#fff] rounded-md px-3 py-1 hover:bg-[#ff5216]"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default GroupCard;
