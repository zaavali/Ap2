
import React from 'react';
import { Link } from 'react-router-dom';
import'./nav.css'
import logo from'../assets/m2l.png'
import user from '../assets/user.png'
import panier from '../assets/panier.png'



function Nav({children}){
    return (
        
        <div className="nav"> 
          
    {children}
      
    <img src={logo} className="img_film"/>
    <Link to="/">Accueil </Link>
    <Link to="/produits">Produits</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/user"><img src={user} className="user"/>Se Connecter</Link>
   <img src={panier} className="panier"/><b className='b'>0</b>
        </div>
       
       
    )
    
    
    
}
export default Nav;