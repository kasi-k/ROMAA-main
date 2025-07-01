import { LiaClipboardListSolid } from "react-icons/lia";
import Filters from "../../../components/Filters";
import Table from "../../../components/Table";
import { PurchaseEnquirydata } from "../../../components/Data";



const Columns = [
  { label: "Request ID", key: "id" },
  { label: "Project Name", key: "projectname" },
    { label: "location", key: "location" },
  { label: "Request Type", key: "requesttype" },
  { label: "Verified by", key: "verifiedby" },
];

const PurchaseEnquiry = () => {
  return (
    <Table
      title="Purchase Management"
      subtitle="Purchase Enquiry"
      pagetitle="Purchase Enquiry"
      endpoint={PurchaseEnquirydata}
      columns={Columns}
      AddModal={true}
      EditModal={true}
      ViewModal={true}
      FilterModal={Filters}
      addButtonLabel="Create Enquiry"
      addButtonIcon={<LiaClipboardListSolid size={24} />}
    />
  );
};

export default PurchaseEnquiry;
