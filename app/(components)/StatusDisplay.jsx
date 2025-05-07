"use client";
const StatusDisplay = ({ status }) => {
  if (!status) return null;
  const getColor = (status) => {
    let color;
    switch (status.toLowerCase()) {
      case "активен":
        color = "bg-green-200";
        return color;

      case "приостановлен":
        color = "bg-yellow-200";
        return color;

      case "продан":
        color = "bg-red-200";
        return color;
      default:
        color = "bg-slate-700";
    }
    return color;
  };
  return (
    <span
      className={`inline-block  rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
