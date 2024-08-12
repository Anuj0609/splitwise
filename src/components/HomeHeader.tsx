import React from "react";

function HomeHeader(){
    return (
      <div className="w-full bg-[#5bc5a7] h-10 flex flex-row items-center justify-between ">
        <div className="w-1/3 flex justify-end">
          <img className="w-24 h-12" src="/logo-sw.svg" alt="" />
        </div>
        <div className="flex w-1/3 justify-start items-center">
          <img
            className="h-10 w-10 rounded-full object-cover p-2"
            src="/profile-pic.avif"
            alt=""
          />
          <div className="font-semibold mx-0">Anuj Shrivastava</div>
        </div>
      </div>
    );
}

export default HomeHeader