import Vue from "vue"

export const state = () => ({
    userMd: {},
    emails: [],
    phones: [],
})

export const getters = {
    getFilteredEmail(state){
        let filteredEmails = state.emails.filter(data => {
            return data.is_active === false
        })
        return filteredEmails
    },

    getActiveEmail(state){
        let activeEmails = state.emails.filter(data => {
            return data.is_active === true
        })
        return activeEmails
        //invoke ulet
    },

    getFilteredPhone(state){
        let filteredPhones = state.phones.filter(data => {
            return data.is_active === false
        })
        return filteredPhones
    },

    getActivePhone(state){
        let activePhone = state.phones.filter(data => {
            return data.is_active === true
        })
        return activePhone
    }
}

export const actions = {
    async getMasterDataUser({commit}){
        const user = await this.$axios.$get(`${process.env.MDMS_URL}/persons/` + this.$auth.user.sub)
        // console.log(user.persons)
        console.log(user)
        await commit('SET_USER', user.persons)
        await commit ('SET_EMAILS', user.email)
        await commit ('SET_PHONES', user.phone)
    }
}

export const mutations = {
    SET_USER(state, user){
        state.userMd = user
    },

    SET_EMAILS(state, emails) {
        state.emails = emails
    },

    SET_PHONES(state, phones){
        state.phones = phones
    }
}