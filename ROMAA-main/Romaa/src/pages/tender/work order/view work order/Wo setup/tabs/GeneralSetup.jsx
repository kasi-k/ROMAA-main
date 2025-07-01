import React from "react";
const Generaldata = [
  { label: "Business Type", value: "Contractor" },
  { label: "Project Division", value: "Housing" },
  { label: "Project Name", value: "Madurai shed" },
  { label: "Project Type", value: "Industrial"},
  { label: "Is it SEZ Project", value: "No"},
];

const GeneralSetup = () => {
  return (
    <div className="h-full">
      <div className="bg-white w-full rounded-md p-6">
        <div className="flex flex-col col-span-2 sm:grid grid-cols-3 w-full gap-3">
          {Generaldata.map((field, idx) => (
            <React.Fragment key={idx}>
              <p className="text-sm col-span-1 font-bold text-gray-800">
                {field.label}
              </p>
              <p className="text-sm col-span-2 text-gray-600">
                {field.value}
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralSetup;