const backendDomain = import.meta.env.VITE_backendDomain;  
if (!backendDomain) {
    throw new Error("La variable de entorno VITE_backendDomain no está definida.");
  }


const SummaryApi = {
    createInquiry: {
        url: `${backendDomain}/Inmuebles`,//funciona
        method: 'post'
    },
    getInquiryById: {
        url: `${backendDomain}/Inmuebles`,//Add id //funciona
        method: 'get'
    },
    getAllInquiries: {
        url: `${backendDomain}/Inmuebles`,//funciona
        method: 'get'
    },
    editInquiry: {
        url: `${backendDomain}/Inmuebles`,//Add id //no funciona
        method: 'put'
    },
    editInquiryStar: {
        url: `${backendDomain}/Inmuebles`,//Add id //no funciona
        method: 'patch'
    },
    deleteInquiry: {
        url: `${backendDomain}/Inmuebles`,//Add id //funciona
        method: 'delete'
    },
    createContacto: {
        url: `${backendDomain}/contacto`,//funciona
        method: 'post'
    },
    getAllContacto: {
        url: `${backendDomain}/contacto`,//funciona
        method: 'get'
    },
    getContactoById: {
        url: `${backendDomain}/contacto`,//funciona
        method: 'get'
    },
    deleteContacto: {
        url: `${backendDomain}/contacto`,//funciona
        method: 'delete'
    },
    getAllUsers: {
        url: `${backendDomain}/users`,//funciona
        method: 'get'
    },
    registerUsers: {
        url: `${backendDomain}/users/register`,//funciona
        method: 'post'
    },
    loginUsers: {
        url: `${backendDomain}/users/login`,//funciona
        method: 'post'
    },
    deleteUsers: {
        url: `${backendDomain}/users`,//funciona
        method: 'delete'
    },
}


export default SummaryApi;