import React, { useEffect, useState, useContext } from 'react'
import { Row, Card, Avatar, Tag, Button, Divider } from 'antd'
import { useLocation, Link } from 'react-router-dom';
import APIClient from '../utils/APIClient'
import './Product.css'
import CartContext from '../contexts/CartContext.js'
import { Counter } from './ProductList'
import _ from 'lodash'
const Product = (props) => {
    const [data, setData] = useState(null);
    const location = useLocation();
    const { state } = location;
    const { id } = state;
    const { cartList } = useContext(CartContext);
    let amountInit = 0;
    if (data) {
        const productIndex = _.findLastIndex(cartList, { 'id': data.id });
        amountInit = productIndex < 0 ? 0 : cartList[productIndex].amount
    }
    const fetchData = async () => {
        try {
            const data = await APIClient.GET(`/product/${id}`);
            console.log(data)
            setData(data);
        } catch (error) {
            console.error('Error while fetch data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {
                data && <Row>
                    <Card style={{}}>
                        <Card.Meta
                            className="card-meta-product"
                            avatar={
                                <Avatar
                                    className="avatar"
                                    src={require(`../../../Public/Images/${data.image}`)}
                                    shape="square"
                                    size={515}
                                />
                            }
                            title=
                            {
                                <strong>{data.name}</strong>
                            }
                            description={
                                <div>
                                    <Divider />
                                    <Row>
                                        <b>Mô tả:</b>&nbsp;
                                        <span>{data.description}</span>
                                    </Row>
                                    <Row>
                                        <b>Chiều dài:</b>&nbsp;
                                        <span>{data.length}</span>mm
                                    </Row>
                                    <Row>
                                        <b>Chiều rộng:</b>&nbsp;
                                        <span>{data.width}</span>mm
                                    </Row>
                                    <Row>
                                        <b>Chiều cao:</b>&nbsp;
                                        <span>{data.height}</span>mm
                                    </Row>
                                    <Row>
                                        <b>Giá:</b>&nbsp;
                                        <span>{data.price}</span> VND
                                    </Row>
                                    <Divider />
                                    <Row>
                                        <b>Nhà sản xuất:</b>&nbsp;
                                        <Tag color="blue">
                                            {data.manufacturer && data.manufacturer.name}
                                        </Tag>
                                    </Row>
                                    <Row>
                                        <b>Thể loại:</b>&nbsp;
                                        <Tag color="blue">
                                            <span>{data.category && data.category.name}</span>
                                        </Tag>

                                    </Row>
                                    <Divider />
                                    <Row>
                                        <b>Số Lượng:</b>&nbsp;
                                        <span>
                                            <Counter amountInit={amountInit} product={data} />
                                        </span>
                                    </Row>
                                    <Row>
                                        <Link to="/order">
                                            <Button
                                                type="primary"
                                                icon="shopping-cart"
                                                style={{ width: '200px' }}
                                            >
                                                Mua Hàng
                                       </Button>
                                        </Link>

                                    </Row>
                                </div>
                            }

                        />
                    </Card>
                </Row>
            }
        </div>
    )

}
export default Product