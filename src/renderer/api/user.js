import { post } from './axios.config'
export default {
    userInfo(opt){
        post('/user/info', opt);
    }
}