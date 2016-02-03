import React from 'react'
import {render} from 'react-dom'
import Header from 'header'
import './styles.css'
import SH from 'share';
class Describe extends React.Component {
    constructor() {
        super();
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
            <div id="faq">
                <Header shareFunc={this.share} share={true} help={true}/>
                <DescribeContent/>
            </div>
        );
    }
}
class DescribeContent extends React.Component {
    constructor() {
        super();
        this.unfold = this.unfold.bind(this);
    }

    unfold() {
        var domUnfold = React.findDOMNode(this.refs.unfold);
        var domContent = React.findDOMNode(this.refs.unfoldContent);
        domContent.style.display = "block";
        domUnfold.style.display = "none";
    }

    render() {
        return (
            <div id="wrapper">
                <ul className="box verticalBox">
                    <li className="faqImg"><img src="./content/describe/img/faq02.png"/></li>
                    <li className="faqHeader">它考量哪些方面的信息？</li>
                    <li className="faqContent">
                        掌上生活信用分主要考量您的信用卡使用情况，履约记录，与我行往来等信息，同时兼顾您的身份属性以及其他相关的内外部资信。
                    </li>
                    <li className="faqImg"><img src="./content/describe/img/faq01.png"/></li>
                    <li className="faqHeader">它有什么用处？</li>
                    <li className="faqContent">掌上生活信用分是招商银行信用卡判断客户业务资格的参考依据之一，信用分过低将会失去办理部分业务的资
                        <span ref="unfoldContent" className="hidec">格。经常关注信用分的变化，保持良好的信用卡使用记录，提高信用意识，良好的信用将会获得回报！请持续关注掌上生活信用分版块，未来我们将引入更多权益与优惠！</span>
                    </li>
                    <li ref="unfold" onClick={this.unfold} className="unfold box">
                        <div>展开&nbsp;</div>
                        <div><img src="./content/describe/img/unfold.png"/></div>
                    </li>
                    <li className="faqImg"><img src="./content/describe/img/faq04.png"/></li>
                    <li className="faqHeader">如何提高掌上生活信用分？</li>
                    <li className="faqContent">
                        保持良好的用卡及消费习惯，每月按时还款，适当提高信用卡的使用频率，参与掌上生活互动，这些行为都将有利于提升你的掌上生活信用分。请密切关注掌上生活我的信用分版块，未来我们将陆续推出提升信用分的小攻略。
                    </li>
                </ul>
            </div>
        );

    }
}
export default Describe;
