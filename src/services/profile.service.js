import {BASE_API_URL} from "../common/contstants";
import axios from "axios";
import { authHeader } from "./base.service";
import { useSelector } from "react-redux";


const BASE_URL = BASE_API_URL ;
class ProfileService {
    
    getCurrentUserPets() {
        return axios.get(BASE_URL+'myprofile/pets', {headers: authHeader()});
    }
    getPetLogged(petId){
        return axios.get(BASE_URL+'myprofile/pets/'+petId, {headers: authHeader()});
    }

    petListAppoitments(petId){
        return axios.get(BASE_URL+'myprofile/pets/'+petId+'/appointments', {headers: authHeader()});
    }

    getAppointmentCurrentUser(appId) {
        return axios.get(BASE_URL+'myprofile/appointments/'+appId, {headers:authHeader()});
    }

 
}
export default new ProfileService();