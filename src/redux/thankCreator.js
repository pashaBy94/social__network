import { setInitiallized } from "./appReducer";
import { getCaptchaFromStore, setAuthUser, setProfile } from "./authUserReducer";
import { savePhoto, setCurrentProfile, setCurrentStatus, updateAboutMyInfo } from "./profilePageReducer";
import { userAPI } from "../dal/api";
import { toggleIsLoader, setUser, setTotalCountPage, follow, unfollow, toggleDisabledFollow, setLengthCountPage } from "./usersPageReducer";

export const setInitiallizedThank = () => {
    return (dispatch) => {
        dispatch(authUserThank()).then(r => {
            dispatch(setInitiallized());
        })
    }
};

export function authUserThank() {
    return (dispatch) => {
        return (userAPI.setAuthentication().then(res => {
            if (res.resultCode === 0) {
                let { email, login, id } = res.data;
                dispatch(setAuthUser(email, login, id, true));
                userAPI.setPageProfile(id).then(res => {
                    dispatch(setProfile(res));
                })
            }
        }));
    }
}
export const getCaptchaThank = ()=>{
    return (dispatch)=>{
    userAPI.getCaptcha().then(res=>{
        if(res.status === 200)
        dispatch(getCaptchaFromStore(res.data.url));
    })
}
}

export const loginThank = (email, password, rememberMe, captcha, submitProps, setNoFail) => {
    return (dispatch) => {
        userAPI.login(email, password, rememberMe, captcha).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(authUserThank());
                dispatch(getCaptchaFromStore(null));
            } else if (res.data.resultCode === 10) {
                dispatch(getCaptchaThank());
                setNoFail(true);
            } else {
                setNoFail(true);
                submitProps({ errors: res.data.messages })
            }
        })
    }
}

export const logoutThank = () => {
    return (dispatch) => {
        userAPI.logout().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUser(null, null, null, false));
            } else {
            }
        });
    }
}

export const setCurrentProfileThunk = (usId, callback = (a) => ({ type: null })) => {
    return (dispatch) => {
        userAPI.setPageProfile(usId).then(res => {
            dispatch(setCurrentProfile(res));
            dispatch(callback(res));
        })
    }
}
export const getCurrentStatusThunk = (usId) => {
    return (dispatch) => {
        userAPI.getStatus(usId).then(res => {
            dispatch(setCurrentStatus(res));
        })
    }
}
export const setCurrentStatusThunk = (status) => {
    return (dispatch) => {
        userAPI.setStatus(status).then(res => {
            if (res.resultCode === 0)
                dispatch(setCurrentStatus(status));
        })
    }
}
export const thunkAddUsers = (countUsersPage, totalCountPage, numberCurrentPage, isLoad) => {
    return (dispatch) => {
        if (!isLoad) dispatch(toggleIsLoader(true))
        userAPI.setUsersPageNumber(countUsersPage, numberCurrentPage).then(res => {
            dispatch(setUser(res.data.items));
            dispatch(setTotalCountPage(res.data.totalCount));
            dispatch(setLengthCountPage(res.data.totalCount));
        }).then(res => dispatch(toggleIsLoader(false)));
    }
}
export const thunkAddNextUsers = (numPage, countUsersPage) => {
    return (dispatch) => {
        dispatch(toggleIsLoader(true));
        userAPI.setUsersPageNumber(countUsersPage, numPage).then(res => {
            dispatch(setUser(res.data.items));
        }).then(res => dispatch(toggleIsLoader(false)));
    }
}
export const thunkAddFollow = (id) => {
    return (dispatch) => {
        dispatch(toggleDisabledFollow(id, true));
        userAPI.addFollowUser(id).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(follow(id));
            }
        }).then(r => { dispatch(toggleDisabledFollow(id, false)) })
    }
}
export const thunkUnFollow = (id) => {
    return (dispatch) => {
        dispatch(toggleDisabledFollow(id, true));
        userAPI.deleteFollowUser(id).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(unfollow(id));
            }
        }).then(r => { dispatch(toggleDisabledFollow(id, false)) })
    }
}
export const savePhotoThunk = (photo) => {
    return (dispatch) => {
        userAPI.updatePhoto(photo).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(savePhoto(res.data.data.photos));
            }
        })
    }
}
export const updateInfoProfileThunk = (info, submitProps, setModEdit) => {
    return (dispatch) => {
        console.log(info, setModEdit);
        userAPI.updateInfoProfile(info).then(res => {
            console.log(res);
            if (res.data.resultCode === 0) {
                dispatch(updateAboutMyInfo(info));
                setModEdit(false);
            } else {
                submitProps({ errors: res.data.messages[0] })
            }
        })
    }
}