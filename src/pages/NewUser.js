import React, { useState, useContext } from 'react';
import { DatePicker, Input, message } from 'antd';
import { useHistory } from 'react-router-dom';
import uuid from 'uuid/v4';

import moment from 'moment';
import { Page } from '../components';
import UserContext from '../context';
const { TextArea } = Input;

const dateFormat = 'DD/MM/YYYY';

const NewUser = () => {
    const [state, setState] = useState({});
    const { addUser } = useContext(UserContext);
    const history = useHistory();

    const shouldDisableDate = (date) => {
        if (!date) return false;

        return moment().isBefore(date);
    };

    const success = (msg) => {
        message.success(msg);
    };

    const error = (msg) => {
        message.error(msg);
    };

    const validateForm = () => {
        const { firstName = '', lastName = '', age = '', birthday = '', hobby = '' } = state;

        if (firstName.trim().length < 1) {
            error('First Name cannot be empty');
            return false;
        }

        if (lastName.trim().length < 1) {
            error('Last Name cannot be empty');
            return false;
        }

        if (!moment(birthday).isValid()) {
            error('Invalid Date of Birth selected');
            return false;
        }

        if (isNaN(age) || age < 1 || age > 150) {
            error('You entered invalid age');
            return false;
        }

        if (hobby.trim().length < 1) {
            error('Hobby cannot be empty');
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            success('Congratulate! User information successfully added.');
            addUser({ ...state, key: uuid() });
            setState({});

            setTimeout(() => history.push('/'), 1000);
        }
    };

    const handleChange = (name, value) => setState((prevState) => ({ ...prevState, [name]: value }));

    return (
        <Page title='Add New User'>
            <div className='registration-form-container'>
                <h2 className='regitration-title'>Enter User Information</h2>
                <p className='regitration-description'>All details are mandatory</p>

                <form className='registration-form' onSubmit={handleSubmit}>
                    <div className='form-field'>
                        <div className='label'>First Name</div>
                        <Input
                            className='form-input'
                            placeholder='Enter First Name'
                            value={state.firstName || ''}
                            onChange={(e) => handleChange('firstName', e.target.value)}
                        />
                    </div>

                    <div className='form-field'>
                        <div className='label'>Last Name</div>
                        <Input
                            className='form-input'
                            placeholder='Enter Last Name'
                            value={state.lastName || ''}
                            onChange={(e) => handleChange('lastName', e.target.value)}
                        />
                    </div>

                    <div className='form-field'>
                        <div className='label'>Date of Birth</div>
                        <DatePicker
                            format={dateFormat}
                            value={state.birthday}
                            disabledDate={shouldDisableDate}
                            placeholder='Select Date of birth'
                            onChange={(date) => handleChange('birthday', date)}
                        />
                    </div>

                    <div className='form-field'>
                        <div className='label'>Age</div>
                        <Input
                            className='form-input'
                            placeholder='Enter Age'
                            value={state.age || ''}
                            onChange={(e) => handleChange('age', e.target.value)}
                        />
                    </div>
                    <div className='form-field'>
                        <TextArea
                            rows={4}
                            placeholder='Type Hobby'
                            value={state.hobby || ''}
                            onChange={(e) => handleChange('hobby', e.target.value)}
                        />
                    </div>

                    <button
                        type='submit'
                        className='ant-btn ant-btn-primary ant-btn-lg ant-btn-block'
                        ant-click-animating-without-extra-node='false'>
                        <span>ADD USER</span>
                    </button>
                </form>
            </div>
        </Page>
    );
};

export default NewUser;
