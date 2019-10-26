import React, { createContext, Component } from 'react';

const UserContext = createContext([]);

export default UserContext;

class UserProvider extends Component {
    addUser = (user) => this.setState(({ users }) => ({ users: [...users, user] }));
    updateUser = (userID, updates) =>
        this.setState(({ users }) => ({ users: users.map((u) => (u.key === userID ? updates : u)) }));

    state = {
        users: [],
        addUser: this.addUser,
        updateUser: this.updateUser
    };

    render() {
        return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>;
    }
}

export { UserProvider };
