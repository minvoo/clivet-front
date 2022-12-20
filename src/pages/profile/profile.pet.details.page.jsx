import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink,useLocation, useNavigate } from "react-router-dom";
import ProfileService from "../../services/profile.service";
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from "react-redux";
import { Pets } from "@mui/icons-material";
import Pet from "../../models/pet";

const ProfilePetDetails = () => {


    const [pet, setPet] = useState(new Pet('','','','',''));

    const search = useLocation().pathname;
const splited = search.split("/");
const petId = splited[3];

console.log('splited '+ petId);
console.log(splited);
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
                                <h3>My profile - Appointment</h3>
                            </div>
                            <div>
                            </div>
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">aaa</th>
                                            <th scope="col">Pet age</th>
                                            <th scope="col">Pet details</th>
                                        </tr>
                                
                                    </thead>
                                       <tbody>

                                    
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