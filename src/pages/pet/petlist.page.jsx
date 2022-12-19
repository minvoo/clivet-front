import {useEffect, useState} from "react";
import User from "../../models/user";
import {useDispatch, useSelector} from "react-redux";
import {Link, NavLink, useNavigate, useParams, useHistory} from "react-router-dom";
import AuthenticationService from "../../services/authentication.service";
import {setCurrentUser} from "../../store/actions/user";
import {Button, Table, TableBody, TableHead, TableRow} from "@mui/material";
import UserService from "../../services/user.service";
import 'bootstrap/dist/css/bootstrap.css';
import './pet-page.css';
const PetListPage = () => {

    const [fistName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();
    //mounted
    useEffect(() => {
        UserService.getOwnerById(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
        });
    }, []);

    return (
        <div className="background">
            <div className="p-3 custom-card">

                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-6">
                                <h3>All owners</h3>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Pets</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"></th>
                                    <td></td>
                                    <td></td>
                                    <td><NavLink to={`/owners/{id}`} className="btn btn-info">View details</NavLink>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { PetListPage }