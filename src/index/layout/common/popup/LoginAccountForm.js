import React from 'react'
import { Modal, Form, Input, Icon, Checkbox } from 'antd'
import './LoginAccountForm.css'
const LoginAccountFormBase = props => {
    const { visible, onCancel, form, onCreate } = props;
    const { getFieldDecorator } = form;

    // const validateName = (rule, value, callback) => {
    //     //eslint-disable-next-line
    //     const regex = RegExp('[\!\@\#\$\%\^\&\*\\\+\=\|\:\;\"\'\<\>\,\.\/\?0-9]+', 'img')
    //     if (value && regex.test(value)) {
    //         callback("Trong tên không được phép chứa ký tự đặc biệt hoặc số !")
    //     }
    //     else {
    //         callback();
    //     }
    // }

    // const validateNumber = (rule, value, callback) => {
    //     //eslint-disable-next-line
    //     const regex = RegExp('[^0-9\.]+', 'img')
    //     if (value && regex.test(value)) {
    //         callback("Trường này chỉ được phép chứa ký tự số !")
    //     }
    //     else {
    //         callback()
    //     }
    // }
    return (
        <div>
            <Modal
                className="modal-login-form"
                visible={visible}
                title={<span> Đăng Nhập</span>}
                centered
                cancelText="Thoát"
                okText="Đăng Nhập"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    {/* <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        <span style={{ float: 'right', color: '#40a9ff' }}>Register now!</span>
                    </Form.Item> */}

                </Form>
            </Modal>
        </div>
    )
}

const LoginAccountForm = Form.create({ name: 'login_account_form' })(LoginAccountFormBase);

export default LoginAccountForm
