import { useState, useEffect, useParams } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import AppointmentService from "../../services/appointment.service";
import './appointment-page.css';

const AppointmentDetailsAdminPage = () => {
  const [appointment, setAppointment] = useState("", "", "", "", "", "");

  const search = useLocation().pathname;
  const splited = search.split("/");

  const appointmenId = splited[4];
  const petId = splited[2];
  console.log("Pet id " + petId);
  console.log("Appointment id " + appointmenId);

  const navigate = useNavigate();

  //mounted

  useEffect(() => {
    AppointmentService.getOneAppointment(petId, appointmenId).then(
      (response) => {
        setAppointment(response.data);
        console.log(appointment);
      }
    );
  }, []);

  return appointment ? (
    <div className="background-appointment-details-admin">
      <div className="p-3 custom-card-appointment-details-admin">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-12">
                <h2>Client details - Pet's appointment</h2>
              </div>
              <div>
              </div>
              <div className="card-body">
                <table className="table table-striped">
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
      </div>
    </div>
  ) : (
    <></>
  );
};
export { AppointmentDetailsAdminPage };
