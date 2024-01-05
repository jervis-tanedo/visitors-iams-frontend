export const state = () => ({
    userDetails: {
        firstname: '',
        lastname: '',
        middlename: '',
        mothersLastName: '',
        birthdate: '',
        phone: '',
        email: '',
        sex: '',
        uuid: null,
        token: null,
        role: [],
        idNumber: null,
        idType: null,
        idPhoto: '',
        address: '',
        selfie: null,
        region: '',
        province: '',
        city: '',
        barangay: '',
        addressLine1: '',
        addressLine2: '',
        civil_status: '',
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
    getMothersLastName(state) {
        return state.userDetails.mothersLastName
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
    getSex(state) {
        return state.userDetails.sex
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
    getSelfie(state){
        return state.userDetails.selfie
    },
    getAddress(state){
        return state.userDetails.address
    },
    getRegion(state){
        return state.userDetails.region
    },
    getProvince(state){
        return state.userDetails.province
    },
    getCity(state){
        return state.userDetails.city
    },
    getBarangay(state){
        return state.userDetails.barangay
    },
    getAddressLineOne(state){
        return state.userDetails.addressLine1
    },
    getAddressLineTwo(state){
        return state.userDetails.addressLine2
    },
    getCivilStatus(state){
        return state.userDetails.civil_status
    }
}

export const actions = {
    tosAccepted({commit, state}){
        commit('SET_TOS', 1)
    },

    async save({dispatch, commit, state }){
        let formData = new FormData()
        formData.append('first_name', state.userDetails.firstname)
        formData.append('middle_name', state.userDetails.middlename)
        formData.append('last_name', state.userDetails.lastname)
        formData.append('mothers_name', state.userDetails.mothersLastName)
        formData.append('email', state.userDetails.email)
        formData.append('idNumber', state.userDetails.idNumber)
        formData.append('idType', state.userDetails.idType)
        formData.append('date_of_birth', state.userDetails.birthdate)
        formData.append('phone', state.userDetails.phone)
        formData.append('idPhoto', state.userDetails.idPhoto)
        // formData.append('address', state.userDetails.address)
        formData.append('region', state.userDetails.region)
        formData.append('province', state.userDetails.province)
        formData.append('city', state.userDetails.city)
        formData.append('barangay', state.userDetails.barangay)
        formData.append('address_line_1', state.userDetails.addressLine1)
        formData.append('address_line_2', state.userDetails.addressLine2)
        formData.append('selfie', state.userDetails.selfie)
        formData.append('sex', state.userDetails.sex)
        // formData.append('civil_status', state.userDetails.civil_status)

        try {
            const res = await this.$axios.$post(`${process.env.BACKEND_URL}/register`, formData)
            if(res.statusCode == 400){
                let message = "You already have a pending request"
                commit('alert/ERROR', message, { root: true})
            } else {
                let message = "Application Success"
                commit('alert/SUCCESS', message, { root: true })
                console.log(response)
            }
            console.log(res)
        } catch (error) {
            let message = "Error: " + error
            commit('alert/ERROR', message, { root: true})
            // console.log(error)
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

    SET_MOTHERS_LAST_NAME (state, mothersLastName) {
        state.userDetails.mothersLastName = mothersLastName
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

    SET_ADDRESS(state, address){
        state.userDetails.address = address
    },

    SET_SELFIE(state, selfie){
        state.userDetails.selfie = selfie
    },

    SET_SEX(state, sex){
        state.userDetails.sex = sex
    },

    SET_REGION(state, region){
        state.userDetails.region = region
    },

    SET_PROVINCE(state, province){
        state.userDetails.province = province
    },

    SET_CITY(state, city){
        state.userDetails.city = city
    },

    SET_BARANGAY(state, barangay){
        state.userDetails.barangay = barangay
    },

    SET_ADDRESS_LINE_ONE(state, addressLine1){
        state.userDetails.addressLine1 = addressLine1
    },

    SET_ADDRESS_LINE_TWO(state, addressLine2){
        state.userDetails.addressLine2 = addressLine2
    },

    SET_CIVIL_STATUS(state, civil_status){
        state.userDetails.civil_status = civil_status
    },

    CLEAR(state){
        state.userDetails = null
    }
}