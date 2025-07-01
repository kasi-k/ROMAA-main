import React, { useState } from "react";
import Title from "../../../../components/Title";
import { TbFileExport } from "react-icons/tb";
import { LuFileCheck } from "react-icons/lu";
import { MdArrowBackIosNew } from "react-icons/md";
import TenderOverView from "./tender overview/TenderOverView";
import ApproveTender from "./tender overview/ApproveTender";
import { useNavigate } from "react-router-dom";
import CustomerDetails from "./customer/CustomerDetails";
import Plan from "./plans/Plan";
import BOQ from "./Boq/BOQ";
import ZeroCost from "./zero cost/ZeroCost";
import ProjectDocuments from "./project documents/ProjectDocuments";
import Contract from "./contract/Contract";
import Vendor from "./vendor/Vendors";
import Preliminary from "./preliminary/Preliminary";
import AddZeroCost from "./zero cost/AddZeroCost";
import AddBoq from "./Boq/AddBoq";
import EMD from "./Emd/EMD";

const tabs = [
  {
    id: "1",
    label: "Tender Overview",
    component: <TenderOverView />,
    buttons: [
      {
        label: "Approve Tender",
        icon: <LuFileCheck size={23} />,
        className: "bg-darkest-blue text-white",
      },
      {
        label: "Export",
        icon: <TbFileExport size={23} />,
        className: "bg-white text-darkest-blue",
      },
    ],
  },
  {
    id: "2",
    label: "Customer Details",
    component : <CustomerDetails/>,
    buttons: [
      {
        label: "Export",
        icon: <TbFileExport size={23} />,
        className: "bg-white text-darkest-blue",
      },
    ],
  },
  {
    id: "3",
    label: "Plan",
    component:<Plan/>,
    buttons: [
      {
        label: "Export",
        icon: <TbFileExport size={23} />,
        className: "bg-white text-darkest-blue",
      },
    ],
  },
  {
    id: "4",
    label: "BOQ",
    component:<BOQ/>,
    buttons: [
      {
        label: "Add BOQ",
        className: "bg-darkest-blue text-white",
      },
      {
        label: "Upload BOQ",
        className: "bg-white text-darkest-blue",
      },
      {
        label: "Export",
        icon: <TbFileExport size={23} />,
        className: "bg-white text-darkest-blue",
      },
    ],
  },
  {
    id: "5",
    label: "Zero Cost",
    component:<ZeroCost/>,
    buttons: [
      {
        label: "Add Zero Cost",
        className: "bg-darkest-blue text-white",
      },
      {
        label: "Upload Zero Cost",
        className: "bg-white text-darkest-blue",
      },
      {
        label: "Export",
        icon: <TbFileExport size={23} />,
        className: "bg-white text-darkest-blue",
      },
    ],
  },
  {
    id: "6",
    label: "Project Documents",
    component:<ProjectDocuments/>,
    buttons: [
      {
        label: "Upload Documents",
        className: "bg-darkest-blue text-white",
      },
      {
        label: "Export",
        icon: <TbFileExport size={23} />,
        className: "bg-white text-darkest-blue",
      },
    ],
  },
  {
    id: "7",
    label: "EMD",
    component:<EMD/>,
    buttons: [
      {
        label: "Export",
        icon: <TbFileExport size={23} />,
        className: "bg-white text-darkest-blue",
      },
    ],
  },
  {
    id: "8",
    label: "Contract",
    component:<Contract/>,
    buttons: [
      {
        label: "Export",
        icon: <TbFileExport size={23} />,
        className: "bg-white text-darkest-blue",
      },
    ],
  },
  {
    id: "9",
    label: "Vendor",
    component:<Vendor/>,
    buttons: [
      {
        label: "Export",
        icon: <TbFileExport size={23} />,
        className: "bg-white text-darkest-blue",
      },
    ],
  },
  {
    id: "10",
    label: "Preliminary",
    component:<Preliminary/>,
    buttons: [
      {
        label: "Export",
        icon: <TbFileExport size={23} />,
        className: "bg-white text-darkest-blue",
      },
    ],
  },
];

const ViewTender = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(null);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeTabData = tabs.find((tab) => tab.id === activeTab);
  const buttonsWithHandlers = activeTabData.buttons.map((button) => {
    const modalMap = {
      "Approve Tender": "approveTender",
      "Add BOQ": "addBoq",
      "Add Zero Cost": "zeroCost",
    };

    if (modalMap[button.label]) {
      return {
        ...button,
        onClick: () => setOpenModal(modalMap[button.label]),
      };
    }
    return button;
  });

  return (
    <>
      <div className="font-roboto-flex flex flex-col h-full">
        <div className="font-roboto-flex flex justify-between items-center ">
          <Title
            title="Tender Management"
            sub_title="Tender"
            active_title={activeTabData?.label}
          />
          <div className="flex gap-2">
            {buttonsWithHandlers.map((button, index) => (
              <button
                key={index}
                className={`cursor-pointer w-fit text-sm flex items-center gap-2 px-4 py-2 rounded-md ${button.className}`}
                onClick={button.onClick}
              >
                {button.icon} {button.label}
              </button>
            ))}
          </div>
        </div>
        <div className=" font-roboto-flex  cursor-pointer flex justify-between items-center ">
          <div className="flex flex-wrap gap-2 py-2.5 ">
            {tabs.map(({ id, label }) => (
              <p
                key={id}
                className={`flex gap-2 items-center px-4 py-2.5 font-medium rounded-lg text-sm  whitespace-nowrap ${
                  activeTab === id
                    ? "bg-darkest-blue text-white"
                    : "bg-white text-darkest-blue "
                }`}
                onClick={() => setActiveTab(id)}
              >
                {label}
              </p>
            ))}
          </div>
        </div>
        <div className=" h-full overflow-y-auto  no-scrollbar">
        {activeTabData?.component}
          <div className=" cursor-pointer place-self-end  items-center  flex justify-end ">
            <p
              onClick={() => navigate("..")}
              className="flex items-center gap-2 bg-darkest-blue text-white px-8 py-2 rounded"
            >
              <MdArrowBackIosNew />
              Back
            </p>
          </div>
        </div>

        {openModal === "approveTender" && (
          <ApproveTender onclose={() => setOpenModal(null)} />
        )}
           {openModal === "zeroCost" && (
          <AddZeroCost onclose={() => setOpenModal(null)} />
        )}
           {openModal === "addBoq" && (
          <AddBoq onclose={() => setOpenModal(null)} />
        )}
      </div>
    </>
  );
};

export default ViewTender;
