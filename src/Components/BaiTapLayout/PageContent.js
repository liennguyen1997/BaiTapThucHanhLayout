import React, { Component } from 'react'
import JumbotronHeader from './JumbotronHeader'
import PageFeatures from './PageFeatures'

export default class PageContent extends Component {
    render() {
        return (
            <div className="container" style = {{marginTop:80}} > 
                <JumbotronHeader/>
                <PageFeatures/>
            </div>
        )
    }
}
