import { useState, useEffect, useParams } from "react";
import UserService from "../../services/user.service";
import { useLocation, useNavigate } from "react-router-dom";
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
    const id = new URLSearchParams(search).get("ownerId");
    console.log('Id ' + id);

    //mounted

    const navigate = useNavigate();

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
                            <div className="col-12">
                                <h3>Client details - {firstName} {lastName}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 button-custom pt-3">
                            <a href={`/owners/${id}/edit`} className="btn btn-success" role={"button"}>Edit person</a>
                            <span className="px-2"></span>
                            <a href={`/owners/${id}/pets/add`} className="btn btn-success " role={"button"}>Add new pet</a>
                        </div>
                        <div>
                            <div className="card-body">
                            {petList[0]?.id && <div> <table className="table table-striped custom-card-pet">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Pet name</th>
                                            <th scope="col">Pet age</th>
                                            <th scope="col">Pet details</th>
                                            <th scope="col">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {petList.map((item, ind) =>
                                            <tr key={item.id}>
                                                <th scope="row">{ind + 1}</th>
                                                <td>{item.name}</td>
                                                <td>{item.age}</td>
                                                <td>
                                                    <a href={`/owners/${id}/pets/${item.id}`} className="btn btn-info">View Details</a>
                                                </td>
                                                <td><button onClick={() => PetService.delete(id, item.id).then(navigate('/owners'))} className="btn btn-danger">Delete</button></td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table> 
                                </div> } 
                                { !petList[0]?.id &&
                                <center><p><br /><b>Given owner has no pets yet.</b></p></center> }
                                <div>
                                    <center>
                                        <NavLink
                                            to={"/owners"}
                                            className="btn btn-info" 
                                            >
                                                
                                            Go Back
                                        </NavLink>
                                    </center>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div >
        </div >
    );
};
export { PetPage };