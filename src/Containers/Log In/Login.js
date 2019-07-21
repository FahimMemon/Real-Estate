import React, { Component } from 'react';
import './Login.css';
import NavBar from '../../Components/Navbar';
import swal from 'sweetalert'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            obje: {
                padding: "10px",
                width: "90%",
                borderRadius: "3px",
                border: "1px solid lightGray",
                height: "45px"
            },
            butto: {
                padding: "10px",
                marginTop: "10px",
                border: "1px solid lightGray",
                borderRadius: "3px",
                fontSize: "15px",
                fontWeight: "bold"
            },
        }
    }

    componentDidMount() {
        let get = localStorage.getItem("isLogin")
        if (get === "true") {
            this.props.history.push("/add")
        }
    }

    signIn() {
        if (this.state.email === "admin" && this.state.password === "admin") {
            localStorage.setItem("isLogin", "true")
            this.props.history.push('/add')
        } else {
            swal({
                title: "Error!",
                text: "Credentials not matched",
                icon: "error"
            })
        }
    }

    render() {
        return (
            <div>
                <NavBar page="Sign In" func="Login" hidden={false} />
                <h2 style={{ textAlign: "center", color: "black", marginTop: "100px" }}>Sign In</h2>
                <div className="autos">
                    <div>
                        <label style={{ color: "black" }}>Email:</label>
                        <br />
                        <input type="email" style={this.state.obje} value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <div>
                        <label style={{ color: "black" }}>Password:</label>
                        <br />
                        <input type="password" value={this.state.password} style={this.state.obje} onChange={(e) => this.setState({ password: e.target.value })} />
                    </div>
                    <div>
                        <button className="btn btn-default" style={this.state.butto} onClick={this.signIn.bind(this)}>
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
