import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import './admin.css';
import UserService from "../../services/user.service";
import 'bootstrap/dist/css/bootstrap.css';

const AdminPage = () => {

    const [ownerList, setOwnerList] = useState([]);

    const navigate = useNavigate()
    const currentUser = useSelector(state => state.user);

    //mounted
    useEffect(() => {
        UserService.getOwnersList().then((response) => {
            setOwnerList(response.data);
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

                            {ownerList.map((item, ind) =>
                                <tr key={item.id}>
                                    <th scope="row">{ind + 1}</th>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>
                                        <NavLink to={`/pets?ownerId=${item.id}`} className="btn btn-info">View details</NavLink>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {AdminPage}