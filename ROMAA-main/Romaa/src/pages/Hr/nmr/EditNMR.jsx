import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ButtonBg from "../../../components/Button";
import Title from "../../../components/Title";
import { Save } from "lucide-react";
import { AiOutlineFileAdd } from "react-icons/ai";

const InputField = ({
  label,
  name,
  register,
  errors,
  placeholder,
  type = "text",
}) => (
  <div className="sm:grid grid-cols-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
    <label className="col-span-3 text-sm font-medium">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className={`col-span-5 border border-input-bordergrey rounded-lg outline-none  py-2 w-full px-2  placeholder:text-start  placeholder:text-xs placeholder:font-light placeholder-black
        ${errors[name] ? "border-red-500" : ""}`}
    />
    {errors[name] && (
      <p className="text-red-500 text-xs col-span-8 text-end">
        {errors[name].message}
      </p>
    )}
  </div>
);

const SelectField = ({ label, name, register, errors, options }) => (
  <div className="sm:grid grid-cols-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
    <label className="col-span-3 text-sm font-medium">{label}</label>
    <select
      {...register(name)}
      className={`col-span-5 border border-input-bordergrey rounded-lg w-full outline-none py-2 px-4 text-sm
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

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  role: yup.string().required("Role is required"),
  department: yup.string().required("Department is required"),
  siteAssigned: yup.string().required("Site Assigned is required"),
});

const EditNMR = () => {
  const { state } = useLocation();
  const employee = state?.item;
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: employee?.name || "",
      role: employee?.role || "",
      department: employee?.dept || "",
      siteAssigned: employee?.siteassign || "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Updated Employee Data:", data);
  };

  if (!employee) {
    return <div className="p-4 text-red-600">No employee data found.</div>;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="sm:my-2 flex sm:items-center flex-col sm:flex-row items-start sm:justify-between space-y-1.5 my-4">
          <Title
            title="HR Management"
            sub_title="NMR"
            page_title="Edit NMR"
          />
          <ButtonBg
           onClick={()=>navigate('/hr/nmr')}
          type={"submit"}
            button_name="Save"
            button_icon={<Save size={16} />}
           
          />
        </div>
        <div className="bg-white w-full grid grid-cols-1 gap-y-4 rounded-md px-4 py-6 ">
          <div className="col-span-2 flex justify-center items-center mb-4">
            <p className="text-xl font-semibold">Edit NMR</p>
          </div>
          <div className=" space-y-4">
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
              name="siteAssigned"
              register={register}
              errors={errors}
              placeholder="Enter site assigned"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default EditNMR;
