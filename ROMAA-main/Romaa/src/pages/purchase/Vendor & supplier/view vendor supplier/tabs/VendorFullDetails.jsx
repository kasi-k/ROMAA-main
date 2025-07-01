import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { vendorfulldetailspurchase } from "../../../../../components/Data";
import StarProgress from "../../../../../components/StarProgress";
import Button from "../../../../../components/Button";

const VendorFullDetails = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-full">
        <div className="bg-white w-full  gap-y-2 rounded-md px-6 py-6 ">
          <p className="text-xl text-center  font-semibold pb-4">
            Vendor Details
          </p>

          <div className=" flex flex-col col-span-2 sm:grid grid-cols-7 w-full space-y-2">
            <p className="text-sm col-span-3 font-bold text-gray-800"> Name</p>
            <p className="text-sm col-span-2 text-gray-600">
              {vendorfulldetailspurchase.vendorname}
            </p>

            <p className="text-sm col-span-3 font-bold text-gray-800">
              Vendor Type
            </p>
            <p className="text-sm col-span-2 text-gray-600">
              {vendorfulldetailspurchase.vendortype}
            </p>

            <p className="text-sm col-span-3 font-bold text-gray-800">
              Mobile Number
            </p>
            <p className="text-sm col-span-2 text-gray-600">
              {vendorfulldetailspurchase.mobilenumber}
            </p>

            <p className="text-sm col-span-3 font-bold text-gray-800">Email</p>
            <p className="text-sm col-span-2 text-gray-600">
              {vendorfulldetailspurchase.email}
            </p>
            <p className="text-sm col-span-3 font-bold text-gray-800">
              Credit Days
            </p>
            <p className="text-sm col-span-2 text-gray-600">
              {vendorfulldetailspurchase.creditdays}
            </p>
            <p className="text-sm col-span-3 font-bold text-gray-800">
              Business Type
            </p>
            <p className="text-sm col-span-2 text-gray-600">
              {vendorfulldetailspurchase.businesstype}
            </p>
            <p className="text-sm col-span-3 font-bold text-gray-800">
              Industry Category
            </p>
            <p className="text-sm col-span-2 text-gray-600">
              {vendorfulldetailspurchase.industrycategory}
            </p>
            <p className="text-sm col-span-3 font-bold text-gray-800">
              PAN Number
            </p>
            <p className="text-sm col-span-2 text-gray-600">
              {vendorfulldetailspurchase.pannumber}
            </p>
            <p className="text-sm col-span-3 font-bold text-gray-800">
              Address
            </p>
            <p className="text-sm col-span-2 text-gray-600">
              {vendorfulldetailspurchase.address}
            </p>
            <p className="text-sm col-span-3 font-bold text-gray-800">
              Ratings
            </p>
            <div className="text-sm col-span-2 text-gray-600 flex items-center">
              <StarProgress rating={vendorfulldetailspurchase.rating} />
              <span className="ml-2">{vendorfulldetailspurchase.rating}</span>
            </div>
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

export default VendorFullDetails;
