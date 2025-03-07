import { fetchData } from "./util/fetchFunction";
import SummaryApi from "./util/SummaryApi";


export async function createRealEstate(inquirity){
    const response = await fetchData(SummaryApi.createRealEstate.url,{
        method: SummaryApi.createRealEstate.method,
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inquirity),
    });
    return response
};

export async function getAllRealEstate(){
    return fetchData(SummaryApi.getAllRealEstate.url,{
        method: SummaryApi.getAllRealEstate.url
    });
};


export async function deleteRealEstate(id){
    return fetchData(`${SummaryApi.deleteRealEstate.url}/${id}`,{
        method: SummaryApi.deleteRealEstate.url
    });
};

export async function editRealEstate(inquirity, id){
    const response = await fetchData(`${SummaryApi.editRealEstate.url}/${id}`,{
        method: SummaryApi.editRealEstate.method,
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inquirity),
    });
    return response
}