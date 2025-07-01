import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import SummaryCard from "../SummaryCard";
import Title from "../../../components/Title";
import Button from "../../../components/Button";
import { TbCalendarDue } from "react-icons/tb";
import { LuClipboardList } from "react-icons/lu";
import Schedule from "./TodaySchedule";
import WorkSchedule from "./WorkSchedule";

const summaryData = [
  { title: "Verified", subtitle: "My Profile Status" },
  { title: "5h 20m", subtitle: "Today's Hours" },
  { title: "96%", subtitle: "Attendance This Month" },
  { title: "3", subtitle: "Tasks Due" },
  { title: "88%", subtitle: "Performance Score" },
  { title: "5", subtitle: "Appreciations" },
];

const todaySchedule = [
  { desc: "Retaining Wall", qty: 23, unit: "M3" },
  { desc: "Road Work", qty: 12, unit: "M3" },
  { desc: "New Intent", qty: 22, unit: "M3" },
];

const weeklySchedule = [
  { desc: "Retaining Wall", qty: 23, Mon: 2, Tue: 2, Wed: 2, Thu: 2, Fri: 2 },
  { desc: "Road Work", qty: 22, Mon: 2, Tue: 2, Wed: 2, Thu: 2, Fri: 2 },
  { desc: "New Intent", qty: 23, Mon: 2, Tue: 2, Wed: 2, Thu: 2, Fri: 2 },
];

const materials = [
  { name: "Cement", qty: 500, unit: "Bags", status: "Approved" },
  { name: "Cement", qty: 500, unit: "Bags", status: "Approved" },
  { name: "Cement", qty: 500, unit: "Bags", status: "Approved" },
];

const requests = Array(5).fill({
  id: "MRQ-001",
  machine: "CAT 320 Excavator",
  location: "Tower A Foundation",
  date: "1.07.2025",
  status: "Approved",
  remarks: "Waiting",
});

const datachart = [
  { name: "1", value: 30 },
  { name: "2", value: 40 },
  { name: "3", value: 80 },
  { name: "4", value: 60 },
  { name: "5", value: 70 },
  { name: "6", value: 90 },
  { name: "7", value: 100 },
];

const EmployeeDashboard = () => {
  return (
    <div className="h-full pb-16">
      <div className="flex justify-between items-center ">
        <Title
          title="Dashboard"
          sub_title="Main Dashboard"
          page_title="Main Dashboard"
        />
        <div className="flex gap-2 items-center">
          <Button
            onClick={() => navigate("viewcalendar")}
            button_name="Calendar"
            bgColor="bg-white"
            textColor="text-darkest-blue"
            button_icon={<TbCalendarDue size={23} />}
            paddingY="py-2.5"
          />
          <Button
            onClick={() => setViewWorkOrderModal(true)}
            button_name="Task Assigned"
            bgColor="bg-white"
            textColor="text-darkest-blue"
            button_icon={<LuClipboardList size={23} />}
            paddingY="py-2.5"
          />
        </div>
      </div>
      <div className="mt-4 space-y-4 overflow-y-auto h-full no-scrollbar">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          <SummaryCard
            title="My Profile Status"
            value="Verified"
            status="KYC is Complete"
          />
          <SummaryCard
            title="Today's working hours"
            value="5h 20m"
            status="Today's Hours"
          />
          <SummaryCard
            title="Overview"
            value="96%"
            status="Attendance This month"
          />
          <SummaryCard
            title="Task Remainder"
            value="3"
            status="Task Due"
          />
          <SummaryCard
            title="Score"
            value="88%"
            status="Perfomance Score"
          />
          <SummaryCard
            title="Count"
            value="5"
            status="Appreciations"
          />
        </div>

        {/* Schedule + Material */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Schedule */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
      <Schedule/>

       <WorkSchedule/>
          </div>

          {/* Material Request */}
          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="font-semibold mb-2">Material Request</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Unit</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((item, idx) => (
                  <tr key={idx} className="border-t">
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>{item.unit}</td>
                    <td className="text-green-600">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Machinery + Chart */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Machinery Table */}
          <div className="bg-white p-4 rounded-md shadow overflow-x-auto">
            <h3 className="font-semibold mb-2">Machinery Request Status</h3>
            <table className="w-full text-sm">
              <thead className="text-gray-500 text-left">
                <tr>
                  <th>S.no</th>
                  <th>Request ID</th>
                  <th>Machine</th>
                  <th>Site Location</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((r, i) => (
                  <tr key={i} className="border-t">
                    <td>{i + 1}</td>
                    <td>{r.id}</td>
                    <td>{r.machine}</td>
                    <td>{r.location}</td>
                    <td>{r.date}</td>
                    <td>{r.status}</td>
                    <td>{r.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="font-semibold mb-2">Current Project Status</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={datachart}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
