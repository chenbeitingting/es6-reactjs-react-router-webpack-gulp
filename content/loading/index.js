import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import AJ from 'httpServer';
import CF from 'const';
require("./styles.css")

class Login extends React.Component{
    constructor(){
        super();
        let body=new CF().parse_purl()["body"];
        let url=["#index","#bind","#expect"];
        var _this=this;
        var res={
            "data": {
                "state": "0",
                "point": 400,
                "pointDescribe": "信用良好"
            },
            "userStatus": "1"
        };
       /* new AJ().doPost({
            purl: "/CreditPoint/getDetailUrl",
            data: {body: body},
            sucFunc:function(res){*/
                if(res.userStatus.toString()==="1"){
                    var data=encodeURIComponent(JSON.stringify(res.data));
                    _this.locationReplace(url[0]+"?data="+data+"&body="+body);
                }else if(res.userStatus.toString()==="3"){
                    _this.locationReplace(url[1]);
                }else{
                    _this.locationReplace(url[2]);
                }
           /* },
            errorFunc: function () {
                _this.locationReplace(url[2]);
            },
            //ajax请求异常错误
            timeOutFunc: function () {
                _this.locationReplace(url[2]);
            }
        });*/
    }
    locationReplace(url){
        if(history.replaceState){
            history.replaceState(null, document.title, url);
            history.go(0);
        }else{
            location.replace(url);
        }
    }


    render(){
        return (
            <section className="login box verticalBox">
                <div className="box">查询中……</div>
            </section>
        );
    }
}
export default Login;