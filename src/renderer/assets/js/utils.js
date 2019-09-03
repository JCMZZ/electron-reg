export default class Utils {
    static getCookie() {
        let cookie = document.cookie;
        if(!cookie) return {};
        cookie = cookie.split(";").map(kv=>kv.split("="));
        return cookie.reduce((start, val)=>{
            start[val[0]] = val[1];
            return start;
        },{})
    }
}