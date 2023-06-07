import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import { dialogsPageReducer } from "./dialogsPageReducer";
import { profilPageReducer } from "./profilePageReducer";
import { usersPageReducer } from './usersPageReducer';
import { authUserReducer } from './authUserReducer';
import { appReducer } from './appReducer';
import { musicReducer } from './musicReducer';
import thunkMiddleware from 'redux-thunk';


const reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilPageReducer,
    usersPage: usersPageReducer,
    authUser: authUserReducer,
    app: appReducer,
    musicPage: musicReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));