import React, { useEffect, useState } from 'react';
import {
    Button, Layout, Icon, Row, Col, Input, Menu, Carousel,
    Card, Avatar, Affix, Badge, Tag, BackTop, Divider, Drawer
} from 'antd';
import './Home.css';
import APIClient from './APIClient.js'
import axios from 'axios'
import images from './Images.js'
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
const { SubMenu } = Menu;


const { Meta } = Card
const des = "Trẻ trung và cuốn hút theo phong cách đường phố thu-đông với áo nỉ thêu hình động vật của thương hiệu Asos.- Chất liệu cotton pha- Cổ 3cm- Tay dài, suông- Không lót trong- Màu sắc: XámHướng dẫn sử dụng:- Giặt bằng tay với nhiệt độ không quá 30°C- Không được tẩy- Không được sấy khô- Ủi với nhiệt độ..."
const gridStyle = {
    textAlign: 'center',
    width: '25%'
};

const importAll = (r) => {
    return r.keys().map(r);
}
const Banner = importAll(require.context('./Images/Banner', false, /\.(png|jpe?g|svg)$/));
const Home = (props) => {
    // let [data, setData] = useState(null);

    // useEffect(() => {
    //     console.log('use Effect call');
    //     const fetchData = async () => {
    //         try {
    //             const { data } = await axios.get('http://localhost:8080/api/products', {
    //                 mode: 'no-cors',
    //                 headers: {
    //                     'Access-Control-Allow-Origin': '*',
    //                     'Content-Type': 'application/json',
    //                 }
    //             });
    //             console.log('data fetch:', data)
    //             setData(data);
    //         } catch (error) {
    //             console.error('Error while fetch data:', error);
    //         }

    //     };
    //     fetchData();
    // }, []);

    return (

        <React.Fragment>
            <Layout>
                <BackTop style={{ right: '12px' }}>
                </BackTop>
                <Header style={
                    {
                        color: 'white',
                        height: '100%',
                        padding: '0'

                    }
                }>
                    <Row style={{ padding: '0px 15px' }}>
                        <Col span={8}>
                            <Icon type="mail" />&emsp;sonhung3198@gmail.com&emsp;
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
                            <Col span={18} push={6} style={{ top: '19px' }}>
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
                                            <Tag color="geekblue">Shopping-Cart:</Tag>&nbsp;
                                                <Badge count={5} dot>
                                                <Avatar shape="square" icon="shopping-cart" size="large">
                                                </Avatar>
                                            </Badge>
                                        </span>
                                    </Col>
                                </Row>
                            </Col>

                            <Col span={6} pull={18}>
                                <Row>
                                    <Col span={12}>
                                        <strong style={
                                            {
                                                color: '#69c0ff',
                                                font: 'fantasy',
                                                fontSize: 'large',
                                                marginLeft: '35px'
                                            }
                                        }>
                                            WORLD CAR
                                            </strong>
                                    </Col>
                                    <Col span={12}>

                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Affix>
                </Header>
                <Layout style={{ marginTop: '2px' }}>
                    <Sider style={{ marginTop: '15px', backgroundColor: 'none', height: '100%' }}>
                        <Affix offsetTop={66}>
                            <Menu
                                // onClick={this.handleClick}
                                defaultSelectedKeys={['2']}
                                mode="inline"
                                theme="light"
                            // style={{ border: '#096dd9' }}
                            >
                                <Menu.Item
                                    key="1"
                                    disabled
                                    style={{ backgroundColor: '#e8e8e8', color: 'black' }}>
                                    <Icon type="unordered-list" />
                                    <span>Danh mục</span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="desktop" />
                                    <span>Option 2</span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="inbox" />
                                    <span>Option 3</span>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Icon type="pie-chart" />
                                    <span>Option 4</span>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Icon type="desktop" />
                                    <span>Option 5</span>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <Icon type="inbox" />
                                    <span>Option 6</span>
                                </Menu.Item>
                            </Menu>
                        </Affix>
                    </Sider>
                    <Content style={{ margin: '15px 15px 15px 15px ' }}>
                        <Row>
                            <Col span={16}>
                                <Row>
                                    <Carousel
                                        autoplay
                                        autoplaySpeed={2000}>
                                        {
                                            Banner.map(banner => {
                                                return (
                                                    <div>
                                                        <img
                                                            src={banner}
                                                            height="400px"
                                                            width="100%"
                                                            alt="logo">
                                                        </img>
                                                    </div>
                                                )
                                            })
                                        }
                              
                                    </Carousel>
                                </Row>
                                <Row>
                                    <Card title="Ưu đãi lớn"
                                        style={{ marginTop: '10px', border: '1px gray' }}
                                        extra={<a href="#">More</a>}
                                        headStyle={{ backgroundColor: '#e8e8e8' }
                                        }
                                    >
                                        <Meta
                                            avatar={
                                                <Avatar
                                                    src="https://images-na.ssl-images-amazon.com/images/I/41IR4i8h6BL._AC_SL_QL70_.jpg"
                                                    size={200}
                                                    shape="square"
                                                />}
                                            title="Xe oto"
                                            description={
                                                <div>
                                                    <p>{des}</p>
                                                    <br />
                                                    Giá:
                                                    &nbsp;
                                                        <u style={{ textDecoration: "line-through" }}>
                                                        120000 VND</u>
                                                    &nbsp;
                                                            <strong style={{ color: 'red' }}>100000 VND</strong>
                                                </div>
                                            }

                                        />

                                    </Card>
                                </Row>
                            </Col>
                            <Col span={8} style={{ paddingLeft: '15px' }}>
                                <Card title="Sản phẩm khuyến mãi"
                                    hoverable
                                    headStyle={{ backgroundColor: '#d9d9d9' }}
                                >
                                    <Card type="inner"
                                        bordered={false}
                                    >
                                        <Meta
                                            avatar={
                                                <Avatar
                                                    src="https://images-na.ssl-images-amazon.com/images/I/41IR4i8h6BL._AC_SL_QL70_.jpg"
                                                    size={60}
                                                    shape="square"
                                                />}
                                            title="Card title"
                                            description="This is the description"
                                        />
                                    </Card>
                                    <Card type="inner" style={{ marginTop: '10px' }}
                                        hoverable
                                        bordered={false}>
                                        <Meta
                                            avatar={
                                                <Avatar
                                                    src="https://images-na.ssl-images-amazon.com/images/I/41IR4i8h6BL._AC_SL_QL70_.jpg"
                                                    size={60}
                                                    shape="square"
                                                />}
                                            title="Card title"
                                            description="This is the description"
                                        />
                                    </Card>
                                    <Card type="inner" style={{ marginTop: '10px' }}
                                        hoverable
                                        bordered={false}>
                                        <Meta
                                            avatar={
                                                <Avatar
                                                    src="https://images-na.ssl-images-amazon.com/images/I/41IR4i8h6BL._AC_SL_QL70_.jpg"
                                                    size={60}
                                                    shape="square"
                                                />}
                                            title="Card title"
                                            description="This is the description"
                                        />
                                    </Card>
                                    <Card type="inner" style={{ marginTop: '10px' }}
                                        hoverable
                                        bordered={false}>
                                        <Meta
                                            avatar={
                                                <Avatar
                                                    src="https://images-na.ssl-images-amazon.com/images/I/41IR4i8h6BL._AC_SL_QL70_.jpg"
                                                    size={60}
                                                    shape="square"
                                                />}
                                            title="Card title"
                                            description="This is the description"
                                        />
                                    </Card>
                                </Card>
                                <Card title="Đăng ký nhận tin"
                                    style={{ marginTop: '15px' }}
                                    hoverable
                                    headStyle={{ backgroundColor: '#d9d9d9' }}>
                                    <Search
                                        placeholder="Nhập địa chỉ email ..."
                                        enterButton="Search"
                                        size="default"
                                    />

                                </Card>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
                <Footer style={{ marginTop: '35px', padding: '0' }}>
                    <Row>
                        <Drawer>

                        </Drawer>
                        <Card title="Danh sách sản phẩm"
                            style={{ marginLeft: '216px' }}
                            extra={<a>+Filters</a>}>
                            <Card.Grid style={gridStyle}>
                                <Card
                                    hoverable
                                    style={{ width: 200, margin: 'auto' }}
                                    cover={<img alt="example"
                                        // src={require('./Images/banner1.jpg')} />
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                    }
                                    bordered={false}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>,
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Card
                                    hoverable
                                    style={{ width: 200, margin: 'auto' }}
                                    cover={<img alt="example"
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    bordered={false}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>,
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Card
                                    hoverable
                                    style={{ width: 200, margin: 'auto' }}
                                    cover={<img alt="example"
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    bordered={false}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>,
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Card
                                    hoverable
                                    style={{ width: 200, margin: 'auto' }}
                                    cover={<img alt="example"
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    bordered={false}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>,
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Card
                                    hoverable
                                    style={{ width: 200, margin: 'auto' }}
                                    cover={<img alt="example"
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    bordered={false}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>,
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Card
                                    hoverable
                                    style={{ width: 200, margin: 'auto' }}
                                    cover={<img alt="example"
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    bordered={false}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>,
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Card
                                    hoverable
                                    style={{ width: 200, margin: 'auto' }}
                                    cover={<img alt="example"
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    bordered={false}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>,
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Card
                                    hoverable
                                    style={{ width: 200, margin: 'auto' }}
                                    cover={<img alt="example"
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    bordered={false}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>,
                            </Card.Grid>
                        </Card>
                    </Row>
                    <Row

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
                                <Icon type="phone" theme="twoTone" twoToneColor="blue" />&emsp;
                                    <strong>HỖ TRỢ MIẾN PHÍ</strong>
                            </Col>
                            <Col span={8}>
                                <Icon type="dollar" theme="twoTone" twoToneColor="green" />&emsp;
                                    <strong>100% CHÍNH HÃNG</strong>
                            </Col>
                            <Col span={8}>
                                <Icon type="car" theme="twoTone" />&emsp;
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
                            <Row style={{ marginTop: '80px', textAlign: 'center' }}>
                                <p>Copyright © 2020 Antd. <a target="_blank">Powered by SonHung</a>.</p>
                            </Row>
                        </Row>

                    </Row>
                </Footer>
            </Layout>
        </React.Fragment>
    )
}


export default Home;