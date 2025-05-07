import { faHome, faApartment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/ApartmentPage/new">
          <FontAwesomeIcon icon={faApartment} className="icon" />
        </Link>
      </div>
      <div>
        <Link href="/ApartmentPage/new">
          <button className="text-[white] bg-blue-accent-hover hover:bg-blue-accent px-2 py-1 transition-all rounded-full">
            Создать новую квартиру
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
