import { useEffect } from "react";
import toast, {Toaster} from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clearFailMessage } from "../store/actions/toast";
import toastReducer from "../store/reducers/toast.reducer";
import { CLEAR_FAIL_MESSAGE } from "../store/types";
export const ToastDisplayer = (props) => {

    const failMessage = useSelector(state => state.failMessage);
    const dispatch = useDispatch();
    useEffect(() => {
        if(failMessage) {
        toast.error(failMessage);
        dispatch(clearFailMessage());
    }
    

    },[failMessage]);

    return <>{props.children}<Toaster/></>;
};