import React, { Component } from 'react'
import AHS from '.././static/AHS.webp'


const Header = props => (
    <header className="header">
        <nav>
            {/* AHS logo for toolbar */}
            <div className="toolbar_logo"> 
                <a href="/">
                    <img 
                    src={AHS}
                    width="160px"
                    height="65px" />
                </a>
            </div>
            {/* NAV links */}
            <div className="toolbar_navigation_items" style = {{display: 'inline-block'}}>
                <ul className="list">
                    <li style = {{display: 'inline-block'}}><a href="/">Home Warranty</a></li>
                    <li style = {{display: 'inline-block'}}><a href="/">Price & Plans</a></li>
                    <li style = {{display: 'inline-block'}}><a href="/">Reviews</a></li>
                    <li style = {{display: 'inline-block'}}><a href="/">FAQs</a></li>
                    <li style = {{display: 'inline-block'}}><a href="/">Blog</a></li>
                </ul>
            </div>
            {/* My account and the two buttons */}
            <div>
                <div className="myAccount">
                    My Account
                </div>
                <div >
                    <button className="requestServiceButton"><a href="https://www.ahs.com/request-service">Request Service</a></button>
                </div>
                <div>
                    <button className="getStarted"><a href="https://shopping.ahs.com/buyonline">Get Started</a></button>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;