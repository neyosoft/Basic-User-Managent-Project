import React, { useContext } from 'react';
import { message } from 'antd';
import { useHistory, useParams } from 'react-router-dom';

import { Page } from '../components';
import UserContext from '../context';
import UserForm from '../components/UserForm';

const EditUser = () => {
    const { users, updateUser } = useContext(UserContext);
    const history = useHistory();
    const { user: userID } = useParams();

    const currentUser = users.find((u) => u.key === userID);

    const success = (msg) => {
        message.success(msg);
    };

    const handleSubmit = (updates) => {
        success('Congratulate! User information successfully updated.');

        updateUser(userID, updates);

        setTimeout(() => history.push('/'), 1000);
    };

    return (
        <Page title='Edit User'>
            <div className='registration-form-container'>
                <h2 className='regitration-title'>Edit User Information</h2>
                <p className='regitration-description'>All details are mandatory</p>

                <UserForm defaultData={currentUser} onSubmit={handleSubmit} buttonLabel='Edit User' />
            </div>
        </Page>
    );
};

export default EditUser;
