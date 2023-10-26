import './carousel.css'
import React, { useEffect, useState} from 'react';
import raquette from '../assets/raquette.jpg'
import bt from '../assets/balles tennis.jpg'
import rt from '../assets/raquettetennis.jpg'
import rb from '../assets/raquette-badminton.jpg'
import v from '../assets/volants.jpg'
import bb from '../assets/basketballon.webp'


const Carousel = () => {
    const data = [   <img src={raquette} className="raquette"/>,<img src={rt} className="rt"/>,<img src={bt} className="bt"/>,,<img src={rb} className="rb"/>,<img src={v} className="v"/>,<img src={bb} className="bb"/>]
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselInfiniteScroll = () => {
        if (currentIndex === DataTransfer.length-1){
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex+1)
    }

    useEffect(()=> {
        const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)

        return () =>(interval)})

        return (
            <div className='carousel-container'>
                {data.map((item, index) => {
                    return <h1 className='carousel-item'
                    style={{transform: `translate(-${currentIndex * 100}%)`}}
                    key={index}>{item}</h1>
                })}
            </div>
        )
}
export default Carousel