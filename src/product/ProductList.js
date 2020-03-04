import React, { useState, useEffect } from 'react'
import { Row, Button, List, Card } from 'antd'
import APIClient from '../utils/APIClient'
const { Meta } = Card;

const ProductList = () => {
    let [data, setData] = useState(null);
    const fetchData = async () => {
        try {
            const response = await APIClient.GET('/products')
            console.log('data fetch:', response)
            setData(response);
        } catch (error) {
            console.error('Error while fetch data:', error);
        }

    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Row>
            <Card title="Danh sách sản phẩm"
                style={{ marginLeft: '216px' }}
                extra={<a>+Filters</a>}
            >
                {
                    data && <List
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

                                <List.Item
                                >
                                    <Card
                                        hoverable
                                        style={{ width: 300, margin: 'auto' }}
                                        cover={
                                            <img alt="example"
                                                height={200}
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
                                                style={{ marginRight: '10px' }}
                                                onClick={null}
                                            >
                                                Đặt hàng
                                            </Button>
                                            <Button type="primary"
                                                icon="search"
                                            >
                                                Xem sản phẩm
                                            </Button>
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
        </Row>
    )
}
export default ProductList