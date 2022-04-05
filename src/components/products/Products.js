import './products.css'
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import Product from './product/Product';



const Products = ({items}) => {
    let allproducts = null
    if (items){
        allproducts = items.map((item,index) => {
            return(
                <Col span={3} lg={3} md={4} sm={6} xs={12} key={index}>
                    <Product item={item}/>
                </Col>
            )
        })
    }else{
        allproducts = <h4>Loading...</h4>
    }
    
    return ( 
        <Row justify="space-between" className='product-sec'>
            {allproducts}
        </Row>
     );
}
 
export default Products;