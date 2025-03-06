import { useEffect, useState } from "react";
import PropertySearchForm from "../components/propertyDetails/PropertySearchForm ";
import PropertyCard from "../components/shared/PropertyCard";
import ThemeProvider from "../context/ThemeProvider";
import { getAllInquiries } from "../network/fetchApiInquirity";


const propertyImages = [
  {
    imgSrc:
      "https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt:
      "Log house surrounded by threes, possibly in the middle of a forest, there is plants and bushed and leafs on the ground.",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/577697/pexels-photo-577697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt:
      "Log house surrounded by threes, possibly in the middle of a forest, there is plants and bushed and leafs on the ground.",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/950058/pexels-photo-950058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt:
      "Log house surrounded by threes, possibly in the middle of a forest, there is plants and bushed and leafs on the ground.",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/1144694/pexels-photo-1144694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt:
      "Wodden cabin in the middle of a garden surrounded by trees and bushes.",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/2380247/pexels-photo-2380247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt:
      "Inside view of a log house showing a window, branches outside, curtains, an old sofa chair and a lamp on top of a small furniture.",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt:
      "Log house surrounded by threes, possibly in the middle of a forest, there is plants and bushed and leafs on the ground.",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/577697/pexels-photo-577697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt:
      "Log house surrounded by threes, possibly in the middle of a forest, there is plants and bushed and leafs on the ground.",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/950058/pexels-photo-950058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt:
      "Log house surrounded by threes, possibly in the middle of a forest, there is plants and bushed and leafs on the ground.",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/1144694/pexels-photo-1144694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt:
      "Wodden cabin in the middle of a garden surrounded by trees and bushes.",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/2380247/pexels-photo-2380247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt:
      "Inside view of a log house showing a window, branches outside, curtains, an old sofa chair and a lamp on top of a small furniture.",
  },
];

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
      <div className="bg-white dark:bg-primary dark:text-white transition-colors duration-500 ease-in-out">
        <PropertySearchForm />
        <div className="py-10 px-10 md:px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-8">
          {allProperties.map((property, index) => (
            <PropertyCard
              key={index}
              imgSrc={property.imageUrl}
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