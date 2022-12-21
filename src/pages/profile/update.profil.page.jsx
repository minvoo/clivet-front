import { useEffect, useState } from "react";
import { NavLink ,useLocation, useNavigate } from "react-router-dom";
import AuthenticationService from "../../services/authentication.service";
import UserService from "../../services/user.service";
import '../register/register-page.css'


const UpdateProfilPage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubbmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const search = useLocation().pathname;
    const splited = search.split("/");

    const ownerId = splited[2];


    //mounted
    useEffect(() => {
        UserService.getOwnerById(ownerId).then((response) =>
            setUser(response.data)
        );
    }, []);

    //<input name="x" value="y" onchange(event) => handleChange(event)>
    const handleChange = (e) => {
        const { name, value } = e.target;

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
        UserService.updateOwnerById(ownerId, user).then((response) => {
            navigate(`/pets?ownerId=${ownerId}`);
        })
    };

    return user ? (
        <>
            <div className="background">

                <div className="p-3 custom-card">
                    <p className="card-title">Update User</p>

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
                                disabled  />
                            <div className="invalid-feedback">Username is required</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" className="form-control form-input-custom"
                                placeholder="Password"
                                value={user.password}
                                onChange={(e) => handleChange(e)}
                                required />
                            <div className="invalid-feedback">Password is required</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" name="email" className="form-control form-input-custom"
                                placeholder="Email"
                                value={user.email}
                                onChange={(e) => handleChange(e)}
                                required />
                            <div className="invalid-feedback">E-mail is required</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="firstName">First name:</label>
                            <input type="text" name="firstName" className="form-control form-input-custom"
                                placeholder="First name"
                                value={user.firstName}
                                onChange={(e) => handleChange(e)}
                                required />
                            <div className="invalid-feedback">First name is required</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">First name:</label>
                            <input type="text" name="lastName" className="form-control form-input-custom"
                                placeholder="Last name"
                                value={user.lastName}
                                onChange={(e) => handleChange(e)}
                                required />
                            <div className="invalid-feedback">Last name is required</div>
                        </div>

                        <button className="btn btn-dark w-100 mt-3" disabled={loading} type="submit">Update User</button>
                    </form>
                    <div>
                        <center>
                            <NavLink
                                onClick={() => navigate(-1)}
                                className="btn btn-info w-100 mt-3" >
                                Go Back
                            </NavLink>
                        </center>
                    </div>
                </div>
            </div>
        </>
    ) : <></>


}

export { UpdateProfilPage };