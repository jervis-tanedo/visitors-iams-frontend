<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <div class="m-auto md:mx-4 flex">
                    <img src="@/assets/images/uplb-official-logo.png" class="h-12 w-auto" alt="UPLB Logo" />
                    <NuxtLink to="/" class="font-semibold text-xl hidden md:flex items-center pl-2">IAMS</NuxtLink>
                </div>
                
                <ul class="flex items-center">
                    <li class="p-2"><button @click="login" class="btn-lg bg-uplbgreen text-white rounded p-3">Sign In</button></li>
                    <li class="p-2"><NuxtLink to="registration" class="btn-lg bg-uplbmaroon text-white rounded p-3">Sign Up</NuxtLink></li>
                </ul>
            </nav>
        </header>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    layout: 'noLayout',
    methods: {
        async login() {
            try {
                const response = await this.$auth.loginWith("keycloak")
                .then(() => {this.$router.push('/')})
                .catch(error => {console.log(error)});
                // eslint-ignore-next-line
                console.log(response);
            } catch (err) {
                // eslint-ignore-next-line
                console.log(err);
            }
            },
        }
}
</script>