import { useState } from 'react';
import SocialIcons from '../components/PropertyDetails/SocialIcons';
import GalleryItem from '../components/shared/GalleryItem';
import AccordionItem from '../components/shared/AccordionItem';
import PropertyFeatures from '../components/PropertyDetails/PropertyFeatures';
import PropertyInquiryForm from '../components/PropertyDetails/PropertyInquiryForm';
import PropertyDetails from '../components/PropertyDetails/PropertyDetails';
import ThemeProvider from '../components/shared/dark-theme/ThemeProvider';
import ThemeSelect from '../components/shared/dark-theme/ThemeSelect';


const mainImage = [
  {
    imgSrc: "https://media-cdn.tripadvisor.com/media/photo-s/18/43/ad/61/nieve-en-cabanas-huitan.jpg",
    imgAlt: "Log house covered in snow next to a lake surrounded by snowy mountains."
  }
];

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

  } 
];


const socialIcons = [
  {
    svg: (
      
      <svg className= "-mt-[1px] h-8 w-8 fill-text-color bg-bg-color rounded-full " xmlns="http://www.w3.org/2000/svg" viewBox="-143 145 512 512" ><path d="M113 145c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256zm56.5 212.6-2.9 38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3.3-28.8 8.5-39.7 8.7-11.5 20.6-19.3 41.1-19.3 33.4 0 47.4 4.8 47.4 4.8l-6.6 39.2s-11-3.2-21.3-3.2-19.5 3.7-19.5 14v29.9h42.2z"/></svg>
    ),
    link: "https://www.facebook.com",
  },
  {
    svg: (
      <svg className="h-8 w-8 fill-bg-color bg-text-color p-2 rounded-full" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.656 1.029c1.637-.025 3.262-.012 4.886-.025a7.762 7.762 0 0 0 2.189 5.213l-.002-.002A8.77 8.77 0 0 0 29 8.45l.028.002v5.036a13.327 13.327 0 0 1-5.331-1.247l.082.034a15.385 15.385 0 0 1-2.077-1.196l.052.034c-.012 3.649.012 7.298-.025 10.934a9.513 9.513 0 0 1-1.707 4.954l.02-.031c-1.652 2.366-4.328 3.919-7.371 4.011h-.014a9.071 9.071 0 0 1-5.139-1.31l.04.023C5.05 28.185 3.32 25.603 3 22.6l-.004-.041a23.163 23.163 0 0 1-.012-1.862c.49-4.779 4.494-8.476 9.361-8.476.547 0 1.083.047 1.604.136l-.056-.008c.025 1.849-.05 3.699-.05 5.548a4.29 4.29 0 0 0-5.465 2.619l-.009.03c-.133.427-.21.918-.21 1.426 0 .206.013.41.037.61l-.002-.024a4.26 4.26 0 0 0 4.382 3.586h-.009a4.198 4.198 0 0 0 3.451-1.994l.01-.018c.267-.372.45-.822.511-1.311l.001-.014c.125-2.237.075-4.461.087-6.698.012-5.036-.012-10.06.025-15.083z" />
      </svg>
    ),
    link: "https://www.twitter.com",
  },
  {
    svg: (
      <svg className="h-8 w-8 fill-bg-color bg-text-color dark:fill-bg-color dark:bg-text-color p-2 rounded-full " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /><path d="M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" /><path fillRule="evenodd" clipRule="evenodd" d="M1.654 4.276C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C5.56 23 7.24 23 10.6 23h2.8c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C23 18.44 23 16.76 23 13.4v-2.8c0-3.36 0-5.04-.654-6.324a6 6 0 0 0-2.622-2.622C18.44 1 16.76 1 13.4 1h-2.8c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622ZM13.4 3h-2.8c-1.713 0-2.878.002-3.778.075-.877.072-1.325.202-1.638.361a4 4 0 0 0-1.748 1.748c-.16.313-.29.761-.36 1.638C3.001 7.722 3 8.887 3 10.6v2.8c0 1.713.002 2.878.075 3.778.072.877.202 1.325.361 1.638a4 4 0 0 0 1.748 1.748c.313.16.761.29 1.638.36.9.074 2.065.076 3.778.076h2.8c1.713 0 2.878-.002 3.778-.075.877-.072 1.325-.202 1.638-.361a4 4 0 0 0 1.748-1.748c.16-.313.29-.761.36-1.638.074-.9.076-2.065.076-3.778v-2.8c0-1.713-.002-2.878-.075-3.778-.072-.877-.202-1.325-.361-1.638a4 4 0 0 0-1.748-1.748c-.313-.16-.761-.29-1.638-.36C16.278 3.001 15.113 3 13.4 3Z"/></svg>
    ),
    link: "https://www.instagram.com",
  },
  {
    svg: (
      <svg className="h-8 w-8  fill-bg-color bg-text-color p-2 rounded-full "  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.014 8.006c.114-.904 1.289-2.132 2.22-1.996V6.01c.907.172 1.625 1.734 2.03 2.436.286.509.1 1.025-.167 1.243-.361.29-.926.692-.808 1.095C9.5 11.5 12 14 13.23 14.711c.466.269.804-.44 1.092-.804.21-.28.726-.447 1.234-.171.759.442 1.474.956 2.135 1.534.33.276.408.684.179 1.115-.403.76-1.569 1.76-2.415 1.557C13.976 17.587 8 15.27 6.08 8.558c-.108-.318-.08-.438-.066-.552Z" /><path fillRule="evenodd" clipRule="evenodd" d="M12 23c-1.224 0-1.9-.131-3-.5l-2.106 1.053A2 2 0 0 1 4 21.763V19.5c-2.153-2.008-3-4.323-3-7.5C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm-6-4.37-.636-.593C3.691 16.477 3 14.733 3 12a9 9 0 1 1 9 9c-.986 0-1.448-.089-2.364-.396l-.788-.264L6 21.764V18.63Z"/></svg>
    ),
    link: "https://www.twitter.com",
  },
]

