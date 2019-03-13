import React, { Component } from 'react';

import {
    Menu, Icon, Layout
} from 'antd';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1086324_3t9c3t76cac.js',
});

const {
    Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

export default class MainMenu extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        return (
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <div className="logo" >
                    <image width="350" height="350" x="75" y="120" cursor="pointer" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeYAAAIlCAMAAAA32at6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRF////AAAAVcLTfgAAAAF0Uk5TAEDm2GYAAAEcSURBVHja7MExAQAAAMKg9U9tCU+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG4mwAAUnwABSto4TAAAAABJRU5ErkJggg==" />
                </div>/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <IconFont style={{ fontSize: 20 }} type="iconyibiaopan" />
                        <span>Dashbord</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <IconFont style={{ fontSize: 20 }} type="iconjingxiang" />
                        <span>Image</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <IconFont style={{ fontSize: 20 }} type="iconrongqifuwuContainerServi" />
                        <span>Container</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <IconFont style={{ fontSize: 20 }} type="iconxiaozhan-tianchong" />
                        <span>Stack</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <IconFont style={{ fontSize: 20 }} type="iconfuwuqi" />
                        <span>Services</span>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Icon type="desktop" />
                        <span>Config</span>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Icon type="desktop" />
                        <span>Cool Q</span>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Icon type="user" />
                        <span>User</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}