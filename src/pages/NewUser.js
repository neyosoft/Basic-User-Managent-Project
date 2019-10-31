import React from 'react';
import uuid from 'uuid/v4';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Page } from '../components';
import UserForm from '../components/UserForm';
import { addUser } from '../redux/actions';

const NewUser = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (userDetails) => {
        // message.info('Validating user information...');
        const hide = message.loading('Validating user information...', 0);
        setTimeout(hide, 3000);

        setTimeout(() => {
            const newUserInformation = { ...userDetails, key: uuid() };

            dispatch(addUser(newUserInformation));

            message.success('Congratulate! User information successfully added.');
            history.push('/');
        }, 3500);
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
