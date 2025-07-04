import React from "react";

const customerDetails = [
  { label: "Customer ID", value: "TND-2345" },
  { label: "Customer Name", value: "2025-05-10" },
  { label: "PAN no", value: "Open Bid" },
  { label: "CIN no", value: "Construction" },
  { label: "GSTIN", value: "Downtown, City" },
  { label: "VAT no", value: "Infrastructure" },
  { label: "Phone Number", value: "John Doe" },
  { label: "Contact Number", value: "+1 234 567 890" },
  { label: "Email ID", value: "johndoe@example.com" },
  { label: "Address", value: "123 Main St, New York, NY 10001" },
];

const CustomerDetails = () => {
  return (
    <>
    <div className="h-11/12">
      <div className="w-fit h-fit dark:bg-layout-dark  bg-white rounded-lg shadow p-4">
        <p className="font-semibold text-lg">Customer Details</p>
        <div className="grid grid-cols-12 gap-2  text-xs font-semibold px-2 py-2 ">
          {customerDetails.map((item, index) => (
            <React.Fragment key={index}>
              <p className="col-span-6">{item.label}</p>
              <p className="col-span-6 text-end  opacity-50 font-light">
                {item.value}
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default CustomerDetails;
