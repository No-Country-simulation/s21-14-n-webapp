

import { fetchData } from "./util/fetchFunction";
import SummaryApi from "./util/SummaryApi";


export async function createInquiry(inquirity) {
    const response = await fetchData(SummaryApi.createInquiry.url, {
        method: SummaryApi.createInquiry.method,
        body: inquirity,  
    });
    return response;
}

export async function getAllInquiries(){
    return fetchData(SummaryApi.getAllInquiries.url,{
        method: SummaryApi.getAllInquiries.method
    });
};


export async function getInquiryById(id){
    return fetchData(`${SummaryApi.getInquiryById.url}/${id}`,{
        method: SummaryApi.getInquiryById.url
    });
};

export async function editInquiry(inquirity, id){
    const response = await fetchData(`${SummaryApi.editInquiry.url}/${id}`,{
        method: SummaryApi.editInquiry.method,
        body: inquirity,  
    });
    return response;
};

export async function deleteInquiry(id){
    return fetchData(`${SummaryApi.deleteInquiry.url}/${id}`,{
        method: SummaryApi.deleteInquiry.url
    });
};