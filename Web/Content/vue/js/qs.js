//模拟qs.js的功能，结合axios的post请求使用
var qs = {
    stringify: (o, type) => {
        if (!type) {
            type = "application/x-www-form-urlencoded";
        }

        let param;

        switch (type) {
            case "application/x-www-form-urlencoded":
                param = "";
                for (prop in o) {
                    param += "&";
                    param += prop + "=" + o[prop];
                }
                param = param.replace("&", "");
                break;
            case "multipart/form-data":
                param = new FormData();
                for (prop in o) {
                    param.append(prop, o[prop]);
                }
                break;
        }

        if (!param) {
            param = o;
        }

        return param;
    }
}

