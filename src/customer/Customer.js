import React, { useEffect, useState } from 'react'
import { Divider, Card, Row, Col, Input, Table, Tag, Avatar, Result } from 'antd'
import './Customer.css';
import { connect } from 'react-redux'
import _ from 'lodash'
import APIClient from '../utils/APIClient'
import moment from 'moment'
import { Link } from 'react-router-dom';

const Customer = ({ user }) => {
    const [orders, setOrders] = useState(null);
    const matchOrderDetail = (order, orderDetailList) => {
        const orderDetailListMatch = []
        orderDetailList.map((item) => {
            if (item.order.id === order.id) {
                orderDetailListMatch.push(item)
            }
        })
        return orderDetailListMatch;
    }
    const fetchData = async () => {
        // const params = { customerId: user.id }
        let response = await APIClient.GET(`/order?customerId=${user.id}`);
        let ordersExtract = null;
        if (response) {
            ordersExtract = response.map((item, index) => {
                return item.order;
            });
            ordersExtract = _.uniqBy(ordersExtract, 'id');
            ordersExtract = ordersExtract.map((item) => {
                return {
                    ...item,
                    orderDetailList: matchOrderDetail(item, response)
                }
            })
            console.log("ordersExtract:", ordersExtract)
        }
        setOrders(ordersExtract);
    }
    useEffect(() => {
        fetchData();
    }, [user])

    return (
        <div className="container">
            <Divider />
            {
                _.isEmpty(user)
                    ? <Result
                        style={{ backgroundColor: 'white' }}
                        status="500"
                        title={
                            <strong style={{ color: 'red', textAlign: 'center', fontWeight: 'bold', fontSize: 'x-large' }}>
                                Thông Báo !
                            </strong>
                        }
                        subTitle={
                            <p style={{ color: 'red', textAlign: 'center', fontSize: 'x-large' }}>
                                Bạn cần đăng nhập để hiển thị chức năng này !
                            </p>
                        }
                    />
                    : <div>
                        <Row>
                            <h1>THÔNG TIN TÀI KHOẢN</h1>
                        </Row>
                        <Row>
                            <span>
                                <i>
                                    <span>Xin chào,</span>
                                    <b style={{ marginLeft: 5 }}>
                                        {`${user.firstName} ${user.lastName}`}
                                    </b>
                                </i>
                            </span>
                        </Row>
                        <div className="card-group">
                            <Card title="Thông tin khách hàng" className="customer-infomation-card">
                                <div className="customer-infomation">
                                    <Row>
                                        <Col span={4}>
                                            Họ:
                                    </Col>
                                        <Col span={20}>
                                            <Input defaultValue={user.firstName} disabled />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={4}>
                                            Tên:
                                    </Col>
                                        <Col span={20}>
                                            <Input defaultValue={user.lastName} disabled />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={4}>
                                            Username:
                                    </Col>
                                        <Col span={20}>
                                            <Input defaultValue={user.account.userName} disabled />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={4}>
                                            Số điện thoại:
                                    </Col>
                                        <Col span={20}>
                                            <Input defaultValue={user.phone} disabled />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={4}>
                                            Địa chỉ:
                                    </Col>
                                        <Col span={20}>
                                            <Input defaultValue={user.addressDetail} disabled />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={4}>
                                            Email:
                                    </Col>
                                        <Col span={20}>
                                            <Input defaultValue={user.account.email || 'Chưa đăng ký'} disabled />
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                            <Card title="Đơn hàng đã đặt" className="order-card">
                                <Table
                                    columns={columns}
                                    dataSource={orders}
                                    expandedRowRender={
                                        record => {
                                            return <ProductOrder record={record} />
                                        }
                                    } />
                            </Card>
                        </div>
                    </div>
            }
        </div>
    )
}

const columns = [
    {
        title: 'Ngày đặt',
        dataIndex: 'dateOrder',
        key: 'dateOrder',
        render: item => <span>{moment(item).format('LLL')}</span>
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Số lượng',
        dataIndex: 'orderDetailList',
        key: 'quantity',
        render: item => {
            const quantity = item.reduce((a, b) => { return a + b.quantity }, 0)
            return <p>{quantity}</p>
        }
    },
    {
        title: 'Tổng giá',
        dataIndex: 'orderDetailList',
        key: 'totalPrice',
        render: item => {
            const totalPrice = item.reduce((a, b) => { return a + b.product.price * b.quantity }, 0)
            return (
                <p>{totalPrice} VND</p>
            )
        }
    }
]
const mapStateToProps = (state) => {
    return {
        user: state.currentUser
    };
}
const ProductOrder = ({ record }) => {
    const productList = record.orderDetailList.map(item => {
        return (
            {
                ...item.product,
                quantity: item.quantity

            }
        )
    })
    return (
        <div className="order-expand">
            <Divider>
                <strong>Sản phẩm trong đơn hàng</strong>
            </Divider>
            {
                productList.length <= 0
                    ? <Tag
                        color="red"
                        style={{ marginLeft: '40%' }}>
                        Đơn hàng này không có sản phẩm nào!
                     </Tag>
                    : productList.map((product, index, arr) => {
                        return (
                            <div>
                                <Row style={{ textAlign: 'center' }}>
                                    <Col span={5}>
                                        <Link to={{
                                            pathname: `/product/${product.name}`,
                                            state: { id: product.id }
                                        }}>
                                            <Avatar
                                                src={require('../../../Public/Images/' + product.image)}
                                                size={60}
                                                shape="square"
                                            />
                                        </Link>

                                    </Col>
                                    <Col span={5}>
                                        <p>Tên sản phẩm</p>
                                        {product.name}
                                    </Col>
                                    <Col span={5}>
                                        <p>Giá</p>
                                        <span style={{ color: 'green' }}>{product.price} VND</span>
                                    </Col>
                                    <Col span={5}>
                                        <p>Thể loại</p>
                                        {_.isNil(product.category) ? 'Chưa có' : product.category.name}
                                    </Col>
                                    <Col span={4}>
                                        <p>Số lượng</p>
                                        <button>{product.quantity}</button>
                                    </Col>
                                </Row>
                                {
                                    index === arr.length - 1 ? null : <Divider />
                                }
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default connect(mapStateToProps)(Customer)
