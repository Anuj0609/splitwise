import { Expense } from "@/types";

export const getExpenseList = (): Expense[] => {
  const list = localStorage.getItem("expenseLists");
  return list ? JSON.parse(list) : [];
};
