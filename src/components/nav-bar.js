import logo from "../logo.svg";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearCurrentUser} from "../store/actions/user";
import {Role} from "../models/role";
import './navbar.css';

const NavBar = () => {

    const currentUser = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        dispatch(clearCurrentUser());
        navigate('/login');
    }
    return (
        <nav className="navbar navbar-expand navbar-dark navbar-custom">
            <NavLink to="/" className="navbar-brand ms-1 ">
                <img src="/clivet-logo.png" className="App-logo" alt="logo"/>
                CLIVET
            </NavLink>
            {currentUser?.role ===  Role.ADMIN &&
                <div className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/owners" className="nav-link">
                            Admin
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/home" className="nav-link">
                            Home
                        </NavLink>
                    </li>
                </div>
            }
            {!currentUser&&
                <div className="navbar-nav ms-auto me-4">
                    <li className="nav-item"><NavLink to="/register" className="nav-link">Register</NavLink></li>
                    <li className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li>
                </div>
            }

            {currentUser &&
                <div className="navbar-nav ms-auto me-4">
                    <li className="nav-item-li-text">Hi, {currentUser.firstName} {currentUser.lastName}!</li>
                    <li className="nav-item"><NavLink to="/profile" className="nav-link">My profile</NavLink></li>
                    <li className="nav-item"><NavLink to="#" className="nav-link" onClick={() => logout()}>Logout</NavLink></li>
                </div>
            }
        </nav>

    );
};

export
{
    NavBar
}
    ;