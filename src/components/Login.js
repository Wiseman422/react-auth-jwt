import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: undefined,
            password: undefined
        };

        this.change = this.change.bind(this);
    };

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onClick = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('/api/auth/login', {
            username: this.state.email,
            password: this.state.password
        })
        .then((res) => {
            console.log(res);
            localStorage.setItem('jwt-token', res.data.token);
            this.props.history.push('/auth');
        });
    };

    render() {
        return (
            <React.Fragment>
                <div>login Component</div>
                <form onSubmit={(e) => this.onClick(e)}>
                    <div>
                        <label>email : </label><input type="text" name="email" value={this.state.email} onChange={(e) => this.change(e)} />
                        <label>email : </label><input type="password" name="password" value={this.state.password} onChange={(e) => this.change(e)} />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </React.Fragment>
        );
    };
};

export default Login;
