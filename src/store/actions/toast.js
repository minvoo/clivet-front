import { CLEAR_FAIL_MESSAGE, SET_FAIL_MESSAGE } from "../types";
export const setFailMessage = (message) => {
    return {
        type: SET_FAIL_MESSAGE,
        payload: message,
    };
};
    export const clearFailMessage = () =>{
        return {
            type: CLEAR_FAIL_MESSAGE,
        }
};

