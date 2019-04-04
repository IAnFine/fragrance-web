import React, { Component } from 'react';
// import {IconFont} from '../component/IconFont';
import { Link } from 'react-router-dom';
import {menuData, iconFontURL} from './router.config';
import {
    Menu, Icon, Layout
} from 'antd';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: iconFontURL,
});

const {
    Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

export default class MainMenu extends Component {
    state = {
        collapsed: false,
        data:[]
    };

    componentDidMount = () => {
        this.setState({data: menuData});
    }

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    render() {
        console.log(menuData)
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
                {
                    this.state.data.map((value) => {
                        return (
                            value.children ? (
                                <SubMenu key={value.key} title={<span><IconFont style={value.style} type={value.icon} /><span>{value.title}</span></span>}>
                                    {
                                        value.children.map((child) => {
                                            return (
                                                    <Menu.Item key={child.key}>
                                                    <Link to={child.link}>{child.title}</Link></Menu.Item>
                                                
                                            )
                                        })
                                    }
                                </SubMenu>
                            ) : (
                                    <Menu.Item key={value.key} >
                                       <Link to={value.link}> 
                                            <IconFont style={value.style} type={value.icon} />
                                            <span>{value.title}</span>
                                        </Link>
                                    </Menu.Item>
                            )
                        )
                    })
                }
                </Menu>
            </Sider>
        )
    }
}