import React, { useEffect } from 'react';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const Page = ({ title, children }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Layout>
            <Header className='header'>
                <h2 className='site-name'>User Management</h2>
                <div className='side-menu'>Add User</div>
            </Header>
            <Content>{children}</Content>
            <Footer style={{ textAlign: 'center' }}>Obagunwa Emmanuel ©2019 Powered By ENYE </Footer>
        </Layout>
    );
};

export default Page;
