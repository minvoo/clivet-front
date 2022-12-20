import {BASE_API_URL} from "../common/contstants";
import axios from "axios";
import { authHeader } from "./base.service";


const BASE_URL = BASE_API_URL ;

class PetService {

    listOwnersPets(id) {
        return axios.get(BASE_URL+'owners/'+id+'/pets', {headers: authHeader()});
    }

}
export default new PetService();