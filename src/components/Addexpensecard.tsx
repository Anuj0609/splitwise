import React, { useState } from "react";
import DatepickerWithIcon from "./DatepickerWithIcon";

function AddExpenseCard({ handlePopupClose }: any) {
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [date, setDate] = useState<string>('')
  const [payee, setPayee] = useState<string>("you")
  const [lent, setLent] = useState<string>("all")
  const [category, setCategory] = useState<string>("")
  const [yourShare, setYourShare] = useState<number>(0);

  const addExpense = () => {
    const expenseDetails = {
      description: description,
      amount: amount,
      date: date,
      payee: payee,
      lent: lent,
      category: category,
      your_share: yourShare
    }

  }

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const handleAmountChange = (e: any) => {
    setAmount(e.target.value);
  };

  return (
    <div className="flex flex-col w-96 items-center border border-gray-400 pt-0 m-2 rounded-md shadow shadow-gray-700 bg-white">
      <div className="bg-[#5cc5a7] w-full h-10 flex items-center mt-0 px-4 py-0  rounded-tl-md rounded-tr-md text-white border border-gray-300 text-lg">
        <span className="shadow-sm">Add an expense</span>
      </div>

      <div className="flex flex-row justify-start items-center space-x-2 border-gray-300 m-1 text-sm">
        <div>
          With <span className="font-semibold">you</span> and:
        </div>
        <div className="border border-gray-600 rounded-xl hover:bg-zinc-800 hover:text-white flex items-center space-x-2 cursor-pointer">
          <img
            className="h-6 w-6 rounded-full object-cover"
            src="/group-icon.png"
            alt="Group Icon"
          />
          <span className="px-2 text-left">All of Awara Dehradun</span>
        </div>
      </div>
      <hr className="border-t border-gray-200 w-96 mx-4 mt-2" />

      <div className="m-4 flex flex-row justify-center">
        <img src="/general@2x.png" alt="" className="min-h-14 shadow-md" />
        <div className="ml-4">
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter a description"
            className="text-gray-700 text-3xl border-b border-dashed border-gray-300 w-full focus:outline-none"
          />

          <div className="flex flex-row ml-5 mt-1 space-x-2">
            <span className="text-2xl pb-0 mb-0 mt-2 leading-none">
              &#8377;
            </span>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="0.00"
              className="text-2xl text-gray-700 w-full focus:outline-none"
            />
          </div>
          <hr className="border-t border-dashed border-gray-300 mt-2" />
        </div>
      </div>

      <div>
        Paid by{" "}
        <span className="text-center font-semibold bg-gray-100 rounded-lg px-1 py-0 border border-gray-300 border-dashed text-green-700">
          you
        </span>
        and split{" "}
        <span className="text-center font-semibold bg-gray-100 rounded-lg px-1 py-0 border border-gray-300 text-green-700 border-dashed">
          equally
        </span>
        .
      </div>
      <div className="flex flex-col m-4">
        <div className="flex flex-row gap-5 m-3 items-center">
          <DatepickerWithIcon />
          <button className="rounded-xl bg-gray-100 px-6 py-0 border  border-gray-500 from-neutral-200  text-gray-500 text-sm">
            Add image/notes
          </button>
        </div>
        <div className="flex justify-center">
          <button className="rounded-xl bg-gray-100  px-5 py-0 border  border-gray-500 from-neutral-200  text-gray-500 text-sm">
            AWARA Dehradun
          </button>
        </div>
      </div>
      <hr className="border-t border-gray-200 w-96 mx-4 mt-2" />

      <div className="m-2 flex justify-end w-full">
        <button
          className="bg-gray-200 rounded-md px-3 py-2 m-2 border-gray-500 text-gray-500"
          onClick={handlePopupClose}
        >
          Cancel
        </button>
        <button className="bg-[#5cc5a7] rounded-md px-3 py-2 gap-2 my-2 mx-2 border-gray-500 text-gray-500"
          onClick={addExpense}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddExpenseCard;
