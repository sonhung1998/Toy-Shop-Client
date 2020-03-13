import React from 'react'
import { Affix, Menu, Icon } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faTruck, faCarBattery, faCarSide, faCaravan } from '@fortawesome/free-solid-svg-icons'
const SiderMenuComponent = (props) => {
    return (
        <Affix offsetTop={66}>
            <Menu
                // onClick={this.handleClick}
                defaultSelectedKeys={['2']}
                mode="inline"
                theme="light"
                style={{ width: '250px' }}
            >
                <Menu.Item
                    key="1"
                    disabled
                    style={{ backgroundColor: '#e8e8e8', color: 'black' }}>
                    <Icon type="unordered-list" />
                    <span>Danh Mục</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <FontAwesomeIcon icon={faTruck} />
                &emsp;
                <span>Đồ Chơi Máy Cẩu - Máy Xúc</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <FontAwesomeIcon icon={faCar} />
                &emsp;
                <span>Ô tô Điện</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <FontAwesomeIcon icon={faCarBattery} />
                &emsp;
                <span>Ô tô Điều Khiển Từ Xa</span>
                </Menu.Item>
                <Menu.Item key="5">
                    <FontAwesomeIcon icon={faCarSide} />
            &emsp;
                <span>Ô tô Bằng Gỗ</span>
                </Menu.Item>
                <Menu.Item key="6">
                    <FontAwesomeIcon icon={faCaravan} />
            &emsp;
                <span>Ô tô Biến Hình</span>
                </Menu.Item>
            </Menu>
        </Affix>
    )
}
export default SiderMenuComponent