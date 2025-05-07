import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = ({ rooms }) => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        icon={faHouse}
        className={` pr-1 ${rooms > 0 ? " text-green-400" : " text-slate-400"}`}
      />
      <FontAwesomeIcon
        icon={faHouse}
        className={` pr-1 ${rooms > 1 ? " text-green-400" : " text-slate-400"}`}
      />
      <FontAwesomeIcon
        icon={faHouse}
        className={`  pr-1 ${
          rooms > 2 ? " text-green-400" : " text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faHouse}
        className={` pr-1 ${rooms > 3 ? " text-green-400" : " text-slate-400"}`}
      />
      <FontAwesomeIcon
        icon={faHouse}
        className={` ${rooms > 4 ? " text-green-400" : " text-slate-400"}`}
      />
    </div>
  );
};

export default PriorityDisplay;
