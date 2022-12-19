import {NavLink} from "react-router-dom";
import './unauthorized.css';
const UnauthorizedPage = () => {

    return (
        <div className="container">
            <div className="row" style={{alignContent: "center"}}>
                <div className="col-md12 text-center">

                    <div>
                    <span className="display-1">
                        401
                    </span>
                        <div className="mb-5 mt-3">
                            <img src="../../401.png" style={{width: 25 + '%'}}/>
                        </div>
                        <div className="mb-4 lead">
                            <p>Your pets deserve the best care, <b>even if you can't access it</b></p>
                        </div>
                        <div className="mb-4 lead">
                            <button type="button" className="btn btn-dark">
                                <NavLink to="/home" className="nav-link">Back to home</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export {UnauthorizedPage};