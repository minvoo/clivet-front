
import { useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import Appointment from "../../models/appointment"
import './appointment-page.css';
import AppointmentService from "../../services/appointment.service";

const AppointmentPage = () => {

    const [appointment, setAppointment] = useState(new Appointment('', '', '', '', ''))
    const [loading, setLoading] = useState(false);
    const [submitted, setSubbmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const search = useLocation().pathname;
    const splited = search.split("/");

    const petId = splited[2];
    const ownerId = splited[2];

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setAppointment((prevState => {
            return {

                ...prevState,
                [name]: value
            };
        }));
    };



    const handleAppointment = (e) => {

        e.preventDefault();

        setSubbmitted(true);
        if (!appointment.date || !appointment.description || !appointment.medicine || !appointment.cost ) {
            return;
        }
        setLoading(true);
        console.log('zaraz doddam appointmenta dla peta o id '+petId);
        AppointmentService.addAppointmentByPetId(appointment,petId).then((response) => {
            navigate("/owners");
        })
        
    };

    return (
        <>
            <div className="background-appointment">

                <div className="p-3 custom-card-appointment-details-admin">
                    <p className="card-title">Add appointment</p>

                    {errorMessage &&
                        <div className="alert alert-danger">
                            {errorMessage}
                        </div>
                    }
                    <form onSubmit={(e) => handleAppointment(e)}
                        noValidate
                        className={submitted ? 'was-validated' : ''}>

                        <div className="form-group">
                            <label htmlFor="date">Date:</label>
                            <input type="date" name="date"
                                className="form-control form-input-custom form-input-custom"
                                placeholder="Date"
                                value={appointment.date}
                                onChange={(e) => handleChange(e)}
                                required />
                            <div className="invalid-feedback">Date is required</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <input type="text" name="description" className="form-control form-input-custom"
                                placeholder="Description"
                                value={appointment.description}
                                onChange={(e) => handleChange(e)}
                                required />
                            <div className="invalid-feedback">Description is required</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="medicine">Medicine:</label>
                            <input type="text" name="medicine" className="form-control form-input-custom"
                                placeholder="Medicine"
                                value={appointment.medicine}
                                onChange={(e) => handleChange(e)}
                                required />
                            <div className="invalid-feedback">Medicine is required</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="cost">Cost Visit :</label>
                            <input type="number" placeholder="Cost" min="0" step="20" name="cost" className="form-control form-input-custom"
                                value={appointment.cost}
                                onChange={(e) => handleChange(e)}
                                required />
                            <div className="invalid-feedback">Cost is required</div>
                        </div>

                        <button className="btn btn-dark w-100 mt-3" disabled={loading} type="submit">Add Appointment</button>
                    </form>
                    <center>
                        <NavLink
                            onClick={() => navigate(-1)}
                            className="btn btn-info w-100 mt-3" >
                            Go Back
                        </NavLink>
                    </center>
                </div>
            </div>
        </>
    )


};

export { AppointmentPage };