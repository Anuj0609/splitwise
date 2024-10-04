import React from "react";

const GroupBalances = () => {
  const transactions = [
    {
      fullName: "Anuj Shrivastava",
      owes: 50,
      getsBack: 0,
      profilePicture: "/pro1.avif", 
    },
    {
      fullName: "Gopala Agarwal",
      owes: 20,
      getsBack: 0,
      profilePicture: "/pro2.avif",
    },
    {
      fullName: "Ayush Rungta",
      owes: 0,
      getsBack: 70,
      profilePicture: "/pro3.avif",
    },
    {
      fullName: "Ashish Yadav",
      owes: 0,
      getsBack: 50,
      profilePicture: "/pro4.avif",
    },
  ];

  return (
    <div className="space-y-4 mx-2">
      <div className="font-semibold text-gray-400 mt-2">Group Balances</div>
      {" "}
      {transactions.map((transaction, index) => (
        <div
          className="m-0 leading-tight flex flex-row items-center"
          key={index}
        >
          {" "}
          <img
            src={transaction.profilePicture}
            alt={`${transaction.fullName}'s profile`}
            className="inline-block w-9 h-9 rounded-full mr-1"
          />
          <div>
            {transaction.fullName} <br />
            {transaction.owes > 0 ? (
              <span className="text-[#ff652f] p-0 font-semibold">
                owes ${transaction.owes}
              </span>
            ) : (
              <span className="text-[#5bc5a7] font-semibold
              ">
                gets back ${transaction.getsBack}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupBalances;
