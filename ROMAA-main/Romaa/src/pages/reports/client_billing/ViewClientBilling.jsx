import { Pencil } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Title from "../../../components/Title";
import ButtonBg from "../../../components/Button";

const ViewClientBilling = () => {
  const { state } = useLocation();
  const project = state?.item || {};
  const navigate = useNavigate();

  if (!project) {
    return <div className="p-4 text-red-600">No project data found.</div>;
  }

  return (
    <>
      <div className="sm:my-2 flex sm:items-center flex-col sm:flex-row items-start sm:justify-between space-y-1.5 my-4">
        <Title
          title="Report"
          sub_title="Client Billing"
          page_title="View Client Billing"
        />
        <ButtonBg
          button_name="Back"
          button_icon={<Pencil size={16} />}
          onClick={() => navigate(-1)}
        />
      </div>

      <div className="bg-white w-full  mx-auto rounded-md px-6 py-6">
        <p className="grid grid-cols-2 mb-2">
          <span></span>
          <span className="font-bold text-xl px-2">Client Billing</span>
        </p>
        <div className="grid grid-cols-2 text-sm gap-y-2">
          <p className="font-semibold text-gray-800">Start Date</p>
          <p className="text-gray-600">{project.startDate}</p>

          <p className="font-semibold text-gray-800">End Date</p>
          <p className="text-gray-600">{project.endDate}</p>

          <p className="font-semibold text-gray-800">Project Value</p>
          <p className="text-gray-600">{project.projectValue}</p>

          <p className="font-semibold text-gray-800">Payment Collected</p>
          <p className="text-gray-600">{project.paymentCollected}</p>

          <p className="font-semibold text-gray-800">Billed</p>
          <p className="text-gray-600">{project.billed}</p>

          <p className="font-semibold text-gray-800">To Be Billed</p>
          <p className="text-gray-600">{project.toBeBilled}</p>
        </div>
      </div>
    </>
  );
};

export default ViewClientBilling;
