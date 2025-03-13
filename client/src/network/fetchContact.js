import { fetchData } from "./util/fetchFunction";
import SummaryApi from "./util/SummaryApi";


export async function createContact(contactForm) {
    const response = await fetchData(SummaryApi.createContacto.url, {
        method: SummaryApi.createContacto.method,
        body: contactForm,  
    });
    return response;
}

export async function getAllContact(){
    return fetchData(SummaryApi.getAllContacto.url,{
        method: SummaryApi.getAllContacto.method
    });
};

export async function getContactById(id){
    return fetchData(`${SummaryApi.getContactoById.url}/${id}`,{
        method: SummaryApi.getContactoById.method
    });
};

export async function deleteContact(id){
    return fetchData(`${SummaryApi.deleteContacto.url}/${id}`,{
        method: SummaryApi.deleteContacto.method
    });
};