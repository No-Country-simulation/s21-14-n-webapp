import PropertyCard from "../components/shared/PropertyCard";
import ThemeProvider from '../components/shared/dark-theme/ThemeProvider';
import ThemeSelect from '../components/shared/dark-theme/ThemeSelect';


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
        <ThemeSelect/>
        <h1 className="text-4xl font-semibold text-center text-secundary">Propiedades</h1>
        <form action="" className="mt-8 px-10 md:px-28 flex flex-col lg:flex-row justify-center items-center md:justify-between gap-6">
          <div className="flex items-center gap-2 ">
            <label htmlFor="code">Busqueda por código</label>
            <input type="text" name="code" id="code" className="p-1 px-2 bg-white border border-black rounded-sm dark:text-black" placeholder="Código"/>
          </div>

          <div className="flex items-center gap-2">
          <label htmlFor="filter">Ordernar por:</label>
            <select name="filter" id="filter" className="p-1 px-2 bg-white border border-black rounded-sm dark:text-black">
              <option value="price">Precio</option>
              <option value="dimensions">Dimensiones</option>
              <option value="type">Tipo</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
          <label htmlFor="category">Categoría:</label>
            <select name="category" id="category" className="p-1 px-2 bg-white border border-black rounded-sm dark:text-black">
            <optgroup label="Tipo de Propiedad">
                <option value="house">Casas</option>
                <option value="apartment">Departamentos</option>
                <option value="cabin">Cabañas</option>
            </optgroup>
            <optgroup label="Características">
                <option value="bedrooms">Dormitorios</option>
                <option value="bathrooms">Baños</option>
                <option value="size">Tamaño</option>
            </optgroup>
            <optgroup label="Otros">
                <option value="price_range">Rango de Precio</option>
                <option value="location">Ubicación</option>
            </optgroup>
            </select>
          </div>
        </form>


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