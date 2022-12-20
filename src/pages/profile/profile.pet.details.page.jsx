import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink,useLocation, useNavigate } from "react-router-dom";
import ProfileService from "../../services/profile.service";
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from "react-redux";
const ProfilePetDetails = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pet, setPet] = useState(null);
    const currentUser = useSelector(state => state.user);
    const dispatch = useDispatch();

    //mounted
    const search = useLocation().search;
    const petId = new URLSearchParams(search).get("petId");

    useEffect(() => {

        ProfileService.getPetLogged(petId).then((response) => {
            setPet(response.data);
            console.log(response.data);
            
        });
    }, []);

    return (
        <div className="background">
            <div className="p-3 custom-card">

                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-6">
                                <h3>My profile - Appointments</h3>
                            </div>
                            <div>
                            </div>
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">{pet[0].name}</th>
                                            <th scope="col">Pet age</th>
                                            <th scope="col">Pet details</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {pet.map((item, ind) =>
                                            <tr key={item.id}>
                                                <th scope="row">{ind + 1}</th>
                                                <td>{item.name}</td>
                                                <td>{item.age}</td>
                                                <td>
                                                <NavLink to={`/profile?petId=${item.id}`} className="btn btn-info">View details</NavLink>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};
export { ProfilePetDetails };