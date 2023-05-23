import { SET_AUTH_USER, SET_PROFILE } from "./types";

export const setAuthUser = (email, login, id, isAuth) => ({ type: SET_AUTH_USER, data: { email, login, id, isAuth } });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });

const initialState = {
    authentication: {
        email: null,
        login: null,
        id: null,
    },
    isAuth: false,
    profile: null
};

export function authUserReducer(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
        case SET_AUTH_USER: {
            newState.authentication.id = action.data.id;
            newState.authentication.email = action.data.email;
            newState.authentication.login = action.data.login;
            newState.isAuth = action.data.isAuth;
            break;
        }
        case SET_PROFILE: {
            newState.profile = { ...action.profile };
            break;
        }
        default: {}
    }
    return newState;
}
