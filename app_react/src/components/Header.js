import React, { Component } from 'react'

import './Header.css';

export default class Header extends Component {
    render() {
        const { title } = this.props;
        return (
            <header id="main_header">
                <div className="header_content content">
                    <h3>{title}</h3>
                </div>
            </header>
        )
    }
}
