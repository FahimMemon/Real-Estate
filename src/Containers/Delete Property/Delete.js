import React, { Component } from 'react'
import NavBar from '../../Components/Navbar';
import firebase from '../../Config/Fire'
import './Delete.css'

class Delete extends Component {
    constructor() {
        super()
        this.state = {
            allData: [],
        }
    }

    componentDidMount() {
        firebase.database().ref("allProperties/For Sale").on("value", (data) => {
            let allData = this.state.allData
            let arr = []
            arr.push(data.val())
            allData.push(arr)
            this.setState({ allData })
        })
    }

    sale() {
        this.setState({allData: []})
        firebase.database().ref("allProperties/For Sale").on("value", (data) => {
            let allData = this.state.allData
            let arr = []
            arr.push(data.val())
            allData.push(arr)
            this.setState({ allData })
        })
    }

    rent() {
        this.setState({allData: []})
        firebase.database().ref("allProperties/Rent").on("value", (data) => {
            let allData = this.state.allData
            let arr = []
            arr.push(data.val())
            allData.push(arr)
            this.setState({ allData })
        })
    }

    render() {
        return (
            <div>
                <NavBar func="Log Out" hidden={true} active1="active" active="" />
                <div className="lates">
                    <h1>Delete Property</h1>
                    <ul className="nav nav-tabs">
                        <li className="active" onClick={this.sale.bind(this)}><a href="javascript:void(0)">Sale</a></li>
                        <li onClick={this.rent.bind(this)}><a href="javascript:void(0)">Rent</a></li>
                    </ul>
                    {!!this.state.allData.length && this.state.allData.map((e) => {
                        return e.map((f) => {
                            return console.log(f)
                        })
                    })}
                </div>
            </div>
        )
    }
}

export default Delete
