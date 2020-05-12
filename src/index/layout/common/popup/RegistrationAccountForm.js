import React, { useState } from 'react'
import { Form, Modal, Input, Select, Icon, message } from 'antd'
import './RegistrationAccountForm.css'
import APIClient from '../../../../utils/APIClient';
// const CITY = require('../../../../city.json')
// let DISTRICT = require('../../../../district.json')

const RegistrationAccountFormBase = (props) => {

    const { visible, onCancel, form, onCreate } = props;
    const { getFieldDecorator } = form;
    // const [city, setCity] = useState(0);

    // DISTRICT = Object.values(DISTRICT);

    // let districtOfCity = DISTRICT.filter((item) => {
    //     return (item.path.includes(city) || item.path_with_type.includes(city))
    // })
    const validateUsername = async (rule, value, callback) => {
        let data
        try {
            data = await APIClient.GET(`/account?username=${value}`)
        } catch (error) {
            callback("Username không hợp lệ !")
        }

        if (value && data) {
            callback("Username này đã tồn tại !")
        }
        else {
            callback();
        }
    }
    const validateName = (rule, value, callback) => {
        //eslint-disable-next-line
        const regex = RegExp('[\!\@\#\$\%\^\&\*\\\+\=\|\:\;\"\'\<\>\,\.\/\?0-9]+', 'img')
        if (value && regex.test(value)) {
            callback("Trong tên không được phép chứa ký tự đặc biệt hoặc số !")
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

    // const handleChangeCity = (value) => {
    //     setCity(value);
    // }

    return (
        <div>
            <Modal
                className="modal-form"
                visible={visible}
                title={
                    <span>
                        Đăng Ký Tài Khoản
                        <Icon type="form" />
                    </span>}
                centered
                cancelText="Thoát"
                okText="Đăng Ký"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form className="registration-form">
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
                    <Form.Item label="Username" hasFeedback>
                        {
                            getFieldDecorator("userName", {
                                rules: [
                                    {
                                        validator: validateUsername
                                    },
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập UserName',
                                    },
                                ],
                            })
                                (<Input />)
                        }
                    </Form.Item>
                    <Form.Item label="Mật khẩu" hasFeedback>
                        {
                            getFieldDecorator("passWord", {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập mật khẩu',
                                    },
                                ],
                            })
                                (<Input.Password />)
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
                    {/* <Form.Item label="Tỉnh / Thành Phố" hasFeedback>
                        {
                            getFieldDecorator("city", {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập tỉnh / thành phố',
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
                    </Form.Item> */}
                </Form>
            </Modal>
        </div>
    )
}
const RegistrationAccountForm = Form.create({ name: 'register_account_form' })(RegistrationAccountFormBase);

export default RegistrationAccountForm