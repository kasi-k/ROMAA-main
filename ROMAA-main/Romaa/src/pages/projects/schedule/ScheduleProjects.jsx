
import { useSearchParams } from "react-router-dom";
import Title from "../../../components/Title";
import DailyProjects from "./tabs/daily/DailyProjects";
import WeeklyProjects from "./tabs/weekly/WeeklyProjects";
import MonthlyProjects from "./tabs/monthly/Monthly";



const tabs = [
  {
    id: "1",
    label: "Daily",
    component:<DailyProjects/>,
    
  },
  {
    id: "2",
    label: "Weekly",
    component:<WeeklyProjects/>,
    
  },
  {
    id: "3",
    label: "Monthly",
    component:<MonthlyProjects/>,
    
  },
  
 
];

const ScheduleProjects = () => {
const [searchParams, setSearchParams] = useSearchParams();
const defaultTab = tabs[0].id;
const activeTab = searchParams.get("tab") || defaultTab;

const handleTabChange = (id) => {
  setSearchParams({ tab: id });
};

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <>
      <div className="font-roboto-flex flex flex-col h-full">
        <div className="font-roboto-flex flex justify-between items-center ">
          <Title
            title="Projects Management"
            sub_title="Schedule"
            active_title={activeTabData?.label}
          />
        </div>
        <div className=" font-roboto-flex  cursor-pointer flex justify-between items-center  ">
          <div className="flex flex-wrap gap-2 py-2.5 ">
            {tabs.map(({ id, label }) => (
              <p
                key={id}
                className={`flex gap-2 items-center px-4 py-2.5 font-medium rounded-lg text-sm whitespace-nowrap ${
                  activeTab === id
                    ? "bg-darkest-blue text-white"
                    : "bg-white text-darkest-blue "
                }`}
                onClick={() => handleTabChange(id)}
              >
                {label}
              </p>
            ))}
          </div>
        </div>
        <div className=" h-full overflow-y-auto  no-scrollbar">
          {activeTabData?.component}
        </div>
      </div>
    </>
  );
};

export default ScheduleProjects;
