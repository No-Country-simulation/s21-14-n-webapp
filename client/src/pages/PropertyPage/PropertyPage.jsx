import { useState } from 'react';
import './PropertyPage.css'
import SocialIcons from '../../components/SocialIcons';
import GalleryItem from '../../components/GalleryItem';
import AccordionItem from '../../components/AccordionItem';
import PropertyFeatures from '../../components/PropertyFeatures';
import PropertyInquiryForm from '../../components/PropertyInquiryForm';



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
  }
  
];


const socialIcons = [
  {
    svg: (
      <svg className="h-5.5 w-5.5 fill-current" viewBox="0 0 20 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
      </svg>
    ),
    link: "https://www.facebook.com",
  },
  {
    svg: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.656 1.029c1.637-.025 3.262-.012 4.886-.025a7.762 7.762 0 0 0 2.189 5.213l-.002-.002A8.77 8.77 0 0 0 29 8.45l.028.002v5.036a13.327 13.327 0 0 1-5.331-1.247l.082.034a15.385 15.385 0 0 1-2.077-1.196l.052.034c-.012 3.649.012 7.298-.025 10.934a9.513 9.513 0 0 1-1.707 4.954l.02-.031c-1.652 2.366-4.328 3.919-7.371 4.011h-.014a9.071 9.071 0 0 1-5.139-1.31l.04.023C5.05 28.185 3.32 25.603 3 22.6l-.004-.041a23.163 23.163 0 0 1-.012-1.862c.49-4.779 4.494-8.476 9.361-8.476.547 0 1.083.047 1.604.136l-.056-.008c.025 1.849-.05 3.699-.05 5.548a4.29 4.29 0 0 0-5.465 2.619l-.009.03c-.133.427-.21.918-.21 1.426 0 .206.013.41.037.61l-.002-.024a4.26 4.26 0 0 0 4.382 3.586h-.009a4.198 4.198 0 0 0 3.451-1.994l.01-.018c.267-.372.45-.822.511-1.311l.001-.014c.125-2.237.075-4.461.087-6.698.012-5.036-.012-10.06.025-15.083z" />
      </svg>
    ),
    link: "https://www.twitter.com",
  },
  {
    svg: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#0F0F0F"/><path d="M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" fill="#0F0F0F"/><path fillRule="evenodd" clipRule="evenodd" d="M1.654 4.276C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C5.56 23 7.24 23 10.6 23h2.8c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C23 18.44 23 16.76 23 13.4v-2.8c0-3.36 0-5.04-.654-6.324a6 6 0 0 0-2.622-2.622C18.44 1 16.76 1 13.4 1h-2.8c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622ZM13.4 3h-2.8c-1.713 0-2.878.002-3.778.075-.877.072-1.325.202-1.638.361a4 4 0 0 0-1.748 1.748c-.16.313-.29.761-.36 1.638C3.001 7.722 3 8.887 3 10.6v2.8c0 1.713.002 2.878.075 3.778.072.877.202 1.325.361 1.638a4 4 0 0 0 1.748 1.748c.313.16.761.29 1.638.36.9.074 2.065.076 3.778.076h2.8c1.713 0 2.878-.002 3.778-.075.877-.072 1.325-.202 1.638-.361a4 4 0 0 0 1.748-1.748c.16-.313.29-.761.36-1.638.074-.9.076-2.065.076-3.778v-2.8c0-1.713-.002-2.878-.075-3.778-.072-.877-.202-1.325-.361-1.638a4 4 0 0 0-1.748-1.748c-.313-.16-.761-.29-1.638-.36C16.278 3.001 15.113 3 13.4 3Z" fill="#0F0F0F"/></svg>
    ),
    link: "https://www.twitter.com",
  },
  {
    svg: (
      <svg className="h-5 w-5 fill-current"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.014 8.006c.114-.904 1.289-2.132 2.22-1.996V6.01c.907.172 1.625 1.734 2.03 2.436.286.509.1 1.025-.167 1.243-.361.29-.926.692-.808 1.095C9.5 11.5 12 14 13.23 14.711c.466.269.804-.44 1.092-.804.21-.28.726-.447 1.234-.171.759.442 1.474.956 2.135 1.534.33.276.408.684.179 1.115-.403.76-1.569 1.76-2.415 1.557C13.976 17.587 8 15.27 6.08 8.558c-.108-.318-.08-.438-.066-.552Z" fill="#0F0F0F"/><path fillRule="evenodd" clipRule="evenodd" d="M12 23c-1.224 0-1.9-.131-3-.5l-2.106 1.053A2 2 0 0 1 4 21.763V19.5c-2.153-2.008-3-4.323-3-7.5C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm-6-4.37-.636-.593C3.691 16.477 3 14.733 3 12a9 9 0 1 1 9 9c-.986 0-1.448-.089-2.364-.396l-.788-.264L6 21.764V18.63Z"/></svg>
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


const PropertyPage = () => 
{
  const [showFeatures, setShowFeatures] = useState(true);
  const [showDescription, setShowDescription] = useState(true);
  const toggleFeatures = () => {
    setShowFeatures(!showFeatures);
  };


  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };



  return (
    <>
      
      <h1 className="mt-28 text-center text-3xl font-extralight">CABAÑA TIERRA VIVA CERCA AL LAGO EN ALQUILER</h1>
      
      <main className="flex mt-8 px-16">
        <section className="basis-2/4 p-8 ">
          <GalleryItem width={"w-full"} imageSrc={mainImage.at(0).imgSrc} imgAlt={mainImage.at(0).imgAlt}/>
          <AccordionItem
            title={"Características"}
            isOpen={showFeatures}
            onToggle={() => setShowFeatures(!showFeatures)}
            >
            <PropertyFeatures features={features}/>
          </AccordionItem>
        </section>

        <section className="basis-2/4 p-8 ">
          
          <span className='text-xl'>Código: 126A</span>
          <div className="flex items-center">
            <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 fill-current"><path fillRule="evenodd" clipRule="evenodd" d="M4.25 9.799c0-4.247 3.488-7.707 7.75-7.707s7.75 3.46 7.75 7.707c0 2.28-1.138 4.477-2.471 6.323-1.31 1.813-2.883 3.388-3.977 4.483l-.083.083-.002.002-1.225 1.218-1.213-1.243-.03-.03-.012-.013c-1.1-1.092-2.705-2.687-4.035-4.53-1.324-1.838-2.452-4.024-2.452-6.293M12 3.592c-3.442 0-6.25 2.797-6.25 6.207 0 1.796.907 3.665 2.17 5.415 1.252 1.736 2.778 3.256 3.886 4.357l.043.042.16.164.148-.149.002-.002.061-.06c1.103-1.105 2.605-2.608 3.843-4.322 1.271-1.76 2.187-3.64 2.187-5.445 0-3.41-2.808-6.207-6.25-6.207m1.699 5.013a1.838 1.838 0 1 0-3.397 1.407A1.838 1.838 0 0 0 13.7 8.605m-2.976-2.38a3.338 3.338 0 1 1 2.555 6.168 3.338 3.338 0 0 1-2.555-6.169"/></svg>
            <span>Córdoba</span>
          </div>
          <hr className='border-t w-1/4 mt-2 opacity-95 border-grey-50'/>
          <SocialIcons icons={socialIcons}/>
          <span className='mt-1 text-2xl font-bold'>$ 480.000 por mes</span>

          <AccordionItem
            title={"Descripción"}
            isOpen={showDescription}
            onToggle={() => setShowDescription(!showDescription)}
            >
            <div className="p-4 space-y-4 text-md">
              <p>CABAÑAS AMOBLADAS (3) EN ALQUILER EN VILLA DEL LAGO DESDE MARZO 2025 A DICIEMBRE 2025</p>
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
      <div className=" py-10 px-16 grid grid-cols-3 gap-4">

          {propertyImages.map((image, index) => (
          
            <GalleryItem key={index} imageSrc={image.imgSrc} imgAlt={image.imgAlt}/>
          ))}
      </div>

      <section>
        <PropertyInquiryForm/>
      </section>
    </>
    
  )
}

export default PropertyPage