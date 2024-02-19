export const state = () => ({
    email: null,
    code: null,
    validated: false,
    vcode: null,
    code_page: true,
    verify_page: false,
    inputErrors: {},
    formErrors:[],
    isTaken: false
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
    },

    getCodePage(state){
        return state.code_page
    },

    getVerifyPage(state){
        return state.verify_page
    },

    getIsTaken(state){
        return state.isTaken
    },

    getFormErrors(state){
        return state.formErrors
    }
}

export const actions = {

    async checkEmail({commit, dispatch}, payload){
        try {
            const res = await this.$axios.$post(`${process.env.MDMS_URL}/email-validate`, payload)
            if (payload.email == res.data.email){
                console.log(res.data.email)
                commit('SET_IS_TAKEN', true)
                let message = 'Email is already taken'
                // commit('alert/ERROR', message, {root:true})
                commit('SET_FORM_ERRORS', message)
            }else if(res.data == null){
                dispatch('getCode', payload)
                commit('SET_CODE_PAGE', false)
                commit('SET_VERIFY_PAGE', true)
            }
        } catch (error) {
            if (error.response && error.response.status) {
                switch (error.response.status){
                    case 422:
                        // this.inputErrors = error.response.data.errors
                        // this.formErrors = error.response.data.message
                        return
                    case 409:
                        // this.this.inputErrors = error.response.data.errors
                        // this.formErrors = error.response.data.message
                        let message = `Email already exists`
                        commit('alert/ERROR', message, {root: true})
                        return
                }
            }
            console.log(error)
        }
    },

    async getCode({state, commit}, payload){
        try {
            const res = await this.$axios.$post(`${process.env.BACKEND_URL}/get-code`, payload)
            // console.log(res.code)
            commit('SET_CODE', res.code)
            let message = `A code has been sent to your email address`
            await commit('alert/SUCCESS', message, {root: true})
        } catch (error) {
            console.log(error)
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
    },

    SET_CODE_PAGE(state, setCode){
        state.code_page = setCode
    },

    SET_VERIFY_PAGE(state, verifyPage){
        state.verify_page = verifyPage
    },

    SET_INPUT_ERRORS(state, errors){
        state.inputErrors = errors
    },

    SET_FORM_ERRORS(state, errors){
        state.formErrors = errors
    },

    SET_IS_TAKEN(state, isTaken){
        state.isTaken = isTaken
    },

    SET_FORM_ERRORS(state, formErrors){
        state.formErrors = formErrors
    }
}