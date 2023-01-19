import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoutes from './utils/PrivateRoutes/PrivateRoutes';
import DashContainer from './views/Dashboard/DashContainer/DashContainer';
import Error from './views/Error/Error';
import MainLanding from './views/LandingPage/MainLanding/MainLanding';
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLanding />} />
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<DashContainer />} />
          <Route path='/inventory' element={<DashContainer />} />
          <Route path='/reports' element={<DashContainer />} />
          <Route path='/accounts' element={<DashContainer />} />
          <Route path='/logout' element={<DashContainer />} />
        </Route>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
