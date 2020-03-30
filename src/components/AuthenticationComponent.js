import React, { Component } from 'react';
import axios from 'axios';
import {getToken} from '../helpers/jwt';
import { withRouter } from 'react-router-dom';

class AuthenticationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined
        };
    };

    componentDidMount() {
        const jwt = getToken();

        if(!jwt) {
            this.props.history.push('/login');
        }

        axios.get('/api/user/list', {headers: {Authorization: `${jwt}`}})
        .then((res) => {
            this.setState({
                user: JSON.stringify(res.data.users)
            });
        })
    }

    render() {
        if (this.state.user === undefined)
            return (
                <div>Loading...</div>
            );

        return (
            <React.Fragment>
                <div>Authentication Component</div>
                <div>{this.state.user}</div>
                <div>{this.props.children}</div>
            </React.Fragment>
        );
    };
};

export default withRouter(AuthenticationComponent);
