import './produits.css'
import survethaut from '../assets/survethauth.png'
import survetbas from '../assets/survetbash.png'
import panier from '../assets/panier.png'
import tshirt from'../assets/tshirt.jpg'
import short from '../assets/short.jpg'
import chasuble from '../assets/chasuble.jpg'
import chaussuresh from '../assets/chaussuresh.jpg'
function  Produitsh(){

    return (
        
        <div className="card"> 
        <p><img src={survethaut} className="survethaut"/><span>2.00€</span><span className='addbtn'><img src={panier} className="panierbtn"/></span></p>
        <p><img src={survetbas} className="survetbas"/><span>2.00€</span><span className='addbtn'><img src={panier} className="panierbtn"/></span></p>
        <p><img src={tshirt} className="tshirt"/><span>2.00€</span><span className='addbtn'><img src={panier} className="panierbtn"/></span></p>
        <p><img src={short} className="short"/><span>2.00€</span><span className='addbtn'><img src={panier} className="panierbtn"/></span></p>
        <p><img src={chasuble} className="chasuble"/><span>2.00€</span><span className='addbtn'><img src={panier} className="panierbtn"/></span></p>
        <p><img src={chaussuresh} className="chaussuresh"/><span>2.00€</span><span className='addbtn'><img src={panier} className="panierbtn"/></span></p>
      
   
        
    
        
        
        
     
        </div>
       
    )
}

export default Produitsh