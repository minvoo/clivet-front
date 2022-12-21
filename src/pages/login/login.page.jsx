
// function LoginPage()

import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import User from "../../models/user";
import {useDispatch, useSelector} from "react-redux";
import AuthenticationService from "../../services/authentication.service";
import {setCurrentUser} from "../../store/actions/user";
import '../register/register-page.css';
import { setFailMessage } from "../../store/actions/toast";
const LoginPage = () => {

    const [user, setUser] = useState(new User('', ''));
    const [loading, setLoading] = useState(false);
    const [submitted, setSubbmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const currentUser = useSelector(state => state.user);

    const navigate = useNavigate();

    const dispatch = useDispatch();
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

    const handleLogin =  (e) => {
        e.preventDefault();
        setSubbmitted(true);

        if (!user.username || !user.password) {
            return
        }

        setLoading(true);
        AuthenticationService.login(user).then(response => {
            //set user in session
            dispatch(setCurrentUser(response.data));
            dispatch(setFailMessage(`That didn't work`));
            navigate("/profile")
        }).catch(error => {
            console.log(error)
            setErrorMessage('Bad credentials')
            setLoading(false)
        });
    };

    return(
        <>
            <div className="background">

                <div className="p-3 custom-card">
                    <p className="card-title">Login</p>


                    {errorMessage &&
                        <div className="alert alert-danger">
                            {errorMessage}
                        </div>
                    }
                    <form onSubmit={(e) => handleLogin(e)}
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

                        <button className="btn btn-dark w-100 mt-3" disabled={loading} type="submit">Login now</button>
                    </form>

                    <Link to ="/register" className="card-subtitle pt-3" style={{color: '#2a2a2a', textDecoration: 'none'}}>
                        I don't have an account. <b>Take me to register page.</b>
                    </Link>
                </div>
            </div>
        </>
    );

};

export {LoginPage};