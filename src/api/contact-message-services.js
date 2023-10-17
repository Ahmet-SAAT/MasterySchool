import axios from "axios"
import { config } from "../helpers/config";
const baseUrl=config.api.baseUrl;
export const createMessage = async (payload) => {
    const resp = await axios.post(`${baseUrl}/contactMessages/save`, payload)
    const data = await resp.data;
    return data;
}