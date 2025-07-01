import React, { useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";

const scheduleData = [
  {
    title: "Concrete Pouring",
    quantity: 10,
    mon: 1,
    tue: 1,
    wed: 0,
    thur: 0,
    fri: 1,
  },
  {
    title: "Steel Fixing",
    quantity: 5,
    mon: 0,
    tue: 1,
    wed: 1,
    thur: 1,
    fri: 0,
  },
  {
    title: "Site Inspection",
    quantity: 2,
    mon: 1,
    tue: 0,
    wed: 0,
    thur: 1,
    fri: 1,
  },
  {
    title: "Material Delivery",
    quantity: 3,
    mon: 0,
    tue: 1,
    wed: 1,
    thur: 0,
    fri: 0,
  },
  {
    title: "Safety Meeting",
    quantity: 1,
    mon: 0,
    tue: 0,
    wed: 1,
    thur: 0,
    fri: 0,
  },
];

const WorkSchedule = () => {


  return (
    <div className="bg-white p-2 rounded-md shadow border border-blue-100 h-full overflow-x-auto no-scrollbar">
      <h3 className="font-semibold mb-4 text-lg border-b border-input-bordergrey p-4">Weekly  Schedule</h3>
      <table className="w-full text-sm ">
        <thead >
          <tr className=" border-b border-input-bordergrey  bg-white" >
            <th className="px-2 ">
             <p className=" flex items-center gap-2"> Description <HiArrowsUpDown /></p>
            </th>
            <th className="">
              <p className=" flex items-center gap-2"> Quantity
              <HiArrowsUpDown />
              </p>
            </th>
            <th className="">Mon</th>
            <th className="">Tues</th>
            <th className="">Wed</th>
            <th className="">Thur</th>
            <th className="">Fri</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((row, index) => (
            <React.Fragment key={index}>
              <tr className="text-center border-b border-input-bordergrey">
                <td className="text-start px-2 py-1.5">{row.title}</td>
                <td className="px-4 text-start">{row.quantity}</td>
                <td>{row.mon}</td>
                <td>{row.tue}</td>
                <td>{row.wed}</td>
                <td>{row.thur}</td>
                <td>{row.fri}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkSchedule;
