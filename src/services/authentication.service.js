import {BASE_API_URL} from "../common/contstants";
import axios from "axios";


const BASE_URL = BASE_API_URL ;

class AuthenticationService {

    register(user) {
        return axios.post(BASE_URL+'register', user);
    }

    login(user) {
        return axios.post(BASE_URL+'login', user);
    }

    addAppointment(appointment){
            return axios.post(BASE_URL + 'pets/{{petId}}/appointments', appointment)
        }



}
export default new AuthenticationService();