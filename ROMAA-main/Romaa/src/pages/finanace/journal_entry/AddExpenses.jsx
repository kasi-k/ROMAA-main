import React, { useState } from "react";
import Modal from "../../../components/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  expenseType: yup.string().required("Expense type is required"),
  personName: yup.string().required("Person name is required"),
  date: yup.string().required("Date is required"),
  fromAccount: yup.string().required("From account is required"),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .required("Amount is required"),
  gstpercentage: yup.string().when("showGST", {
    is: true,
    then: (schema) => schema.required("GST percentage is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  gstno: yup.string().when("showGST", {
    is: true,
    then: (schema) => schema.required("GST no is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  showGST: yup.boolean(), // track checkbox state
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
const AddExpenses = ({ onclose }) => {
  const [showGST, setShowGST] = useState(false);
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
    <>
      <Modal
        title="Add Expenses"
        onclose={onclose}
        child={
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-c gap-4 px-6 py-6 space-y-4">
                <SelectField
                  label="Expenses details"
                  name="expenseType"
                  register={register}
                  errors={errors}
                  options={["Travel", "Food", "Supplies", "Other"]}
                />
                <InputField
                  label="Person Name"
                  name="personName"
                  register={register}
                  errors={errors}
                  placeholder="Enter Name"
                />
                <InputField
                  label="Date"
                  name="date"
                  register={register}
                  errors={errors}
                  type="date"
                />
                <InputField
                  label="From Account"
                  name="fromAccount"
                  register={register}
                  errors={errors}
                  placeholder="From Bank"
                />
                <InputField
                  label="Amount"
                  name="amount"
                  register={register}
                  errors={errors}
                  type="number"
                  placeholder="Enter the amount"
                />
                <div className="max-w-md p-4">
                  <label className="flex items-center space-x-2 mb-4">
                    <input
                      type="checkbox"
                      checked={showGST}
                      onChange={() => {setShowGST(!showGST)
                      }}
                      className="form-checkbox"
                    />
                    <span>GST</span>
                  </label>

                  {showGST && (
                    <div className="space-y-4">
                      <div>
                        <InputField
                          label="GST Percentage"
                          name="gstpercentage"
                          register={register}
                          errors={errors}
                          type="text"
                          placeholder="Enter the GST Percentage"
                        />
                      </div>

                      <div>
                        <InputField
                          label="GST No"
                          name="gstno"
                          register={register}
                          errors={errors}
                          type="text"
                          placeholder="Enter the GST no"
                        />
                      </div>
                    </div>
                  )}
                </div>
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
          </>
        }
      />
    </>
  );
};

export default AddExpenses;
