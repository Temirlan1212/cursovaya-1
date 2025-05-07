import EditApartmentForm from "../../(components)/EditApartmentForm";

const getApartmentById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Apartments/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

let updateApartmentData = {};
const ApartmentPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateApartmentData = await getApartmentById(params.id);
    updateApartmentData = updateApartmentData.foundApartment;
  } else {
    updateApartmentData = {
      _id: "new",
    };
  }

  return <EditApartmentForm apartment={updateApartmentData} />;
};

export default ApartmentPage;
