import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import '../menu/Side.css';
import Foto from '../content/Foto';
import Kartu from '../content/Kartu';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



class Side extends React.Component {
    render(){        
        return(
            <Layout>
            <Header className="header">
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="2">Home</Menu.Item>
              </Menu>
            </Header>
            <Layout>
              <Sider width={200} className="site-layout-background">
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <UserOutlined />
                        Contact
                      </span>
                    }
                  >
                    <Menu.Item key="1">Card</Menu.Item>
                  </SubMenu>
                  
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>Contact</Breadcrumb.Item>
                  <Breadcrumb.Item>Card</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                    <Foto/>
                  <Kartu/>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        )
    }
}

export default Side;