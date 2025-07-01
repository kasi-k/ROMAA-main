

const SummaryCard = ({ title, value, status,icon }) => (
  <div className="bg-white  rounded-xl p-4  w-full">
    <div className="border-l-4 px-4 border-[#81B3B8] rounded  flex justify-evenly items-center gap-6 whitespace-nowrap">
        <div className="space-y-2">
    <p className="text-xs text-green-800">{status}</p>
    <h2 className="font-semibold">{value}</h2>
</div>
<div className="bg-[#DBE9FF] px-2 py-2 rounded-lg text-[#2A848D]">
{icon}
</div>
    </div>
        <p className="text-xs text-gray-700 mt-4">{title}</p>
  </div>
);
export default SummaryCard