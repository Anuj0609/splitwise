import Image from "next/image";
import { Inter, Mountains_of_Christmas } from "next/font/google";
import { ExpenseCard } from "@/components/ExpenseCard";
import { Expense } from "@/types";
const inter = Inter({ subsets: ["latin"] });

export const tempExpenses: Expense[] = [
  {
    date: "2024-05-27",
    category: "grocery",
    name: "Grofers",
    payee: "Ayush Rungta",
    amount: 2887,
    your_share: 1223,
  },
  {
    date: "2024-05-27",
    category: "dining",
    name: "Pizza Hut",
    payee: "Nina Patel",
    amount: 1500,
    your_share: 750,
  },
  {
    date: "2024-05-27",
    category: "utilities",
    name: "Electricity Bill",
    payee: "John Doe",
    amount: 3200,
    your_share: 1600,
  },
  {
    date: "2024-05-27",
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
    date: "2024-05-27",
    category: "entertainment",
    name: "Netflix",
    payee: "Ankit Verma",
    amount: 999,
    your_share: 499,
  },
  {
    date: "2024-05-27",
    category: "travel",
    name: "Uber",
    payee: "Sara Jones",
    amount: 850,
    your_share: 425,
  },
  {
    date: "2024-05-27",
    category: "grocery",
    name: "Local Market",
    payee: "Ayush Rungta",
    amount: 2200,
    your_share: 1100,
  },
  {
    date: "2024-05-27",
    category: "dining",
    name: "Starbucks",
    payee: "Rajesh Gupta",
    amount: 600,
    your_share: 300,
  },
  {
    date: "2024-05-27",
    category: "shopping",
    name: "Flipkart",
    payee: "Neha Singh",
    amount: 3500,
    your_share: 1750,
  },
  {
    date: "2024-05-27",
    category: "utilities",
    name: "Water Bill",
    payee: "Emily Wang",
    amount: 1800,
    your_share: 900,
  },
  {
    date: "2024-05-27",
    category: "entertainment",
    name: "Movie Tickets",
    payee: "David Brown",
    amount: 1200,
    your_share: 600,
  },
  {
    date: "2024-05-27",
    category: "travel",
    name: "Ola",
    payee: "Aisha Khan",
    amount: 950,
    your_share: 475,
  },
  {
    date: "2024-05-27",
    category: "grocery",
    name: "Nature's Basket",
    payee: "Ayush Rungta",
    amount: 2700,
    your_share: 1350,
  },
  {
    date: "2024-05-27",
    category: "dining",
    name: "McDonald's",
    payee: "Karan Mehta",
    amount: 800,
    your_share: 400,
  },
  {
    date: "2024-05-27",
    category: "shopping",
    name: "Myntra",
    payee: "Priya Sharma",
    amount: 4200,
    your_share: 2100,
  },
  {
    date: "2024-05-27",
    category: "utilities",
    name: "Internet Bill",
    payee: "Amit Patel",
    amount: 1500,
    your_share: 750,
  },
  {
    date: "2024-05-27",
    category: "entertainment",
    name: "Spotify",
    payee: "Sophia Li",
    amount: 299,
    your_share: 150,
  },
  {
    date: "2024-05-27",
    category: "travel",
    name: "Lyft",
    payee: "Michael Johnson",
    amount: 750,
    your_share: 375,
  },
  {
    date: "2024-05-27",
    category: "grocery",
    name: "Dmart",
    payee: "Ayush Rungta",
    amount: 3100,
    your_share: 1550,
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {tempExpenses.map((expense) => (
        <ExpenseCard expense={expense} />
      ))}
    </div>
  );
}
