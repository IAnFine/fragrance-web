import React, { Component } from 'react';
// import { Router, Route, Link } from 'react-router';
import {
  Layout, Breadcrumb
} from 'antd';
import MainMenu from './layout/MainMenu';
import './App.css';

const {
  Header, Content, Footer, Sider,
} = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <MainMenu/>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Fragrance Web ©2018 Created by I Am Fine
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
