import './produits.css'
import raquette from '../assets/raquette.jpg'
import balletennis from '../assets/balles tennis.jpg'
import raquettetennis from '../assets/raquettetennis.jpg'
import raquettebad from '../assets/raquette-badminton.jpg'
import volants from '../assets/volants.jpg'
import basketball from '../assets/basketballon.webp'
import panier from '../assets/panier.png'

function  Produits(){

    return (
        
        <div className="card"> 
        <p><img src={raquette} className="raquette"/><span>2.00€</span><span className='addbtn'><img src={panier} className="panierbtn"/></span></p>
        <p><img src={raquettetennis} className="raquettetennis"/><span>2.00€</span><span className='addbtn'><img src={panier} className="panierbtn"/></span></p>
        <p><img src={balletennis} className="balletennis"/><span>2.00€</span><span className='addbtn'><img src={panier} className="panierbtn"/></span></p>
        <p><img src={raquettebad} className="raquettebad"/><span>2.00€</span><span className='addbtn'><img src={panier} className="panierbtn"/></span></p>
        <p><img src={volants} className="volants"/><span>2.00€</span><span className='addbtn'><img src={panier} className="panierbtn"/></span></p>
        <p><img src={basketball} className="basketball"/><span>2.00€</span><span className='addbtn'><img src={panier} className="panierbtn"/></span></p>
      
   
        
    
        
        
        
     
        </div>
       
    )
}

export default Produits