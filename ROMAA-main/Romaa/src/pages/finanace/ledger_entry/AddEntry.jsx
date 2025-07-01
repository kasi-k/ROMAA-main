import React, { useState } from "react";
import Modal from "../../../components/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  companyId: yup.string().required("Company Id is required"),
  vehicleDate: yup.string().required("Vehicle Date is required"),
  vehicleNo: yup.string().required("Vehicle No is required"),
  location: yup.string().required("Location is required"),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .required("Amount is required"),
  itc: yup.string().required("ITC selection is required"),
  documentYear: yup.string().required("Document Year is required"),
  referenceNo: yup.string().required("Reference No is required"),
  itemGroup: yup.string().required("Item Group is required"),
  gstType: yup.string().required("GST Type is required"),
});

const SelectField = ({ label, name, register, errors, options }) => (
  <div className="grid grid-cols-8 items-center gap-4">
    <label className="col-span-3 text-sm font-medium">{label}</label>
    <select
      {...register(name)}
      className={`col-span-5 border border-input-bordergrey rounded-lg outline-none py-2 px-4 text-sm ${
        errors[name] ? "border-red-500" : ""
      }`}
    >
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {errors[name] && (
      <p className="text-red-500 text-xs col-span-8 text-end">
        {errors[name].message}
      </p>
    )}
  </div>
);

const InputField = ({
  label,
  name,
  register,
  errors,
  placeholder,
  type = "text",
}) => (
  <div className="grid grid-cols-8 items-center gap-4">
    <label className="col-span-3 text-sm font-medium">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className={`col-span-5 border border-input-bordergrey rounded-lg outline-none py-2 w-64 px-3 placeholder:text-start placeholder:text-xs placeholder:font-light placeholder-black ${
        errors[name] ? "border-red-500" : ""
      }`}
    />
    {errors[name] && (
      <p className="text-red-500 text-xs col-span-8 text-end">
        {errors[name].message}
      </p>
    )}
  </div>
);

const AddEntry = ({ onclose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onclose();
  };

  return (
    <Modal
      title="Add Expenses"
      onclose={onclose}
      child={
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-c gap-4 px-6 py-6 ">
            <InputField
              label="Company Id"
              name="companyId"
              register={register}
              errors={errors}
              placeholder="Enter Company Id"
            />
            <InputField
              label="Vehicle Date"
              name="vehicleDate"
              register={register}
              errors={errors}
              type="date"
            />
            <InputField
              label="Vehicle No"
              name="vehicleNo"
              register={register}
              errors={errors}
              placeholder="Enter Vehicle No"
            />
            <SelectField
              label="Location"
              name="location"
              register={register}
              errors={errors}
              options={["Chennai", "Mumbai", "Delhi", "Other"]}
            />
            <InputField
              label="Amount"
              name="amount"
              register={register}
              errors={errors}
              type="number"
              placeholder="Enter Amount"
            />
            <SelectField
              label="ITC"
              name="itc"
              register={register}
              errors={errors}
              options={["Yes", "No"]}
            />
            <InputField
              label="Document Year"
              name="documentYear"
              register={register}
              errors={errors}
              placeholder="Enter Document Year"
              type="number"
            />
            <InputField
              label="Reference No"
              name="referenceNo"
              register={register}
              errors={errors}
              placeholder="Enter Reference No"
            />
            <InputField
              label="Item Group"
              name="itemGroup"
              register={register}
              errors={errors}
              placeholder="Enter Item Group"
            />
            <InputField
              label="GST Type"
              name="gstType"
              register={register}
              errors={errors}
              placeholder="Enter GST Type"
            />
          </div>
          <div className="mx-5 text-xs flex lg:justify-end md:justify-center justify-center gap-2 mb-4">
            <button
              type="button"
              onClick={onclose}
              className="cursor-pointer border border-darkest-blue text-darkest-blue px-6 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="cursor-pointer px-6 bg-darkest-blue text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      }
    />
  );
};

export default AddEntry;
