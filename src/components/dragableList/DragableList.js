import './dragableList.css'
import Slider from 'react-slick';
import Product from '../products/product/Product';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const DragableList = ({products}) => {
    const settings = {
        dots: true,
        slidesToShow: 3,
      };
    return ( 
        <div className="dragable-list">
            <div className="title">
                <span>هندزفری ها</span>
            </div>
            <div className="carousel theme">
                <Slider {...settings}>
                    {products.map((product, index) => {
                        return <Product item={product} key={index}/>
                    })}
                </Slider>
            </div>
        </div>
     );
}
 
export default DragableList;