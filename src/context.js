import React, { createContext, Component } from 'react';

const UserContext = createContext([]);

export default UserContext;

class UserProvider extends Component {
    addUser = (user) => this.setState(({ users }) => ({ users: [...users, user] }));

    state = {
        users: [],
        addUser: this.addUser
    };

    render() {
        return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>;
    }
}

export { UserProvider };
