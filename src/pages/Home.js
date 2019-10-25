import React, { useState } from 'react';
import { Button, DatePicker, message, Alert } from 'antd';
import { Page } from '../components';

const Home = () => {
    const [date, setDate] = useState(null);

    const handleChange = (date) => {
        message.info(`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`);
        setDate(date);
    };
    return (
        <Page title='Home'>
            <h2>Welcome</h2>

            <div style={{ width: 400, margin: '100px auto' }}>
                <DatePicker onChange={handleChange} />

                <div style={{ marginTop: '20px' }}>
                    <Alert message={`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`} type='success' />
                </div>
            </div>

            <div style={{ marginTop: '20px' }}>
                <Button type='primary'>Example Button</Button>
            </div>
        </Page>
    );
};

export default Home;
