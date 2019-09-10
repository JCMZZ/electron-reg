import axios from 'axios'
import { Loading } from 'element-ui';
/**
 * 请求默认参数
 */
const optDefault = {
    params: {},
    success() {},
    fail() {}
};
/**
 * 创建axios实例
 */
let instance = axios.create({
    baseURL: '/api/',
    timeout: 10000,
    xsrfCookieName: 'csrfToken', 
    xsrfHeaderName: 'x-csrf-token'
});
/**
 * 添加请求拦截器
 */
let loading = null;
instance.interceptors.request.use(config => {
    loading = Loading.service({
        lock: true,
        text: '',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
    return config;
}, error => {
    return Promise.reject(error);
});
/**
 * 添加响应拦截器
 */
instance.interceptors.response.use(response => {
    loading.close();
    return response.data;
}, error => {
    loading.close();
    return Promise.reject(error);
});
export let http = instance;
/**
 * post 请求块
 * @param {String} url 
 * @param {Object} opt 
 */
export function post(url, opt) {
    let {
        params,
        success,
        fail
    } = opt ? Object.assign(optDefault, opt) : optDefault;
    instance({
            url,
            data: params,
            method: 'post'
        })
        .then(success)
        .catch(err => {
            fail(err);
        });
}
export function get(url, opt) {
    let {
        params,
        success,
        fail
    } = opt ? Object.assign(opt, optDefault) : optDefault;
    instance({
            url,
            params: params,
            method: 'get'
        })
        .then(success)
        .catch(err => {
            fail(err);
        });
}
