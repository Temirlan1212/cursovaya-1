import React from "react";
import ApartmentCard from "./(components)/ApartmentCard";
import EditApartmentForm from "./(components)/EditApartmentForm";

const getApartments = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/Apartments`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const Dashboard = async () => {
  const data = await getApartments();

  // Make sure we have apartments needed for production build.
  if (!data?.apartments.length) {
    return (
      <p>
        <EditApartmentForm apartment={{ _id: "new" }} />
      </p>
    );
  }

  const apartments = data.apartments;

  const uniqueCategories = [
    ...new Set(apartments?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {apartments &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
                {apartments
                  .filter((apartment) => apartment.category === uniqueCategory)
                  .map((filteredApartment, _index) => (
                    <ApartmentCard
                      id={_index}
                      key={_index}
                      apartment={filteredApartment}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
