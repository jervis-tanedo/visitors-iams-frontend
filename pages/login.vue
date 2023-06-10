<template>
    <!-- <div class="w-full p-4">
    <main role="main" class="w-full flex flex-col h-screen content-center justify-center">
        <div class="w-full sm:w-1/2 lg:w-1/3 bg-gray-50 rounded-xl m-auto">
            <div class="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="py-2 place-content-center">
                  <h3>Login to UPLB IAMs - Visitors</h3>
                  <p class="mt-3 text-gray-600">
                    Welcome to Identity and Access Management System (IAMs) for non UPLB personel.
                  </p>
                  <p></p>
                </div>
                <div class="py-2"><button @click.prevent="login()" class="w-40 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Login</button></div>
                <div>
                    <NuxtLink class="w-40 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" to="/registration">Register</NuxtLink>
                </div>
            </div>
        </div>
    </main>
</div> -->
<div class="font-sans text-gray-900 antialiased">
    <div class="h-screen grid justify-items-center items-center">
      <div
        class="w-auto md:w-1/2 lg:w-1/3 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div class="flex justify-center -mt-16">
          <img src="@/assets/images/uplb-logo.png" class="object-center" />
        </div>
        <div class="mt-5">
          <h2 class="text-gray-800 text-3xl font-semibold text-center">
            Welcome to the UPLB Identity and Access Management System for Visitors
          </h2>
          <p class="mt-5 text-gray-600 text-center">
            This app is currently in alpha phase.
          </p>
        </div>
        <div class="flex justify-center mt-4">
          <button class="text-white py-2 px-4" style="background-color:#8D1436"
            @click="login">
            Login
          </button>
        </div>
        <div class="flex justify-center mt-2">
            <NuxtLink class="text-white py-2 px-4" style="background-color:#8D1436" to="/registration">Register</NuxtLink>
        </div>
      </div>
    </div>
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