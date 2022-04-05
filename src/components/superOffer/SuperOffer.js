import { useEffect, useState } from 'react'
import {Row, Col} from 'react-simple-flex-grid'
import './super_offer.css'


const SuperOffer = ({supperOffer}) => {
    const [remainingTime, setRemainingTime] = useState(1689885900000)
    let hour;
    let min;
    let sec;
    let total = remainingTime - new Date().getTime()
    if(total > 0){
        hour = Math.floor((total / 1000 / 3600) % 24)
        min = Math.floor((total / 1000 / 60) % 60)
        sec = Math.floor((total /1000) % 60)
    }else{
        hour = 0
        min = 0
        sec = 0
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(remainingTime - 1)
        }, 1000)

        return () => clearInterval(timer)
    })

    const superOffers = supperOffer.map((item, index) => {
        return(
            <Row key={index}>
                <Col lg={9}>
                    <div className="supper-offer-box">
                        <span className="title-supper-box">
                            پیشنهاد شگفت انگیز
                        </span>
                        <div className="body">
                            <Row>
                                <Col lg={4}>
                                    <div className="image-container">
                                        <img src={`assets/products_pic/${item.imageName}`} alt="" />
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="specification">
                                        <div className="price-row">
                                            <div className="price">{item.price}</div>
                                            <div className="percentage">{item.discount}</div>
                                        </div>
                                        <div className="title">{item.title}</div>
                                        <div className="counter-down">
                                            <span>{sec} : </span>
                                            <span>{min} : </span>
                                            <span>{hour}</span>
                                        </div>
                                        <div className="remaining-time">
                                            زمان باقی مانده تا پایان سفارش
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="banner">
                        <img src={`assets/products_pic/${item.bannerName}`} alt="" />
                    </div>
                </Col>
            </Row>
        )
    })
    return ( 
        <section className="supper-offer-sec">
            {superOffers}
        </section>
     );
}
 
export default SuperOffer;