import React, { useState } from 'react';
import { Layout, BackTop, Breadcrumb, Row, Icon, Divider } from 'antd';
import './Home.css';
import { Route, Switch, useLocation, Link } from 'react-router-dom'
import { ProductListContainer } from '../product/ProductList'
import Product from '../product/Product'
import HeaderComponent from './layout/header/HeaderComponent'
import FooterComponent from './layout/footer/FooterComponent'
import SiderComponent from './layout/content/sider/SiderComponent'
import MainContent from './layout/content/MainContent'
import Customer from '../customer/Customer'
const { Header, Footer, Sider, Content } = Layout;

const Home = (props) => {

    const location = useLocation();
    // const breadcrumbNameMap = {
    //     '/apps/2/detail': 'Detail',
    //   };
    const pathSnippets = location.pathname.split('/').filter(i => i);
    console.log('path:', pathSnippets);

    const extraBreadcrumbItems = pathSnippets.map((item, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>
                    {item[0].toLocaleUpperCase() + item.substring(1)}
                </Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);


    return (
        <React.Fragment>
            <Layout>
                {/* Header */}
                <BackTop style={{ right: '12px' }} />
                <Header style={{ color: 'white', height: '100%', padding: 0 }}>
                    <HeaderComponent />
                </Header>
                <Row style={{ paddingLeft: 295, borderTop: '0.3px solid', height: 36, paddingTop: 7 }}>
                    <Breadcrumb separator={<Icon type="caret-right" />}>
                        {breadcrumbItems}
                    </Breadcrumb>
                </Row>
               
                {/* Content */}
                <Switch>
                    <Route path="/customer">
                        <Customer />
                    </Route>
                    <Route path="/product/:name">
                        <Product />
                    </Route>
                    <Route path="/">
                        <Layout style={{ marginTop: -15, paddingLeft: 30, }} >
                            <Sider
                                style={{ marginTop: 15, backgroundColor: 'rgb(240, 242, 245)', height: '100%' }}>
                                <SiderComponent />
                            </Sider>
                            <Content style={{ margin: '15px 15px 15px 65px ' }}>
                                <MainContent />
                                <Route path="/">
                                    <ProductListContainer />
                                </Route>
                            </Content>
                        </Layout>
                    </Route>
                </Switch>
                {/* Footer */}
                <Footer
                    style={{ marginTop: 35, padding: 0 }} >
                    <FooterComponent />
                </Footer>
            </Layout>
        </React.Fragment>

    )
}
export default Home;