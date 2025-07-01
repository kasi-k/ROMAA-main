import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { purchaseRequestData, purchaseRequestdataview } from "../../../components/Data";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useState } from "react";

const ViewPurchaseEnquiry = () => {
  const navigate = useNavigate();
  const[requestRegister,SetRequestRegister]=useState(false)

  return (
    <>
      <div className="h-full">
        <div className="flex justify-between items-center h-1/12">
          <Title
            title="Purchase Management"
            sub_title="Purchase Enquire"
            page_title="Purchase Enquire"
          />
          
        </div>
        <div className="h-full overflow-auto space-y-2 mt-2">
        <div className="bg-white w-full  gap-y-2 rounded-md px-6 py-6 ">
          <p className="text-xl text-center  font-semibold pb-4">
            Purchase Enquire
          </p>

          <div className=" flex flex-col col-span-2 sm:grid grid-cols-7 w-full space-y-2">
            <p className="text-sm col-span-3 font-bold text-gray-800">
              {" "}
              Request ID
            </p>
            <p className="text-sm col-span-2 text-gray-600">
              {purchaseRequestData.requestid}
            </p>

            <p className="text-sm col-span-3 font-bold text-gray-800">Date</p>
            <p className="text-sm col-span-2 text-gray-600">
              {purchaseRequestData.date}
            </p>

            <p className="text-sm col-span-3 font-bold text-gray-800">
              Project
            </p>
            <p className="text-sm col-span-2 text-gray-600">
              {purchaseRequestData.project}
            </p>

            <p className="text-sm col-span-3 font-bold text-gray-800">
              Date of Requirements
            </p>
            <p className="text-sm col-span-2 text-gray-600">
              {purchaseRequestData.dateofrequirements}
            </p>
            <p className="text-sm col-span-3 font-bold text-gray-800">
              Requested by
            </p>
            <p className="text-sm col-span-2 text-gray-600">
              {purchaseRequestData.requestedby}
            </p>
          </div>
        </div>
        <div className="bg-white w-full  gap-y-2 rounded-md px-6 py-6 ">
          <table className="w-full text-center"> 
            <thead className="bg-[#E3ECFF] ">
              <tr>
                <th className="p-2.5 rounded-l-md">S.no</th>
                <th>Material</th>
                <th>Units</th>
                <th className="rounded-r-md">Quantity</th>
              </tr>
            </thead>
            <tbody className="text-sm opacity-60">
              {purchaseRequestdataview.map((item, index) => (
                <tr key={index}>
                  <td className="p-1">{index + 1}</td>
                  <td>{item.material}</td>
                  <td>{item.units}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
      <div className="my-4 flex justify-end">
        <Button
          button_name="Back"
          button_icon={<ChevronLeft />}
          onClick={() => navigate("..")}
        />
      </div>
    </>
  );
};

export default ViewPurchaseEnquiry;
