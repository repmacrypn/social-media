import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import './common_styles/demoMessageAlert.css';
import Navbar from './components/navbar/Navbar';
import HeaderContainer from './components/header/HeaderContainer';
const DialogsContainer = lazy(() => import('./components/dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/profile/ProfileContainer'));
const LoginPage = lazy(() => import('./components/loginPage/LoginPage'));
const SearchForFriendsContainer = lazy(() => import('./components/searchForFriends/SearchForFriendsContainer'));

class App extends React.Component {
  render() {
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='generalContent'>
          <Suspense fallback={<div className='demoMessageAlert'>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Navigate to='/profile' />} />
              <Route path='/profile/:userId?' element={<ProfileContainer />} />
              <Route path='/messages/*' element={<DialogsContainer />} />
              <Route path='/news/*' element={<div className='demoMessageAlert'>In Progress xxD</div>} />
              <Route path='/music/*' element={<div className='demoMessageAlert'>In Progress xxD</div>} />
              <Route path='/settings/*' element={<div className='demoMessageAlert'>In Progress xxD</div>} />
              <Route path='/searchForFriends/*' element={<SearchForFriendsContainer />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='*' element={<div className='demoMessageAlert'>404 NOT FOUND</div>} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

export default App;

