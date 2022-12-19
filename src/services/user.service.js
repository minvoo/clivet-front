import {BASE_API_URL} from "../common/contstants";
import axios from "axios";
import {authHeader} from "./base.service";

const API_URL = BASE_API_URL;

class UserService {

    getOwnersList() {
        return axios.get(API_URL + 'owners', {headers: authHeader()});
    }

    //todo do sprawdzenia

    getOwnerById(user) {
        return axios.get(API_URL + 'owners' + user.id, {headers: authHeader()})
    }

    //todo do sprawdzenia

    updateOwnerById(user) {
        return axios.patch(API_URL + 'owners' + user.id, {authHeader: authHeader()});
    }

    //todo do sprawdzenia

    deleteOwnerById(user) {
        return axios.delete(API_URL + 'owners' + user.id, {authHeader: authHeader()});
    }
}

export default new UserService();