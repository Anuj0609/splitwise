import React from "react";
import Image from "next/image";
import { Expense } from "@/types";

export const ExpenseCard = ({ expense }: { expense: Expense }) => {
  const dateO = new Date(expense.date);
  const monthShort = dateO
    .toLocaleDateString("en-US", { month: "short" })
    .toUpperCase();

  return (
    <div className="flex w-full justify-between cursor-pointer border border-gray-300 p-2">
      <div className="flex gap-2 items-center w-1/2">
        <div className="flex flex-col font-semibold text-gray-400 px-1 items-center text-xs text-center w-8">
          <span>{monthShort}</span>
          <span>{dateO.getDate()}</span>
        </div>
        <div>
          <Image
            src={expense.icon || "/general@2x.png"}
            alt={`${expense.category}-icon`}
            className="w-8 h-8 rounded-sm"
            width={8}
            height={8}
          />
        </div>
        <div className="font-semibold hover:underline">
          {expense.description}
        </div>
      </div>
      <div className="flex gap-2 mx-2 w-1/2">
        <div className="flex flex-col items-end w-1/2">
          <div className="text-gray-500 text-xs w-full">
            {expense.payee} paid
          </div>
          <div className="font-semibold w-full">&#8377;{expense.amount}</div>
        </div>
        <div className="flex flex-col items-start w-1/2">
          <div className="text-gray-500 text-xs w-full">
            {expense.payee} lent you
          </div>
          <div className="text-red-600 font-semibold w-full">
            &#8377;{expense.your_share}
          </div>
        </div>
      </div>
    </div>
  );
};
