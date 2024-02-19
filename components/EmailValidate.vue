<template>
    <div>
        <div class="grid grid-cols-1 gap-4" v-show="codePage">
            <div class="form-group mb-4">
                <FormulateForm
                name="code">
                    <FormulateInput
                    type="email"
                    label="Please enter a valid email address"
                    v-model="email"
                    validation="email|required"
                    validation-name="Email"
                    :errors=getFormErrors
                    error-class="text-red-500"
                    label-class="block text-gray-700 text-sm font-bold mb-2"
                    input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                    </FormulateInput>
                    <FormulateInput
                    type="button"
                    label="Get code"
                    @click="submit"
                    :disabled="isDisabled"
                    input-class="w-40 bg-uplbmaroon text-white font-bold py-2 px-4 mt-4 rounded">
                    <span v-if="isDisabled == true" class="loader">Processing...</span>
                </FormulateInput>
                </FormulateForm>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-4" v-show="verifyPage">
            <div class="form-group mb-4">
                <FormulateForm
                name="verify">
                    <FormulateInput
                    type="text"
                    label="Code"
                    v-model="vcode"
                    validation="required"
                    error-class="text-red-500"
                    label-class="block text-gray-700 text-sm font-bold mb-2"
                    input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"></FormulateInput>
                    <FormulateInput
                    type="button"
                    label="Submit"
                    @click="compare"
                    input-class="w-40 bg-uplbgreen text-white font-bold py-2 px-4 mt-4 rounded"></FormulateInput>
                    
                </FormulateForm>
            </div>
        </div>
        <!-- <div class="grid grid-cols-1 gap-4" v-show="verifyPage">
            <div class="form-group mb-4">
                <label for="vcode" class="form-control block text-gray-700 text-sm font-bold mb-2">Code</label>
                <input type="text" v-model="vcode" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"/>
                <button @click="compare()" class="w-40 bg-uplbgreen text-white font-bold py-2 px-4 mt-4 rounded">Submit</button>
            </div>
        </div> -->
    </div>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';

export default {
    data(){
        return {
            codePage: true,
            verifyPage: false,
            isDisabled: false
        }
    },
    computed: {
        ...mapState({
            inputErrors: state => state.emailValidate.inputErrors,
            formErrors: state => state.emailValidate.formErrors,
        }),
        ...mapGetters({
            getEmail: 'emailValidate/getEmail',
            getVcode: 'emailValidate/getVcode',
            getCodePage: 'emailValidate/getCodePage',
            getVerifyPage: 'emailValidate/getVerifyPage',
            getIsTaken: 'emailValidate/getIsTaken',
            getFormErrors: 'emailValidate/getFormErrors',
        }),
        email: {
            get(){
                return this.getEmail
            },
            set(value){
                this.setEmail(value)
            }
        },

        vcode: {
            get(){
                return this.getVcode
            },
            set(value){
                this.setVcode(value)
            }
        },

        code_page: {
            get(){
                return this.getCodePage
            },
            set(value){
                this.setCodePage(value)
            }
        },

        verify_page: {
            get(){
                return this.getVerifyPage
            },
            set(value){
                this.setVerifyPage(value)
            }
        },
    },
    methods: {
        ...mapMutations({
            setEmail: "emailValidate/SET_EMAIL",
            setVcode: "emailValidate/SET_VCODE",
            setCodePage: "emailValidate/SET_CODE_PAGE",
            setVerifyPage: "emailValidate/SET_VERIFY_PAGE",
            setIsTaken: "emailValidate/SET_IS_TAKEN",
        }),

        ...mapActions({
            getCode: "emailValidate/getCode",
            validate: "emailValidate/validation",
            checkEmail: "emailValidate/checkEmail"
        }),

        submit(){
            // this.getCode({
            //     email: this.email
            // });
            // this.codePage = false;
            // this.verifyPage = true;
            this.isDisabled = true;
            this.checkEmail({
                email: this.email
            }).then(()=>{
                this.codePage = this.code_page;
                this.verifyPage = this.verify_page;
                this.isDisabled = false;
            }).catch((error)=>{
                console.log(error)
            });
        },

        compare(){
            this.validate({
                vcode: this.vcode,
                email: this.email,
            });
        }
    },
}
</script>

<style>
.spinner_P7sC {
    transform-origin: right;
    animation: spinner_svv2 .75s infinite linear
}

@keyframes spinner_svv2 {
    100% {
        transform: rotate(360deg)
    }
}</style>