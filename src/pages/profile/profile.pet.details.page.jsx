import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ProfileService from "../../services/profile.service";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import { Pets } from "@mui/icons-material";
import Pet from "../../models/pet";

const ProfilePetDetails = () => {
  const [pet, setPet] = useState(new Pet("", "", "", "", ""));
  const [appointmentList, setAppointmentList] = useState([]);

  const navigate = useNavigate();

  const search = useLocation().pathname;
  const splited = search.split("/");
  const petId = splited[3];

  console.log("splited " + petId);
  console.log(splited);
  useEffect(() => {
    ProfileService.getPetLogged(petId).then((response) => {
      setPet(response.data);
      console.log(response.data);
    });

    ProfileService.petListAppoitments(petId).then((appointmentResponse) => {
      setAppointmentList(appointmentResponse.data);
      console.log(appointmentList);
    });
  }, []);

  return (
    <div className="background-profile-pet">
      <div className="p-3 custom-card-profile-pet">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-12">
                <h2>Pet details - {pet.name}</h2>
              </div>
            </div>
          </div>
          <span ><p className="card-subtitle-pet pt-2"><b>Pet Age:</b> {pet.age}<br />
            <b>Pet Weight:</b> {pet.weight}</p></span>
          <div></div>
          <div className="card-body">
          {appointmentList[0]?.id && <div> <table className="table table-striped custom-profile">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Appointment Date</th>
                  <th scope="col">Appointment cost</th>
                  <th scope="col">Appointment Details</th>
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
                        to={`/profile/appointments/${item.id}`}
                        className="btn btn-info"
                      >
                        View details
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> </div> } {!appointmentList[0]?.id && <center><p><br /><b>Given pet has no appointments yet.</b></p></center>}
            <div>
              <center>
                <NavLink
                  onClick={() => navigate(-1)}
                  className="btn btn-info" >
                  Go Back
                </NavLink>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
export { ProfilePetDetails };
