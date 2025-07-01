
import Table from "../../../components/Table";
import { MachineryEntryData } from "../../../components/Data";
import Filters from "../../../components/Filters";

const machineproductivityColumns =[
  { label: "Date", key: "Date" },
  { label: "Machine", key: "Machine" },
  { label: "Start Reading", key: "StartReading" },
  { label: "End Reading", key: "EndReading" },
  { label: "Attachments", key: "Attachments" },
  { label: "Action by", key: "ActionBy" }
];



const MachineryEntry = () => {
  return (
    <div className="font-roboto-flex flex flex-col">
      <Table
        title="Site"
        subtitle="Machinery Entry"
        pagetitle="Machinery Entry"
        endpoint={MachineryEntryData}
        columns={machineproductivityColumns}
        exportModal={true}
        FilterModal={Filters}
      />
    </div>
  );
};

export default MachineryEntry;
