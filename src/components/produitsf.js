import './produits.css'
import survethaut from '../assets/survethautf.png'
import survetbas from '../assets/survetbasf.png'
import panier from '../assets/panier.png'
import tshirt from'../assets/tshirtf.png'
import short from '../assets/shortf.png'
import chasuble from '../assets/chasuble.jpg'
import chaussuresf from '../assets/chaussuresf.png'
function  Produitsf(){

    return (
        
        <div className="card"> 
        <p><img src={survethaut} className="survethautf"/><span>2.00€</span><span className='addbtn'><img src={panier} className="panierbtn"/></span></p>
        <p><img src={survetbas} className="survetbasf"/><span>2.00€</span><span className='addbtn'><img src={panier} className="panierbtn"/></span></p>
        <p><img src={tshirt} className="tshirtf"/><span>2.00€</span><span className='addbtn'><img src={panier} className="panierbtn"/></span></p>
        <p><img src={short} className="shortf"/><span>2.00€</span><span className='addbtn'><img src={panier} className="panierbtn"/></span></p>
        <p><img src={chasuble} className="chasuble"/><span>2.00€</span><span className='addbtn'><img src={panier} className="panierbtn"/></span></p>
        <p><img src={chaussuresf} className="chaussuresf"/><span>2.00€</span><span className='addbtn'><img src={panier} className="panierbtn"/></span></p>
      
   
        
    
        
        
        
     
        </div>
       
    )
}

export default Produitsf