
import { useState } from "react";
import Slider from "../components/slider/Slider";
import Products from "../components/products/Products";
import SuperOffer from "../components/superOffer/SuperOffer";
import DragableList from "../components/dragableList/DragableList";


const Home = (props) => {
    const [slides, setSlides] = useState([
        {
            id: 1, 
            name : 'pic1.jpeg',
            text : 'It is so nice',
        },
        {
            id: 2,
            name : 'pic2.jpg',
            text : 'It is so nice',
        },
        {
            id: 3,
            name : 'pic3.jpeg',
            text : 'It is so nice',
        }
    ])
    const [products, setProducts] = useState([
        {
            special: true,
            price: 400000,
            name:'gucci',
            src:'p1.jpeg',
        },
        {
            special: false,
            price: 600000,
            name:'2020',
            src: 'p2.jpeg',
        },
        {
            special: true,
            price: 200000,
            name:'1bilion',
            src: 'p3.jpeg',
        },
        {
            special: false,
            price: 300000,
            name:'odor',
            src:'p1.jpeg',
        }
    ])

    const [supperOffers, setSupperOffer] = useState([
            {
                imageName: 'p4.jpeg',
                bannerName: 'banner1.jpeg',
                price : 430000,
                discount : '40%',
                title : 'بهترین عطر موجود بازار'
            },
        ])
    

    return ( 
        <div>
            <Slider sliders={slides}/>
            <Products items={products}/>
            <SuperOffer supperOffer={supperOffers}/>
            <DragableList products={products}/>
        </div>
     );
}
 
export default Home;
