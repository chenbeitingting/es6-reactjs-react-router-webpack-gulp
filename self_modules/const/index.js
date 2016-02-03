import './styles.css'

class CF {
    contructor(){
        this.constWeb= {
            config: {
                debug: true
            },
            creditPoint: {
                queryCreditPoint: "/CreditPoint/queryCreditPoint",
                commitContent: "/CreditPoint/commitContent"
            }
        }
    }

    parse_purl(){
        let purl = location.href;
        let i = purl.lastIndexOf('?');
        if (i == -1)return;
        let querystr = purl.substr(i + 1);
        let arr1 = querystr.split('&');
        let arr2 = new Object();
        for (let j = 0; j < arr1.length; j++) {
            let ta = arr1[j].split('=');
            arr2[ta[0]] = ta[1];
        }
        return arr2;
    }
}
export default CF;