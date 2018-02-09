import { combineReducers } from 'redux';
import {EDIT_USER_PROPERTY, SET_USER, INVALID_USER, USER_REGISTERED} from '../constans/ActionTypes'

const initialState = {
    user: {},
    error: '',
};

const setUser = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_USER_PROPERTY:
            console.log(`reducers: EDIT_LOGIN_PROPERTY -> setUser ${JSON.stringify(action)}`);
            return { ...state,
                user: {
                    ...state.user,
                    [action.name]: action.value
                }
            };
        case SET_USER:
            console.log(`reducers: SET_USER -> setUser ${JSON.stringify(action)}`);
            return { ...state,
                user: action.user
            };
        default:
            console.log(`reducers: setUser state ${JSON.stringify(state)}`);
            return state
    }
};

const setError = (state = initialState, action) => {
    switch (action.type) {
        case INVALID_USER:
            console.log(`reducers: INVALID_USER -> setError ${JSON.stringify(action)}`);
            return { ...state,
                error: action.errorMsg
            };
        case USER_REGISTERED:
            return { ...state,

            }

        default:
            console.log(`reducers: setError state ${JSON.stringify(state)}`);
            return state;
    }
};

export const getUser = state => {
    console.log(`getUser: ${JSON.stringify(state.setUser.user)}`);
    return state.setUser.user === undefined ? initialState.user : state.setUser.user;
};

export const isError = state => {
    console.log(`isUserValid: ${JSON.stringify(state)}`);
    return state.setError.error;
};


export default combineReducers({
    setUser,
    setError
})


