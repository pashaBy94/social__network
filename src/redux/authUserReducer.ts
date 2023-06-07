import { SET_AUTH_USER, SET_PROFILE, GET_CAPTCHA } from "./types";

export const setAuthUser = (email, login, id, isAuth) => ({ type: SET_AUTH_USER, data: { email, login, id, isAuth } });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const getCaptchaFromStore = (urls) => ({type: GET_CAPTCHA, urls});

export type authenticationType = {
    email: string | null,
    login: string | null,
    id: string | number | null
};
export type initialStateType = {
    authentication: authenticationType,
    isAuth: boolean,
    profile: object | null,
    captchaUrl: null | string | object,

}

const initialState: initialStateType = {
    authentication: {
        email: null,
        login: null,
        id: null,
    },
    isAuth: false,
    profile: null,
    captchaUrl: null,
};

export function authUserReducer(state = initialState, action:any) {
    console.log(action);
    
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
        case GET_CAPTCHA: {
            newState.captchaUrl = action.urls;
            break;
        }
        default: {}
    }
    return newState;
}
