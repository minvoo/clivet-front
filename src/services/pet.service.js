import {BASE_API_URL} from "../common/contstants";
import axios from "axios";
import { authHeader } from "./base.service";


const BASE_URL = BASE_API_URL ;

class PetService {

    async getPetsByOwnerId(id) {
        return await axios.get(BASE_URL+'owners/'+id+'/pets', {headers: authHeader()});
    }

   async getOnePetByIdAndOwnerId(ownerId,petId) {
         return await axios.get(BASE_URL+'owners/'+ownerId+'/pets/'+petId, {headers: authHeader()});
    }

    async delete(ownerId, petId) {
        return await axios.delete(BASE_URL + 'owners/' +ownerId+'/pets/'+petId, {authHeader: authHeader()});
    }

    async addPet(pet, ownerId){
        return await axios.post(`${BASE_URL}owners/${ownerId}/pets`, pet, {headers: authHeader()});
    }

    async updatePet(ownerId, petId, pet) {
        return await axios.patch(`${BASE_URL}owners/${ownerId}/pets/${petId}`, pet, {headers: authHeader()});
    }



}
export default new PetService();