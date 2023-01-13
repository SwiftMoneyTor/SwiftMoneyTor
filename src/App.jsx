import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState } from 'react';
import './App.css';
import Container from './views/Container/Container';
import Footer from './views/Footer/Footer';
import Navigation from './views/Navigation/Navigation';


function App() {
  const [component, setComponent] = useState('home')
  return (
    <div className="App">
      <Navigation handleComponent={(component) => { setComponent(component) }} />
      <Container component={component} />
      <Footer />
    </div>
  )
}

export default App
