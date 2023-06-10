export const state = () => ({
    search: null,
    userLists: {},
    kcUserList: {},
    users:{},
    uuid: null,
    roles: [],
    filters: {},
    filterValues: [],
    photo: '',
})

export const getters = {
    getSearch (state) {
        return state.search
    },
    getUserLists (state) {
        return state.userLists
    }
}

export const actions = {
    async userList ({state, commit}, payload) {
        
        let api = `http://localhost:8000/api/register`
        try {
            // let tableParams = Object.assign(payload.data)
            let tableParams = Object.assign(payload.data, state.filterValues)
            const res = await this.$axios.$get(api,{params: tableParams}, {headers:{
                'Authorization' : this.$auth.strategy.token.get(),
                'Content-Type' : 'application/json',
              }})
            .then(response => {
                console.log(response)
                const users = response.userLists
                // const myArr = Object.values(users)
                commit('SET_USER_LISTS', users)
            })
        } catch(error) {

        }
    },

    async getFilters({ commit }, payload) {
        // commit('GET_DATA_REQUEST')
        try {
            const data = await this.$axios.$get(`http://localhost:8000/api/register`, {params: payload.data})
            await commit('GET_FILTER_SUCCESS', {key: payload.data.column_name, filter:data.userLists})
            console.log(data)
        } catch (error) {
            if(error.response.status===422){  
                let errList = ``;
                let fields = Object.keys(error.response.data.errors)
                fields.forEach((field) => {
                let errorArr = error.response.data.errors[field]
                errorArr.forEach((errMess) => {
                    errList += `<li>${errMess}</li>`
                })
            })
                let errMessage = `Validation Error: ${errList}`
                await commit('alert/ERROR', errMessage, { root: true })
            }else{
                let errMessage = `Something went wrong while performing your request. Please contact administrator`
                await commit('alert/ERROR', errMessage, { root: true })
            }
            // commit('GET_DATA_FAILED', error)
        }
    },

    viewPhoto({commit}, payload){
        try {
            this.$axios.$get(`http:localhost:8000/api/identification-photo/id/${payload.id}`, {headers:{
                'Authorization': this.$auth.strategy.token.get(),
                'Content-Type': 'application/json',
            }}).then(
                function (response) {
                    try{
                        const blob = new Blob([response], { type: 'image/*' })
                        const url = window.URL.createObjectURL(blob)
                        commit('requests/SET_ID_URL', url)
                        // this.img = url
                        console.log(url)
                    } catch(error){

                    }
                }
            )
        } catch (error){

        }
    },
}

export const mutations = {
    UPDATE_FILTER_VALUES(state, data) {
        state.filterValues = data
    },

    GET_FILTER_SUCCESS (state, data) {
        Vue.set(state.filters, data.key, data.filter)
        // state.loading = false
    },

    SET_USER_LISTS(state, userLists) {
        state.userLists = userLists
    },

    SET_ID_URL(state, photo) {
        // state.pdf_loading = false
        state.photo = photo
      },
}