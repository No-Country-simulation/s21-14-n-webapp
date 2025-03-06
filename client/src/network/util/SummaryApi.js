const backendDomain = import.meta.env.VITE_backendDomain;  
if (!backendDomain) {
    throw new Error("La variable de entorno VITE_backendDomain no está definida.");
  }


const SummaryApi = {
    createInquiry: {
        url: `${backendDomain}/Inmuebles`,
        method: 'post'
    },
    getInquiryById: {
        url: `${backendDomain}/Inmuebles`,//Add id 
        method: 'get'
    },
    getAllInquiries: {
        url: `${backendDomain}/Inmuebles`,
        method: 'get'
    },
    editInquiry: {
        url: `${backendDomain}/Inmuebles`,//Add id 
        method: 'put'
    },
    deleteInquiry: {
        url: `${backendDomain}/Inmuebles`,//Add id 
        method: 'delete'
    },
    createRealEstate: {
        url: `${backendDomain}/Inmobiliaria`,
        method: 'post'
    },
    getAllRealEstate: {
        url: `${backendDomain}/Inmobiliaria`,
        method: 'get'
    },
    editRealEstate: {
        url: `${backendDomain}/Inmobiliaria`,//Add id 
        method: 'put'
    },
    deleteRealEstate: {
        url: `${backendDomain}/Inmobiliaria`,//Add id 
        method: 'delete'
    },
}


export default SummaryApi;