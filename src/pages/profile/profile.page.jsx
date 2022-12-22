import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import UserService from "../../services/user.service";
import { useLocation } from "react-router-dom";
import PetService from "../../services/pet.service";
import ProfileService from "../../services/profile.service";
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from "react-redux";
import './profile.css';
const ProfilePage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [petList, setPetList] = useState([]);
    const currentUser = useSelector(state => state.user);
    const dispatch = useDispatch();

    //mounted
   

    useEffect(() => {

        ProfileService.getCurrentUserPets().then((response) => {
            setPetList(response.data);
            console.log(response.data);
            console.log('pet list ' + petList);
        });
    }, []);

    return (
        <div className="background-profile">
            <div className="p-3 custom-card-profile">

                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            
                            <div className="col-12">
                                <h2>My profile</h2>
                                </div>
                                </div>
                            </div>
                            <div>
                            </div>
                            <div className="card-body">
                               {petList[0]?.id && <div> <table className="table table-striped custom-profile">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Pet name </th>
                                            <th scope="col">Pet age</th>
                                            <th scope="col">Pet details</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {petList.map((item, ind) =>
                                            <tr key={item.id}>
                                                <th scope="row">{ind + 1}</th>
                                                <td>{item.name}</td>
                                                <td>{item.age}</td>
                                                <td>
                                                <NavLink to={`/profile/pets/${item.id}`} className="btn btn-info">View details</NavLink>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table> </div> } {!petList[0]?.id && <center><p>You have no pet's. Call our clinic to add your pets!</p></center>}
                            </div>
                        </div>


                    </div>
                </div>
           
        
    );
};
export { ProfilePage };