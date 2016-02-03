import React from 'react'
import {render} from 'react-dom'
import Header from 'header'
import CF from 'const';
import $ from 'zepto-modules/es6/_default'

import './styles.css'
import SH from 'share';

class Index extends React.Component {
    constructor() {
        super();
        this.dt = this.initData();
    }

    initData() {
        var dt = JSON.parse(decodeURIComponent(new CF().parse_purl()["data"]));
        var point = dt.point.toString();
        var len = point.length;
        dt.pointNum = "";
        switch (len) {
            case 1:
                dt.pointNum = "00" + point;
                break;
            case 2:
                dt.pointNum = "0" + point.substring(0, 1) + point.substring(1, 2);
                break;
            case 4:
                dt.pointNum = "999";
                break;
            default:
                dt.pointNum = point;
                break;
        }
        return dt;
    }

    share() {
        var shareUrl = "http://" + window.location.host + "/share.html";
        new SH({
            pic: "http://" + window.location.host + "/public/img/share.png",
            linkUrl: shareUrl,
            describe: "我的信用分分享"
        });
    }

    render() {
        return (
            <div id="mainPage">
                <Header backUrl="cmblife://popweb" shareFunc={this.share} share={true} help={true}/>
                <MainContent point={this.props.data.point} pointNum={this.props.data.pointNum}
                             describe={this.props.data.pointDescribe}/>
                <MainButton/>
            </div>
        );
    }
}
Index.defaultProps = {data: new Index().initData()};


class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state=this.initState();
    }
    initState() {
        var start = 0;
        if (this.props.point * 1 > 100) {
            start = "100";
        } else {
            start = "000";
        }
        return {
            pointNum: start,
            interval: "",
            sty:{}
        };
    }
    componentDidMount() {
        var point = this.props.point;
        var dom = this.refs.pointer;
        this.pointDegree(point, dom);
        this.animateNum(this.props.pointNum);
    }

    pointDegree(point, pointDeg) {
        var degree, startDegree = -60, middleLeftDegree = -20, endDegree = 60;

        if (point < 500) {
            degree = startDegree + (middleLeftDegree - startDegree) / 500 * point;
        } else if (point >= 1000) {
            degree = endDegree;
        } else {
            degree = middleLeftDegree + (endDegree - middleLeftDegree) / 500 * (point - 500);
        }

        degree+="deg";
        var divStyle = {
            WebkitTransform: "rotate("+degree+")"
        };
        var that=this;
        setTimeout(function(){
            that.setState({
                sty: divStyle
            });
        },400);
    }

    animateNum(pointNum) {
        var start = 100, that = this;
        var point = parseInt(pointNum);
        if (point < 100) {
            this.stopAnimate(pointNum);
        }
        var gap = parseInt(point / 30);
        var st = setInterval(function () {
            start = start + gap;
            if (point < start) {
                that.stopAnimate(pointNum);
                clearInterval(st);
            } else {
                that.stopAnimate(start.toString());
            }
        }, 30);
        this.setState({
            interval: st
        });
    }

    stopAnimate(pointNum) {
        this.setState({pointNum: pointNum});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <div className="mp-creditPoint">
                <div className="mp-panel -box-align-end">
                    <div ref="pointer" style={this.state.sty}></div>
                </div>
                <div className="mp-content box verticalBox">

                    <div>分值测评结果</div>

                    <div className="point box">
                        <div>{this.state.pointNum.substring(0, 1)}</div>
                        <div>{this.state.pointNum.substring(1, 2)}</div>
                        <div>{this.state.pointNum.substring(2, 3)}</div>
                    </div>
                    <div className={this.props.describe?"":"hidec"}>{this.props.describe}</div>
                </div>
                <div className="shareInfo box verticalBox">
                    <div>招商银行掌上生活全新推出信用分功能</div>
                    <div>赶快去试试吧</div>
                </div>
            </div>
        );
    }
}
class MainButton extends React.Component {
    constructor() {
        super();
    }

    aboutPoint() {
        window.location.hash = "describe";
    }

    myLimit() {
        window.location.href = "cmblife://go?url=Limit&urlVersion=0";
    }

    render() {
        return (
            <div className="mp-footer box">
                <div onTouchTap={this.aboutPoint}>关于信用分</div>
                <div onTouchTap={this.myLimit}>秒查额度</div>
            </div>

        );
    }
}

export default Index;