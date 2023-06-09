export const state = () => ({
    type: null,
    message: null
  })
  
export const actions = {
    success ({ commit }, message) {
        commit('SUCCESS', message)
    },
    error ({ commit }, message) {
        commit('ERROR', message)
    },
    clear ({ commit }) {
        commit('CLEAR')
    }
}
  
export const mutations = {
    SUCCESS (state, message) {
        state.type = 'success'
        state.message = message
      },
    ERROR (state, message) {
        state.type = 'error'
        state.message = message
    },
    CLEAR (state) {
        state.type = null
        state.message = null
    }
}