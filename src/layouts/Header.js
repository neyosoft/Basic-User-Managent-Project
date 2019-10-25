import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Layout.Header className='header'>
            <h2 className='site-name'>
                <Link to='/'>User Management</Link>
            </h2>
            <div className='side-menu'>
                <Link to='/add-user'>+ Add User</Link>
            </div>
        </Layout.Header>
    );
};

export default Header;
