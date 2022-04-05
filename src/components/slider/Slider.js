import './slider.css'
import {FaCircle} from 'react-icons/fa'
import { useEffect, useState } from 'react'
import 'animate.css';


const Slider = ({sliders}) => {
    const [current, setCurrent] = useState(1)
    const lengthSlider = sliders.length

    const autoScroll = true
    let intervalTime = 4000


    useEffect(() => {
        if(autoScroll){
            const showSlider = setInterval(() => setCurrent(current === lengthSlider ?  1 : current + 1), intervalTime)
            
            return () => clearInterval(showSlider)
        }
    },[current])


    if (!Array.isArray(sliders) || lengthSlider == 0){
        return null
    }
    const setSliderHandler = (id) => {
        setCurrent(id)
    }
    
    const slides = sliders.map((slide) =>{
        return(
            <div className={slide.id === current ? 'item active' : 'item'} key={slide.id}>
                <img src={`assets/slider_pic/${slide.name}`} alt="" />
                <span>{slide.text}</span>
            </div>
        )
    })

    const buttons = sliders.map((item) => {
        return(
            <FaCircle key={item.id} onClick={() => setSliderHandler(item.id)}></FaCircle>
        )
    })

   
    return ( 
        <section className="slider">
            <div className='slides'>
                {slides}
            </div>
            <div className='buttons'>
                {buttons}
            </div>
        </section>
     );
}
 
export default Slider;