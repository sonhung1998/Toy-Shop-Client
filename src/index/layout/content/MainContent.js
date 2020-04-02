import React from 'react'
import { Row, Col, Card, Carousel, Avatar, Input } from 'antd'
const { Meta } = Card;
const { Search } = Input;
const MainContent = () => {
    const des = "Trẻ trung và cuốn hút theo phong cách đường phố thu-đông với áo nỉ thêu hình động vật của thương hiệu Asos.- Chất liệu cotton pha- Cổ 3cm- Tay dài, suông- Không lót trong- Màu sắc: XámHướng dẫn sử dụng:- Giặt bằng tay với nhiệt độ không quá 30°C- Không được tẩy- Không được sấy khô- Ủi với nhiệt độ..."
    const importAll = (r) => {
        return r.keys().map(r);
    }

    const Banner = importAll(require.context('../../../Images/Banner', false, /\.(png|jpe?g|svg)$/));
    return (
        <div>
            <Row style={{ marginBottom: '25px' }}>
                <Col span={16}>
                    <Row>
                        <Carousel
                            autoplay
                            autoplaySpeed={2000}
                            arrows
                        >
                            {
                                Banner.map(banner => {
                                    return (
                                        <div>
                                            <img
                                                src={banner}
                                                height="400px"
                                                width="100%"
                                                alt="banner_carousel">
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
           
        </div>
    )
}
export default MainContent