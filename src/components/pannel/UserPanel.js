import './userpanel.css'
import {Row, Col} from 'react-simple-flex-grid'
import {
    FaAngleUp, FaBoxOpen, FaBell, FaClipboardList, 
    FaChartBar, FaUsers, FaHeadset, FaCog, FaPowerOff,
    FaAlignJustify, FaSearch, FaRedo, FaClipboard,
    FaBox, FaShuttleVan, FaDollarSign, FaAngleDown
} from 'react-icons/fa'
import {VictoryPie} from 'victory'
import { useState } from 'react'



const UserPanel = ({}) => {

    const [closeDetails, setCloseDetails] = useState(true)

    return ( 
        <div className="user-panel">
            <Row>
                <Col lg={2}>
                    <section className="menu">
                        <div className="user-info">
                            <div className="image-name">
                                <img src="assets/login_page/user-pic.jpg" alt="" />
                                <span className="name">khashayar fallah</span>
                                <i onClick={() => setCloseDetails(!closeDetails)}>
                                    {closeDetails ? <FaAngleUp></FaAngleUp> : <FaAngleDown></FaAngleDown>}
                                </i>
                            </div>
                            {closeDetails && <div className="details">
                                <div className="details-item">
                                    <span>سطح دسترسی: </span>
                                    <span>ادمین</span>
                                </div>
                                <div className="details-item">
                                    <span>وضعیت: </span>
                                    <span>آنلاین</span>
                                </div>
                            </div>}
                            
                        </div>
                        <div className="menu-btns">
                            <a href="" className="item">
                                <i><FaBoxOpen></FaBoxOpen></i>
                                <span>محصولات</span>
                            </a>
                            <a href="" className="item">
                                <i><FaClipboardList></FaClipboardList></i>
                                <span>سفارش ها</span>
                            </a>
                            <a href="" className="item">
                                <i><FaChartBar></FaChartBar></i>
                                <span>گزارش ها</span>
                            </a>
                            <a href="" className="item">
                                <i><FaHeadset></FaHeadset></i>
                                <span>پشتیبانی</span>
                            </a>
                            <a href="" className="item">
                                <i><FaUsers></FaUsers></i>
                                <span>کاربرها</span>
                            </a>
                        </div>
                    </section>
                </Col>
                <Col lg={10}>
                    <section className='main-box'>
                        <header>
                            <nav>
                                <div className="right">
                                    <i ><FaAlignJustify></FaAlignJustify></i>
                                    <div className="search">
                                        <input type="text" name="" id="" />
                                        <i><FaSearch></FaSearch></i>
                                    </div>
                                </div>
                                <div className="left">
                                    <a href=""><FaBell></FaBell></a>
                                    <a href=""><FaCog></FaCog></a>
                                    <a href=""><FaPowerOff></FaPowerOff></a>
                                </div>
                            </nav>
                            <div className="header-message">
                                <h3>آخرین ورود</h3>
                                <div className="lang-btn">فارسی</div>
                            </div>
                        </header>
                        <div className="holder">
                            <Row>
                                <Col lg={3}>
                                    <div className="minicard">
                                        <div className="right">
                                            <i><FaClipboard></FaClipboard></i>
                                        </div>
                                        <div className="left">
                                            <span>تکمیل انبار</span>
                                            <span>۴۰۰</span>
                                        </div>
                                    </div>
                                    
                                </Col>
                                <Col lg={3}>
                                    <div className="minicard">
                                        <div className="right">
                                            <i><FaBox></FaBox></i>
                                        </div>
                                        <div className="left">
                                            <span>محصولات</span>
                                            <span>۴۰۰</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="minicard">
                                        <div className="right">
                                            <i><FaShuttleVan></FaShuttleVan></i>
                                        </div>
                                        <div className="left">
                                            <span>تحویل پست</span>
                                            <span>۵۰</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="minicard">
                                        <div className="right">
                                            <i><FaDollarSign></FaDollarSign></i>
                                        </div>
                                        <div className="left">
                                            <span>تسویه</span>
                                            <span>۲۰۰۰</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="income-box">
                                <div className="header">
                                    <div className="right">
                                        درآمد
                                    </div>
                                    <div className="left">
                                        <i><FaCog></FaCog></i>
                                        <i><FaRedo></FaRedo></i>
                                    </div>
                                </div>
                                <div className="content">
                                    <VictoryPie data={[
                                    { x: "Gucci", y: 25 },
                                    { x: "1Bil", y: 25 },
                                    { x: "Channel", y: 35 },
                                    { x: "Angel", y: 15}
                                    ]}
                                    colorScale={['red', 'yellow','orange','navy']}>
                                    </VictoryPie>
                                </div>
                            </div>
                        </div>
                    </section>
                </Col>
            </Row>
        </div>
     );
}
 
export default UserPanel;