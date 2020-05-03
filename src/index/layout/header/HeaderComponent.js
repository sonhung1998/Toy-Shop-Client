import React, { useEffect, useState } from 'react'
import { Icon, Row, Col, Input, Menu, Affix, Tag } from 'antd';
import Cart from './Cart'
import './HeaderComponent.css'
// import TextEffect from '../../../utils/TextEffect.js'
// import IconEffect from '../../../utils/IconEffect.js'
const { Search } = Input;

const HeaderComponent = (props) => {
    const [scrolling, setScrolliing] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const DOCUMENT = (document.documentElement.clientHeight) ? document.documentElement : document.body;
            if (DOCUMENT.scrollTop === 0) {
                setScrolliing(false);
            }
            else {
                setScrolliing(true);
            }
        });
    }, []);

    return (
        <div className="header-component">
            <Row style={{ padding: '0px 15px' }}>
                <Col span={8}>
                    <Icon type="mail" />
                        &emsp;sonhung3198@gmail.com&emsp;
                        |&emsp;<Icon type="phone" />&emsp;0356859536
                     </Col>

                <Col span={8} style={{ paddingLeft: '296px' }}>
                    <span>
                        <a><Icon type="login" />&nbsp;Đăng nhập</a>
                        &emsp;|&emsp;<a><Icon type="form" />&nbsp;Đăng ký</a>
                    </span>
                </Col>
                <Col span={8}>
                    <Search
                        placeholder="Tìm kiếm ..."
                        onSearch={value => console.log(value)}
                        enterButton
                        style={{ marginTop: '15px' }} />
                </Col>
            </Row>
            <Affix offsetTop={0}>
                <Row
                    style={
                        {
                            backgroundColor: scrolling ? '#001529' : 'white',
                        }
                    }>
                    <Col span={18} push={6} style={{ top: '0px' }}>
                        <Row>
                            <Col span={18}>
                                <Menu
                                    className="menu-home"
                                    theme={scrolling ? 'dark' : 'light'}
                                    // onClick={this.handleClick}
                                    defaultSelectedKeys={['index']}
                                    mode="horizontal"
                                >
                                    <Menu.Item key="index">
                                        <Icon type="home" />
                                        TRANG CHỦ
                                    </Menu.Item>

                                    <Menu.Item key="intro">
                                        <Icon type="book" />
                                        GIỚI THIỆU
                                    </Menu.Item>

                                    <Menu.Item key="product">
                                        <Icon type="car" />
                                        SẢN PHẨM
                                    </Menu.Item>

                                    <Menu.Item key="news">
                                        <Icon type="mail" />
                                        TIN TỨC
                                    </Menu.Item>

                                    <Menu.Item key="contact">
                                        <Icon type="phone" />
                                        LIÊN HỆ
                                    </Menu.Item>
                                </Menu>
                            </Col>
                            <Col span={6} style={{ color: 'black' }}>
                                <span >
                                    <Tag color="geekblue">
                                        <strong>
                                            Shopping-Cart :
                                                    </strong>
                                    </Tag>&nbsp;
                                                <Cart />
                                </span>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={6} pull={18}>
                        <Row>
                            <Col
                                span={12}
                                style={{ textAlign: 'end' }}
                            >
                                {/* <IconEffect /> */}
                                <img
                                    src={require('../../../../../Public/Images/Icon/home_icon.png')}
                                    width={70}
                                    alt="home_car_logo" />
                                <span>
                                    <strong
                                        style={
                                            {
                                                color: '#1890ff',
                                                fontWeight: '900',
                                                fontSize: 'large',
                                                marginLeft: 10
                                            }
                                        }>
                                        TOY SHOP
                                        {/* <TextEffect
                                            title="TOY SHOP"
                                            activateColor="#1890ff"
                                            deactivateColor="red"
                                        /> */}
                                    </strong>
                                </span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Affix>
        </div>
    )

}
export default HeaderComponent