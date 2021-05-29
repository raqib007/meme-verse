import React, {useContext} from 'react';
import {Button, Layout, Avatar,Menu, Dropdown } from "antd";
import "./AppHeader.css";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context-provider/userContext";
import logo from "../../assets/img/logo.png";
import {UserOutlined, UploadOutlined, BarsOutlined} from '@ant-design/icons';

export default function AppHeader(props) {
    const auth = useContext(AuthContext);
    const {Header} = Layout;

    const menu1 = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item onClick={() => props.showModal(true,'signin','Sign In')}>Login</Menu.Item>
            <Menu.Item onClick={() => props.showModal(true,'signup','Sign Up')}>Sign Up</Menu.Item>
        </Menu>
    );
    const menu2 = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item onClick={() => props.showModal(true,'signin','Sign In')}>Logout</Menu.Item>
        </Menu>
    );

    function handleLogoutClick(){
        if(localStorage.getItem('token')){
            localStorage.removeItem("token");
            auth.clearAuth().then(()=>{
                console.log('signed out');
            })
        }
    }
    function handleMenuClick(e) {
        console.log('click', e);
    }

    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="header-content">
                <Link to={"/"}><img className="logo" src={logo} alt=""/></Link>

                <span className="headerMenu">
                    {auth.user !== null ?
                    ( 
                        <Dropdown.Button overlay={menu2}></Dropdown.Button>
                        ) :(
                        <Dropdown.Button overlay={menu1}></Dropdown.Button>
                    )}
                    {/* <BarsOutlined/> */}
                </span>
                
                

                {auth.user !== null ?
                ( 
                    <div className="header-button">
                        <Avatar icon={<UserOutlined />} /> &nbsp;&nbsp;
                        <span style={{color:'#ffffff',marginRight:10}}>{auth.user.first_name}</span>
                    <Button type="primary" onClick={() => props.showModal(true,'upload','Create Post')}
                            shape="round" icon={<UploadOutlined />}>Upload</Button>
                    <Button type="text" onClick={() => handleLogoutClick()}>Logout</Button>
                </div>
                ) :
                ( <div className="header-button">
                    <Button type="text" onClick={() => props.showModal(true,'signin','Sign In')}>Login</Button>
                    <Button type="text" onClick={() => props.showModal(true,'signup','Sign Up')}>Sign Up</Button>
                </div>)}

            </div>
        </Header>
    );
}
