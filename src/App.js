
import './App.css';
import Body from './components/body';
import Navbar from './components/nav.js';
import Footer from './components/footer';
import Carousel from './components/carousel';
import { Route,Routes } from 'react-router-dom';
import Produits from './components/produits';
import Produitsh from './components/produitsh';
import Produitsf from './components/produitsf';


function App() {
  return (
    <div className="App">
    <Navbar/>
  <Body/>
    <Carousel/>
    <Produits/>
    <Produitsh/>
    <Produitsf/>
    <Produits/>
    <Footer/>
    </div>
  );
}

export default App;
