import React from "react";
import { FiAlignJustify, FiFlag, FiTag } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="w-full md:w-1/4 p-2">
      <div className="flex flex-col items-start text-gray-300 text-end">
        <div className="flex flex-row items-center space-x-2 mt-0 w-full md:w-2/3">
          <img src="/brandlogo.jpg" alt="" className="h-6 w-6 md:h-4 md:w-4" />
          <div className="font-semibold text-[#5bc5a7]">Dashboard</div>
        </div>
        <div className="flex flex-row items-center space-x-2 text-gray-700 w-full md:w-2/3 mt-2">
          <FiFlag />
          <span>Recent activity</span>
        </div>
        <div className="flex flex-row items-center space-x-2 text-gray-700 w-full md:w-2/3 mt-2">
          <FiAlignJustify />
          <span>All expenses</span>
        </div>
      </div>

      {/* Groups Section */}
      <div className="flex flex-row justify-between w-full md:w-1/2 text-gray-400 bg-gray-100 text-xs p-2 rounded-sm hover:bg-gray-300 mt-4">
        <div>GROUPS</div>
        <button>+add</button>
      </div>
      <div className="mt-2">
        <div className="flex flex-row items-center text-gray-500 text-sm font-semibold hover:bg-gray-200 mb-2 px-2 w-full md:w-1/2">
          <FiTag />
          <span className="ml-1">AWARA Dehradun</span>
        </div>
        <div className="flex flex-row items-center text-gray-500 text-sm font-semibold hover:bg-gray-200 mb-2 px-2 w-full md:w-1/2">
          <FiTag />
          <span className="ml-1">Dehradun Regular</span>
        </div>
      </div>

      {/* Friends Section */}
      <div className="flex flex-row justify-between w-full md:w-1/2 text-gray-400 bg-gray-100 text-xs p-2 rounded-sm hover:bg-gray-300 mt-4">
        <div>FRIENDS</div>
        <button>+add</button>
      </div>
      <div className="mt-2">
        <div className="flex flex-row items-center text-gray-500 text-sm font-semibold hover:bg-gray-200 mb-2 px-2 w-full md:w-1/2">
          <AiOutlineUser />
          <span className="ml-1">Ashish Yadav</span>
        </div>
        <div className="flex flex-row items-center text-gray-500 text-sm font-semibold hover:bg-gray-200 mb-2 px-2 w-full md:w-1/2">
          <AiOutlineUser />
          <span className="ml-1">Gopala Agarwal</span>
        </div>
        <div className="flex flex-row items-center text-gray-500 text-sm font-semibold hover:bg-gray-200 px-2 w-full md:w-1/2">
          <AiOutlineUser />
          <span className="ml-1">Ayush Rungta</span>
        </div>
      </div>

      {/* Invite Friends Section */}
      <div className="flex flex-col border border-gray-500 rounded-sm w-full md:w-1/2 mt-4">
        <div className="bg-[#5bc5a7] text-white shadow mb-2 text-sm p-2">
          Invite friends
        </div>
        <input
          type="email"
          placeholder="Enter an email address"
          className="border border-gray-400 shadow rounded p-2 mx-2"
        />
        <button className="flex bg-gray-200 w-1/2 mt-2 mb-2 border text-xs px-2 py-1 border-gray-400 rounded-lg justify-center mx-auto">
          Send invite
        </button>
      </div>

      {/* Share & Tweet Buttons */}
      <div className="flex flex-row w-full md:w-1/2 justify-center mt-4">
        <button className="bg-[#3b5998] rounded-sm text-white shadow-md border border-gray-700 flex-1 p-2 mx-1">
          Share
        </button>
        <button className="bg-[#4099ff] rounded-sm text-white shadow-md border border-gray-700 flex-1 p-2 mx-1">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
