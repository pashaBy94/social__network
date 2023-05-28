import React, { Suspense } from 'react';
import './styles/App.css';
import { connect, Provider } from "react-redux";
import { authUserThank } from "./redux/thankCreator";
import './App.css';
import { setInitiallizedThank } from './redux/thankCreator';
import { compose } from "redux";
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import News from './components/News/News';
import { store } from './redux/redux-store';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import Preloader from './components/general/Preloader/Preloader';
import FriendsContainer from './components/Friends/FriendsContainer';

const Settings = React.lazy(() => import('./components/Settings/Settings'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const Musics = React.lazy(() => import('./components/Musics/Musics'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.setInitiallizedThank();
  }
  render() {
    if (!this.props.initiallized) return <Preloader />
    return (<>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className='app-wrapper'>
          <HeaderContainer />
          <NavBar />
          <div className='app__wrapper_content'>
            <Suspense>
              <Routes>
                <Route path='/profile/:usId?' element={<ProfileContainer />} />
                <Route path='/dialogs' element={<DialogsContainer />} />
                <Route path='/users' element={<UsersContainer />} />
                <Route path='/news' element={<News />} />
                <Route path='/musics' element={<Musics />} />
                <Route path='/login' element={<LoginContainer />} />
                <Route path='/settings' element={<Settings />} />
              </Routes>
            </Suspense>
          </div>
          <FriendsContainer />
          <Footer />
        </div>
      </BrowserRouter>
    </>
    )
  }
}

const mapStateToProp = state => ({ initiallized: state.app.initiallized });

const AppContainer = compose(
  connect(mapStateToProp, { authUserThank, setInitiallizedThank })
)(App);

export default function AppFull() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
