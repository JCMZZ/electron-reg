import Utils from '../../assets/js/utils'
const state = {
  user: {},
  roles: [],
  navs: []
}
const mutations = {
  USER_INFO(state, user) {
    state.user = user;
  },
  USER_ROLES(state, roles) {
    state.roles = roles;
  },
  USER_NAVS(state, navs) {
    state.navs = navs;
  }
}
const getters = {
  viewRole: state => state.roles.map(val => val.role_name).join('/'),
  nickname: state => state.user.nickname,
  navs: state => state.navs,
  userId: state => state.user.user_id
}
const actions = {
  USER_INFO({ commit }, user) {
    commit('USER_INFO', user)
  },
  USER_ROLES({ commit }, roles) {
    commit('USER_ROLES', roles)
  },
  USER_NAVS({ commit }, navs) {
    commit('USER_NAVS', navs)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}