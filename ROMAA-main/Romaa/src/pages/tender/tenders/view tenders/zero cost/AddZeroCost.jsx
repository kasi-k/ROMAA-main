import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoClose } from "react-icons/io5";
import axios from "axios";

const schema = yup.object().shape({
  description: yup.string().required("Item description is required"),
  unit: yup.string().required("Unit is required"),
  quantity: yup
    .number()
    .typeError("Quantity must be a number")
    .required("Quantity is required")
    .positive("Quantity must be greater than 0"),
  baserate: yup
    .number()
    .typeError("Base rate must be a number")
    .required("Base rate is required")
    .min(0, "Base rate cannot be negative"),
  quotedrate: yup
    .number()
    .typeError("Quoted rate must be a number")
    .required("Quoted rate is required")
    .min(0, "Quoted rate cannot be negative"),
  worate: yup
    .number()
    .typeError("WO rate must be a number")
    .required("WO rate is required")
    .min(0, "WO rate cannot be negative"),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .required("Amount is required")
    .min(0, "Amount cannot be negative"),
});

const InputField = ({
  label,
  name,
  register,
  errors,
  placeholder,
  type = "text",
}) => (
  <div className="grid grid-cols-11 items-center gap-4">
    <label className="col-span-5 text-sm font-medium">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className={`col-span-6 border border-input-bordergrey rounded-lg outline-none  py-2 px-2 placeholder:text-xs placeholder:font-light placeholder-black
        ${errors[name] ? "border-red-500" : ""}`}
    />
    {errors[name] && (
      <p className="text-red-500 text-xs col-span-11 text-end">
        {errors[name].message}
      </p>
    )}
  </div>
);

const AddZeroCost = ({ onclose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    onclose();
    console.log(data);
  };

  return (
    <div className="font-roboto-flex fixed inset-0 grid justify-center items-center backdrop-blur-xs backdrop-grayscale-50  drop-shadow-lg z-20">
      <div className="mx-2 shadow-lg py-2  bg-white  rounded-md w-[420px]">
        <div className="grid">
          <button
            onClick={onclose}
            className=" place-self-end   cursor-pointer bg-white  rounded-full lg:-mx-4 md:-mx-4 -mx-2 lg:-my-6 md:-my-5  -my-3 lg:shadow-md md:shadow-md shadow-none lg:py-2.5 md:py-2.5 py-0 lg:px-2.5 md:px-2.5 px-0 "
          >
            <IoClose className="size-[24px]" />
          </button>
          <h1 className="text-center font-medium text-2xl py-2">
            Add Zero Cost
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid  px-6 py-6">
              <div className="space-y-4">
                <InputField
                  label="Item Description"
                  name="description"
                  register={register}
                  errors={errors}
                  placeholder="Enter item description"
                />
                <InputField
                  label="Unit"
                  name="unit"
                  register={register}
                  errors={errors}
                  placeholder="Enter unit"
                />
                <InputField
                  label="Quantity"
                  name="quantity"
                  register={register}
                  errors={errors}
                  placeholder="Enter quantity"
                />
                <InputField
                  label="Base rate"
                  name="baserate"
                  register={register}
                  errors={errors}
                  placeholder="Enter base rate"
                />
                <InputField
                  label="Quoted Rate"
                  name="quotedrate"
                  type="number"
                  register={register}
                  errors={errors}
                  placeholder="Enter quoted rate"
                />
                <InputField
                  label="WO Rate"
                  name="worate"
                  type="text"
                  register={register}
                  errors={errors}
                  placeholder="Enter wo rate"
                />
                <InputField
                  label="Amount"
                  name="amount"
                  type="text"
                  register={register}
                  errors={errors}
                  placeholder="Enter amount"
                />
              </div>
            </div>
            <div className="mx-5 text-xs flex lg:justify-end md:justify-center justify-center gap-2 mb-4">
              <button
                type="button"
                onClick={onclose}
                className="cursor-pointer  border  border-darkest-blue  text-darkest-blue px-6 py-2   rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="cursor-pointer px-6 bg-darkest-blue text-white  rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddZeroCost;
