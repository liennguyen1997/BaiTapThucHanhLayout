import React, { Component } from 'react'
import BT3Content from './BT3Content'
import BT3Footer from './BT3Footer'
import BT3Header from './BT3Header'
import BT3SideBar from './BT3SideBar'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div className="">
                <BT3Header />
                <div className="container">
                    <div className="row" style={{ marginTop:"80px"}}>
                        <div className="col-3" >
                            <BT3SideBar />
                        </div>
                        <div className="col-9">
                            <BT3Content />
                        </div>
                    </div>
                </div>
                <BT3Footer />
            </div>
        )
    }
}
