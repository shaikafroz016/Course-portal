import React, { Component } from 'react'
import { baseUrl } from '../shared/baseUrl';
import Jumbot from './Jumbotron';
class adminComponent extends Component {
    render() {
        return (
            <div className='container'>
                <Jumbot />
                <h2><a href={baseUrl + 'admin'}>Click Here</a> for admin section</h2>
            </div>
            
        )
    }
}

export default adminComponent
