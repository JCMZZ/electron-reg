import { post } from './axios.config'
export default {
    login(opt){
        post('/user/login', opt);
    },
    logout(opt){
        post('/logout', opt);
    },
    register(opt){
        post('/user/create', opt);
    }
}