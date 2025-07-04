import React from "react";
import { Pencil } from "lucide-react";

const importantDates = [
  {
    title: "Last Date of Document Purchase",
    date: "12/06/2025",
    time: "12:00 PM",
    address: "123 Street, Chennai",
  },
  {
    title: "PreBid Meeting Date",
    date: "15/06/2025",
    time: "2:00 PM",
    address: "Conference Room, Chennai",
  },
  {
    title: "Last Date of Bid Submission",
    date: "20/06/2025",
    time: "11:59 PM",
    address: "Online",
  },
  {
    title: "Bid Opening Date",
    date: "21/06/2025",
    time: "10:00 AM",
    address: "Main Office, Chennai",
  },
  {
    title: "Last Date of Technical Bid Submission",
    date: "22/06/2025",
    time: "5:00 PM",
    address: "Online",
  },
  { title: "Validity Period", date: "30/06/2025", time: "11:59 PM" },
];

const General = [
  { label: "Tender Title", value: "Construction of Bridge" },
  { label: "Source Type", value: "Government" },
  { label: "Source Name", value: "City Infrastructure Dept" },
  { label: "Client Name", value: "ABC Constructions Pvt Ltd" },
  { label: "Project Location", value: "Downtown, City" },
  { label: "Project Cost", value: "$5,000,000" },
  { label: "Project Duration", value: "18 Months" },
  { label: "Contact Number", value: "+1 234 567 890" },
];
const tenderDetails = [
  { label: "Tender ID", value: "TND-2345" },
  { label: "Tender Published Date", value: "2025-05-10" },
  { label: "Tender Process Type", value: "Open Bid" },
  { label: "Tender Type", value: "Construction" },
  { label: "Project Location", value: "Downtown, City" },
  { label: "Project Type", value: "Infrastructure" },
  { label: "Contact Person", value: "John Doe" },
  { label: "Contact Person Location", value: "New York" },
  { label: "Contact Number", value: "+1 234 567 890" },
  { label: "Email ID", value: "johndoe@example.com" },
  { label: "Address", value: "123 Main St, New York, NY 10001" },
];
const tenderProcessData = [
  { label: "Site Investigation", date: "22.04.2025" },
  { label: "Pre bid Meeting", date: "22.04.2025" },
  { label: "Bid Submit", date: "22.04.2025" },
  { label: "Technical Bid Opening", date: "22.04.2025" },
  { label: "Commercial Bid Opening", date: "22.04.2025" },
  { label: "Negotiations", date: "22.04.2025" },
  { label: "Work Order", date: "22.04.2025" },
  { label: "Agreement", date: "22.04.2025" },
];
const TenderOverView = () => {
  return (
    <>
    <div className="font-roboto-flex grid grid-cols-12 h-full gap-4  overflow-y-auto no-scrollbar py-2">
      <div className="col-span-4 row-span-2 dark:bg-layout-dark bg-white rounded-lg shadow p-4 space-y-4">
        <div className="flex justify-between items-center pb-4 mt-2">
          <p className="font-semibold text-lg">Important Dates</p>
          <button className="bg-darkest-blue px-3 py-1.5 text-xs font-extralight text-white rounded">
            Add Follow up
          </button>
        </div>
        <div className="space-y-3 px-2">
          {importantDates.map((item, index) => (
            <div key={index} className="space-y-1 ">
              <p className="font-semibold text-sm">{item.title}</p>
              <div className="grid grid-cols-12 mx-4 text-xs gap-1 ">
                <p className="col-span-4">Date</p>
                <p className="col-span-8 text-end text-gray-500">{item.date}</p>
                <p className="col-span-4">Time</p>
                <p className="col-span-8 text-end text-gray-500">
                  {item.time || "-"}
                </p>
                {item.address && (
                  <>
                    <p className="col-span-4 ">Address</p>
                    <p className="col-span-8 text-end text-gray-500">
                      {item.address}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-4 dark:bg-layout-dark bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center px-2 py-2">
          <p className="font-semibold text-lg">General</p>
          <p className="bg-gray-400 text-gray-600 rounded-full px-1.5 py-1.5">
            <Pencil size={14} />
          </p>
        </div>
        <div className="grid grid-cols-12 gap-2  text-xs font-semibold px-2 py-2 ">
          {General.map((item, index) => (
            <React.Fragment key={index}>
              <p className="col-span-6">{item.label}</p>
              <p className="col-span-6 text-end opacity-50 font-light">
                {item.value}
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="col-span-4 dark:bg-layout-dark bg-white rounded-lg shadow p-4">
        {" "}
        <div className="flex justify-between items-center px-2 py-2">
          <p className="font-semibold text-lg">Tender Details</p>
          <p className="bg-gray-400 text-gray-600 rounded-full px-1.5 py-1.5">
            <Pencil size={14} />
          </p>
        </div>
        <div className="grid grid-cols-12 gap-2  text-xs font-semibold px-2 py-2 ">
          {tenderDetails.map((item, index) => (
            <React.Fragment key={index}>
              <p className="col-span-6">{item.label}</p>
              <p className="col-span-6 text-end  opacity-50 font-light">
                {item.value}
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="col-span-8 dark:bg-layout-dark bg-white rounded-lg shadow p-4 ">
        {" "}
        <p className="font-semibold text-sm py-2 mx-4">Tender Process</p>
        <div className="space-y-1 mx-4 text-sm">
          {tenderProcessData.map((item, index) => (
            <div key={index} className="flex justify-between items-center ">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-darkest-blue"
                />
                <span>{item.label}</span>
              </div>
              <span className="text-gray-500 text-xs">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default TenderOverView;
