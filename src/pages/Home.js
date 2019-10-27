import React, { useContext } from 'react';
import { Table, Row, Col } from 'antd';
import moment from 'moment';

import { Page } from '../components';
import UserContext from '../context';
const Home = () => {
    const { users } = useContext(UserContext);

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName'
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName'
        },
        {
            title: 'Birthday',
            dataIndex: 'birthday',
            key: 'birthday',
            render: (date) => moment(date).format('MMMM Do, YYYY')
        },
        {
            title: 'Age',
            key: 'age',
            dataIndex: 'age'
        },
        {
            title: 'Hobby',
            key: 'hobby',
            dataIndex: 'hobby',
            ellipsis: true
        }
    ];

    return (
        <Page title='Home'>
            <Row>
                <Col xs={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 4 }}>
                    <div className='home-table-container'>
                        <h2 className='regitration-title'>Users List</h2>

                        <Table columns={columns} dataSource={users} pagination={false} />
                    </div>
                </Col>
            </Row>
        </Page>
    );
};

export default Home;
