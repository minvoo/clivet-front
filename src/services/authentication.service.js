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

    getAll(){
        return axios.get(BASE_URL+'owners')
    }
    getById(ownerId){
        return axios.get(BASE_URL+'owners/{ownerId}' + ownerId)
    }
    addPet(pet){
        return axios.post(BASE_URL + 'owners/{ownerId}/pets', pet)
    }


}
export default new AuthenticationService();