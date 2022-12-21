import {BASE_API_URL} from "../common/contstants";
import axios from "axios";
import {authHeader} from "./base.service";

const API_URL = BASE_API_URL;

class UserService {

    async getOwnersList() {
        return await axios.get(API_URL + 'owners', {headers: authHeader()});
    }

    //todo do sprawdzenia

    async getOwnerById(id) {
        return await axios.get(API_URL + 'owners/' + id, {headers: authHeader()})
    }

    //todo do sprawdzenia

    async updateOwnerById(id,user) {
        return await axios.patch(API_URL + 'owners/' + id, user, {authHeader: authHeader()});
    }

    //todo do sprawdzenia

    async deleteOwnerById(id) {
        return await axios.delete(API_URL + 'owners/' + id, {authHeader: authHeader()});
    }
}

export default new UserService();