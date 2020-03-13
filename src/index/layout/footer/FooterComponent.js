import React from 'react'
import { Row, Col ,Icon} from 'antd'
const FooterComponent = (props) => {
    return (
        <Row
            style={
                {
                    backgroundColor: 'black',
                    color: 'white',
                    marginTop: '15px',
                    height: '260px'
                }}
        >
            <Row className='row-footer'>
                <Col span={8}>
                    <Icon type="phone" theme="twoTone" twoToneColor="blue" />&emsp;
                                                <strong>HỖ TRỢ MIẾN PHÍ</strong>
                </Col>
                <Col span={8}>
                    <Icon type="dollar" theme="twoTone" twoToneColor="green" />&emsp;
                                                <strong>100% CHÍNH HÃNG</strong>
                </Col>
                <Col span={8}>
                    <Icon type="car" theme="twoTone" />&emsp;
                                                <strong>GIAO HÀNG TẬN NƠI</strong></Col>
            </Row>
            <Row className='row-footer-last'>
                <Row>
                    <Col span={6}>
                        <dl>
                            <dd>
                                <strong>VỀ CHÚNG TÔI</strong>
                            </dd>
                            <dd>
                                Giới thiệu
                                                    </dd>
                            <dd>
                                Giao hàng
                                                    </dd>
                            <dd>
                                Đổi trả
                                                    </dd>
                        </dl>
                    </Col>
                    <Col span={6}>
                        <dl>
                            <dd>
                                <strong>KẾT NỐI</strong>
                            </dd>
                            <dd>
                                Facebook&emsp;<Icon type="facebook"></Icon>
                            </dd>
                            <dd>
                                Gmail&emsp;<Icon type="google"></Icon>
                            </dd>
                            <dd>
                                Instagram&emsp;<Icon type="instagram"></Icon>
                            </dd>
                        </dl>
                    </Col>
                    <Col span={6}>
                        <dl>
                            <dd>
                                <strong>TRỢ GIÚP</strong>
                            </dd>
                            <dd>
                                Hướng dẫn mua hàng
                                                    </dd>
                            <dd>
                                Hưỡng dẫn thanh toán
                                                    </dd>
                            <dd>
                                Tài khoản giao dịch
                                                    </dd>
                        </dl>
                    </Col>
                    <Col span={6}>
                        <dl>
                            <dd>
                                <strong>HÃY ĐẾN VỚI CHÚNG TÔI</strong>
                            </dd>
                        </dl>

                    </Col>
                </Row>
                <Row style={{ marginTop: '80px', textAlign: 'center' }}>
                    <p>Copyright © 2020 Antd. <a target="_blank">Powered by SonHung</a>.</p>
                </Row>
            </Row>

        </Row>
    )
}
export default FooterComponent