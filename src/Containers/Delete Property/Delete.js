import React, { Component } from 'react'
import NavBar from '../../Components/Navbar';
import firebase from '../../Config/Fire'
import './Delete.css'

class Delete extends Component {
    constructor() {
        super()
        this.state = {
            allData: []
        }
    }

    componentDidMount() {
        firebase.database().ref("allProperties/For Sale").on("value", (data) => {
            console.log(data.val())
        })
    }


    render() {
        return (
            <div>
                <NavBar func="Log Out" hidden={true} active1="active" active="" />
                <div className="lates">
                    <h1>Delete Property</h1>
                    <ul className="nav nav-tabs">
                        <li className="active"><a href="javascript:void(0)">Sale</a></li>
                        <li><a href="javascript:void(0)">Rent</a></li>
                    </ul>
                    {!!this.state.allData.length && this.state.allData.map((e) => {
                        console.log(e)
                    })}
                </div>
            </div>
        )
    }
}

export default Delete
