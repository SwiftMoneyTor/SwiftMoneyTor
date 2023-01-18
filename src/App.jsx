import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useEffect } from 'react';
import './App.css';
import useAppStore from './appStore';
import DashContainer from './views/Dashboard/DashContainer/DashContainer';
import Footer from './views/Footer/Footer';
import Container from './views/LandingPage/Container/Container';
import Navigation from './views/LandingPage/Navigation/Navigation';


function App() {
  const dashboard = useAppStore(state => state.dashboard)
  const setDashboard = useAppStore(state => state.setDashboard)

  useEffect(() => {
    if (sessionStorage.getItem('loggedin')) {
      setDashboard()
    }
  }, [])

  return (
    <div className="App">
      {!dashboard ?
        <>
          <Navigation />
          <Container />
          <Footer />
        </>
        :
        <>
          <DashContainer />
        </>
      }

    </div>
  )
}

export default App
