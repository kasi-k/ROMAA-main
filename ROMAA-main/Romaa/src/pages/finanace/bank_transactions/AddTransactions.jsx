import React from "react";
import Modal from "../../../components/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  date: yup.string().required("Date is required"),
  fromBank: yup.string().required("From Bank is required"),
  toBank: yup.string().required("To Bank is required"),
  amount: yup.number().required("Amount is required"),
  transactionNote: yup.string().required("Transaction note is required"),
  fromBalance: yup.string().required("From Balance is required"),
  toBalance: yup.string().required("To Balance is required"),
  transferredBy: yup.string().required("Transferred by is required"),
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

const AddTransactions = ({ onclose }) => {
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
        title="Add Transaction"
        onclose={onclose}
        child={
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-c gap-4 px-6 py-6">
                <div className="space-y-4">
                  <InputField
                    label="Date"
                    name="date"
                    register={register}
                    errors={errors}
                    type="date"
                  />
                  <SelectField
                    label="From Bank"
                    name="fromBank"
                    register={register}
                    errors={errors}
                    options={["Bank A", "Bank B", "Bank C"]}
                  />
                  <InputField
                    label="To Bank"
                    name="toBank"
                    register={register}
                    errors={errors}
                    placeholder="Enter bank name"
                  />
                  <InputField
                    label="Amount"
                    name="amount"
                    register={register}
                    errors={errors}
                    placeholder="Enter the amount"
                  />
                  <InputField
                    label="Transaction note"
                    name="transactionNote"
                    register={register}
                    errors={errors}
                    placeholder="Enter note"
                  />
                  <InputField
                    label="From Balance"
                    name="fromBalance"
                    register={register}
                    errors={errors}
                    placeholder="From Bank"
                  />
                  <InputField
                    label="To Balance"
                    name="toBalance"
                    register={register}
                    errors={errors}
                    placeholder="To Bank"
                  />
                  <InputField
                    label="Transferred by"
                    name="transferredBy"
                    register={register}
                    errors={errors}
                    placeholder="Transfer By"
                  />
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

export default AddTransactions;
