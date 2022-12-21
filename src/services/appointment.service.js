import {BASE_API_URL} from "../common/contstants";
import axios from "axios";
import { authHeader } from "./base.service";


const BASE_URL = BASE_API_URL ;

class AppointmentService {

    async getAppointments(id) {
        return await axios.get(BASE_URL+'pets/'+id+'/appointments', {headers: authHeader()});
    }
    async addAppointmentByPetId(appointment,petId){
        return await axios.post(`${BASE_URL}pets/${petId}/appointments`, appointment , {headers: authHeader()});
    }

    async getOneAppointment(petId, appId) {
        return await axios.get(BASE_URL + 'pets/'+petId+'/appointments/'+appId, {headers: authHeader()});
    }

    async delete(appId) {
        return await axios.delete(`${BASE_URL}appointments/${appId}`, {headers: authHeader()});
    }

}
export default new AppointmentService();

