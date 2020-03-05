import React from 'react'
import { Row, Col, Form ,Input} from 'antd'

const Order = (props) => {
    return (
        <div >
            <Row>
                <Col span={16}>
                    <Row style={{ textAlign: 'center', fontSize: '-webkit-xxx-large' }}>
                        <strong>Toy Shop</strong>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Row>
                                <strong>Thông tin mua hàng</strong>
                            </Row>
                            <Row>
                                <RegistrationForm />
                            </Row>
                        </Col>
                        <Col span={12}></Col>
                    </Row>

                </Col>
                <Col span={8}>

                </Col>
            </Row>
        </div>
    )

}
export default Order

const RegistrationForm = () => {
    const [form] = Form.useForm();
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    return (
        <Form
            form={form}
            name="register"
            scrollToFirstError
        >
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
        </Form>
    )

}