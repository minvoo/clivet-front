import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ProfileService from "../../services/profile.service";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import { Pets } from "@mui/icons-material";
import Pet from "../../models/pet";
import profileService from "../../services/profile.service";
import Appointment from "../../models/appointment";
import './profile.css';

const ProfileAppointmentDetails = () => {
  const [appointment, setAppointment] = useState(
    new Appointment("", "", "", "", "", "")
  );

  const search = useLocation().pathname;
  const splited = search.split("/");
  const appointmentId = splited[3];
  const navigate = useNavigate();

  console.log("splited " + appointmentId);
  console.log(splited);
  useEffect(() => {
    profileService.getAppointmentCurrentUser(appointmentId).then((response) => {
      setAppointment(response.data);
      console.log(appointment);
    });
  }, []);

  return (
    <div className="background-profile-app">
      <div className="p-3 custom-card-profile-app">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-12">
                <h2>Pet's Appointment</h2>
                </div>
                </div>
              </div>
              <div></div>
              <div className="card-body">
                <table className="table table-striped custom-table-admin">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Medicine</th>
                      <th scope="col">Description</th>
                      <th scope="col">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{appointment.date}</td>
                      <td>{appointment.medicine}</td>
                      <td>{appointment.description}</td>
                      <td>{appointment.cost}</td>
                    </tr>
                  </tbody>
                </table>
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
    
  );
};
export { ProfileAppointmentDetails };
