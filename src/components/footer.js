import './footer.css'

import { Link } from 'react-router-dom';

import logo from'../assets/m2l.png'

import fb from '../assets/fb.png'
import x from '../assets/x.webp'


function Footer({children}){
    return (
        
        <div className="footer"> 
          
    {children}
      
    <img src={logo} className="img_film"/>
   
  <ul>
    <li> <h3>Société</h3></li>
    <li>Conditions d'utilisation</li>
    <li>Politique de confidentialité</li>
    <li>Politique des cookies</li>
    <li>Politique des bons de réduction</li>

  </ul>
  
  <ul>
    <li><h3>Aide</h3></li>
    <li>FAQ's</li>
    <li>Nous Contacter</li>
  </ul>
 
  <ul>
    <li> <h3>Suivez nous</h3></li>
    <li><img src={fb} className="fb"/></li>
    <li><img src={x} className="x"/></li>
 

  </ul>
        </div>
       
       
    )
    
    
    
}
export default Footer;