import { useState, useNavigate, useEffect, useParams } from "react";
import UserService from "../../services/user.service";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PetService from "../../services/pet.service";
import AppointmentService from "../../services/appointment.service";


const AppointmentListPage = () => {

    const [user, setUser] = useState(null);
    const [pet, setPet] = useState(null);
    const [appointmentList, setAppointmentList] = useState([]);



 
    // console.log('pet id ' + petId);
    // console.log('owner id '+ ownerId);
const search = useLocation().pathname;
const splited = search.split("/");

//tu probowalem tamtym starym sposobem ale on zamiast dla ownera id=1 bierze chyba calosc czyli id=1?petsId=1 i dlatego nie działa
const petId=splited[4];
const ownerId = splited[2];
console.log('Pet id '+ petId);
console.log('Owner id ' + ownerId);

    //mounted

    useEffect(() => {

        UserService.getOwnerById(ownerId).then((response) => {
            setUser(response.data);
            console.log(user);
        });
            PetService.getOnePetByIdAndOwnerId(ownerId, petId).then((response) => {
                setPet(response.data);
                console.log(pet);
            });

            AppointmentService.getAppointments(petId).then((response) => {
                setAppointmentList(response.data);
                console.log(appointmentList);
            });

    }, []);

    return pet?(
        <div className="background-appointment">
        <div className="p-3 custom-card-appointment">

            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <h3>Client details - Pet</h3>
                        </div>
                        <div>
                            <p>{pet.name}</p>
                            <p>{pet.age}</p>
                            <p>{pet.weight}</p>
                          {pet.owner&&  <p>{pet.owner.firstName} {pet.owner.lastName}</p>}  
                            </div>
                            <div className="card-body">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Appointment Date</th>
                                <th scope="col">Appointment cost</th>
                            </tr>
                            </thead>
                            <tbody>

                            {appointmentList.map((item, ind) =>
                                <tr key={item.id}>
                                    <th scope="row">{ind + 1}</th>
                                    <td>{item.date}</td>
                                    <td>{item.cost}</td>
                                    <td>
                                        <NavLink to={`/appointments?petId=${item.id}`} className="btn btn-info">View details</NavLink>
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
    ):<></>;
};
export {AppointmentListPage};