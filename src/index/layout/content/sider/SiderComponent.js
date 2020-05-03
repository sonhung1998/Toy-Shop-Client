import React from 'react'
import { Menu, Icon, Anchor, Affix, Card, Avatar } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faTruck, faCarBattery, faCarSide, faCaravan, faHeadset } from '@fortawesome/free-solid-svg-icons'
import './SiderComponent.css'

const CustomIcon = (props) => {
    return (
        <FontAwesomeIcon style={{ marginRight: 10 }} icon={props.icon} />
    )
}

const SiderMenuComponent = (props) => {

 

    return (
        <Affix
            offsetTop={73}
            style={{ width: 250 }}
        >
            <Anchor
                className="anchor"
                targetOffset={70}
            >
                <Menu
                    // onClick={this.handleClick}
                    // defaultSelectedKeys={['2']}
                    mode="inline"
                    theme="light"
                >
                    <Menu.Item
                        key="1"
                        disabled
                        style={{ backgroundColor: '#40a9ff' }}
                    >
                        <Icon
                            type="unordered-list"
                            style={
                                {
                                    color: 'white',
                                    fontSize: 'large',
                                }}
                        />
                        <span
                            style={
                                {
                                    color: 'white',
                                    fontSize: 'large',
                                    fontWeight: 'bolder'
                                }}
                        >
                            Danh Mục
                        </span>
                    </Menu.Item>

                    {/* Menu Item */}

                    <Menu.Item key="2">
                        <Anchor.Link
                            href="#1"
                            title={
                                <div>
                                    <CustomIcon icon={faTruck} />
                                    <span>Đồ Chơi Máy Cẩu - Máy Xúc</span>
                                </div>
                            }>
                        </Anchor.Link>
                    </Menu.Item>

                    <Menu.Item key="3">
                        <Anchor.Link
                            href="#5"
                            title={
                                <div>
                                    <CustomIcon icon={faCar} />
                                    <span>Ô tô Điện</span>
                                </div>
                            }>
                        </Anchor.Link>
                    </Menu.Item>

                    <Menu.Item key="4">
                        <Anchor.Link
                            href="#6"
                            title={
                                <div>
                                    <CustomIcon icon={faCarBattery} />
                                    <span>Ô tô Điều Khiển Từ Xa</span>
                                </div>
                            }>
                        </Anchor.Link>
                    </Menu.Item>

                    <Menu.Item key="5">
                        <Anchor.Link
                            href="#7"
                            title={
                                <div>
                                    <CustomIcon icon={faCarSide} />
                                    <span>Ô tô Bằng Gỗ</span>
                                </div>
                            }>
                        </Anchor.Link>
                    </Menu.Item>

                    <Menu.Item key="6">
                        <Anchor.Link
                            href="#8"
                            title={
                                <div>
                                    <CustomIcon icon={faCaravan} />
                                    <span>Ô tô Biến Hình</span>
                                </div>
                            }>
                        </Anchor.Link>
                    </Menu.Item>
                </Menu>
            </Anchor>
            <Card
                title={
                    <div>
                        <Icon
                            type="phone"
                            spin={false}
                            style={
                                {
                                    marginRight: 10,
                                    fontSize: 20,
                                    border: '1px solid',
                                    padding: 5,
                                    borderRadius: 100
                                }}
                        />
                        <strong>Hỗ Trợ Trực Tuyến</strong>
                    </div>

                }
                style={{ marginTop: 20 }}
                headStyle={{
                    backgroundColor: '#40a9ff',
                    color: 'white',
                    borderTop: '2px dashed',
                    borderBottom: '2px dashed'

                }}
            >
                <Card.Meta
                    avatar={
                        <FontAwesomeIcon
                            icon={faHeadset}
                            size="2x"
                            style={
                                {
                                    marginTop: 13
                                }}
                        />
                    }
                    title="Tư Vấn Mua Hàng"
                    description="097.373.238"
                />
            </Card>

        </Affix>
    )
}
export default SiderMenuComponent