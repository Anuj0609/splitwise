export type Expense = {
  description: string;
  date: string;
  category: string;
  name: string;
  payee: string;
  amount: number;
  your_share: number;
  lent: number;
  icon: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  contact: string;
  profilePicture: string;
};

export type Group = {
  id: string;
  name: string;
  members: User[];
  profilePicture: string;
};
