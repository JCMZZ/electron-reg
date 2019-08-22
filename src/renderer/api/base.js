import { post } from './axios.config'
export default {
    login(param){
        return post('/posyts', Object.assign({}, param));
    }
}