const features = [
  {
    title: "Servicios generales",
    items: [
      "Aparcamiento gratuito",
      "Internet de alta velocidad (WiFi) gratuito",
      "Desayuno gratuito",
      "Seguridad 24 horas",
    ],
  },
  {
    title: "Características de la habitación",
    items: [
      "Cortinas opacas",
      "Servicio de limpieza",
      "Servicio de habitaciones",
      "TV por cable / satélite",
      "Caja fuerte",
    ],
  },
];

const propertySchema = {
  estadoRegion: String,
  operacion: String,
  ubicacion: String,
  tipo: String,
  codigo: String,
  
};


const propertyData = {
  estadoRegion: "Córdoba",
  operacion: "Alquileres anuales",
  ubicacion: "Córdoba",
  tipo: "Departamento/Dúplex",
  codigo: "A126",
  costo: 4800000
};



const PropertyPage = () => 
{
  const [showFeatures, setShowFeatures] = useState(true);
  const [showDescription, setShowDescription] = useState(true);

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-bg-color dark:text-white transition-colors duration-500 ease-in-out">
        <ThemeSelect displayType='toggle'/>
        <a href="" className="fixed bottom-20 right-10 bg-emerald-400 h-12 w-12  rounded-full flex items-center justify-center
        dark:bg-neutral-400 dark:hover:bg-emerald-500 transition-all duration-300
        " target="_blank">
          <svg className="h-6 w-6 fill-current text-white"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.014 8.006c.114-.904 1.289-2.132 2.22-1.996V6.01c.907.172 1.625 1.734 2.03 2.436.286.509.1 1.025-.167 1.243-.361.29-.926.692-.808 1.095C9.5 11.5 12 14 13.23 14.711c.466.269.804-.44 1.092-.804.21-.28.726-.447 1.234-.171.759.442 1.474.956 2.135 1.534.33.276.408.684.179 1.115-.403.76-1.569 1.76-2.415 1.557C13.976 17.587 8 15.27 6.08 8.558c-.108-.318-.08-.438-.066-.552Z" /><path fillRule="evenodd" clipRule="evenodd" d="M12 23c-1.224 0-1.9-.131-3-.5l-2.106 1.053A2 2 0 0 1 4 21.763V19.5c-2.153-2.008-3-4.323-3-7.5C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm-6-4.37-.636-.593C3.691 16.477 3 14.733 3 12a9 9 0 1 1 9 9c-.986 0-1.448-.089-2.364-.396l-.788-.264L6 21.764V18.63Z"/></svg>
        </a>
      <h1 className="mt-28 text-center text-xl md:text-3xl font-light text-text-color">CABAÑA TIERRA VIVA CERCA AL LAGO EN ALQUILER</h1>
      <main className=" flex flex-col md:flex-row mt-8 px-0 sm:px-16">
             
        <section className="basis-2/4 p-2 sm:p-8 ">
          <GalleryItem width={"w-full"} height={"h-full"} imageSrc={mainImage.at(0).imgSrc} imgAlt={mainImage.at(0).imgAlt}/>
          <AccordionItem
            title={"Características"}
            isOpen={showFeatures}
            onToggle={() => setShowFeatures(!showFeatures)}
            >
            <PropertyFeatures features={features}/>
          </AccordionItem>
        </section> 

        <section className="basis-2/4 p-8 ">
          <PropertyDetails details={propertyData} children={<SocialIcons icons={socialIcons}/>} />         

          <AccordionItem
            title={"Descripción"}
            isOpen={showDescription}
            onToggle={() => setShowDescription(!showDescription)}
            >
            <div className="p-4 space-y-4 text-md">
              <p>CABAÑAS TIERRA VIVA CERCA AL LAGO DESDE MARZO 2025 A DICIEMBRE 2025</p>
              <p>Ubicadas en Villa del Lago, a solo 5 minutos de la ciudad de Carlos Paz en auto, com vista impresionante al lago, nuestras cabañas ofrecen:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Pileta de uso común y espacio común con asadores.</li>
                <li>Cochera con media sombra para tu comodidad.</li>
                <li>Amobladas con aire condicionado.</li>
              </ul>
              <div className="space-y-2">
                <p>Alquiler por mes: $480.000 + servicios</p>
                <p>Ajuste trimestral proporcional al índice de alquiler</p>
                <p>Garantías: recibos de sueldos APTOS</p>
                <p>No se aceptan mascotas</p>
              </div>
            </div>
          </AccordionItem>
        </section>
      </main>

      <div className=" py-10 px-4 sm:px-28 grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
          {propertyImages.map((image, index) => (
            <GalleryItem key={index} imageSrc={image.imgSrc} imgAlt={image.imgAlt}/>
          ))}
      </div>

      <PropertyInquiryForm/>

      <button type='button' className='w-full flex justify-end '>
        <a href="/" className='w-3/12 sm:w-1/12 mx-8 my-8 flex items-center gap-1 bg-text-color p-2 rounded-md cursor-pointer text-white text-center' >
          <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 fill-current" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.707 4.293a1 1 0 0 1 0 1.414L6.414 11H20a1 1 0 1 1 0 2H6.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z"/></svg>
          <span>Regresar</span>
        </a>
      </button> 
    
    
      </div>
    </ThemeProvider>
    
  )
}

export default PropertyPage