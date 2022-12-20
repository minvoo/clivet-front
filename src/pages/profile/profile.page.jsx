import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import UserService from "../../services/user.service";
import { useLocation } from "react-router-dom";
import PetService from "../../services/pet.service";
import ProfileService from "../../services/profile.service";
import 'bootstrap/dist/css/bootstrap.css';

const ProfilePage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [petList, setPetList] = useState([]);
    const currentUser = useSelector(state => state.user);


    //mounted

    useEffect(() => {
        
        ProfileService.getCurrentUserPets().then((response) => {
            setPetList(response.data);
            console.log(response.data);
            console.log('pet list '+ petList);
        });
    }, []);

    return (
        <div className="background">
        <div className="p-3 custom-card">

            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <h3>My profile</h3>
                        </div>
                        <div>
                            </div>
                            <div className="card-body">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">{currentUser.name}</th>
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
export {ProfilePage};