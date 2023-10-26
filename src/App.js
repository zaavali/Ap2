
import './App.css';
import Body from './components/body';
import Navbar from './components/nav.js';
import Footer from './components/footer';
import Carousel from './components/carousel';
import { Route,Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
    <Navbar/>
  <Body/>
    <Carousel/>
    
    <Footer/>
    </div>
  );
}

export default App;
