import {BASE_API_URL} from "../common/contstants";
import axios from "axios";
import { authHeader } from "./base.service";


const BASE_URL = BASE_API_URL ;

class AppointmentService {

    getAppointments(id) {
        return axios.get(BASE_URL+'pets/'+id+'/appointments', {headers: authHeader()});
    }
    addAppointment(appointment, petId){
        return axios.post(BASE_URL + 'pets/'+petId+'/appointments', appointment)
    }

}
export default new AppointmentService();