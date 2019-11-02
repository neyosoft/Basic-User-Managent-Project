import React, { useEffect, useState } from 'react';
import { Table, Row, Col } from 'antd';
import moment from 'moment';
// import { useSelector } from 'react-redux';

import { Page } from '../components';

import { database } from '../firebase';

const columns = [
    {
        title: 'User ID',
        dataIndex: 'userID',
        key: 'userID'
    },
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
        render: (date) => moment.unix(date).format('MMMM Do, YYYY')
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

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        let mounted = true; // track when page is mounted

        const listener = database.ref('/users/').on('value', (snapshot) => {
            if (snapshot.exists() && mounted) {
                // only update state when data exists and page still mounted
                console.log('There is an update: ', snapshot.val());
                const mapUser = [];

                snapshot.forEach(function(childSnapshot) {
                    mapUser.push(childSnapshot.val());
                });

                setUsers(mapUser);
            }
        });

        return () => {
            listener.off && listener.off();
            mounted = false;
        };
    }, []);

    // const users = useSelector((store) => store.users);

    return (
        <Page title='Home'>
            <Row>
                <Col xs={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 4 }}>
                    <div className='home-table-container'>
                        <h2 className='regitration-title'>Users List</h2>

                        <Table
                            columns={columns}
                            dataSource={users}
                            pagination={false}
                            rowKey={(record) => record.userID || 'index'}
                        />
                    </div>
                </Col>
            </Row>
        </Page>
    );
};

export default Home;
