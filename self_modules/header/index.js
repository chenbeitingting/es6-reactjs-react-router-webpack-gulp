import React from 'react';
import {render} from 'react-dom';

import './styles.css'
class Header extends React.Component {
    constructor() {
        super();
        this.back=this.back.bind(this);
        this.help=this.help.bind(this);
    }

    back() {
        var url = this.props.backUrl;
        if (url) {
            window.location.href = url;
        } else {
            window.history.back();
        }
    }

    help() {
        window.location.hash = "help";
    }

    render() {
        return (
            <header className="box">
                <div className="backApp" onTouchTap={this.back}></div>
                <div className="title">我的信用分</div>
                <div className="box">
                    <div onTouchTap={this.help} className={this.props.help?"mp-faq":"hidec"}></div>
                    <div onTouchTap={this.props.shareFunc} className={this.props.share?"share":"hidec"}></div>
                </div>
            </header>
        );
    }
}
export default Header
