import PropertySearchForm from "../components/propertyDetails/PropertySearchForm ";
import PropertyCard from "../components/shared/PropertyCard";
import ThemeProvider from '../context/ThemeProvider';



const propertyImages = [
  {
    imgSrc: "https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt: "Log house surrounded by threes, possibly in the middle of a forest, there is plants and bushed and leafs on the ground."
  },
  {
    imgSrc: "https://images.pexels.com/photos/577697/pexels-photo-577697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt: "Log house surrounded by threes, possibly in the middle of a forest, there is plants and bushed and leafs on the ground."
  },
  {
    imgSrc: "https://images.pexels.com/photos/950058/pexels-photo-950058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt: "Log house surrounded by threes, possibly in the middle of a forest, there is plants and bushed and leafs on the ground."
  },
  {
    imgSrc: "https://images.pexels.com/photos/1144694/pexels-photo-1144694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt: "Wodden cabin in the middle of a garden surrounded by trees and bushes."
  },
  {
    imgSrc: "https://images.pexels.com/photos/2380247/pexels-photo-2380247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt: "Inside view of a log house showing a window, branches outside, curtains, an old sofa chair and a lamp on top of a small furniture."

  },
  {
    imgSrc: "https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt: "Log house surrounded by threes, possibly in the middle of a forest, there is plants and bushed and leafs on the ground."
  },
  {
    imgSrc: "https://images.pexels.com/photos/577697/pexels-photo-577697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt: "Log house surrounded by threes, possibly in the middle of a forest, there is plants and bushed and leafs on the ground."
  },
  {
    imgSrc: "https://images.pexels.com/photos/950058/pexels-photo-950058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt: "Log house surrounded by threes, possibly in the middle of a forest, there is plants and bushed and leafs on the ground."
  },
  {
    imgSrc: "https://images.pexels.com/photos/1144694/pexels-photo-1144694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt: "Wodden cabin in the middle of a garden surrounded by trees and bushes."
  },
  {
    imgSrc: "https://images.pexels.com/photos/2380247/pexels-photo-2380247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imgAlt: "Inside view of a log house showing a window, branches outside, curtains, an old sofa chair and a lamp on top of a small furniture."

  }  
];


const ListOfProperties = () => {
  return (

   
    <ThemeProvider>
      <div className=" bg-white dark:bg-primary dark:text-white transition-colors duration-500 ease-in-out">
        <PropertySearchForm/>
        
        <div className=" py-10 px-10 md:px-28 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid lg:grid-cols-4 gap-x-16 gap-y-8">
          {propertyImages.map((image, index) => (
            <PropertyCard key={index} imgSrc={image.imgSrc}/>
          ))}
        </div>
        
      </div>
    </ThemeProvider>    
  )
}

export default ListOfProperties