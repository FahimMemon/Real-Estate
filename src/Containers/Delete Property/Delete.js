import React, { Component } from 'react'
import NavBar from '../../Components/Navbar';
import firebase from '../../Config/Fire'
import './Delete.css'

class Delete extends Component {
    constructor() {
        super()
        this.state = {
            allData: [],
            condit: false,
            active: "active",
            active1: "",
        }
    }

    componentDidMount() {
        firebase.database().ref("allProperties/For Sale").on("child_added", (data) => {
            let allData = this.state.allData
            let arr = []
            arr.push(data.val())
            allData.push(arr)
            this.setState({ allData })
        })
    }

    sale() {
        this.setState({ active: "active", active1: "", condit: true, allData: [] })
        setTimeout(() => {
            firebase.database().ref("allProperties/For Sale").on("child_added", (data) => {
                let allData = []
                let arr = []
                arr.push(data.val())
                allData.push(arr)
                this.setState({ allData, condit: false })
            })
        }, 3000);
    }

    rent() {
        this.setState({ active: "", active1: "active", condit: true, allData: [] })
        setTimeout(() => {
            firebase.database().ref("allProperties/Rent").on("child_added", (data) => {
                let allData = []
                let arr = []
                arr.push(data.val())
                allData.push(arr)
                this.setState({ allData, condit: false })
            })
        }, 3000);
    }

    render() {
        return (
            <div>
                <NavBar func="Log Out" hidden={true} active1="active" active="" />
                <div className="lates">
                    <h1>Delete Property</h1>
                    <ul className="nav nav-tabs">
                        <li className={this.state.active} onClick={this.sale.bind(this)}><a href="Javascript:void(0)">Sale</a></li>
                        <li className={this.state.active1} onClick={this.rent.bind(this)}><a href="Javascript:void(0)">Rent</a></li>
                    </ul>
                    {!!this.state.condit && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
                    <div className="main">
                        {!!this.state.allData.length && this.state.allData.map((e) => {

                            return e.map((f) => {
                                return <div class="card">
                                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                            <li data-target="#myCarousel" data-slide-to="1"></li>
                                            <li data-target="#myCarousel" data-slide-to="2"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="item active">
                                                <img src={f.images[0]} alt="Los Angeles" style={{ width: "100%" }} />
                                                <div class="carousel-caption">
                                                    <h3>Los Angeles</h3>
                                                </div>
                                            </div>
                                            {f.images.map((e, i) => {
                                                return i !== 0 && <div class="item">
                                                    <img src={e} alt="Los Angeles" style={{ width: "100%" }} />
                                                    <div class="carousel-caption">
                                                        <h3>Los</h3>
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                            <span class="glyphicon glyphicon-chevron-left"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                            <span class="glyphicon glyphicon-chevron-right"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                    <h1>Tailored Jeans</h1>
                                    <p class="price">$19.99</p>
                                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                                    <p><button>Add to Cart</button></p>
                                </div>
                            })
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Delete
