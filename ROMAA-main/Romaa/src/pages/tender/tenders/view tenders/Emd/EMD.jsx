import React from "react";
import Table from "../../../../../components/Table";
import { EMDTableData } from "../../../../../components/Data";
import ViewEmdTender from "./ViewEmdTender";

const Columns = [
  { label: "Date  ", key: "date" },
  { label: "Company", key: "company" },
  { label: "Proposed Value", key: "proposedvalue" },
  { label: "EMD Amount", key: "emdamount" },
  { label: "Bank Name", key: "bankname" },
  { label: "Level", key: "level" },
  { label: "Status", key: "status" },
];

const EMD = () => {
  return (
    <div className="h-full">
      {" "}
      <div className="bg-white w-full  flex flex-col sm:grid grid-cols-2 gap-y-2 rounded-md px-4 py-6">
        <div className="col-span-2 flex justify-center items-center mb-4 ">
          <p className="text-xl font-semibold">EMD</p>
        </div>
        <div className=" flex flex-col col-span-2 sm:grid grid-cols-2 w-full space-y-2">
          <p className="text-sm col-span-1 font-bold text-gray-800">
            EMD Percentage
          </p>
          <p className="text-sm col-span-1 text-gray-600">employee</p>

          <p className="text-sm col-span-1 font-bold text-gray-800">
            EMD Value
          </p>
          <p className="text-sm col-span-1 text-gray-600">2</p>

          <p className="text-sm col-span-1 font-bold text-gray-800">
            Expiry Date
          </p>
          <p className="text-sm col-span-1 text-gray-600">7</p>
        </div>
      </div>
      <Table
        contentMarginTop="mt-0"
        endpoint={EMDTableData}
        columns={Columns}
        ViewModal={ViewEmdTender}
        exportModal={false}
      />
    </div>
  );
};

export default EMD;
