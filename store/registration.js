export const state = () => ({
    userDetails: {
        firstname: '',
        lastname: '',
        middlename: '',
        birthdate: '',
        phone: '',
        email: '',
        uuid: null,
        token: null,
        role: [],
        idNumber: null,
        idType: null,
        idPhoto: '',
    },
    // FIND SOLUTION IN ARRAY VALUE PROBLEM
    errorMsg: [],
    masterDataUser: [],
    userAcceptTos: 0,
})

export const getters = {
    getFirstname(state) {
        return state.userDetails.firstname
    },
    getMiddlename(state) {
        return state.userDetails.middlename
    },
    getLastname(state) {
        return state.userDetails.lastname
    },
    getBirthdate(state) {
        return state.userDetails.birthdate
    },
    getPhone(state){
        return state.userDetails.phone
    },
    getEmail(state) {
        return state.userDetails.email
    },
    getToken(state) {
        return state.userDetails.token
    },
    getUuid(state) {
        return state.userDetails.uuid
    },
    getRole(state){
        return state.userDetails.role
    },
    getTos(state){
        return state.userAcceptTos
    },
    getIdType(state){
        return state.userDetails.idType
    },
    getIdNumber(state){
        return state.userDetails.idNumber
    },
    getIdPhoto(state){
        return state.userDetails.idPhoto
    },
}

export const actions = {
    tosAccepted({commit, state}){
        commit('SET_TOS', 1)
    },
    async save({dispatch, commit, state }, payload){
        const formData = new FormData()
        formData.append('firstname', state.userDetails.firstname)
        formData.append('middlename', state.userDetails.middlename)
        formData.append('lastname', state.userDetails.lastname)
        formData.append('email', state.userDetails.email)
        formData.append('idNumber', state.userDetails.idNumber)
        formData.append('idType', state.userDetails.idType)
        formData.append('birthdate', state.userDetails.birthdate)
        formData.append('phone', state.userDetails.phone)
        formData.append('idPhoto', state.userDetails.idPhoto)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        console.log(formData)
        try{
            const res = await this.$axios.$post(`${process.env.BACKEND_URL}/register`, formData, config).then(() =>{
                let message = "Application Success"
                commit('alert/SUCCESS', message, { root: true })
            })
            
            console.log(res)
        } catch (error) {

        }
    },
}

export const mutations = {
    SET_TOS(state, tos){
        state.userAcceptTos = tos
    },

    SET_USER_FIRSTNAME (state, firstname) {
        state.userDetails.firstname = firstname
    },

    SET_USER_LASTNAME (state, lastname) {
        state.userDetails.lastname = lastname
    },

    SET_USER_MIDDLENAME (state, middlename){
        state.userDetails.middlename = middlename
    },

    SET_USER_BIRTHDATE (state, birthdate) {
        state.userDetails.birthdate = birthdate
    },

    SET_USER_PHONE(state, phone) {
        state.userDetails.phone = phone
    },

    SET_USER_EMAIL(state, email){
        state.userDetails.email = email
    },

    SET_ERROR_MSG(state, error){
        state.errorMsg = error
    },

    GET_FILTER_SUCCESS (state, data) {
        Vue.set(state.filters, data.key, data.filter)
        state.loading = false
    },

    SET_MASTER_DATA_USER(state, masterDataUser){
        state.masterDataUser = masterDataUser
    },

    SET_CLIENT_ROLE(state, role) {
        state.userDetails.role = role
    },

    SET_ID_TYPE(state, idType){
        state.userDetails.idType = idType
    },

    SET_ID_NUMBER(state, idNumber){
        state.userDetails.idNumber = idNumber
    },

    SET_ID_PHOTO(state, idPhoto){
        state.userDetails.idPhoto = idPhoto
    },

    CLEAR(state){
        state.userDetails = null
    }
}