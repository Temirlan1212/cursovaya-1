"use client";
import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import DeleteBlock from "./DeleteBlock";
import ProgressDisplay from "./ProgressDisplay";
import Link from "next/link";

const ApartmentCard = ({ apartment }) => {
  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }

  const createdDateTime = formatTimestamp(apartment.createdAt);

  return (
    <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay rooms={apartment.rooms} />
        <div className="ml-auto">
          <DeleteBlock id={apartment._id} />
        </div>
      </div>
      <Link
        href={`/ApartmentPage/${apartment._id}`}
        style={{ display: "contents" }}
      >
        <h4 className="mb-1">{apartment.title}</h4>
        <p className="mb-1">{apartment.price}</p>
        <hr className="h-px border-0 bg-page mb-2 "></hr>
        <p className="truncate">{apartment.description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs  my-1">{createdDateTime}</p>
            <ProgressDisplay progress={apartment.progress} />
          </div>
          <div className="ml-auto  flex items-end">
            <StatusDisplay status={apartment.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ApartmentCard;
