import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "../../../components/Modal";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  role: yup.string().required("Role is required"),
  department: yup.string().required("Department is required"),
  Site_Assigned: yup.string().required("Site Assigned is required"),
});

const SelectField = ({ label, name, register, errors, options }) => (
  <div className="grid grid-cols-8 items-center gap-4">
    <label className="col-span-3 text-sm font-medium">{label}</label>
    <select
      {...register(name)}
      className={`col-span-5 border border-input-bordergrey rounded-lg outline-none py-2 px-4 text-sm
        ${errors[name] ? "border-red-500" : ""}`}
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
      className={`col-span-5 border border-input-bordergrey rounded-lg outline-none  py-2 w-64 px-2  placeholder:text-start  placeholder:text-xs placeholder:font-light placeholder-black
        ${errors[name] ? "border-red-500" : ""}`}
    />
    {errors[name] && (
      <p className="text-red-500 text-xs col-span-8 text-end">
        {errors[name].message}
      </p>
    )}
  </div>
);

const AddNMR = ({ onclose }) => {
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
    <div>
      <Modal
        onclose={onclose}
        title="Add NMR "
        child={
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-c gap-4 px-6 py-6">
                <div className="space-y-4">
                  <InputField
                    label="Name"
                    name="name"
                    register={register}
                    errors={errors}
                    placeholder="Enter employee name"
                  />

                  <SelectField
                    label="Role"
                    name="role"
                    register={register}
                    errors={errors}
                    options={["Engineer", "Manager", "Technician"]}
                  />

                  <SelectField
                    label="Department"
                    name="department"
                    register={register}
                    errors={errors}
                    options={["Civil", "IT", "Mechanical"]}
                  />
                  <InputField
                    label="Site Assigned"
                    name="Site_Assigned"
                    register={register}
                    errors={errors}
                    placeholder="Enter  name"
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
          </>
        }
      />
    </div>
  );
};

export default AddNMR;
