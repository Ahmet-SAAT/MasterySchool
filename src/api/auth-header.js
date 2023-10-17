import { getFromLocalStorage } from "../helpers/functions/encrypted-storage"

export const getAutHeader=()=>{
    const token=getFromLocalStorage("token")
    let header={};
    if (token) {
        header={
            Authorization:token
        }
    }
    return header;
}