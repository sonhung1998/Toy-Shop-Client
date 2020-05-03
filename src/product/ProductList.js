import React, { useState, useEffect, useContext } from 'react'
import { Row, Button, List, Card, Modal, Table, message } from 'antd'
import APIClient from '../utils/APIClient'
import CartContext from '../contexts/CartContext.js'
import './ProductList.css'
import { CheckOutlined } from '@ant-design/icons'
import _ from 'lodash'
import { useHistory, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faTruck, faCarBattery, faCarSide, faCaravan } from '@fortawesome/free-solid-svg-icons'
const { Meta } = Card;

const listCarIcon = [
    { id: 1, name: faTruck },
    { id: 2, name: faCar },
    { id: 3, name: faCarBattery },
    { id: 4, name: faCarSide },
    { id: 5, name: faCaravan }
];

const ProductList = (props) => {
    const { cartList, updateCart } = useContext(CartContext);
    const history = useHistory();
    let [data, setData] = useState(null);
    const [visible, setVisible] = useState(false);

    const fetchData = async () => {
        try {
            const responses = await Promise.all([
                APIClient.GET('/products'),
                APIClient.GET('/categories')
            ]);
            console.log('data fetch:', responses)
            setData(responses);
        } catch (error) {
            console.error('Error while fetch data:', error);
        }

    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmitCart = () => {
        history.push("/order");
    }

    const addToCart = (product) => {
        const productIndex = _.findLastIndex(cartList, { 'id': product.id })
        if (productIndex < 0) {
            updateCart([...cartList, { ...product, amount: 1 }])
        }
        else {
            cartList[productIndex].amount++;
            updateCart([...cartList])
            // message.warning('Sản phẩm này đã ở trong giỏ hàng, vui lòng tăng số lượng sản phẩm trong giỏ hàng !')
            // return;
        }
        setVisible(!visible)
    }


    const removeCart = (record) => {
        const productIndex = _.findLastIndex(cartList, { 'id': record.id })
        cartList.splice(productIndex, 1);
        updateCart([...cartList]);
    }

    const columns = [
        {
            title: 'Sản phẩm',
            dataIndex: 'image',
            key: 'image',
            render: (image) => {
                return (
                    <img
                        src={require(`../../../Public/Images/${image}`)}
                        alt="product"
                        width="150"
                        height="auto"
                    />
                )
            }
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
            className: 'hide',
            render: (name) => <a>{name}</a>
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
            render: (price) => <span>{price}&nbsp;VND</span>
        },
        {
            title: 'Số lượng',
            dataIndex: 'amount',
            key: 'amount',
            render: (amount, record) => {
                return (
                    <Counter amountInit={amount} product={record} />
                )

            }
        },
        {
            title: 'Thao tác',
            render: (text, record) => {
                return (
                    <Button
                        style={{ marginLeft: '10px' }}
                        type="primary"
                        icon="delete"
                        onClick={() => { removeCart(record) }}
                    >
                    </Button >
                )
            }
        }
    ]
    return (
        <Row>
            {data && data[1] && data[1].map((category, index) => {
                const dataSource = data[0].filter((product) => {
                    return product.category.id === category.id
                })
                return (
                    <div key={index}>
                        <ProductListByCategory
                            id={index}
                            categoryId={category.id}
                            title={category.name}
                            data={dataSource}
                            addToCart={addToCart}
                        />
                    </div>
                )
            })
            }
            <Modal
                width={700}
                title={
                    <strong style={{ color: "#1890ff" }}>
                        <CheckOutlined />
                        &nbsp;Sản phẩm đã được thêm vào giỏ hàng
                    </strong>}
                visible={visible}
                //   onOk={this.handleOk}
                cancelText="<- Tiếp tục mua hàng"
                okText="Tiến hành đặt hàng ->"
                onCancel={() => { setVisible(false) }}
                onOk={() => {
                    handleSubmitCart()
                }}

            >
                <Table
                    dataSource={cartList}
                    columns={columns}
                    pagination={false}
                >

                </Table>
            </Modal>
        </Row>
    )
}

const Counter = (props) => {
    const { amountInit } = props;
    const { cartList, updateCart } = useContext(CartContext);
    const [amount, setAmount] = useState(amountInit);
    let product = props.product;
    const productIndex = _.findLastIndex(cartList, { 'id': product.id });
    product = productIndex >= 0 ? cartList[productIndex] : product;
    useEffect(() => { setAmount(amountInit) }, [amountInit]);
    const handleCartChange = (option) => {
        if (option === true) {
            product.amount++;
            console.log(product.amount)
            setAmount(amount + 1);
        }
        else {
            if (amount === 1) {
                return;
            }
            product.amount--;
            setAmount(amount - 1)
        }
        if (productIndex >= 0) {
            cartList[productIndex] = product;
        }
        else {
            console.log('add new product to cart')
            cartList.push(product);
        }
        updateCart([...cartList]);

    }

    return (
        <span>
            <Button
                size="small"
                type="primary"
                onClick={() => { handleCartChange(true) }}
            >
                +
             </Button>
            &nbsp;
            {amount}
            &nbsp;
            <Button
                size="small"
                type="primary"
                style={{ width: '24.5px' }}
                onClick={() => { handleCartChange(false) }}
            >
                -
             </Button>
        </span>
    )

}

const ProductListByCategory = (props) => {
    const { addToCart, title, id, categoryId } = props;
    let { data } = props;
    return (
        <div
            id={categoryId}
            style={{ marginBottom: 20 }}
        >
            <Card
                title={
                    <strong className="productList-title">
                        <FontAwesomeIcon
                            className="icon-title"
                            icon={listCarIcon[id].name}
                            color="white"
                            style={{ marginRight: 15 }}
                        />
                        {title}
                    </strong>
                }
                extra={
                    <a
                        href="/"
                        style={{ color: 'white' }}>
                        +Filters
                    </a>
                }
                className="product-list"
                headStyle={{
                    backgroundColor: '#40a9ff',
                }}
            >
                {
                    data &&
                    <List
                        grid={{ gutter: 15, column: 4 }}
                        dataSource={data}
                        pagination={{
                            pageSize: 8,
                            position: 'bottom',
                            showSizeChanger: true,
                            pageSizeOptions: ['8', '16', '24'],
                        }}
                        renderItem={item => {
                            return (
                                <List.Item>
                                    <Card
                                        hoverable
                                        style={{ width: 290, margin: 'auto' }}
                                        cover={
                                            <img alt="example"
                                                style={{
                                                    height: '200px',
                                                    objectFit: 'contain'
                                                }}

                                                src={require(`../../../Public/Images/${item.image}`)}
                                                className="product-image"
                                            />
                                        }
                                        bordered={true}
                                    >
                                        <span className="order-product">
                                            <Button
                                                type="primary"
                                                icon="shopping-cart"
                                                style={{ marginRight: '2px' }}
                                                onClick={() => { addToCart(item) }}
                                            >
                                                Thêm vào giỏ
                                            </Button>
                                            <Link to={
                                                {
                                                    pathname: `/product/${item.name}`,
                                                    state: { id: item.id }
                                                }
                                            }
                                            >
                                                <Button
                                                    type="primary"
                                                    icon="search"
                                                >
                                                    Xem sản phẩm
                                            </Button>
                                            </Link>

                                        </span>

                                        <Meta style={{ marginTop: '8px', textAlign: 'center' }}
                                            title={
                                                <strong>{item.name}</strong>
                                            }
                                            description={
                                                <strong style={{ color: 'red' }}>
                                                    Giá: {item.price} VND
                                                    </strong>
                                            }
                                        />
                                    </Card>
                                </List.Item>
                            )
                        }}
                    />
                }
            </Card>
        </div>
    )
}
export { ProductList, Counter }
