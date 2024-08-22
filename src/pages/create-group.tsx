import React, { useState } from "react";
import GroupCard from "@/components/CreateGroupCard";
import AddMemberDetails from "@/components/MemberDetailCard";

const CreateGroupPage = () => {
  const [groupName, setGroupName] = useState("");

  return (
    <div className="flex flex-col justify-center">
      <GroupCard setGroupName={setGroupName} />
      {groupName && (
        <div className="flex justify-center w-full">
          <AddMemberDetails />
        </div>
      )}
    </div>
  );
};

export default CreateGroupPage;
