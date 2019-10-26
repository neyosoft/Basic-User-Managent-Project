import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { UserProvider } from './context';
import { Home, NewUser, EditUser } from './pages';
import { Header, Footer } from './layouts';

function App() {
    return (
        <UserProvider>
            <Router>
                <Layout>
                    <Header />
                    <Switch>
                        <Route path='/' exact>
                            <Home />
                        </Route>
                        <Route path='/add-user'>
                            <NewUser />
                        </Route>
                        <Route path='/user/:user/edit'>
                            <EditUser />
                        </Route>
                    </Switch>
                    <Footer />
                </Layout>
            </Router>
        </UserProvider>
    );
}

export default App;
