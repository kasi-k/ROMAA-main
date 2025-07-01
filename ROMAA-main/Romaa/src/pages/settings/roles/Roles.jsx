import React, { useState } from "react";
import Filters from "../../../components/Filters";
import Table from "../../../components/Table";
import { RoleData } from "../../../components/Data";
import { RiUserAddLine } from "react-icons/ri";
import DeleteRoles from "./DeleteRoles";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../../components/DeleteModal";

const RoleColumns = [
  { label: "Name", key: "name" },
  { label: "Role", key: "role" },
  { label: "Created By", key: "createdBy" },
];

const Roles = () => {
  const navigate = useNavigate();
  const [deleteRoles, setDeleteRoles] = useState(false);

  return (
    <div>
      <Table
        title="Settings"
        subtitle="Roles "
        pagetitle="Roles"
        endpoint={RoleData}
        columns={RoleColumns}
        AddModal={true}
        addroutepoint={"addroles"}
        EditModal={true}
        editroutepoint={"editroles"}
        DeleteModal={DeleteModal}
        deletetitle="role"
        FilterModal={Filters}
        addButtonLabel="Add Roles"
        addButtonIcon={<RiUserAddLine size={23} />}
      />
      {deleteRoles && <DeleteRoles onclose={() => setDeleteRoles(false)} />}
    </div>
  );
};

export default Roles;
