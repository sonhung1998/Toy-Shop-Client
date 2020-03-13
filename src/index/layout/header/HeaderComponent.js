import React from 'react'
import { Icon, Row, Col, Input, Menu, Affix, Tag } from 'antd';
import Cart from './Cart'
const { Search } = Input;

const HeaderComponent = () => {
    return (
        <div>
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
                        onSearch={value => console.log(value)} enterButton
                        style={{ marginTop: '15px' }} />
                </Col>
            </Row>
            <Affix offsetTop={0}>
                <Row style={{ backgroundColor: 'white' }}>
                    <Col span={18} push={6} style={{ top: '23px' }}>
                        <Row>
                            <Col span={18}>
                                <Menu
                                    // onClick={this.handleClick}
                                    // selectedKeys={[this.state.current]}
                                    mode="horizontal"
                                >
                                    <Menu.Item key="index">
                                        TRANG CHỦ
                                                    </Menu.Item>
                                    <Menu.Item key="intro">
                                        GIỚI THIỆU
                                                    </Menu.Item>
                                    <Menu.Item key="product">
                                        SẢN PHẨM
                                                    </Menu.Item>
                                    <Menu.Item key="news">
                                        TIN TỨC
                                                    </Menu.Item>
                                    <Menu.Item key="contact">
                                        LIÊN HỆ
                                                </Menu.Item>
                                </Menu>
                            </Col>
                            <Col span={6} style={{ color: 'black', bottom: '13px' }}>
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
                            <Col span={12}
                                style={{ textAlign: 'end' }}
                            >
                                <img
                                    src={require('../../../../../Public/Images/home_icon.png')}
                                    width={70}
                                    alt="home_car_logo"
                                />
                                        &nbsp;
                                        <span>
                                    <strong style={{ color: '#1890ff', fontWeight: '900', fontSize: 'large' }}>
                                        TOY SHOP
                                            </strong>

                                </span>
                            </Col>
                            <Col span={12}>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Affix>
        </div>
    )

}
export default HeaderComponent