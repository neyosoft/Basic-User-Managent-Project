import React, { useContext } from 'react';
import { message } from 'antd';
import { useHistory } from 'react-router-dom';
import uuid from 'uuid/v4';

import { Page } from '../components';
import UserContext from '../context';
import UserForm from '../components/UserForm';

const NewUser = () => {
    const { addUser } = useContext(UserContext);
    const history = useHistory();

    const success = (msg) => {
        message.success(msg);
    };

    const handleSubmit = (userDetails) => {
        success('Congratulate! User information successfully added.');

        addUser({ ...userDetails, key: uuid() });

        history.push('/');
    };

    return (
        <Page title='Add New User'>
            <div className='registration-form-container'>
                <h2 className='regitration-title'>Enter User Information</h2>
                <p className='regitration-description'>All details are mandatory</p>

                <UserForm buttonLabel='ADD USER' onSubmit={handleSubmit} />
            </div>
        </Page>
    );
};

export default NewUser;
