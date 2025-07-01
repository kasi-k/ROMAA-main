import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../components/Button";
import { KYCDocumentspurchasedata } from "../../../../../components/Data";

const KYCDocuments = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-full">
        <div className="bg-white w-full  gap-y-2 rounded-md px-6 py-6 ">
          <p className="text-xl text-center  font-semibold pb-4">
            KYC Documents
          </p>

          <div className=" flex flex-col col-span-2 sm:grid grid-cols-7 w-full space-y-2">
            <p className="text-sm col-span-3 font-bold text-gray-800"> GST</p>
            <p className="text-sm col-span-2 text-gray-600">
              {KYCDocumentspurchasedata.gst}
            </p>

            <p className="text-sm col-span-3 font-bold text-gray-800">
              PAN
            </p>
            <p className="text-sm col-span-2 text-gray-600">
              {KYCDocumentspurchasedata.pannumber}
            </p>

            <p className="text-sm col-span-3 font-bold text-gray-800">
             RC
            </p>
            <p className="text-sm col-span-2 text-gray-600">
              {KYCDocumentspurchasedata.rc}
            </p>

            <p className="text-sm col-span-3 font-bold text-gray-800">IPR</p>
            <p className="text-sm col-span-2 text-gray-600">
              {KYCDocumentspurchasedata.ipr}
            </p>
            <p className="text-sm col-span-3 font-bold text-gray-800">
              Account Details
            </p>
            <p className="text-sm col-span-2 text-gray-600">
              {KYCDocumentspurchasedata.accountdetails}
            </p>
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

export default KYCDocuments;
