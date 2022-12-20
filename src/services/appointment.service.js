import {BASE_API_URL} from "../common/contstants";
import axios from "axios";
import { authHeader } from "./base.service";


const BASE_URL = BASE_API_URL ;

class Appointmentservice {

    getAppointments(id) {
        return axios.get(BASE_URL+'pets/'+id+'/appointments', {headers: authHeader()});
    }

}
export default new Appointmentservice();