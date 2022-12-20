import {BASE_API_URL} from "../common/contstants";
import axios from "axios";
import { authHeader } from "./base.service";


const BASE_URL = BASE_API_URL ;

class PetService {

    getPetsByOwnerId(id) {
        return axios.get(BASE_URL+'owners/'+id+'/pets', {headers: authHeader()});
    }

    getOnePetByIdAndOwnerId(ownerId,petId) {
        return axios.get(BASE_URL+'owners/'+ownerId+'/pets/'+petId, {headers: authHeader()});
    }



}
export default new PetService();