import React, { useContext, useState } from 'react'
import CartContext from '../../../contexts/CartContext.js'
import { Popover, Badge, Avatar, List, Divider, Button, notification } from 'antd'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'

const Cart = ({ user }) => {
    const history = useHistory();
    let { cartList } = useContext(CartContext);
    let cartAmount = 0;
    let totalPrice = 0;

    if (cartList.length > 0) {
        cartAmount = cartList.reduce((a, b) => { return a + b.amount }, 0);
        totalPrice = cartList.reduce((a, b) => { return a + b.amount * b.price }, 0)
    }
    const handleOrder = () => {
        if (_.isEmpty(user)) {
            notification["error"]({
                message: <strong style={{ color: 'red' }}>Thông Báo</strong>,
                description:
                    'Bạn cần đăng nhập để thực hiện chức năng này !',
            });
            return;
        }
        if (cartList.length === 0) {
            notification["error"]({
                message: <strong style={{ color: 'red' }}>Thông Báo</strong>,
                description:
                    'Bạn chưa đặt hàng bất kỳ sản phẩm nào !',
            });
            return;
        }
        history.push("/order")
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

                        <Button
                            type="primary"
                            icon="shopping-cart"
                            onClick={handleOrder}
                            style={{ marginLeft: '38px' }}
                        >
                            Tiến hành đặt hàng
                            </Button>


                    </div>

                }
                renderItem={
                    item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar=
                                {
                                    <Avatar
                                        src={require(`../../../../../Public/Images/${item.image}`)}
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

const mapStateToProps = (state) => {
    return {
        user: state.currentUser

    }
}

export default connect(mapStateToProps, null)(Cart)