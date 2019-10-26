import React, { useEffect, useState } from 'react';
import { DatePicker, Input, message } from 'antd';

import moment from 'moment';
const { TextArea } = Input;

const dateFormat = 'DD/MM/YYYY';

const UserForm = ({ defaultData, onSubmit, buttonLabel }) => {
    const [state, setState] = useState({});

    useEffect(() => {
        if (defaultData) {
            setState(defaultData);
        }
    }, [defaultData]);

    const shouldDisableDate = (date) => {
        if (!date) return false;

        return moment().isBefore(date);
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
            setState({});

            onSubmit(state);
        }
    };

    const handleChange = (name, value) => setState((prevState) => ({ ...prevState, [name]: value }));

    return (
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
                <span>{buttonLabel}</span>
            </button>
        </form>
    );
};

export default UserForm;
