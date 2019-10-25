import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { UserProvider } from './context';
function App() {
    return (
        <UserProvider>
            <div>Hello</div>
        </UserProvider>
    );
}

export default App;
