// import React, { useState } from "react";
// import { useGroupContext } from "@/contexts/GroupContext";
// import { Group } from "@/types";
// import { v4 as uuidv4 } from "uuid";

// // Combined GroupCard and AddMemberDetails Component
// const CreateGroupPage = () => {
//   const [groupImage, setGroupImage] = useState("");
//   const [groupName, setGroupName] = useState("");
//   const [members, setMembers] = useState([
//     { name: "", email: "" },
//     { name: "", email: "" },
//   ]);

//   const { groups, setGroups } = useGroupContext();

//   const handleGroupNameChange = (e) => {
//     setGroupName(e.target.value);
//   };

//   const addGroup = () => {
//     const groupDetails: Group = {
//       profilePicture: groupImage,
//       name: groupName,
//       id: uuidv4(),
//       members: [...members],
//     };

//     const updatedGroupList = [...groups, groupDetails];
//     localStorage.setItem("groupLists", JSON.stringify(updatedGroupList));
//     setGroups(updatedGroupList);
//   };

//   const addMember = () => {
//     setMembers([...members, { name: "", email: "" }]);
//   };

//   const handleMemberChange = (index, field, value) => {
//     const updatedMembers = members.map((member, i) =>
//       i === index ? { ...member, [field]: value } : member
//     );
//     setMembers(updatedMembers);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div className="flex flex-row p-4 rounded-lg justify-center mb-6">
//         <div className="flex flex-col items-start p-2">
//           <img
//             src="/brandlogo.jpg"
//             alt="Brand Logo"
//             className="h-48 w-48 object-cover rounded-sm"
//           />
//           <input
//             type="file"
//             accept="image/*"
//             className="m-5 font-thin"
//             onChange={(e) => setGroupImage(e.target.value)}
//           />
//         </div>

//         <div className="flex flex-col items-start mt-8">
//           <div className="font-semibold text-gray-300 mb-2">
//             START A NEW GROUP
//           </div>
//           <div className="text-xl font-light mb-1 text-gray-500">
//             My group shall be called...
//           </div>
//           <div className="p-1">
//             <input
//               type="text"
//               placeholder="Group Name"
//               value={groupName}
//               onChange={handleGroupNameChange}
//               className="w-full p-1 border border-gray-300 rounded-md mb-4"
//             />
//           </div>
//           <button
//             onClick={addGroup}
//             className="bg-[#ff652f] text-[#fff] rounded-md px-3 py-1 hover:bg-[#ff5216]"
//             type="button"
//           >
//             Save me
//           </button>
//         </div>
//       </div>

//       {groupName.trim() !== "" && (
//         <div className="flex flex-col items-center m-1 w-full">
//           <div className="text-gray-500 font-semibold text-xs mb-4">
//             Group Members
//           </div>
//           {members.map((member, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-start bg-white p-6 rounded-lg mb-4 w-full"
//             >
//               <div className="flex flex-row items-center mb-2">
//                 <img
//                   src="/mprofileimage.jpg"
//                   alt="Profile"
//                   className="h-6 w-6 rounded-full mx-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   value={member.name}
//                   onChange={(e) =>
//                     handleMemberChange(index, "name", e.target.value)
//                   }
//                   className="mr-2 border border-gray-400 rounded-md shadow-lg px-2 py-1 text-xs"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email Address (optional)"
//                   value={member.email}
//                   onChange={(e) =>
//                     handleMemberChange(index, "email", e.target.value)
//                   }
//                   className="mr-2 border border-gray-400 rounded-md shadow-lg px-2 py-1 text-xs"
//                 />
//               </div>
//             </div>
//           ))}
//           <button onClick={addMember} className="mb-2 text-xs text-[#0088cc]">
//             + Add a person
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreateGroupPage;

import React from "react";

const CreateGroupPage = () => {
  return <div>hi</div>;
};
export default CreateGroupPage;
