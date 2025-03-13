

import { fetchData } from "./util/fetchFunction";
import SummaryApi from "./util/SummaryApi";


export async function registerUser(inquirity) {
    const response = await fetchData(SummaryApi.registerUsers.url, {
        method: SummaryApi.registerUsers.method,
        body: inquirity,  
    });
    return response;
}
export async function loginUser(inquirity) {
    const response = await fetchData(SummaryApi.loginUsers.url, {
        method: SummaryApi.loginUsers.method,
        body: inquirity,  
    });
    return response;
}

export async function getAllUsers(){
    return fetchData(SummaryApi.getAllUsers.url,{
        method: SummaryApi.getAllUsers.method
    });
};



export async function deleteUsers(id){
    return fetchData(`${SummaryApi.deleteUsers.url}/${id}`,{
        method: SummaryApi.deleteUsers.method
    });
};
