import {FaStar, FaHeart, FaShoppingCart} from 'react-icons/fa'
import './product.css'

const Product = ({item}) => {
    return ( 
        <div className="shopping-card">
                <div className="image-sec">
                    <img src={`assets/products_pic/${item.src}`} alt="" />
                    {item.special && <span className="hot-offer">پیشنهاد ویژه</span>}
                    <div className="stars">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
                <div className="title">
                    {item.name}
                </div>
                <div className="buttons">
                    <div className="right">
                        <div className="price">{item.price}</div>
                    </div>
                    <div className="left">
                        <div className="extend-btn">
                            <a href="" className='b-text'>علاقه</a>
                            <a href="" className='b-icon'><FaHeart/></a>
                        </div>
                        <div className="extend-btn">
                            <a href="" className='b-text'>خرید</a>
                            <a href="" className='b-icon'><FaShoppingCart/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Product;