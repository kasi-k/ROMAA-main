import React from "react";
const PaymentTermsdata = [
  { label: "Payment against Submitted", value: "05-06-2025" },
  { label: "Bill due", value: "4th day" },
  { label: "Bill to be certified by", value: "Days" },
  { label: "Due on", value: 1480.0 },
];

const PaymentTerms = () => {
  return (
    <div className="h-full">
      <div className="bg-white w-full rounded-md p-6">
        <div className="flex flex-col col-span-2 sm:grid grid-cols-3 w-full gap-3">
          {PaymentTermsdata.map((field, idx) => (
            <React.Fragment key={idx}>
              <p className="text-sm col-span-1 font-bold text-gray-800">
                {field.label}
              </p>
              <p className="text-sm col-span-2 text-gray-600">
                {field.label === "Due on" ? `₹${field.value}` : field.value}
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentTerms;
