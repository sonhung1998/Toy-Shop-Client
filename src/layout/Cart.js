import React, { useContext } from 'react'
import CartContext from '../contexts/CartContext.js'
import { Popover, Badge, Avatar, List } from 'antd'
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
                footer={<p>Tổng tiền: {totalPrice} VND</p>}
                renderItem={
                    item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar=
                                {
                                    <Avatar
                                        src={require(`../../../Public/Images/${item.image}`)}
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
                                        {/* <br /> */}
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