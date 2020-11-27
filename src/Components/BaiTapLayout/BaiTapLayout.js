import React, { Component } from 'react'
import Footer from './Footer'
import Navigation from './Navigation'
import PageContent from './PageContent'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <PageContent/>
                <Footer/>
            </div>
        )
    }
}
