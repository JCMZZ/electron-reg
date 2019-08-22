import axios from 'axios'
export let http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 2000
});
export function post(url, data, resolve, reject) {
    return http({
                url,
                data,
                method: 'post'
            })
            .then(resolve)
            .catch(err=>{
                reject(err);
                console.log(err);
            })
}
export function get(url, data, resolve, reject) {
    return http({
                url,
                data,
                method: 'get'
            })
            .then(resolve)
            .catch(err=>{
                reject(err);
                console.log(err);
            })
}
