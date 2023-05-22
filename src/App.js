import { Suspense } from 'react';
import React from 'react';
import './styles/App.css';
import { connect } from "react-redux";
import { authUserThank } from "./redux/thankCreator";
import './App.css';
import { setInitiallizedThank } from './redux/thankCreator';
import { compose } from "redux";
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import Preloader from './components/general/Preloader/Preloader';
import FriendsContainer from './components/Friends/FriendsContainer';
const Settings = React.lazy(() => import('./components/Settings/Settings'));

class App extends React.Component {
  
  componentDidMount(){
    this.props.setInitiallizedThank();
  }
  render() {
    if(!this.props.initiallized) return <Preloader />
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <NavBar />
          <div className='app__wrapper_content'>
            <Routes>
              <Route path='/profile/:usId?' element={<ProfileContainer />} />
              <Route path='/dialogs' element={<DialogsContainer />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/musics' element={<Musics />} />
              <Route path='/login' element={<LoginContainer />} />
              <Route path='/settings' element={
              <Suspense>
                <Settings />
              </Suspense>
              } />
            </Routes>
          </div>
          <Routes>
            <Route path='*' element={<FriendsContainer />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProp = state => ({initiallized: state.app.initiallized});

export default compose(
  connect(mapStateToProp, { authUserThank, setInitiallizedThank})
)(App)