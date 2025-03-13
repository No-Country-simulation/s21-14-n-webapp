import { useEffect, useState } from "react";
import PropertyCard from "../components/shared/PropertyCard";
import ThemeProvider from "../context/ThemeProvider";
import { getAllInquiries } from "../network/fetchApiInquirity";


const ListOfProperties = () => {
  const [allProperties, setAllProperties] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllInquiries();
        if (!data) {
          setAllProperties([]);
          return;
        }
        setAllProperties(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-white  dark:bg-primary dark:text-white transition-colors duration-500 ease-in-out">
        <div className="py-10 px-10 min-h-screen md:px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-8">
          {allProperties.map((property, index) => (
            <PropertyCard
              key={index}
              imgSrc={property.imagePrincipal}
              title={property.title}
              price={property.price}
              address={property.address}
            />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ListOfProperties;