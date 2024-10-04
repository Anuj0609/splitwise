import React from "react";

function HomeHeader() {
  return (
    <div className="w-full bg-[rgb(91,197,167)] h-10 flex flex-row items-center justify-center">
      <div className="w-[960px] flex justify-between">
        <div>
          <img className="w-24 h-12" src="/logo-sw.svg" alt="" />
        </div>
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full object-cover p-2"
            src="/profile-pic.avif"
            alt=""
          />
          <div className="font-semibold mx-0">Anuj Shrivastava</div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
