import React from 'react';
import { Layout, Menu } from 'antd';
import '../menu/Side.css';
import Router from '../router/Router';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

class Side extends React.Component {
    render(){        
        return(
            <Layout>
            <Header className="header">
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/kartu">Card</Link></Menu.Item>
                <Menu.Item key="alipay">
                  <a href="https://github.com/priharreformasik" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </Menu.Item>
              </Menu>
            </Header>
            <Layout>
              <Layout>
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 0,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  <Router/>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        )
    }
}

export default Side;