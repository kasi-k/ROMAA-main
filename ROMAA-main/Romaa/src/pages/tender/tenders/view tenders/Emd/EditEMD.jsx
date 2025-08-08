import React, { useState, useEffect } from "react";

const EditEMD = ({ item, onclose, onSave }) => {
  const [formData, setFormData] = useState({ level: "", status: "" });

  useEffect(() => {
    if (item) {
      setFormData({
        level: item.level || "",
        status: item.status || "",
      });
    }
  }, [item]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    onSave({ ...item, ...formData }); // merge updates into item
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-layout-dark p-6 rounded-lg w-[400px]">
        <h2 className="text-lg font-semibold mb-4">Edit EMD</h2>

        <div className="mb-4">
          <label className="block mb-1">Level</label>
          <input
            type="text"
            value={formData.level}
            onChange={(e) => handleChange("level", e.target.value)}
            className="w-full border rounded px-2 py-1"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Status</label>
          <input
            type="text"
            value={formData.status}
            onChange={(e) => handleChange("status", e.target.value)}
            className="w-full border rounded px-2 py-1"
          />
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={onclose} className="px-4 py-1 border rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-1 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEMD;
