import React from 'react'
import { Row, Col, Icon, Divider } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faHandHoldingUsd, faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './FooterComponent.css';


const FooterComponent = (props) => {
    const importAll = (r) => {
        return r.keys().map(r);
    }
    const Banner = importAll(require.context('../../../Images/Footer-Images', false, /\.(png|jpe?g|svg)$/));


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div>
            <Row style={{ marginBottom: '-29px' }}>
                <Carousel
                    responsive={responsive}
                    autoPlay
                    autoPlaySpeed={2000}
                    keyBoardControl
                    infinite
                    draggable
                    slidesToSlide={2}
                >
                    {Banner.map((banner, index) => {
                        return (
                            <div
                                className="carouselItem"
                                key={index}
                            >
                                <img
                                    src={banner}
                                    height="140px"
                                    width="245px"
                                    alt="banner_carousel"
                                >
                                </img >
                            </div >
                        )
                    })}
                </Carousel >;
            </Row >
            <Row
                className="footer-container"
                style={
                    {
                        backgroundColor: 'black',
                        color: 'white',
                        marginTop: '15px',
                        height: '260px'
                    }}
            >
                <Row className='row-footer'>
                    <Col span={8}>
                        <FontAwesomeIcon
                            icon={faHeadset}
                            color="#ff85c0"
                            size="2x"
                        />
                        <Divider type="vertical" />
                        <strong>HỖ TRỢ MIỄN PHÍ</strong>

                    </Col>
                    <Col span={8}>
                        <FontAwesomeIcon
                            icon={faHandHoldingUsd}
                            color="#52c41a"
                            size="2x"
                        />
                        <Divider type="vertical" />
                        <strong>100% HOÀN TIỀN</strong>
                    </Col>
                    <Col span={8}>
                        <FontAwesomeIcon
                            icon={faTruckMoving}
                            color="#2f54eb"
                            size="2x"
                        />
                        <Divider type="vertical" />

                        <strong>GIAO HÀNG TẬN NƠI</strong></Col>
                </Row>
                <Row className='row-footer-last'>
                    <Row>
                        <Col span={6}>
                            <dl>
                                <dd>
                                    <strong>VỀ CHÚNG TÔI</strong>
                                </dd>
                                <dd>
                                    Giới thiệu
                                            </dd>
                                <dd>
                                    Giao hàng
                                            </dd>
                                <dd>
                                    Đổi trả
                                            </dd>
                            </dl>
                        </Col>
                        <Col span={6}>
                            <dl>
                                <dd>
                                    <strong>KẾT NỐI</strong>
                                </dd>
                                <dd>
                                    Facebook&emsp;<Icon type="facebook"></Icon>
                                </dd>
                                <dd>
                                    Gmail&emsp;<Icon type="google"></Icon>
                                </dd>
                                <dd>
                                    Instagram&emsp;<Icon type="instagram"></Icon>
                                </dd>
                            </dl>
                        </Col>
                        <Col span={6}>
                            <dl>
                                <dd>
                                    <strong>TRỢ GIÚP</strong>
                                </dd>
                                <dd>
                                    Hướng dẫn mua hàng
                                            </dd>
                                <dd>
                                    Hưỡng dẫn thanh toán
                                            </dd>
                                <dd>
                                    Tài khoản giao dịch
                                            </dd>
                            </dl>
                        </Col>
                        <Col span={6}>
                            <dl>
                                <dd>
                                    <strong>HÃY ĐẾN VỚI CHÚNG TÔI</strong>
                                </dd>
                            </dl>

                        </Col>
                    </Row>
                    <Divider />
                    <Row style={{ marginTop: '40px', textAlign: 'center' }}>
                        <p>Copyright © 2020 Antd. <a href="#">Powered by SonHung</a>.</p>
                    </Row>
                </Row>
            </Row>
        </div >

    )
}
export default FooterComponent