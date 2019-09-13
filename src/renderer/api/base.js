import { post, get } from './axios.config'
export default {
    csrfToken(opt) {
        get('/getcsrftoken', opt);
    },
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