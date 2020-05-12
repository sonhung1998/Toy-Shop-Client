import React, { useEffect, useState, useCallback } from 'react'
import { Icon, Row, Col, Input, Menu, Affix, Tag, Divider, message } from 'antd';
import { Link } from 'react-router-dom'
import Cart from './Cart'
import './HeaderComponent.css'
import APIClient from '../../../utils/APIClient'
import { connect } from 'react-redux'
import { loginUser, logoutUser } from '../../../actions/UserAccountActions'
import _ from 'lodash'
import RegistrationAccountForm from '../common/popup/RegistrationAccountForm'
import LoginAccountForm from '../common/popup/LoginAccountForm'
import jwtDecode from 'jwt-decode'
// import TextEffect from '../../../utils/TextEffect.js'
// import IconEffect from '../../../utils/IconEffect.js'
const { Search } = Input;

const HeaderComponent = ({ user, onLoginUser, onLogoutUser }) => {

    const [scrolling, setScrolliing] = useState(false);
    const [visible, setVisible] = useState(false);
    const [formRef, setFormRef] = useState(null);
    const [visibleLogin, setVisibleLogin] = useState(false);
    const [formRefLogin, setFormRefLogin] = useState(null);

    const saveFormRef = useCallback(node => {
        if (node !== null) {
            setFormRef(node);
        }
    }, []);

    const saveFormRefLogin = useCallback(node => {
        if (node !== null) {
            setFormRefLogin(node);
        }
    }, []);

    const handleCancelForm = () => {
        setVisible(false);
    }
    const handleCancelFormLogin = () => {
        setVisibleLogin(false);
    }

    const handleSubmitRegistration = () => {
        formRef.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                console.log('Received values of registration form: ', values);
                const { email, userName, passWord } = values;
                const account = { email, userName, passWord }
                const customer = { ...values, account }
                const data = await APIClient.POST('/customer', customer);
                if (data) {
                    message.success('Tạo mới account thành công !')
                    onLoginUser(data);
                }
                else {
                    message.error("Tạo account thất bại")
                }
                formRef.resetFields();
                setVisible(false)
            }
        });
    }

    const handleSubmitLogin = () => {
        formRefLogin.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                console.log('Received values of login form: ', values);
                const data = await APIClient.POST('/login', values);
                if (!data) {
                    message.error('Tài khoản hoặc mật khẩu không hợp lệ ! Vui lòng thử lại')
                }
                else {
                    sessionStorage.setItem("jwt", data.tokenType + " " + data.accessToken)
                    const { sub } = jwtDecode(sessionStorage.getItem('jwt'));
                    const params = { accountId: sub }
                    const user = await APIClient.GET(`/customer`, params);
                    if (!user) {
                        message.error('Tài khoản này hợp lệ ! Vui lòng thử lại tài khoản khác')
                    }
                    onLoginUser(user);
                    formRefLogin.resetFields();
                    setVisibleLogin(false)
                }

            }
        });
    }

    const handleLogoutUser = () => {
        sessionStorage.removeItem("jwt")
        onLogoutUser();
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const DOCUMENT = (document.documentElement.clientHeight) ? document.documentElement : document.body;
            if (DOCUMENT.scrollTop === 0) {
                setScrolliing(false);
            }
            else {
                setScrolliing(true);
            }
        });
    }, []);

    return (
        <div className="header-component">
            <RegistrationAccountForm
                ref={saveFormRef}
                visible={visible}
                onCancel={handleCancelForm}
                onCreate={handleSubmitRegistration}
            />
            <LoginAccountForm
                ref={saveFormRefLogin}
                visible={visibleLogin}
                onCancel={handleCancelFormLogin}
                onCreate={handleSubmitLogin}
            />
            <Row style={{ padding: '0px 15px' }}>
                <Col span={8}>
                    <span>
                        <Icon type="mail" style={{ marginRight: 5 }} />
                        <span>sonhung3198@gmail.com</span>
                    </span>
                    <Divider type="vertical" />
                    <span>
                        <Icon type="phone" style={{ marginRight: 5 }} />
                        <span>0356859536</span>
                    </span>
                </Col>
                <Col span={8} style={{ paddingRight: '15px', textAlign: 'right' }}>
                    {
                        _.isEmpty(user)
                            ? <span className="log-in-out">
                                <span onClick={() => { setVisibleLogin(!visibleLogin) }}>
                                    <Icon type="login" className="icon-user" />
                                    <span>Đăng Nhập</span>
                                </span>
                                <Divider type="vertical" />
                                <span onClick={() => { setVisible(!visible) }}>
                                    <Icon type="form" className="icon-user" />
                                    <span>Đăng Ký</span>
                                </span>
                            </span>
                            : <span className="user-profile">
                                <Link to="/customer">
                                    <Icon type="user" className="icon-user" />
                                    <span>{`${user.firstName} ${user.lastName}`}</span>
                                </Link>
                                <Divider type="vertical" />
                                <span onClick={handleLogoutUser}>
                                    <Icon type="logout" className="icon-user" />
                                    <span>Đăng xuất</span>
                                </span>
                            </span>
                    }

                </Col>
                <Col span={8}>
                    <Search
                        placeholder="Tìm kiếm ..."
                        onSearch={value => console.log(value)}
                        enterButton
                        style={{ marginTop: '15px' }} />
                </Col>
            </Row>
            <Affix offsetTop={0}>
                <Row
                    style={
                        {
                            backgroundColor: scrolling ? '#001529' : 'white',
                        }
                    }>
                    <Col span={18} push={6} style={{ top: '0px' }}>
                        <Row>
                            <Col span={18}>
                                <Menu
                                    className="menu-home"
                                    theme={scrolling ? 'dark' : 'light'}
                                    // onClick={this.handleClick}
                                    defaultSelectedKeys={['index']}
                                    mode="horizontal"
                                >
                                    <Menu.Item key="index">
                                        <Link to="/">
                                            <Icon type="home" />
                                            TRANG CHỦ
                                        </Link>
                                    </Menu.Item>

                                    <Menu.Item key="intro">
                                        <Icon type="book" />
                                        GIỚI THIỆU
                                    </Menu.Item>

                                    <Menu.Item key="product">
                                        <Icon type="car" />
                                        SẢN PHẨM
                                    </Menu.Item>

                                    <Menu.Item key="news">
                                        <Icon type="mail" />
                                        TIN TỨC
                                    </Menu.Item>

                                    <Menu.Item key="contact">
                                        <Icon type="phone" />
                                        LIÊN HỆ
                                    </Menu.Item>
                                </Menu>
                            </Col>
                            <Col span={6} style={{ color: 'black' }}>
                                <span >
                                    <Tag color="geekblue">
                                        <strong>
                                            Shopping-Cart :
                                                    </strong>
                                    </Tag>&nbsp;
                                                <Cart />
                                </span>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={6} pull={18}>
                        <Row>
                            <Col
                                span={12}
                                style={{ textAlign: 'end' }}
                            >
                                {/* <IconEffect /> */}
                                <img
                                    src={require('../../../../../Public/Images/Icon/home_icon.png')}
                                    width={70}
                                    alt="home_car_logo" />
                                <span>
                                    <strong
                                        style={
                                            {
                                                color: '#1890ff',
                                                fontWeight: '900',
                                                fontSize: 'large',
                                                marginLeft: 10
                                            }
                                        }>
                                        TOY SHOP
                                        {/* <TextEffect
                                            title="TOY SHOP"
                                            activateColor="#1890ff"
                                            deactivateColor="red"
                                        /> */}
                                    </strong>
                                </span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Affix>
        </div>
    )

}

function mapStateToProps(state) {
    return {
        user: state.currentUser
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onLoginUser: user => dispatch(loginUser(user)),
        onLogoutUser: () => {
            dispatch(logoutUser())
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)