import React, { Component } from 'react'

export default class BT3ProductItem extends Component {
    render() {
        return (
            <div>
                <div class="mb-2">
                    <div class="card h-100">
                        <img class="card-img-top" src="http://placehold.it/700x400" alt="" />
                        <div class="card-body">
                            <h5 class="card-title text-primary">Item-one</h5>
                            <h5 className="">24.99$</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                        </div>
                        <div class="card-footer">
                            <p className= "">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star text-muted"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
