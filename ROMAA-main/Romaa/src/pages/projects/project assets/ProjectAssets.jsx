import Table from "../../../components/Table";
import { BOQSplitData } from "../../../components/Data";
import Filters from "../../../components/Filters";
const Columns = [
  { label: "Materail Name ", key: "materialname" },
  { label: "Unit", key: "unit" },
  { label: "In Stock", key: "instock" },
  { label: "Min Level", key: "minlevel" },
  { label: "Max Level", key: "maxlevel" },
  { label: "Machinery", key: "machinery" },
  {
    label: "Status",
    key: "status",
    render: (item) => <span>{` ${item.status}`}</span>,
  },
];

const ProjectAssets = () => {
  return (
    <Table
      title={"Projects Managemnet"}
      subtitle={"Assets"}
      pagetitle={" Assets"}
      endpoint={BOQSplitData}
      columns={Columns}
      FilterModal={Filters}
    />
  );
};

export default ProjectAssets;
