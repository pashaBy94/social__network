import { SET_INITIALLIZED, SET_TOP_FRIENDS, SET_ERROR } from "./types";

export const setInitiallized = () => ({ type: SET_INITIALLIZED});
export const setTopFriends = (list)=>({ type: SET_TOP_FRIENDS, list});
export const setError = (error)=>({type: SET_ERROR, error});

const initialState = {
    initiallized: false,
    topFriends: [{img:"noava.png",name:'Dima', id:'23566'},{img:"noava.png",name:'Lola', id:'23567'},{img:"noava.png",name:'Miha', id:'23557'},{img:"noava.png",name:'Miha', id:'23557'},{img:"noava.png",name:'Miha', id:'23557'},{img:"noava.png",name:'Miha', id:'23557'}],
    error: null,
};

export function appReducer(state = initialState, action) {
    let newState = {...state};
    switch (action.type) {
        case SET_INITIALLIZED: {
            newState.initiallized = true;
            break;
        }
        case SET_TOP_FRIENDS: {
            newState.topFriends = action.list;
            break;
        }
        case SET_ERROR: {
            newState.error = action.error;
            break;
        }
        default: {}
    }
    return newState
}