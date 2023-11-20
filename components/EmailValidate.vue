<template>
    <div>
        <div class="grid grid-cols-1 gap-4" v-show="codePage">
            <div class="form-group mb-4">
                <label for="email" class="form-control block text-gray-700 text-sm font-bold mb-2">Please enter a valid email address</label>
                <input type="email" v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"/>
                <button @click="submit()" class="w-40 bg-uplbmaroon text-white font-bold py-2 px-4 mt-4 rounded">Get Code</button>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-4" v-show="verifyPage">
            <div class="form-group mb-4">
                <label for="vcode" class="form-control block text-gray-700 text-sm font-bold mb-2">Code</label>
                <input type="text" v-model="vcode" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"/>
                <button @click="compare()" class="w-40 bg-uplbgreen text-white font-bold py-2 px-4 mt-4 rounded">Submit</button>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';

export default {
    data(){
        return {
            codePage: true,
            verifyPage: false,
        }
    },
    computed: {
        ...mapGetters({
            getEmail: 'emailValidate/getEmail',
            getVcode: 'emailValidate/getVcode',
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
        }
    },
    methods: {
        ...mapMutations({
            setEmail: "emailValidate/SET_EMAIL",
            setVcode: "emailValidate/SET_VCODE"
        }),

        ...mapActions({
            getCode: "emailValidate/getCode",
            validate: "emailValidate/validation"
        }),

        submit(){
            this.getCode({
                email: this.email
            });
            this.codePage = false;
            this.verifyPage = true;
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