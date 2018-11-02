export class Ajax {
    static get_ajax_obj = function() {
        if (window.XMLHttpRequest) {
            // Mozilla, Safari, IE7+ ...
            return new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            // IE 6 and older
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    };
    static IsNull = x => {
        switch (typeof x) {
            case "object":
                for (var key in x) {
                    if (x.hasOwnProperty(key)) return false;
                }
                return true;
                break;
            case "array":
                return x.length <= 0;
                break;
            default:
                return (
                    typeof x == "undefined" ||
                    x == null ||
                    x.toString().trim() == ""
                );
                break;
        }
    };

    static getFinalValue = (key, value) => {
        if (typeof value == "object") {
            return Ajax.getObjValue(key, value);
        } else {
            return encodeURIComponent(key) + "=" + encodeURIComponent(value);
        }
    };
    static getObjValue = (parentKey, obj) => {
        var str = [];

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                let result = null;
                if (Ajax.IsNull(parentKey)) {
                    result = Ajax.getFinalValue(key, obj[key]);
                } else {
                    result = Ajax.getFinalValue(
                        parentKey + "[" + key + "]",
                        obj[key]
                    );
                }
                if (typeof result == "string") {
                    str.push(result);
                } else {
                    str = str.concat(result);
                }
            }
        }
        return str;
    };
    static serialize = function(obj) {
        if (Ajax.IsNull(obj)) {
            return "";
        }
        var str = Ajax.getFinalValue("", obj);

        // for (var key in obj)
        //     if (obj.hasOwnProperty(key)) {
        //         str.push(Ajax.getFinalValue(key, obj[key]));
        //         switch (typeof obj[key]) {
        //             case "object":
        //                 str = str.concat(Ajax.getObjValue(key, obj[key]));
        //                 break;
        //             default:

        //                 break;
        //         }
        //     }

        return str.join("&");
    };
    static call(props) {
        let data = props.data;
        let method = props.method;
        let url = props.url;
        let success = props.success;
        let error = props.error;
        let headers = props.headers || {};
        let dataType = props.dataType;
        let ajax_obj = Ajax.get_ajax_obj();
        ajax_obj.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status >= 200 && this.status < 300) {
                    if (typeof success == "function") {
                        if (
                            typeof dataType == "undefined" ||
                            dataType == null ||
                            dataType == "json"
                        ) {
                            success(JSON.parse(this.responseText));
                        } else {
                            success(this.responseText);
                        }
                    }
                } else if(this.status == 419){
                    if (typeof error == "function") {
                        error(this, this.statusText, "The page has expired due to inactivity.Please refresh and try again.");
                    }                    
                }else {
                    if (typeof error == "function") {
                        error(this, this.statusText, this.responseText);
                    }
                }
            }
        };
        data = Ajax.serialize(data);
        if (method.toUpperCase() == "POST" || method.toUpperCase() == "PUT") {
            ajax_obj.open(method, url, true);
        } else {
            ajax_obj.open(method, url + "?" + data, true);
        }
        for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
                ajax_obj.setRequestHeader(key, headers[key]);
            }
        }
        if (method.toUpperCase() == "POST" || method.toUpperCase() == "PUT") {
            ajax_obj.setRequestHeader(
                "Content-type",
                "application/x-www-form-urlencoded"
            );
            ajax_obj.send(data);
        } else {
            ajax_obj.send();
        }
    }
}
