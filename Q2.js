function getParameters(URL, param) {
    var URL = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
    let paramString = urlmain.split('?')[1];
    let params_arr = paramString.split('&');
    for(let i = 0; i < params_arr.length; i++) {
        let pair = params_arr[i].split('=');
        console.log("Key is:" + pair[0]);
        console.log("Value is:" + pair[1]);
    }
}

var URL="https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
var param = "?";
var result = getParameters(URL, param);
console.log(result);
