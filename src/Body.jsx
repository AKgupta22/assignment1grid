import React from 'react'
import Boxes from './Boxes'
import Footer from './Footer'

export default function Body() {
    return (
        <div>
            <div className="container">
                <h4>Page Heading <span>Secondary Text</span></h4>
                <hr />
                <Boxes />
                <hr />
            </div>
            <Footer/>
        </div>
    )
}
