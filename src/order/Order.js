import React, { useState, useContext } from 'react'
import { Row, Col, Form, Input, Select, Card, Icon, List, Avatar, Badge, Divider, Button, message } from 'antd'
import './Order.css'
import CartContext from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import APIClient from '../utils/APIClient'
const CITY = require('../city.json')
let DISTRICT = require('../district.json')

const Order = (props) => {
    const { cartList } = useContext(CartContext);
    let cartAmount = 0;
    let totalPrice = 0;
    if (cartList.length > 0) {
        cartAmount = cartList.reduce((a, b) => { return a + b.amount }, 0);
        totalPrice = cartList.reduce((a, b) => { return a + b.amount * b.price }, 0)
    }

    return (
        <div >
            <Row>
                <Col span={16}>
                    <Row style={{ textAlign: 'center' }}>
                        <Link to="/">
                            <h1>Toy Shop</h1>
                        </Link>

                    </Row>
                    <Row style={{ marginTop: '-15px' }}>
                        <Col span={12}>
                            <Row
                                style={
                                    {
                                        marginLeft: '168px',
                                        fontSize: 'x-large',
                                        marginBottom: '10px',
                                        color: '#40a9ff'
                                    }
                                }>
                                <strong>Thông tin mua hàng</strong>
                            </Row>
                            <Row >
                                <FormOrder />
                            </Row>
                        </Col>
                        <Col span={12} style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                            <Row
                                style={
                                    {
                                        fontSize: 'x-large',
                                        marginBottom: '10px',
                                        color: '#40a9ff'
                                    }
                                }>
                                <strong>Vận chuyển</strong>

                            </Row>
                            <Row>
                                <Card style={{ fontSize: 'large' }}>
                                    <Icon type="check-circle" theme="twoTone" />
                                    &nbsp;
                                    <strong>Giao hàng tận nơi</strong>
                                    <strong style={
                                        {
                                            marginLeft: '141px',
                                            color: '#52c41a'
                                        }
                                    }
                                    >
                                        40.000 VND
                                            </strong>
                                </Card>
                            </Row>
                            <Row
                                style={
                                    {
                                        fontSize: 'x-large',
                                        marginBottom: '10px',
                                        color: '#40a9ff',
                                        marginTop: '9px'
                                    }
                                }>
                                <strong>Thanh toán</strong>

                            </Row>
                            <Row>
                                <Card style={{ fontSize: 'large' }}>
                                    <Icon type="check-circle" theme="twoTone" />
                                    &nbsp;
                                    <strong style={{ marginRight: '95px' }}>
                                        Thanh toán khi giao hàng (COD)
                                        </strong>
                                    <Icon
                                        style={{ fontSize: 'x-large' }}
                                        type="dollar"
                                        theme="twoTone"
                                        twoToneColor="#52c41a"
                                    />
                                </Card>
                            </Row>
                        </Col>
                    </Row>

                </Col>
                <Col span={8}>
                    <Card
                        title={`Đơn hàng của bạn: ${cartAmount} sản phẩm `}
                        hoverable
                        style={
                            {
                                minHeight: '752px',
                                backgroundColor: '#fafafa'
                            }
                        }
                    >
                        <List
                            itemLayout="horizontal"
                            dataSource={cartList}
                            footer={
                                <div>
                                    <Row>
                                        <Col span={20}>
                                            Tổng cộng :
                                        </Col>
                                        <Col span={4}>
                                            {totalPrice} VND
                                        </Col>
                                    </Row>
                                    <Divider />
                                    <Row>
                                        <Col span={18}>
                                            <Link to="/">
                                                <strong>
                                                    <Icon type="caret-left" />
                                                    Quay về trang chủ
                                                </strong>

                                            </Link>
                                        </Col>
                                        <Col span={6}>
                                            <Button
                                                type="primary"
                                                icon="shopping-cart"
                                                style={{ width: '120px' }}
                                                htmlType="submit"
                                                form="order_form"
                                            >
                                                Đặt hàng
                                        </Button>
                                        </Col>

                                    </Row>
                                </div>

                            }
                            renderItem={
                                item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar=
                                            {
                                                <Badge count={item.amount}>
                                                    <Avatar
                                                        src={require(`../../../Public/Images/${item.image}`)}
                                                        size={100}
                                                        shape='square'
                                                    />
                                                </Badge>

                                            }
                                            title=
                                            {<a href="#" style={{ color: '#096dd9' }}>
                                                {`Tên: ${item.name}`}
                                            </a>}
                                            description=
                                            {
                                                <div>
                                                    <p style={{ marginTop: '24px', color: 'green' }}>
                                                        {`Giá: ${item.price} VND`}
                                                    </p>
                                                    <p>{`Số lượng: ${item.amount}`}</p>
                                                </div>

                                            }
                                        />
                                    </List.Item>
                                )
                            }
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    )

}
export default Order

