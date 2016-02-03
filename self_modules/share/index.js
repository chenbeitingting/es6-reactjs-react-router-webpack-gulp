import $ from 'zepto-modules/es6/_default'
class SH {
    constructor(options) {
        let defaults = {
            /**
             * @param pic {String}
             * @description ����Сͼ��
             */
            pic: "",
            /**
             * @param linkUrl {String}
             * @description ����������
             */
            linkUrl: "",
            /**
             * @param describe {String}
             * @description ��������
             */
            describe: "",
            /**
             * @param short {Boolean}
             * @description �Ƿ���Ҫ���ö����ӽӿ�
             */
            short: false,//�Ƿ���Ҫ���ö����ӽӿ�
            /**
             * @param shortUrl {String}
             * @description �����ӽӿڵ�ַ
             */
            shortUrl: "",
            /**
             * @param shortParam {String}
             * @description ������body����
             */
            shortParam: "",
            /**
             * @param suncFunc {Function}
             * @description �����Ļص�
             */
            suncFunc: function () {

            }
        };
        $.extend(defaults, options);
        this.initialize(defaults);
    }

    initialize(options) {
        this.setOptions(options);
        if (!this.short) {
            this.shareOs();
        } else {
            this.shortPost();
        }
    }

    setOptions(options) {
        $.extend(this, options);
    }

    shortPost() {
        var _this = this;
        new base().doPost({
            purl: _this.shortUrl,
            data: {url: _this.linkUrl, body: _this.shortParam},
            sucFunc: function (data) {
                _this.linkUrl = data.shortUrl;
                _this.shareOs();
            },
            errorFunc: function () {
                _this.shareOs();
            },
            timeOutFunc: function () {
                _this.shareOs();
            }
        });
    }

    shareOs() {
        var shareData = {
            content: this.describe,
            url: this.linkUrl,
            picUrl: this.pic
        };
        console.log(shareData);
        window.location.href = "cmblife://share?content=" + encodeURIComponent(shareData.content)
            + "&linkurl=" + encodeURIComponent(shareData.url)
            + "&picurl=" + encodeURIComponent(shareData.picUrl);
    }
}
export default SH;
