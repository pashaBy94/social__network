import { FOLLOW, UNFOLLOW, SET_USERS, COUNT_PAGE, SET_TOTAL_COUNT_PAGE, SET_CURRENT_PAGE, TOGGLE_ISLOADER, TOGGLE_DISABLED_FOLLOW } from "./types";
import { followUnfollowHelper } from "../utils/helpers";

export const follow = (id)=>({type: FOLLOW, id});
export const unfollow = (id)=>({type: UNFOLLOW, id});
export const setUser = (us)=>({type: SET_USERS, us});
export const setCountPage = (totalCountPage, countUsersPage)=>({type: COUNT_PAGE, totalCountPage, countUsersPage});
export const setTotalCountPage = (totalCountPage)=>({type: SET_TOTAL_COUNT_PAGE, totalCountPage});
export const setCurrentPage = (currentPage)=>({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsLoader = (propLoader)=>({type: TOGGLE_ISLOADER, propLoader});
export const toggleDisabledFollow = (id, isLoad)=>({type: TOGGLE_DISABLED_FOLLOW, id, isLoad});

const initialState = {
    users: [],
    numberCurrentPage: 1,
    countUsersPage: 10,
    totalCountPage: 0,
    countPage: 0,
    isLoader: true,
    isDisabledFollowButton: [],
};

export function usersPageReducer(state = initialState, action){
    let newState = {...state};
    switch (action.type) {
        case FOLLOW: {
            followUnfollowHelper(newState.users, action.id, true);
            break;
        }
        case UNFOLLOW: {
            followUnfollowHelper(newState.users, action.id, false);
            break;
        }
        case SET_USERS:{
            newState.users = [...action.us];
            break;
        }
        case COUNT_PAGE:{
            newState.countPage = Math.min(Math.ceil(action.totalCountPage/action.countUsersPage), 10);
            break;
        }
        case SET_TOTAL_COUNT_PAGE:{
            newState.totalCountPage = action.totalCountPage;
            break;
        }
        case SET_CURRENT_PAGE:{
            newState.numberCurrentPage = action.currentPage;
            break;
        }
        case TOGGLE_ISLOADER:{
            newState.isLoader = action.propLoader;
            break;
        }
        case TOGGLE_DISABLED_FOLLOW:{
            if(action.isLoad){
                if(!newState.isDisabledFollowButton.includes(action.id))
                    newState.isDisabledFollowButton.push(action.id);
            } else{
                newState.isDisabledFollowButton = newState.isDisabledFollowButton.filter((id)=>id !== action.id)
            }
            break;
        }
        default: {}
    }
    return newState;
}
