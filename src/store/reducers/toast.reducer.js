import { CLEAR_FAIL_MESSAGE, SET_FAIL_MESSAGE } from "../types";

const toastReducer = (state = {}, action) => {
    switch (action?.type) {
        case SET_FAIL_MESSAGE:
            
            return {...state,failMessage:action.payload};
            case CLEAR_FAIL_MESSAGE:
            return {...state,failMessage:null};
    };
};

export default toastReducer;
