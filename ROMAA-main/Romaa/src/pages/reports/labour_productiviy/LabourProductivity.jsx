import Filters from "../../../components/Filters";
import Table from "../../../components/Table";
import { laborproductivityData } from "../../../components/Data";

const laborproductivityColumns = [
  { key: "projectName", label: "Project Name" },
  { key: "location", label: "Location" },
  { key: "laborPlanned", label: "Labor Planned" },
  { key: "laborAttended", label: "Labor Attended" },
  { key: "variance", label: "Variance" },
];

const LabourProductivity = () => {
  return (
    <div className="font-roboto-flex flex flex-col ">
      <Table
        title="Reports"
        subtitle="Labour Productivity"
        pagetitle="Labour Productivity"
        endpoint={laborproductivityData}
        columns={laborproductivityColumns}
        exportModal={false}
      />
    </div>
  );
};

export default LabourProductivity;
