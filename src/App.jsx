import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState } from 'react';
import './App.css';
import Footer from './views/Footer/Footer';
import Container from './views/LandingPage/Container/Container';
import Navigation from './views/LandingPage/Navigation/Navigation';


function App() {
  const [component, setComponent] = useState('home')
  const [dashboard, setDashboard] = useState(false)
  return (
    <div className="App">
      {!dashboard ?
        <>
          <Navigation handleComponent={(component) => { setComponent(component) }} />
          <Container component={component} handleDashboard={(dashboard) => { setDashboard(dashboard) }} />
          <Footer component={component} />
        </>
        :
        <>
          {/*apply dashboard components here*/}
        </>
      }

    </div>
  )
}

export default App