const OrderFormBase = (props) => {
    const { cartList } = useContext(CartContext);
    const [city, setCity] = useState(0);
    DISTRICT = Object.values(DISTRICT);
    let districtOfCity = DISTRICT.filter((item) => { return (item.path.includes(city) || item.path_with_type.includes(city)) })

    const handleChangeCity = (value) => {
        setCity(value);
    }
    const { getFieldDecorator } = props.form;

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const validateName = (rule, value, callback) => {
        //eslint-disable-next-line
        const regex = RegExp('[\!\@\#\$\%\^\&\*\\\+\=\|\:\;\"\'\<\>\,\.\/\?]+', 'img')
        if (value && regex.test(value)) {
            callback("Trong tên không được phép chứa ký tự đặc biệt !")
        }
        else {
            callback();
        }
    }

    const validateNumber = (rule, value, callback) => {
        //eslint-disable-next-line
        const regex = RegExp('[^0-9\.]+', 'img')
        if (value && regex.test(value)) {
            callback("Trường này chỉ được phép chứa ký tự số !")
        }
        else {
            callback()
        }

    }
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields(async (err, values) => {
            if (!err) {
                const { city, district } = values;
                const address = { city, district };
                const firstKey = { ...values, address };
                const secondKey = [...cartList]
                const data = { firstKey, secondKey };
                console.log('data submit:', data)
                try {
                    await APIClient.POST('/order', data);
                    message.success("Đặt hàng thành công");
                }
                catch (error) {
                    message.error("Có lỗi xảy ra:", error)
                }

            }
        });
    };

    return (
        <Form
            id="order_form"
            {...formItemLayout}
            onSubmit={handleSubmit}
        >
            <Form.Item label="Email" hasFeedback>
                {
                    getFieldDecorator("email", {
                        rules: [
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập Email',
                            },
                        ],
                    })
                        (<Input />)
                }
            </Form.Item>
            <Form.Item label="Họ" hasFeedback>
                {
                    getFieldDecorator("firstName", {
                        rules: [
                            {
                                validator: validateName
                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập Họ',
                            },
                        ],
                    })
                        (<Input />)
                }
            </Form.Item>
            <Form.Item label="Tên" hasFeedback>
                {
                    getFieldDecorator("lastName", {
                        rules: [
                            {
                                validator: validateName
                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập tên',
                            },
                        ],
                    })
                        (<Input />)
                }
            </Form.Item>
            <Form.Item label="Số điện thoại" hasFeedback>
                {
                    getFieldDecorator("phone", {
                        rules: [
                            {
                                validator: validateNumber
                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập số điện thoại',
                            },
                        ],
                    })
                        (<Input />)
                }
            </Form.Item>
            <Form.Item label="Địa chỉ" hasFeedback>
                {
                    getFieldDecorator("addressDetail", {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập địa chỉ',
                            },
                        ],
                    })
                        (<Input />)
                }
            </Form.Item>
            <Form.Item label="Tỉnh / Thành Phố" hasFeedback>
                {
                    getFieldDecorator("city", {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập địa chỉ',
                            },
                        ],
                    })
                        (<Select
                            showSearch
                            placeholder="Lựa chọn thành phố"
                            optionFilterProp="children"
                            onChange={handleChangeCity}
                        >
                            {
                                Object.values(CITY).map(item => (
                                    <Select.Option
                                        key={item.name}
                                    >
                                        {item.name}
                                    </Select.Option>
                                ))
                            }
                        </Select>)
                }
            </Form.Item>
            <Form.Item label="Quận / Huyện" hasFeedback>
                {
                    getFieldDecorator("district", {
                        rules: [
                            {
                                required: true,
                                message: 'Vui lòng nhập quận / huyện',
                            },
                        ],
                    })
                        (<Select
                            showSearch
                            placeholder="Lựa chọn quận / huyện"
                            optionFilterProp="children"
                        >
                            {
                                districtOfCity.map(item => (
                                    <Select.Option key={item.name}>
                                        {item.name}
                                    </Select.Option>
                                ))
                            }
                        </Select>)
                }
            </Form.Item>
            <Form.Item label="Ghi chú" hasFeedback>
                {
                    getFieldDecorator("note")
                        (<Input.TextArea rows={5} />)
                }
            </Form.Item>
        </Form>
    )

}
const FormOrder = Form.create({ name: "order_form" })(
    OrderFormBase
);