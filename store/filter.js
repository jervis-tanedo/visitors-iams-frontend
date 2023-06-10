import Vue from "vue"

export const state = () => ({
    // initialLoad: true,
    // loading: false,
    filterValues: {},
})
  
export const actions = {
    
}
  
export const mutations = {
    CREATE_FILTERS(state, data) {
        Vue.set(state.filterValues, data, '--')
    },
    UPDATE_FILTER_VALUE(state, data) {
        Vue.set(state.filterValues, data.key, data.value)
    }
}

export const getters = {

}