import { post } from './axios.config'
export default {
    login(opt){
        post('/posts', opt);
    },
    register(opt){
        post('/posts', opt);
    }
}