import {useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";

export const AuthGuard = ({children, roles}) => {

    const currentUser = useSelector(state => state.user);
    const navigate =  useNavigate();
    const authorize = () => {
        if (!currentUser){
            return (<Navigate to={{pathname: '/login'}}/>);
        }

        if (roles?.indexOf(currentUser.role) === -1){
            return (<Navigate to={{pathname: '/401'}}/>);
        }

        return (children);
    };

return (authorize());
};