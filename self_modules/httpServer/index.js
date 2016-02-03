import $ from 'zepto-modules/es6/_default'

class AJ{
    constructor() {
        this.cfg = {
            /**
             * @param debug {Boolean}
             * @description 是否是本地调试
             */
            debug: debug,
            /**
             * @param type {String}
             * @description  post请求或get请求
             */
            type: "post",
            /**
             * @param purl {String}
             * @description  请求地址
             */
            purl: null,
            /**
             * @param data {object}
             * @description  请求数据
             */
            data: {},
            /**
             * @param async {Boolean}
             * @description  异步
             */
            async: true,
            /**
             * @param timeout {Number}
             * @description  ajax请求时间
             */
            timeout: 4000,
            /**
             * @param needDecode {boolean}
             * @description  是否需要解码
             */
            needDecode: false,
            /**
             * 是否需要loading
             */
            needLoading: true,
            /**
             * @param callback {Function}
             * @description 回调函数
             */
            sucFunc: function () {

            },
            /**
             * @param callback {Function}
             * @description 返回值不为1000时处理
             */
            errorFunc: function () {

            },
            //ajax请求异常错误
            timeOutFunc: function () {

            }
        };
    }

    doPost(options) {
        let CFG =  Object.assign(this.cfg, options);
        CFG.type = CFG.debug ? "get" : "post";
        CFG.purl = CFG.debug ? "./mock" + CFG.purl + ".json" : CFG.purl + ".json?uid=" + new Date();
        let self = this;
        console.log($);
        $.ajax({
            type: CFG.type,
            url: CFG.purl,
            data: CFG.data,
            async: CFG.async,
            timeout: CFG.timeout,
            complete: function () {

            },
            success: function (resp) {
                resp = CFG.debug ? resp : JSON.parse(resp);
                self.isSuccess(resp);
            },
            error: function (err) {
                CFG.timeOutFunc();
            }
        });
    }

    isSuccess(data) {
        if (data.respCode.toString() === "1000") {
            this.cfg.sucFunc(data);

        } else {
            this.cfg.errorFunc();
        }
    }

}
export default AJ;


