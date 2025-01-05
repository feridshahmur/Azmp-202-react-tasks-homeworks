import { BASE_URL } from "./constants.js";
import axios from 'axios'


// get all  data
const getAllData  =  async ()=>{
    try {
        const res = await axios(`${BASE_URL}`)
        return res.data
        
    } catch (error) {
        console.log(error);
        
    }
}

const controller = {
    getAllData
}
export default controller