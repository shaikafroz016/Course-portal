import React, { Component } from 'react'
import { baseUrl } from '../shared/baseUrl';
class facultyComponent extends Component {
    render() {
        return (
            <div className='container downc'>
                <h1 className="downc"><a href={baseUrl + 'faculty'}>Click Here</a> for faculty section </h1>
            </div>
        )
    }
}

export default facultyComponent