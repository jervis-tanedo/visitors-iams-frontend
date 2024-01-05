<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <div class="card py-1">
          <!-- <FormulateForm v-model="formValues">
            <FormulateInput class="" :placeholder="formValues.first_name" type="text" name="name" label="First name" />
            <FormulateInput type="email" name="email" label="Your email" :placeholder="formValues.email"/>
            <FormulateInput type="submit" label="Save" />
          </FormulateForm> -->
          <!-- {{ this.$auth.user.given_name }} -->
          <div class="card-header bg-white rounded p-2 m-1 h-100">
            <span class="block text-gray-700 text-2xl font-bold mb-2 text-left">My profile</span>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="mb-4 flex">
              <span class="block text-gray-700 text-lg font-bold mb-2 flex p-2">{{ this.user.first_name }} {{ this.user.middle_name }} {{ this.user.last_name }}</span>
              <a href="#"><span class="flex text-sm font-thin hover:underline pl-2 pt-3">Change name</span></a>
            </div>
            <div class="mb-4">
              <div><span class="block text-gray-700 text-lg font-bold mb-2 flex p-2">Phones</span></div>
              <div class="flex gap-2 pb-2" v-for="active in getActivePhone"><span v-if="active.is_active === true" class="font-bold block text-gray-700 p-2">Primary:</span><span class="p-2">{{ active.phone_number }}</span></div>
              <ul v-for="phone in getFilteredPhone">
                <li class="flex gap-2"><input type="radio" class="" :value="phone.id" :disabled="!phone.is_verified" @click="onClickPhoneRadio(phone)"/><span class="">{{ phone.phone_number }}</span><span v-if="phone.is_active === true">(Primary)</span><span v-else>Set as Primary</span></li>
              </ul>
              <div class="pt-2"><button class="border border-uplbgreen border-2 font-bold text-md rounded text-uplbgreen p-1 flex"><span class="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                </svg>
              </span></button></div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="mb-4">
              <div><span class="block text-gray-700 text-lg font-bold mb-2 flex p-2">Emails</span></div>
              <div class="flex gap-2 pb-2" v-for="active in getActiveEmail"><span v-if="active.is_active === true" class="font-bold block text-gray-700 p-2">Primary:</span><span class="p-2">{{ active.email }}</span></div>
              <ul v-for="email in getFilteredEmail">
                <li class="flex gap-2"><input type="radio" class="caret-pink" :value="email.id" :disabled="!email.is_verified"/><span class="">{{ email.email }}</span><span v-if="email.is_active === true">(Primary)</span><span v-else>Set as Primary</span></li>
              </ul>
              <div class="pt-2"><button class="border border-uplbgreen border-2 font-bold text-md rounded text-uplbgreen p-1 flex"><span class="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                </svg>
              </span></button></div>
            </div>
            <!-- <FormulateInput
            type="radio"
            label="Emails"
            :options="getEmailOptions"/> -->
            <div class="mb-4">
              Address contents here
            </div>
          </div>
          <!-- <div class="align-center items-cernter justify-center flex">
            <button type="button" class="font-bold text-md rounded text-white bg-uplbgreen w-64 p-1">Save</button>
          </div> -->
        </div>
      </div>
    </div>
    <Modal
      :isOpen="isModalOpen"
      :iconType="iconType"
    >
      <template slot="title">
        {{ modal.title }}
      </template>
      <template slot="content">
        {{ modal.content }}
      </template>
      <template slot="footer">
        <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" @click="confirmAction()">Confirm</button>
        <button type="button"  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="isModalOpen=false">Ok</button>
      </template>
    </Modal>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      formValues: {
        first_name: this.$auth.user.given_name,
        email: this.$auth.user.email,
      },
      isModalOpen: false,
      modal: {
        title: '',
        content: '',
        iconType: ''
      }
    }
  },
  computed:{
    ...mapState({
      user: (state) => state.user.userMd,
      emails: (state) => state.user.emails,
      phones: (state) => state.user.phones,
    }),

    ...mapGetters({
      getActivePhone: 'user/getActivePhone',
      getFilteredPhone: 'user/getFilteredPhone',
      getActiveEmail: 'user/getActiveEmail',
      getFilteredEmail: 'user/getFilteredEmail',
    }),
  },
  methods: {
    ...mapActions({
      removePhoneAsPrimary: 'requests/removePhoneAsPrimary',
      savePhoneAsPrimary: 'requests/savePhoneAsPrimary',
      reloadUser: 'user/getMasterDataUser'
    }),

    async onClickPhoneRadio(data){
      // this.isModalOpen = true
      // console.log(data)
      let params = {
        id: data.id,
        user_id: data.user_id,
        is_active: data.is_active,
        is_verified: data.is_verified
      }
      this.savePhoneAsPrimary(params).then(()=>{
        // location.reload()
      })
      
      
    }
  },
  watch:{
    
  }
}
</script>