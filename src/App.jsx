import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashContainer from './views/Dashboard/DashContainer/DashContainer';
import MainLanding from './views/LandingPage/MainLanding/MainLanding';
import MainLogin from './views/MainLogin/MainLogin';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLanding />} />
        <Route path='/login' element={<MainLogin />} />
        <Route path='/dashboard' element={<DashContainer />} />
        <Route path='/inventory' element={<DashContainer />} />
        <Route path='/reports' element={<DashContainer />} />
        <Route path='/accounts' element={<DashContainer />} />
        <Route path='/logout' element={<DashContainer />} />
      </Routes>
    </div>
  )
}

export default App
