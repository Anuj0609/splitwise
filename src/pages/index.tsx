import { useState, useEffect } from "react";
import { ExpenseCard } from "@/components/ExpenseCard";
import { Expense } from "@/types";
import { AddExpenseCard } from "@/components/AddExpenseCard";
import HomeHeader from "@/components/HomeHeader";
import { getExpenseList } from "@/utils/expenseUtils";

export default function Home() {
  const [showAddExpensePopup, setShowAddExpensePopup] = useState(false);
  const [expenseList, setExpenseList] = useState<Expense[]>([]);

  useEffect(() => {
    const list = getExpenseList();
    setExpenseList(list);
  }, [showAddExpensePopup]);

  const groupedData = expenseList.reduce((acc: any, item) => {
    const month = new Date(item.date).toLocaleString("default", {
      month: "long",
    });
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(item);
    return acc;
  }, {});

  const sortedMonths = Object.keys(groupedData).sort((a, b) => {
    return (
      new Date(`01 ${b} 2024`).getMonth() - new Date(`01 ${a} 2024`).getMonth()
    );
  });

  return (
    <div className="bg-white flex flex-col justify-center">
      <HomeHeader />
      <div className="w-1/3  min-w-[500px]  mx-auto shadow-xl border border-gray-300 rounded-md m-0">
        <div className="flex flex-row justify-between bg-[#eee] items-center rounded-md">
          <div className="flex flex-row">
            <img
              className="h-10 w-10 rounded-full object-cover p-2"
              src="/groupImage.jpg"
              alt=""
            />
            <div className="text-2xl font-bold">Awara Dehradun</div>
          </div>
          <div>
            <button
              className="bg-[#ff652f] p-1 my-2 mx-1 rounded-md shadow-lg text-white hover:bg-[#e55529]"
              onClick={() => {
                setShowAddExpensePopup(true);
              }}
            >
              Add an expense
            </button>
            <button className="bg-[#5bc5a7] p-1 my-2 mx-2 rounded-md shadow-lg text-white hover:bg-[#4da38c]">
              Settle up
            </button>
          </div>
        </div>

        {sortedMonths.map((month) => (
          <div key={month}>
            <h2 className="text-xs font-semibold mt-0 bg-[#eee]">{month}</h2>
            {groupedData[month].map((expense: Expense) => (
              <ExpenseCard key={expense.description} expense={expense} />
            ))}
          </div>
        ))}

        {showAddExpensePopup && (
          <div className="w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-80 flex justify-center items-center">
            <AddExpenseCard
              handlePopupClose={() => {
                setShowAddExpensePopup(false);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
