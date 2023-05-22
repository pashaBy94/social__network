import { ADD_POST, SET_CURRENT_PROFILE, SET_CURRENT_STATUS, DELETE_POST } from "./types";

export const postAdd = (mes) => ({ type: ADD_POST, mes });
export const postsDelete = (ids) => ({ type: DELETE_POST, ids });
export const setCurrentProfile = (profile) => ({ type: SET_CURRENT_PROFILE, profile });
export const setCurrentStatus = (status) => ({ type: SET_CURRENT_STATUS, status });

const initialState = {
    postsData: [
        { post: 'Все ок, javaScript и HTML5 an do!', id: 1, likescount: 11 },
        { post: 'Все ', id: 2, likescount: 11 },
        { post: 'Hi jek, bay Все ок, javaScript и HTML5 lan do!', id: 3, likescount: 11 },
        { post: 'Все ок, javaScript и HTML5 an do!', id: 4, likescount: 11 },
    ],
    currentProfile: null,
    currentStatus: '',
};

export function profilPageReducer(state = initialState, action) {
    let newState ={...state};
    switch (action.type) {
        case ADD_POST: {
            if (action.mes !== '') {
                newState.postsData = [...state.postsData];
                let post = { post: action.mes, id: state.postsData.length + 1, likescount: 0 };
                newState.postsData.push(post);
            }
            break;
        }
        case DELETE_POST: {
                newState.postsData = state.postsData.filter(el=>el.id !== action.ids);
            break;
        }
        case SET_CURRENT_PROFILE: {
            newState.currentProfile = { ...action.profile };
            break;
        }
        case SET_CURRENT_STATUS: {
            newState.currentStatus = action.status?action.status:'';
            break;
        }
        default: {}
    }
    return newState;
}

