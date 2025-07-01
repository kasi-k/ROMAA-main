import React from "react";

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
    </div>
  );
};

export default EMD;
