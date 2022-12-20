import AuthenticationService from "../../services/authentication.service";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import{Link,useNavigate} from "react-router-dom"
import Appointment from "../../models/appointment"
import'./appointment-page.css'




const AppointmentPage = () =>{

    const[appointment,setAppointment] = useState(new Appointment('','','','',''))
    const [loading, setLoading] = useState(false);
    const [submitted, setSubbmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


   const stateappointment = useSelector(state =>state.appointment);


  const navigate = useNavigate();


  useEffect(() => {
    if (appointment?.id) {
        navigate('/profile')
    }
}, []);
const handleChange = (e) => {
    const {name, value} = e.target;

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
    // if form is invalid -> return
    if (!appointment.date || !appointment.description || !appointment.medicine || !appointment.cost || !appointment.pet) {
        return;
    }
    setLoading(true);
    AuthenticationService.addAppointment(appointment).then(_ => {
        navigate('/owners');
    }).catch(error => {
            setErrorMessage('Unexpected error occurred.');

        setLoading(false);
    })
};

return (
    <>
        <div className="background">

                <div className="p-3 custom-card">
                    <p className="card-title">Appointment</p>
                    <p className="card-subtitle">Add appointment</p>

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
                                   required/>
                            <div className="invalid-feedback">Date is required</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <input type="text" name="description" className="form-control form-input-custom"
                                   placeholder="Description"
                                   value={appointment.description}
                                   onChange={(e) => handleChange(e)}
                                   required/>
                            <div className="invalid-feedback">Description is required</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="medicine">Medicine:</label>
                            <input type="text" name="medicine" className="form-control form-input-custom"
                                   placeholder="Medicine"
                                   value={appointment.medicine}
                                   onChange={(e) => handleChange(e)}
                                   required/>
                            <div className="invalid-feedback">Medicine is required</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="ticketNum">Cost Visit :</label>
                            <input type="number" placeholder="Cost" step="20" name="cost" className="form-control form-input-custom"
                                   value={appointment.cost}
                                   onChange={(e) => handleChange(e)}
                                   required/>
                            <div className="invalid-feedback">Cost is required</div>
                        </div>

                        <button className="btn btn-success w-100 mt-3" disabled={loading} type="submit">New Appointment</button>
                    </form>
                </div>
            </div>
    </>
)


};

export {AppointmentPage};