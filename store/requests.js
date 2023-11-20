import Vue from "vue"

export const state = () => ({
    initialLoad: true,
    loading: false,
    search: null,
    userLists: {},
    kcUserList: {},
    users:{},
    uuid: null,
    filters: {},
    filterValues: [],
    photo: {},
    numOfItems: 5,
    data:{},
    order: {},
    uuid: null,
    person: {},
    selfie: {},
})

export const getters = {
    getIdPhoto (state) {
        return state.photo
    },
    getSelfiePhoto(state) {
        return state.selfie
    },
    getSearch (state) {
        return state.search
    },
    getUserLists (state) {
        if(state.userLists.data){
            let coursesData = state.userLists.data.map((item) => {
                const temp = {
                    first_name: item.first_name, 
                    middle_name: item.middle_name,
                    last_name: item.last_name,
                    address: item.address,
                    id: item.id,
                    phone_number: item.phone_number,
                    email: item.email,
                    id_type: item.id_type,
                    id_number: item.id_number,
                    id_file: item.id_file,
                    request_status: item.request_status,
                    date_of_birth: item.date_of_birth,
                    // civilstatus: item.civilstatus,
                    // action: '',
                    details: item
                };
                return temp
            })

            const paginationData = {
                last_page: state.data.last_page,
                current_page: state.data.current_page,
            }

            coursesData = Object.assign(coursesData, paginationData)

            return coursesData
        }
    },

    getNumOfItems(state) {
        return state.numOfItems
    },

    getTableData(state) {
        if(state.data.data){
            let coursesData = state.data.data.map((item) => {
                const temp = {
                    first_name: item.firstname, 
                    middle_name: item.middle_name,
                    last_name: item.last_name,
                    sex: item.sex,
                    dob: item.dob,
                    civilstatus: item.civilstatus,
                    action: '',
                    details: item
                };
                return temp
            })

            const paginationData = {
                last_page: state.data.last_page,
                current_page: state.data.current_page,
            }

            coursesData = Object.assign(coursesData, paginationData)

            return coursesData
        }
    },
}

