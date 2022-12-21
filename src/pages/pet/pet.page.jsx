import { useState, useNavigate, useEffect, useParams } from "react";
import UserService from "../../services/user.service";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PetService from "../../services/pet.service";
import './pet-page.css';


const PetPage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [petList, setPetList] = useState([]);

//pobieranie id z linka

const search = useLocation().search;
const id=new URLSearchParams(search).get("ownerId");
console.log('Id '+ id);

    //mounted

    useEffect(() => {
        
        
        UserService.getOwnerById(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);


            PetService.getPetsByOwnerId(id).then((response) =>
            setPetList(response.data));
            console.log('pets ' + petList);

        });
    }, []);

    return (
        <div className="background-pet-admin">
        <div className="p-3 custom-card-pet-admin">

            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <h3>Client details</h3>
                        </div>
                        <div>
                            <p>{firstName} {lastName}</p>
                            <p>{email}</p>
                            </div>
                            <div className="card-body">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Pet name</th>
                                <th scope="col">Pet age</th>
                                <th scope="col">Pet details</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>

                            {petList.map((item, ind) =>
                                <tr key={item.id}>
                                    <th scope="row">{ind + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>
                                        <NavLink to={`/owners/${id}/pets/${item.id}`} className="btn btn-info">View Details</NavLink>
                                        
                                    </td>

                                    <td><button onClick={() =>PetService.delete(id, item.id)} className="btn btn-danger">Delete</button></td>
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
export {PetPage};