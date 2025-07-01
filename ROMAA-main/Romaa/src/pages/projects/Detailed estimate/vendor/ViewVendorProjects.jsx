import { ArrowBigLeft, ChevronDown, ChevronLeft, Pencil } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Title from "../../../../components/Title";
import StarProgress from "../../../../components/StarProgress";
import Button from "../../../../components/Button";


const ViewVendorProject = () => {
  const { state } = useLocation();
  const vendor = state?.item || {};
  const navigate = useNavigate();

  if (!vendor) {
    return <div className="p-4 text-red-600">No employee data found.</div>;
  }

  return (
    <>
    <div className="h-full">
      <div className="sm:my-2 flex sm:items-center flex-col sm:flex-row items-start sm:justify-between space-y-1.5 my-4">
        <Title
          title="Projects Management"
          sub_title="Detailed estimate"
          active_title="Vendor"
        />
      </div>
      <div className="bg-white w-full flex flex-col sm:grid grid-cols-2 gap-y-2 rounded-md px-4 py-6 ">
        <div className="col-span-2 flex justify-center items-center mb-4 ">
          <p className="text-xl font-semibold">Vendor Details</p>
        </div>
        <div className=" flex flex-col col-span-2 sm:grid grid-cols-2 w-full space-y-2">
          <p className="text-sm col-span-1 font-bold text-gray-800">
            {" "}
            Vendor Name
          </p>
          <p className="text-sm col-span-1 text-gray-600">
            {vendor.vendorname}
          </p>

          <p className="text-sm col-span-1 font-bold text-gray-800">Category</p>
          <p className="text-sm col-span-1 text-gray-600">{vendor.category}</p>

          <p className="text-sm col-span-1 font-bold text-gray-800">
            Contact Person
          </p>
          <p className="text-sm col-span-1 text-gray-600">
            {vendor.contactperson}
          </p>

          <p className="text-sm col-span-1 font-bold text-gray-800">
            Phone Number
          </p>
          <p className="text-sm col-span-1 text-gray-600">
            {vendor.phonenumber}
          </p>
          <p className="text-sm col-span-1 font-bold text-gray-800">Ratings</p>
          <div className="text-sm col-span-1 text-gray-600 flex items-center">
            <StarProgress rating={vendor.rating} />
            <span className="ml-2">{vendor.rating}</span>
          </div>
        </div>
      </div>
          </div>
      <div className="my-4 flex justify-end">
      <Button button_name="Back" button_icon={<ChevronLeft />}  onClick={()=>navigate("..?tab=10")} />
      </div>
  
    </>
  );
};

export default ViewVendorProject;
