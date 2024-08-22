import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const DatepickerWithIcon = ({ date, setDate }: { date: any; setDate: any }) => {
  return (
    <div className="relative inline-block">
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        placeholderText={date ? formatDate(date) : "Select date"}
        dateFormat="dd/MM/yyyy"
        className="w-full pl-3 pr-10 py-1 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
        <FaCalendarAlt />
      </span>
    </div>
  );
};

export default DatepickerWithIcon;
