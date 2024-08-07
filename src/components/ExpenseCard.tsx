import React from "react";
import groceryCategoryIcon from "@/assets/icons/categories/groceries.png";
import Image from "next/image";
import { Expense } from "@/types";
import exp from "constants";
import { monthNames } from "@/utils";

export const ExpenseCard = ({ expense }: { expense: Expense }) => {
  const dateO = new Date(expense.date);
  console.log(expense.date, dateO, dateO.getMonth());
  return (
    <div className="flex w-full justify-between cursor-pointer border border-gray-300">
      <div className="flex gap-2 items-center">
        <div className="flex flex-col font-semibold text-gray-600 items-center">
          <span>{monthNames[new Date(expense.date).getMonth()]}</span>
          <span>{new Date(expense.date).getDay()}</span>
        </div>
        <div>
          <Image
            src={groceryCategoryIcon}
            alt="grocery-icon"
            className="w-12 h-12"
          />
        </div>
        <div className="font-semibold hover:underline">{expense.name}</div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col items-end">
          <span className="text-gray-500 text-xs">{expense.payee} paid</span>
          <span className="font-semibold">${expense.amount}</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-gray-500 text-xs">
            {expense.payee} lent you
          </span>
          <span className="text-red-600 font-semibold">
            ${expense.your_share}
          </span>
        </div>
      </div>
    </div>
  );
};
