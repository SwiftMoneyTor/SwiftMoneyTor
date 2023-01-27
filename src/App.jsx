import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< Updated upstream
import { React, useState } from 'react';
=======
import React from 'react';
import { Route, Routes } from 'react-router-dom';
>>>>>>> Stashed changes
import './App.css';
import Container from './views/Container/Container';
import Footer from './views/Footer/Footer';
import Navigation from './views/Navigation/Navigation';
import DashboardHeader from './views/dashboard/DashboardHeader';

function App() {
  const [component, setComponent] = useState('home');
  const userOnline = true;
  
  return (
    <div className="App">
      {userOnline ?  <DashboardHeader userOnline={userOnline} /> : <Navigation handleComponent={(component) => { setComponent(component) }} />}
      {userOnline ? <Container userOnline={userOnline} /> : <Container component={component}/>}
      {userOnline ?  '' : <Footer component={component} />}
    </div>
  )
}

export default App
