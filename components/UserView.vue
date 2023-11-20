<template>
        <div>
            <div>
                <h1>First Name:</h1>
                <h1>{{ registrationData.first_name }}</h1>
            </div>
            <div>
                <h1>Middle Name:</h1>
                <h3>{{ registrationData.middle_name }}</h3>
            </div>
            <div>
                <h1>Last Name:</h1>
                <h3>{{ registrationData.last_name }}</h3>
            </div>
            <div>
                <h1>Data:</h1>
                <h3>{{ registrationData }}</h3>
            </div>
            <div>
                <img :src="imgUrl" alt="">
            </div>
        </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
    export default{
        data(){
            return {
                img: null,
                // imgUrl: null,
            }
        },
        props: {
            id: {
                type: String,
            },
            registrationData: {
                type: Object
            }
        },
        computed: {
            ...mapState({
                photo: state => state.requests.photo,
                // userDetails: state => state.userManagement.viewUsers.userDetails,
                // userRole: state => state.userManagement.viewUsers.roles
            }),
            imgUrl : {
                get() {
                    return this.viewPhoto
                },
                set(value) {
                    this.setIdPhoto(value)
                }
            }

        },
        methods: {
            ...mapActions({
                viewPhoto: 'requests/viewPhoto',
                // setUuid: 'userManagement/viewUsers/setUuid',
                // getRoles: 'userManagement/viewUsers/getRoles'
            }),

            ...mapMutations({
                setIdPhoto: 'requests/SET_ID_PHOTO'
                // setUserUuid: 'userManagement/viewUsers/SET_USER_UUID',
                // setFirstname: 'userManagement/viewUsers/SET_USER_FIRSTNAME',
                // setUserDetails: 'userManagement/viewUsers/SET_USER_DETAILS',
            }),

            async getUserUuid(user){
                // await this.setUuid(user.id)
                // await this.getRoles()
            },
        },
        mounted(){
            this.viewPhoto()
        },
    }
</script>