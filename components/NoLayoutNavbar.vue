<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="text-2xl">IAMS</NuxtLink>
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