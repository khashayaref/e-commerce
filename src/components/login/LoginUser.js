import './loginuser.css';
import { Row, Col } from 'react-simple-flex-grid';
import { FaFacebookF, FaGooglePlusG, FaInstagram } from 'react-icons/fa';

const LoginUser = ({}) => {
  return (
    <section>
      <div className="login-container">
        <Row>
          <Col lg={8}>
            <div className="login-box">
              <form>
                <div className="input-group">
                  <label htmlFor="">نام کاربری</label>
                  <input type="text" />
                </div>
                <div className="input-group">
                  <label htmlFor="">رمز عبور</label>
                  <input type="text" />
                </div>
                <p className="do-you-have">
                  حساب کاربری ندارید؟
                  <a href=""> ایجاد حساب کاربری </a>
                  کمتر از یک دقیقه زمان شما را خواهد گرفت
                </p>
                <div className="submit-container">
                  <input value="ورود" type="submit" />
                </div>
              </form>
              <div className="social-auth">
                <a href="#">
                  <FaFacebookF></FaFacebookF>
                </a>
                <a href="#">
                  <FaGooglePlusG></FaGooglePlusG>
                </a>
                <a href="#">
                  <FaInstagram></FaInstagram>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="login-image-container">
              <img src="assets/login_page/log.png" alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default LoginUser;
