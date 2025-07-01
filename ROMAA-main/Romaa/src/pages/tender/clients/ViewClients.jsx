import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import EditClients from "./EditClients";

const ViewClients = ({ onclose }) => {
    const [editModal,setEditModal] = useState(false)
      if (editModal) {
    return   <EditClients onclose={ () =>setEditModal(false)}/>;
  }
  return (
    <div className=" font-roboto-flex fixed inset-0 flex justify-center items-center backdrop-blur-xs backdrop-grayscale-50  drop-shadow-lg z-20">
      <div className="bg-white rounded-lg drop-shadow-md w-[420px] ">
        <p
          className="grid place-self-end cursor-pointer -mx-4 -my-4 bg-white shadow-sm  py-2.5 px-2.5 rounded-full "
          onClick={onclose}
        >
          <IoClose className="size-[20px]" />
        </p>

        <form className="grid grid-cols-12  justify-center items-center text-sm   gap-2 px-8 py-8">
          <p className=" pb-6 text-center font-semibold text-lg col-span-12">
            View Clients
          </p>

          <label className=" font-semibold col-span-7">Client ID</label>
          <p className="   text-sm font-light">#2345</p>
          <label className=" font-semibold col-span-7">Client Name</label>
          <p className=" text-sm font-light">Name</p>
          <label className=" font-semibold col-span-7">PAN no</label>
          <p className=" text-sm font-light">33ABCDE456789</p>
          <label className=" font-semibold col-span-7">CIN no</label>
          <p className=" text-sm font-light">33ABCDE456789</p>
          <label className=" font-semibold col-span-7">GSTIN</label>
          <p className=" text-sm font-light">33ABCDE456789</p>
          <label className=" font-semibold col-span-7">Phone number</label>
          <p className=" text-sm font-light">000000000</p>
          <label className=" font-semibold col-span-7">Email</label>
          <p className=" text-sm font-light">romaa@gmail.com</p>
          <label className=" font-semibold col-span-7">City</label>
          <p className=" text-sm font-light">Chennai</p>
          <label className=" font-semibold col-span-7">State</label>
          <p className=" text-sm font-light">Tamilnadu</p>
          <label className=" font-semibold col-span-7">Country</label>
          <p className=" text-sm font-light">India</p>
          <label className=" font-semibold col-span-7">Pincode</label>
          <p className=" text-sm font-light">6000096</p>
        </form>

        <div className="flex justify-end items-center gap-2 py-8 mx-6 text-sm font-extralight">
          <p
            className="cursor-pointer border border-black   px-6 py-1.5 rounded-sm"
            onClick={onclose}
          >
            Cancel
          </p>
             <p
            className="cursor-pointer bg-darkest-blue text-white   px-6 py-1.5 rounded-sm"
            onClick={()=>setEditModal(true)}
          >
            Edit
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default ViewClients;
