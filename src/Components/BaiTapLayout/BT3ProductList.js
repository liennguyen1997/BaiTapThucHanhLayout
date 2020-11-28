import React, { Component } from 'react'
import BT3ProductItem from './BT3ProductItem'

export default class BT3ProductList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <BT3ProductItem />
                    </div>
                    <div className="col-4">
                        <BT3ProductItem />
                    </div>
                    <div className="col-4">
                        <BT3ProductItem />
                    </div>
                    <div className="col-4">
                        <BT3ProductItem />
                    </div>
                    <div className="col-4">
                        <BT3ProductItem />
                    </div>
                    <div className="col-4">
                        <BT3ProductItem />
                    </div>
                </div>


            </div>
        )
    }
}
