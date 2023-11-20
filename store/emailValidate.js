export const state = () => ({
    email: null,
    code: null,
    validated: false,
    vcode: null,
})

export const getters = {
    getEmail(state){
        return state.email
    },

    getCode(state){
        return state.code
    },

    validated(state){
        return state.validated
    },

    getVcode(state){
        return state.vcode
    }
}

export const actions = {
    async getCode({state, commit}, payload){
        try {
            const res = await this.$axios.$post(`${process.env.BACKEND_URL}/get-code`, payload)
            // console.log(res.code)
            commit('SET_CODE', res.code)
            let message = `A code has been sent to your email address`
            await commit('alert/SUCCESS', message, {root: true})
        } catch (error) {
            // console.log(error)
            if(error.response.status === 422){
                let errMessage = `Email field is required`
                await commit('alert/ERROR', errMessage, { root: true })
            }
        }
    },

    async validation({state, commit}, payload){
        // console.log(payload)
        try {
            if(state.code == payload.vcode){
                await commit('SET_VALIDATED')
                await commit('registration/SET_USER_EMAIL', payload.email, {root: true})
                // console.log(payload.email)
            } else {
                let errMessage = `Sorry, the code you sent is incorrect`
                await commit('alert/ERROR', errMessage, { root: true })
            }
        } catch (error) {
            console.log(error)
        }
    },
}

export const mutations = {
    SET_EMAIL(state, email){
        state.email = email
    },

    SET_CODE(state, code){
        state.code = code
    },

    SET_VALIDATED(state){
        state.validated = true
    }, 

    SET_VCODE(state, vcode){
        state.vcode = vcode
    }
}