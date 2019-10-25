import React, { useState } from 'react';
import { Button } from 'antd';
import { Page } from '../components';

const NewUser = () => {
    // const [state, setState] = useState({});

    return (
        <Page title='Add New User'>
            <h2>Adding new user</h2>
            <Button>Add</Button>
        </Page>
    );
};

export default NewUser;
