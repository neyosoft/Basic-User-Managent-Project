import React from 'react';
import { message } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Page } from '../components';
import UserForm from '../components/UserForm';
import { addUser } from '../redux/actions';

const NewUser = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = async (userDetails) => {
        const hide = message.loading('Validating user information...', 0);

        try {
            dispatch(addUser(userDetails));

            setTimeout(() => {
                hide();

                message.success('Congratulate! User information successfully added.');
                history.push('/');
            }, 2000);
        } catch (error) {}
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
