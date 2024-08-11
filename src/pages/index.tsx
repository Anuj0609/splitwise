import Image from "next/image";
import { Inter, Mountains_of_Christmas } from "next/font/google";
import { ExpenseCard } from "@/components/ExpenseCard";
import { Expense } from "@/types";
import Addexpensecard from "@/components/AddExpenseCard";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export const tempExpenses: Expense[] = [
  {
    date: "2024-01-15",
    category: "grocery",
    name: "Grofers",
    payee: "Ayush Rungta",
    amount: 2887,
    your_share: 1223,
  },
  {
    date: "2024-02-07",
    category: "dining",
    name: "Pizza Hut",
    payee: "Nina Patel",
    amount: 1500,
    your_share: 750,
  },
  {
    date: "2024-03-22",
    category: "utilities",
    name: "Electricity Bill",
    payee: "John Doe",
    amount: 3200,
    your_share: 1600,
  },
  {
    date: "2024-04-12",
    category: "shopping",
    name: "Amazon",
    payee: "Ravi Kumar",
    amount: 4000,
    your_share: 2000,
  },
  {
    date: "2024-05-27",
    category: "grocery",
    name: "Big Basket",
    payee: "Samantha Lee",
    amount: 2500,
    your_share: 1250,
  },
  {
    date: "2024-06-10",
    category: "entertainment",
    name: "Netflix",
    payee: "Ankit Verma",
    amount: 999,
    your_share: 499,
  },
  {
    date: "2024-07-19",
    category: "travel",
    name: "Uber",
    payee: "Sara Jones",
    amount: 850,
    your_share: 425,
  },
  {
    date: "2024-08-03",
    category: "grocery",
    name: "Local Market",
    payee: "Ayush Rungta",
    amount: 2200,
    your_share: 1100,
  },
  {
    date: "2024-09-25",
    category: "dining",
    name: "Starbucks",
    payee: "Rajesh Gupta",
    amount: 600,
    your_share: 300,
  },
  {
    date: "2024-10-18",
    category: "shopping",
    name: "Flipkart",
    payee: "Neha Singh",
    amount: 3500,
    your_share: 1750,
  },
  {
    date: "2024-11-30",
    category: "utilities",
    name: "Water Bill",
    payee: "Emily Wang",
    amount: 1800,
    your_share: 900,
  },
  {
    date: "2024-12-12",
    category: "entertainment",
    name: "Movie Tickets",
    payee: "David Brown",
    amount: 1200,
    your_share: 600,
  },
  {
    date: "2024-01-08",
    category: "travel",
    name: "Ola",
    payee: "Aisha Khan",
    amount: 950,
    your_share: 475,
  },
  {
    date: "2024-02-14",
    category: "grocery",
    name: "Nature's Basket",
    payee: "Ayush Rungta",
    amount: 2700,
    your_share: 1350,
  },
  {
    date: "2024-03-21",
    category: "dining",
    name: "McDonald's",
    payee: "Karan Mehta",
    amount: 800,
    your_share: 400,
  },
  {
    date: "2024-04-05",
    category: "shopping",
    name: "Myntra",
    payee: "Priya Sharma",
    amount: 4200,
    your_share: 2100,
  },
  {
    date: "2024-05-17",
    category: "utilities",
    name: "Internet Bill",
    payee: "Amit Patel",
    amount: 1500,
    your_share: 750,
  },
  {
    date: "2024-06-22",
    category: "entertainment",
    name: "Spotify",
    payee: "Sophia Li",
    amount: 299,
    your_share: 150,
  },
  {
    date: "2024-07-09",
    category: "travel",
    name: "Lyft",
    payee: "Michael Johnson",
    amount: 750,
    your_share: 375,
  },
  {
    date: "2024-08-30",
    category: "grocery",
    name: "Dmart",
    payee: "Ayush Rungta",
    amount: 3100,
    your_share: 1550,
  },
];

export default function Home() {
  const [showAddExpensePopup, setShowAddExpensePopup] = useState(false);
  return (
    <div className="bg-white flex flex-col justify-center">
      <div className="w-1/2 mx-auto shadow-xl border border-gray-300 rounded-md m-2">
        <div className="flex flex-row justify-between bg-[#eee] items-center rounded-md">
          <div className="flex flex-row  ">
            <img
              className="h-10 w-10 rounded-full object-cover p-2"
              src="/groupImage.jpg"
              alt=""
            />
            <div className=" text-2xl font-bold">Awara Dehradun</div>
          </div>
          <div>
            <button
              className="bg-[#ff652f] p-1 my-2 mx-1 rounded-md shadow-lg text-white hover:bg-[#e55529]"
              onClick={() => {
                setShowAddExpensePopup(true);
              }}
            >
              Add an expence
            </button>
            <button className="bg-[#5bc5a7] p-1 my-2 mx-2 rounded-md shadow-lg text-white hover:bg-[#4da38c]">
              Settle up
            </button>
          </div>
        </div>
        {tempExpenses.map((expense) => (
          <ExpenseCard expense={expense} />
        ))}
        {showAddExpensePopup ? (
          <div className="w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-80 flex justify-center items-center">
            <Addexpensecard handlePopupClose={()=>{
              setShowAddExpensePopup(false)
            }}/>
          </div>
        ) : null}
      </div>
    </div>
  );
}
