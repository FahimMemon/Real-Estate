import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import firebase from '../Config/Fire'
import {withRouter} from 'react-router-dom'

class NavBar extends Component {

    logout() {
        let funcs = this.props.func
        if (funcs === "Log Out") {
            firebase.auth().signOut()
            .then(() => {
                localStorage.setItem("isLogin" , "false")
                this.props.history.push("/")
            })
        } else {
            this.props.history.push("/")
        }
    }

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid cont">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/" style={{ fontSize: "20px" }}>Bantva Real Estate</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        {this.props.hidden && <ul className="nav navbar-nav">
                            <li className={this.props.active}  ><Link to="/add">Add</Link></li>
                            <li className={this.props.active1} ><Link to="/delete">Delete</Link></li>
                        </ul>}
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="Javascript:void(0)" onClick={this.logout.bind(this)}>{this.props.func}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}

export default withRouter(NavBar);