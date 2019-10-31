import React from 'react';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './redux/store';

import { Home, NewUser } from './pages';
import { Header, Footer } from './layouts';

function App() {
    return (
        <Provider store={store}>
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
                    </Switch>
                    <Footer />
                </Layout>
            </Router>
        </Provider>
    );
}

export default App;
