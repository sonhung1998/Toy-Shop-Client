import React, { useContext } from 'react'
import CartContext from '../../contexts/CartContext.js'
import { Popover, Badge, Avatar, List, Divider, Button } from 'antd'
import { Link } from 'react-router-dom'
const Cart = () => {
    let { cartList } = useContext(CartContext);
    let cartAmount = 0;
    let totalPrice = 0;
    if (cartList.length > 0) {
        cartAmount = cartList.reduce((a, b) => { return a + b.amount }, 0);
        totalPrice = cartList.reduce((a, b) => { return a + b.amount * b.price }, 0)
    }
    const ListCart = () => {
        return (
            <List
                itemLayout="horizontal"
                dataSource={cartList}
                footer={
                    <div>
                        <p>Tổng tiền: {totalPrice} VND</p>
                        <Divider />
                        <Link to="/order">
                            <Button
                                type="primary"
                                icon="shopping-cart"
                                style={{ marginLeft: '38px' }}
                            >
                                Tiến hành đặt hàng
                            </Button>
                        </Link>

                    </div>

                }
                renderItem={
                    item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar=
                                {
                                    <Avatar
                                        src={require(`../../../../Public/Images/${item.image}`)}
                                        size={90}
                                        shape='square'
                                    />
                                }
                                title=
                                {<a href="#" style={{ color: '#69c0ff' }}>
                                    {`Tên: ${item.name}`}
                                </a>}
                                description={
                                    <div>
                                        <p style={{ marginTop: '10px', color: 'red' }}>{`Giá: ${item.price} VND`}</p>
                                        <p>{`Số lượng: ${item.amount}`}</p>
                                    </div>

                                }
                            />
                        </List.Item>
                    )
                }
            />
        )
    }
    return (
        <Popover
            placement="bottomRight"
            title={
                <strong style={{ color: '#1890ff' }}>
                    {`Giỏ hàng của bạn hiện có ${cartAmount} sản phẩm`}
                </strong>
            }
            content={<ListCart />}>
            <Badge
                count={cartAmount}
                showZero
            >
                <Avatar
                    shape="square"
                    icon="shopping-cart"
                    size="large" />
            </Badge>
        </Popover>
    )
}


export default Cart