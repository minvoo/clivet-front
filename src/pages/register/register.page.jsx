import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import User from "../../models/user";
import AuthenticationService from "../../services/authentication.service";
import './register-page.css'

const RegisterPage = () => {


    const [user, setUser] = useState(new User('', '', '', '', ''));
    const [loading, setLoading] = useState(false);
    const [submitted, setSubbmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const currentUser = useSelector(state => state.user);

    const navigate = useNavigate();
    //mounted
    useEffect(() => {
        if (currentUser?.id) {
            navigate('/profile')
        }
    }, []);

    //<input name="x" value="y" onchange(event) => handleChange(event)>
    const handleChange = (e) => {
        const {name, value} = e.target;

        setUser((prevState => {
            return {
                // e.g: prevState ({user:x, pass: x}) + newKeyValue ({user: xy}0 => ({user:xy, pass:x})
                ...prevState,
                [name]: value
            };
        }));
    };

    const handleRegister = (e) => {

        e.preventDefault();

        setSubbmitted(true);
        // if form is invalid -> return
        if (!user.username || !user.password || !user.email || !user.firstName || !user.lastName) {
            return;
        }
        setLoading(true);
        AuthenticationService.register(user).then(_ => {
            navigate('/login');
        }).catch(error => {
            if (error?.response?.status === 400) {
                setErrorMessage('username or password is not valid');
            } else if (error?.response?.status === 409) {
                setErrorMessage('username or email already exists')
            } else {
                setErrorMessage('Unexpected error occurred.')
            }

            setLoading(false);
        })
    };

    return (
        <>
            <div className="background">

                    <div className="p-3 custom-card">
                        <p className="card-title">Register</p>

                        {errorMessage &&
                            <div className="alert alert-danger">
                                {errorMessage}
                            </div>
                        }
                        <form onSubmit={(e) => handleRegister(e)}
                              noValidate
                              className={submitted ? 'was-validated' : ''}>

                            <div className="form-group">
                                <label htmlFor="username">Username:</label>
                                <input type="text" name="username"
                                       className="form-control form-input-custom form-input-custom"
                                       placeholder="Username"
                                       value={user.username}
                                       onChange={(e) => handleChange(e)}
                                       required/>
                                <div className="invalid-feedback">Username is required</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" name="password" className="form-control form-input-custom"
                                       placeholder="Password"
                                       value={user.password}
                                       onChange={(e) => handleChange(e)}
                                       required/>
                                <div className="invalid-feedback">Password is required</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">E-mail:</label>
                                <input type="email" name="email" className="form-control form-input-custom"
                                       placeholder="Email"
                                       value={user.email}
                                       onChange={(e) => handleChange(e)}
                                       required/>
                                <div className="invalid-feedback">E-mail is required</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="firstName">First name:</label>
                                <input type="text" name="firstName" className="form-control form-input-custom"
                                       placeholder="First name"
                                       value={user.firstName}
                                       onChange={(e) => handleChange(e)}
                                       required/>
                                <div className="invalid-feedback">First name is required</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last name:</label>
                                <input type="text" name="lastName" className="form-control form-input-custom"
                                       placeholder="Last name"
                                       value={user.lastName}
                                       onChange={(e) => handleChange(e)}
                                       required/>
                                <div className="invalid-feedback">Last name is required</div>
                            </div>

                            <button className="btn btn-dark w-100 mt-3" disabled={loading} type="submit">Register now</button>
                        </form>

                        <Link to ="/login" className="card-subtitle pt-3" style={{color: '#2a2a2a', textDecoration: 'none'}}>
                            I already have an account. <b>Take me to login page.</b>
                        </Link>
                    </div>
                </div>
        </>
    )


};

export {RegisterPage};