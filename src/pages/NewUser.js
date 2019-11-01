import React from 'react';
import axios from 'axios';
import { message } from 'antd';
import { useHistory } from 'react-router-dom';

import { Page } from '../components';
import UserForm from '../components/UserForm';
// import { addUser } from '../redux/actions';

const NewUser = () => {
    const history = useHistory();

    const handleSubmit = async (userDetails) => {
        const hide = message.loading('Validating user information...', 0);

        try {
            await axios.post('https://us-central1-function-testing-01.cloudfunctions.net/users', userDetails);

            hide();

            message.success('Congratulate! User information successfully added.');
            history.push('/');
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