export const actions = {
    async userList ({state, commit}, payload) {
        // console.log(payload)
        commit('GET_DATA_LIST_REQUEST')
        try {
            // let tableParams = Object.assign(payload.data)
            let tableParams = Object.assign(payload.data, state.filterValues)
            tableParams = Object.assign(tableParams, state.order)
            const res = await this.$axios.$get(`${process.env.BACKEND_URL}/admin/register`, {params: tableParams}, {headers:{
                'Authorization' : this.$auth.strategy.token.get(),
                'Content-Type' : 'application/json',
              }})
            // commit('SET_USER_LISTS', res.userLists)
            .then(response => {
                // console.log(response)
                const users = response.userLists
                // const myArr = Object.values(users)
                commit('SET_USER_LISTS', users)
                // console.log(users)
            })
        } catch(error) {
            console.log(error)
        }
    },

    async getFilters({ commit }, payload) {
        // commit('GET_DATA_REQUEST')
        try {
            const data = await this.$axios.$get(`${process.env.BACKEND_URL}/admin/register`, {params: payload.data})
            commit('GET_FILTER_SUCCESS', {key: payload.data.column_name, filter:data.userLists})
            // console.log(state.filters)
            // console.log(data)
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

    async viewPhoto({commit}, id){
        try {
            const res = await this.$axios.$get(`${process.env.BACKEND_URL}/admin/register/${id}?type=id_file`, { responseType: 'arraybuffer'}).then(response => {
                    // console.log(response)
                    try{
                        const blob = new Blob([response], { type: 'image/*' })
                        const url = URL.createObjectURL(blob)
                        // const retrieved = window.URL.getFromObjectURL( url )
                        // console.log(retrieved)
                        // console.log(url)
                        commit('SET_ID_URL', url)
                        // console.log(blob)
                    } catch(error){
                        console.log(error)
                    }
                }
            )
        } catch (error){

        }
    },

    async viewSelfie({commit}, id){
        try {
            const res = await this.$axios.$get(`${process.env.BACKEND_URL}/admin/register/${id}?type=selfie`, { responseType: 'arraybuffer'}).then(response => {
                    // console.log(response)
                    try{
                        const blob = new Blob([response], { type: 'image/*' })
                        const url = URL.createObjectURL(blob)
                        // const retrieved = window.URL.getFromObjectURL( url )
                        // console.log(retrieved)
                        // console.log(url)
                        commit('SET_SELFIE_URL', url)
                        // console.log(blob)
                    } catch(error){
                        console.log(error)
                    }
                }
            )
        } catch (error){

        }
    },

    update({commit}, data){
        try {
            const res = this.$axios.$put(`${process.env.BACKEND_URL}/admin/register/${data.id}`, data)
            console.log(res)
            if (data.reject_message){
                let message = `Rejected. An email was sent to the user`
                commit('alert/SUCCESS', message, { root: true })
            } else {
                let message = `Accepted. User can now login`
                commit('alert/SUCCESS', message, { root: true })
            }
            
        } catch (error) {
            
        }
    },

    async saveToKeycloak({commit, dispatch}, data) {
        commit('SET_DATA', data)
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        function generateString(length) {
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
        }
        let newKeycloakUser = {
            "enabled" : true,
            "username" : data.email,
            "email" : data.email,
            "firstName" : data.first_name,
            "lastName" : data.last_name,
            "credentials" : [
                {
                    "type" : "password",
                    "value" : generateString(10),
                    "temporary" : false
                }
            ],
            "attributes" : {
                "middleName" : [
                    data.middle_name
                ],
                "birthdate" : [
                    data.date_of_birth
                ]
            },
            "groups" : ["uplb-visitor"]
        }

        try {
            const res = await this.$axios.$post(`${process.env.KEYCLOAK_REST_API}${process.env.KEYCLOAK_REALM}/users`, newKeycloakUser)
            console.log(res)
            setTimeout(() => {dispatch('getUserId', {email: data.email}), 3000})
        } catch (error) {
            if (error.response.status === 409){
                console.log('User already exist in keycloak')
                let errMessage = "Oops! Email/account already exists in keycloak."
                commit('alert/ERROR', errMessage, { root: true })
            }
        }
    },

    async getUserId({commit, dispatch}, data) {
        try {
            const res = await this.$axios.$get(`${process.env.KEYCLOAK_REST_API}${process.env.KEYCLOAK_REALM}/users`, {params: {email: data.email}})
            console.log(res)
            commit('SET_UUID', res[0].id)
            setTimeout(() => {dispatch('saveToMasterData'), 3000})
        } catch (error) {
            console.log(error)
        }
    },

    saveToMasterData({state, commit}) {
        let formData = new FormData();

        formData.append('id', state.uuid)
        formData.append('first_name', state.person.first_name)
        formData.append('last_name', state.person.last_name)
        formData.append('middle_name', state.person.middle_name)
        formData.append('sex', null)
        formData.append('date_of_birth', state.person.date_of_birth)
        formData.append('civil_status', null)
        formData.append('is_verified', true)
        formData.append('is_active', true)

        // console.log(state.uuid)

        try {
            const data = this.$axios.$post(`${process.env.MDMS_URL}/admin/persons`, formData)
            .then(response => {
                console.log(response)
                let successMsg = "User created"
                commit('alert/SUCCESS', successMsg, { root: true })
                commit('CLEAR')
            })
        } catch(error) {
            console.log(error)
        }
    }
}

export const mutations = {
    GET_DATA_LIST_REQUEST (state) {
        state.loading = true
    },

    UPDATE_FILTER_VALUES(state, data) {
        state.filterValues = data
    },

    GET_FILTER_SUCCESS (state, data) {
        Vue.set(state.filters, data.key, data.filter)
        // state.loading = false
    },

    GET_FILTER_SUCCESS_MDMS (state, data){
        Vue.set(state.filtersMdms, data.key, data.filter)
    },

    SET_USER_LISTS(state, userLists) {
        state.userLists = userLists
        state.loading = false
        state.initialLoad = false
    },

    SET_ID_URL(state, photo) {
        // state.pdf_loading = false
        state.photo = photo
      },
    
    UPDATE_NUM_OF_ITEMS(state, data) {
        state.numOfItems = data
    },

    GET_DATA_LIST_REQUEST (state) {
        state.loading = true
    },

    GET_DATA_LIST_SUCCESS(state, data) {
        state.data = data
        state.loading = false
        state.initialLoad = false
    },

    GET_DATA_LIST_FAILED (state, error) {
        state.data = error
    },

    UPDATE_ORDER_VALUES(state, data){
        state.order.order_field = data.order_field
        state.order.order_type = data.order_type
    },

    CREATE_DATA_REQUEST (state) {
        state.loading = true
    },

    CREATE_DATA_SUCCESS (state) {
        state.loading = false
    },

    CREATE_DATA_FAILED (state, error) {
        state.loading = false
    },

    UPDATE_DATA_REQUEST (state) {
        state.loading = true
    },

    UPDATE_DATA_SUCCESS (state) {
        state.loading = false
    },

    UPDATE_DATA_FAILED (state, error) {
        state.loading = false
    },

    SET_UUID(state, uuid) {
        state.uuid = uuid
    },

    SET_DATA(state, data) {
        state.person = data
    },

    SET_SELFIE_URL(state, selfie){
        state.selfie = selfie
    }
}