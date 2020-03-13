import React from 'react';
import { Layout, BackTop, Breadcrumb, Row, Icon } from 'antd';
import './Home.css';
import { Route, Switch, useLocation, Link } from 'react-router-dom'
import { ProductList } from '../product/ProductList'
import Product from '../product/Product'
import HeaderComponent from './layout/header/HeaderComponent'
import FooterComponent from './layout/footer/FooterComponent'
import SiderMenuComponent from './layout/content/sider/SiderMenuComponent'
import MainContent from './layout/content/MainContent'
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
                <BackTop style={{ right: '12px' }}>
                </BackTop>
                <Header style={
                    {
                        color: 'white',
                        height: '100%',
                        padding: '0'
                    }
                }>
                    <HeaderComponent />
                </Header>
                <Row style={
                    {
                        paddingLeft: '263px',
                        borderTop: '0.3px solid',
                        height: '36px',
                        paddingTop: '7px'
                    }
                }>
                    <Breadcrumb separator={<Icon type="caret-right" />}>
                        {breadcrumbItems}
                    </Breadcrumb>
                </Row>

                <Switch>
                    <Route path="/product/:name">
                        <Product />
                    </Route>
                    <Route path="/">
                        <Layout
                            style={
                                { marginTop: '2px' }
                            }
                        >
                            <Sider
                                style={
                                    {
                                        marginTop: '15px',
                                        backgroundColor: 'none',
                                        height: '100%'
                                    }
                                }>
                                <SiderMenuComponent />
                            </Sider>
                            <Content
                                style={
                                    { margin: '15px 15px 15px 65px ' }
                                }
                            >
                                <MainContent />
                                <Route path="/">
                                    <ProductList />
                                </Route>
                            </Content>
                        </Layout>
                    </Route>

                </Switch>


                <Footer
                    style={
                        {
                            marginTop: '35px',
                            padding: '0'
                        }
                    }
                >
                    <FooterComponent />
                </Footer>
            </Layout>
        </React.Fragment>

    )
}
export default Home;