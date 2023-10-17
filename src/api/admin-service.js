import axios from "axios"
import { getAutHeader } from "./auth-header";
import { config } from "../helpers/config";

const baseUrl=config.api.baseUrl;
export const getAdminsByPage = async(page=0,size=20,sort="name",type="ASC") => {

   
        const resp = await axios.get(`${baseUrl}/admin/getAll?page=${page}&size=${size}&sort=${sort}&type=${type}`,{
            headers:getAutHeader(),
        })
        const data = await resp.data;
    return data;
     
}

