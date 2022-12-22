import { useState, useEffect, useParams } from "react";
import UserService from "../../services/user.service";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PetService from "../../services/pet.service";
import AppointmentService from "../../services/appointment.service";
import Appointment from "../../models/appointment";
import "./appointment-page.css";

const AppointmentListPage = () => {
  const [user, setUser] = useState(null);
  const [pet, setPet] = useState(null);
  const [selectedAppointment, setselectedAppointment] = useState(
    new Appointment(null)
  );
  const [appointmentList, setAppointmentList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  function refreshPage() {
    window.location.reload();
  }

  // console.log('pet id ' + petId);
  // console.log('owner id '+ ownerId);
  const search = useLocation().pathname;
  const splited = search.split("/");

  //tu probowalem tamtym starym sposobem ale on zamiast dla ownera id=1 bierze chyba calosc czyli id=1?petsId=1 i dlatego nie działa
  const petId = splited[4];
  const ownerId = splited[2];
  console.log("Pet id " + petId);
  console.log("Owner id " + ownerId);

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

  const navigate = useNavigate();

  const deleteAppointment = () => {
    AppointmentService.delete(selectedAppointment)
      .then((_) => {
        setAppointmentList(
          appointmentList.filter((x) => x.id !== selectedAppointment.id)
        );
      })
      .catch((err) => {
        setErrorMessage("Unexpected error occurred.");
        console.log(err);
      });
  };
  return pet ? (
    <div className="background-appointment">
      <div className="p-3 custom-card-pet-admin">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-12">
                <h2>Pet details - {pet.name} </h2>
              </div>
            </div>
          </div>
          <div>
            <span>
              <p className="card-subtitle-pet pt-2">
                <b>Pet Age:</b> {pet.age}
                <br />
                <b>Pet Weight:</b> {pet.weight}
              </p>
            </span>
            <div className="col-12 button-custom pt-3">
              <a
                href={`/owners/${ownerId}/pets/${petId}/update`}
                className="btn btn-success"
                role={"button"}
              >
                Edit Pet
              </a>
              <span className="px-2"></span>
              <a
                href={`/pets/${petId}/appointments/add`}
                className="btn btn-success"
                role={"button"}
              >
                Add Appointment
              </a>
            </div>
            {/* {pet.owner && <p>{pet.owner.firstName} {pet.owner.lastName}</p>} */}
          </div>
          <div className="card-body">
            {appointmentList[0]?.id && (
              <div>
                {" "}
                <table className="table table-striped custom-appointment">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Appointment Date</th>
                      <th scope="col">Appointment cost</th>
                      <th scope="col">Appointment Details</th>
                      <th scope="col">Delete Appointment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointmentList.map((item, ind) => (
                      <tr key={item.id}>
                        <th scope="row">{ind + 1}</th>
                        <td>{item.date}</td>
                        <td>{item.cost}</td>
                        <td>
                          <NavLink
                            to={`/pets/${petId}/appointments/${item.id}`}
                            className="btn btn-info"
                          >
                            View details
                          </NavLink>
                        </td>
                        <td>
                          <button
                            onClick={() =>
                              AppointmentService.delete(item.id).then(
                                navigate(`/pets?ownerId=${ownerId}`)
                              )
                            }
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}{" "}
            {!appointmentList[0]?.id && (
              <center>
                <p>
                  <br />
                  <b>Given pet has no appointments yet.</b>
                </p>
              </center>
            )}
            <center>
              <NavLink onClick={() => navigate(-1)} className="btn btn-info">
                Go Back
              </NavLink>
            </center>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
export { AppointmentListPage };
