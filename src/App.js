import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import './common_styles/demoMessageAlert.css';
import Navbar from './components/navbar/Navbar';
import HeaderContainer from './components/header/HeaderContainer';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common components/preloader/Preloader';
const DialogsContainer = lazy(() => import('./components/dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/profile/ProfileContainer'));
const LoginPage = lazy(() => import('./components/loginPage/LoginPage'));
const SearchForFriendsContainer = lazy(() => import('./components/searchForFriends/SearchForFriendsContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader />

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='generalContent'>
          <Suspense fallback={<div className='demoMessageAlert'>Loading...</div>}>
            <Routes>
              <Route path='/social-media' element={<Navigate to='/profile' />} />
              <Route path='/profile/:userId?' element={<ProfileContainer />} />
              <Route path='/messages/*' element={<DialogsContainer />} />
              <Route path='/news/*' element={<div className='demoMessageAlert'>In Progress xxD</div>} />
              <Route path='/music/*' element={<div className='demoMessageAlert'>In Progress xxD</div>} />
              <Route path='/settings/*' element={<div className='demoMessageAlert'>In Progress xxD</div>} />
              <Route path='/searchForFriends/*' element={<SearchForFriendsContainer />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='*' element={<div className='demoMessageAlert'>404 NOT FOUND</div>} />
              {/* работает только с BrowserRouter (у нас Hash) */}
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.appReducer.initialized,
  };
};

export default connect(mapStateToProps, { initializeApp })(App);

