import Utils from '../../assets/js/utils'
const state = {
  
}

// var csrf_token = postman.getResponseCookie('csrfToken').value;
// postman.clearGlobalVariable('csrftoken');
// postman.setGlobalVariable('csrftoken', csrf_token); 
const mutations = {
  SET_CSRF_TOKEN (state) {
    let csrfToken = Utils.getCookie().csrfToken
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
