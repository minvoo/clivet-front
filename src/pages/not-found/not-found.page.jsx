import {NavLink} from "react-router-dom";
import './notfound.css';
const NotFoundPage = () => {

    return (
        <div className="container ">
            <div className="row" style={{alignContent: "center"}}>
                <div className="col-md12 text-center">
                    <div>
                        <span className="display-1">
                        404
                    </span>
                        <div className="mb-4 mt-3">
                            <img src="../../cat-404.jpg" style={{width: 15 + '%'}}/>
                        </div>
                    <div className="mb-4 lead">
                        <p>Oops, it looks like you've stumbled upon a page that doesn't exist.
                            Don't worry, it's not your fault. These things happen.</p>
                        <p>We know how much your pets mean to you, and we promise to take care of them like they're our own.
                            So don't be discouraged, keep exploring our site and see
                            all the amazing services we have to offer. Your furry friends will thank you!</p>
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
export {NotFoundPage};