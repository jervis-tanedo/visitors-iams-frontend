<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
  <Alert/>
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 bg-white shadow sm:rounded-lg p-6">
        <div>
          <div class="card py-1">
            <EmailValidate v-if="validated === false"></EmailValidate>
            <div class="card-header bg-white rounded p-2 m-1 h-100" v-show="validated">
              <!-- STEPS -->
              <div>
                <ol
                  class="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4"
                >
                  <li :class="formSteps[0].text" class="flex items-center">
                    <span
                      :class="formSteps[0].border"
                      class="flex items-center justify-center w-5 h-5 mr-2 text-xs border rounded-full shrink-0 dark:border-blue-500"
                    >
                      1
                    </span>
                    Personal
                    <span class="hidden sm:inline-flex sm:ml-2">Info</span>
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-2 sm:ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      ></path>
                    </svg>
                  </li>
                  <li class="flex items-center" :class="formSteps[1].text">
                    <span
                      :class="formSteps[1].border"
                      class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
                    >
                      2
                    </span>
                    Identification and
                    <span class="hidden sm:inline-flex sm:ml-2">Address</span>
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-2 sm:ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      ></path>
                    </svg>
                  </li>
                  <li class="flex items-center" :class="formSteps[2].text">
                    <span
                      :class="formSteps[2].border"
                      class="flex items-center justify-center w-5 h-5 mr-2 text-xs border rounded-full shrink-0 dark:border-gray-400"
                    >
                      3
                    </span>
                    Review
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-2 sm:ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      ></path>
                    </svg>
                  </li>
                </ol>
              </div>
              <!-- PERSONAL INFORMATION -->
              <div v-show="currentStep == 0" class="my-2">
                <div class="grid grid-cols-2 gap-4">
                  <div class="mb-4">
                    <span class="block text-gray-700 text-2xl font-bold mb-2"
                      >Personal Information</span
                    >
                  </div>
                </div>
                <div class="grid grid-cols-3 gap-4">
                  <div class="form-group mb-4">
                    <!-- <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="firstname"
                    >
                      First Name
                    </label>
                    <input
                      required
                      :placeholder="'(Required)'"
                      tabindex="2"
                      class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                      v-model="firstname"
                      type="text"
                      :class="errors.firstname == true"
                    /> -->
                    <FormulateInput
                    type="text"
                    label="First Name"
                    v-model="firstname"
                    validation="required"
                    error-class="text-red-500"
                    label-class="block text-gray-700 text-sm font-bold mb-2"
                    input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                    </FormulateInput>
                    <!-- <div v-if="errors.firstname == true">
                      <span class="text-red-500">Required</span>
                    </div> -->
                  </div>
                  <div class="mb-4">
                    <!-- <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="lastname"
                    >
                      Middle Name
                    </label>
                    <input
                      :placeholder="'(Required)'"
                      tabindex="3"
                      class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                      v-model="middlename"
                      type="text"
                    /> -->
                    <FormulateInput
                    type="text"
                    label="Middle Name"
                    v-model="middlename"
                    validation="required"
                    error-class="text-red-500"
                    label-class="block text-gray-700 text-sm font-bold mb-2"
                    input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                    </FormulateInput>
                    <!-- <div v-if="errors.middlename">
                      <span class="text-red-500">Required</span>
                    </div> -->
                  </div>
                  <div class="mb-4">
                    <!-- <label
                      class="form-control block text-gray-700 text-sm font-bold mb-2"
                      for="lastname"
                    >
                      Last Name
                    </label>
                    <input
                      :placeholder="'(Required)'"
                      tabindex="4"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                      v-model="lastname"
                      type="text"
                    /> -->
                    <FormulateInput
                    type="text"
                    label="Last Name"
                    v-model="lastname"
                    validation="required"
                    error-class="text-red-500"
                    label-class="block text-gray-700 text-sm font-bold mb-2"
                    input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                    </FormulateInput>
                    <!-- <div v-if="errors.lastname">
                      <span class="text-red-500">Required</span>
                    </div> -->
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-4">
                  <div class="mb-4">
                    <!-- <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="mothersLastName">Mother's maiden name</label>
                    <input
                      :placeholder="'(Required)'"
                      tabindex="5"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                      v-model="mothersLastName"
                      type="text"
                    /> -->
                    <FormulateInput
                    type="text"
                    label="Mother's maiden name"
                    v-model="mothersLastName"
                    validation="required"
                    error-class="text-red-500"
                    label-class="block text-gray-700 text-sm font-bold mb-2"
                    input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                    </FormulateInput>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div class="mb-4">
                    <FormulateInput
                    type="date"
                    label="Birthdate"
                    v-model="birthdate"
                    validation="required"
                    error-class="text-red-500"
                    label-class="block text-gray-700 text-sm font-bold mb-2"
                    input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                    </FormulateInput>
                  </div>
                  <div class="mb-4">
                    <FormulateInput
                    type="tel"
                    label="Phone"
                    v-model="phone"
                    validation="required|number|max:11,length|min:11,length"
                    error-class="text-red-500"
                    label-class="block text-gray-700 text-sm font-bold mb-2"
                    input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                    </FormulateInput>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4">

                </div>
              </div>
              <!-- ADDRESS AND ADDITIONAL INFO -->
              <div v-show="currentStep == 1" class="my-2 py-2">
                <div>
                  <span class="block text-gray-700 text-2xl font-bold mb-2"
                    >Identification</span
                  >
                </div>
                <hr />
                <div class="grid grid-cols-3 gap-4">
                  <div class="form-group mb-4">
                    <FormulateInput
                    type="select"
                    v-model="idType"
                    label="ID"
                    placeholder="Choose..."
                    validation="required"
                    error-class="text-red-500"
                    label-class="form-control block text-gray-700 text-sm font-bold mb-2"
                    input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                    :options="idOptions"></FormulateInput>
                  </div>
                  <div class="form-group mb-4">
                    <!-- <label
                      class="form-control block text-gray-700 text-sm font-bold mb-2"
                      for="identification"
                      >ID Number</label
                    >
                    <input
                      required
                      tabindex=""
                      class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                      v-model="idNumber"
                      type="text"
                    />
                    <div v-if="errors.idNumber">
                      <span class="text-red-500">Required</span>
                    </div> -->
                    <FormulateInput
                    type="text"
                    v-model="idNumber"
                    label="ID Number"
                    validation="required"
                    error-class="text-red-500"
                    label-class="form-control block text-gray-700 text-sm font-bold mb-2"
                    input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"></FormulateInput>
                  </div>
                  
                </div>
                <div class="grid grid-cols-1 gap-4">
                  <div class="form-group mb-4">
                  <!-- <span class="block text-gray-700 text-xl font-bold mb-2"
                    >Address in indicated in your ID</span
                  > -->
                  <!-- <label
                      class="form-control block text-gray-700 text-sm font-bold mb-2"
                      for="address"
                    >
                    Address in indicated in your ID
                    </label>
                    <input
                      :placeholder="'(Required)'"
                      tabindex=""
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                      v-model="address"
                      type="text"
                    /> -->
                    <FormulateInput
                    type="text"
                    v-model="address"
                    label="Address indicated in your ID"
                    validation="required"
                    error-class="text-red-500"
                    label-class="form-control block text-gray-700 text-sm font-bold mb-2"
                    input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                    ></FormulateInput>
                </div>
                </div>
                <div class="grid grid-cols-1 gap-4 h-95">
                  <div class="form-group mb-4">
                    <!-- <input type="file" name="idPhoto" id=""> -->
                    <!-- <label
                      class="form-control block text-gray-700 text-sm font-bold mb-2"
                      for="idPhoto"
                      >Upload ID</label
                    ><input
                          id="idPhoto"
                          type="file"
                          class=""
                          @change="onFileChange($event)"
                          name="idPhoto"
                          accept="image/*, application/pdf"
                        /> -->
                      <FormulateInput
                      type="image"
                      @change="onFileChange($event)"
                      label="Upload scanned copy of your ID"
                      validation="required|mime:image/png,image/jpeg,image/gif"
                      input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                      upload-behavior="delayed"
                      help="pdf not supported"
                      image-behavior="preview"
                      error-class="text-red-500"
                      label-class="form-control block text-gray-700 text-sm font-bold mb-2"
                      help-class="text-sm text-gray-400 italic"
                      image-class="aspect-auto"
                      
                      ></FormulateInput>
                  </div>
                  <!-- <div class="form-group mb-4">
                    <label
                      for="frame"
                      class="form-control block text-gray-700 text-sm font-bold mb-2"
                      >Preview:</label
                    >
                    <img alt="" id="frame" class="border border-black aspect-auto">
                    
                    <img alt="" id="frame" class="h-64 w-96 border border-black aspect-auto">
                  </div> -->
                </div>
                <div class="grid grid-cols-2 gap-4 h-95">
                  <div class="form-group mb-4">
                    <label
                      for="selfie"
                      class="form-control block text-gray-700 text-sm font-bold mb-2"
                      >Selfie:</label
                    >
                    <Camera v-if="currentStep == 1"></Camera>
                    <!-- <button @click="openCamera()" class="w-40 bg-red-500 hover:bg-uplbmaroon text-white font-bold py-2 px-4 rounded">Take selfie</button> -->
                  </div>
                  <div class="form-group mb-4">
                    <label
                      for="frame"
                      class="form-control block text-gray-700 text-sm font-bold mb-2"
                      >Preview:</label
                    >
                    <img alt="" id="selfie" class="border border-black aspect-auto" :src="selfie">
                  </div>
                </div>
                
              </div>
              <div v-show="currentStep == 2" class="my-2">
                <div>
                    <span class="block text-gray-700 text-2xl font-bold mb-2"
                    >Review</span
                  >
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div class="form-group mb-4">
                        <label for="sFirstName"
                        class="form-control block text-gray-700 text-sm font-bold mb-2"
                        >First Name</label>
                        <span name="sFirstName">{{ firstname }}</span>
                    </div>
                    <div class="form-group mb-4">
                        <label for="sMiddleName"
                        class="form-control block text-gray-700 text-sm font-bold mb-2"
                        >Middle Name</label>
                        <span name="sMiddleName">{{ middlename }}</span>
                    </div>
                    <div class="form-group mb-4">
                        <label for="sLastName"
                        class="form-control block text-gray-700 text-sm font-bold mb-2"
                        >Last Name</label>
                        <span name="sLastName">{{ lastname }}</span>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div class="form-group mb-4">
                        <label for="sEmail"
                        class="form-control block text-gray-700 text-sm font-bold mb-2"
                        >Email</label>
                        <span name="sEmail">{{ email }}</span>
                    </div>
                    <div class="form-group mb-4">
                        <label for="sBirthdate"
                        class="form-control block text-gray-700 text-sm font-bold mb-2"
                        >Birthdate</label>
                        <span name="sBirthdate">{{ birthdate }}</span>
                    </div>
                    <div class="form-group mb-4">
                        <label for="sPhoneNumber"
                        class="form-control block text-gray-700 text-sm font-bold mb-2"
                        >Phone Number</label>
                        <span name="sPhoneNumber">{{ phone }}</span>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-4">
                    
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="form-group mb-4">
                        <label for="sIdCard"
                        class="form-control block text-gray-700 text-sm font-bold mb-2"
                        >ID</label>
                        <span name="sIdCard">{{ idType }}</span>
                    </div>
                    <div class="form-group mb-4">
                        <label for="sIdNumber"
                        class="form-control block text-gray-700 text-sm font-bold mb-2"
                        >ID Number</label>
                        <span name="sIdNumber">{{ idNumber }}</span>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-4">
                  <div class="form-group mb-4">
                    <label for="sAddress" class="form-control block text-gray-700 text-sm font-bold mb-2">Address</label>
                    <span name="sAddress">{{ address }}</span>
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-4">
                    <div class="form-group mb-4">
                        <label for="sIdPhoto"
                        class="form-control block text-gray-700 text-sm font-bold mb-2"
                        >ID Photo</label>
                        <img :src="image" alt="" class="h-100 w-100 border border-black"/>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-4">
                    <div class="form-group mb-4">
                        <label for="sIdPhoto"
                        class="form-control block text-gray-700 text-sm font-bold mb-2"
                        >Self Image</label>
                        <img :src="selfie" alt="" class="h-100 w-100 border border-black"/>
                    </div>
                </div>
              </div>
              <!-- PREVIOUS AND NEXT BUTTONS -->
              <div class="form-group mb-2 mt-2 items-center pb-6">
                <button
                  class="w-40 bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
                  @click.prevent="previous"
                  v-show="currentStep > firstStep"
                >
                  Previous
                </button>
                <button
                  class="w-40 bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
                  @click.prevent="validateCheck"
                  v-show="currentStep < lastStep"
                >
                  Next
                </button>
                <button
                  v-show="currentStep >= lastStep"
                  tabindex="15"
                  class="w-40 bg-uplbmaroon text-white font-bold py-2 px-4 rounded"
                  @click.prevent="save()"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- <GenericModal :isOpen="photoModal" v-if="photoModal">
          <template v-slot:content>
              <div>
                <Camera @closeModal="close"></Camera>
              </div>
          </template>
        </GenericModal> -->
        <GenericModal :isOpen="showModal" v-if="showModal">
          <template v-slot:content>
            <div
              class="relative overflow-x-hidden items-top justify-center min-h-screen h-full bg-gray-100 pt-10"
            >
              <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <TermsOfService @closeModal="close"> </TermsOfService>
                should be TOS
              </div>
            </div>
          </template>
        </GenericModal>
      </div>
    </div>
  </div>
</template>
<script>
import GenericModal from "@/components/GenericModal.vue";
import TermsOfService from "@/components/TermsOfService.vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import {
  regions,
  provinces,
  cities,
  barangays,
} from "select-philippines-address";
export default {
  name: "Registration",
  auth: false,
  components: { GenericModal, TermsOfService },
  data() {
    return {
      errors: {
        firstname: false,
        middlename: false,
        lastname: false,
        birthdate: "",
        phone: null,
        email: null,
        uuid: null,
        token: null,
        idNumber: null,
        idType: null,
        idPhoto:null,
      },
      image: '',
      showModal: true,
      cameraOn: false,
      isNotDisabled: true,
      currentStep: 0,
      firstStep: 0,
      lastStep: 2,
      lineStep: 0,
      formSteps: {
        0: {
          text: "text-blue-600 dark:text-blue-500",
          border: "border-blue-600",
        },
        1: { text: "", border: "" },
        2: { text: "", border: "" },
      },
      idTypeArray: [],
      idNumberArray: [],
      idOptions: [
                      "Philippine Passport",
                      "Driver's License",
                      "SSS ID or SSS UMID Card",
                      'GSIS ID or GSIS UMID Card',
                      "Professional Regulatory Commission ID",
                      "Overseas Workers Welfare Administration ID",
                      "Department of Labor and Employment iDOLE Card",
                      "Voter's ID",
                      "Senior Citizen's ID",
                      "Persons with Disability ID",
                      "NBI Clearance",
                      "PhilHealth ID"
                    ]
    };
  },
  computed: {
    ...mapState({
      tosAccept: (state) => state.registration.userAcceptTos,
      createUser: (state) => state.registration.userDetails,
    }),
    ...mapGetters({
      getTos: "registration/getTos",
      getFirstname: "registration/getFirstname",
      getLastname: "registration/getLastname",
      getMiddlename: "registration/getMiddlename",
      getBirthdate: "registration/getBirthdate",
      getMothersLastName: "registration/getMothersLastName",
      getPhone: "registration/getPhone",
      getEmail: "registration/getEmail",
      getToken: "registration/getToken",
      getRole: "registration/getRole",
      getIdType: "registration/getIdType",
      getIdNumber: "registration/getIdNumber",
      getIdPhoto: "registration/getIdPhoto",
      getAddress: "registration/getAddress",
      validated: "emailValidate/validated",
      getSelfie: "registration/getSelfie"
    }),

    acceptTos: {
      get() {
        return this.getTos;
      },
      set() {},
    },
    firstname: {
      get() {
        return this.getFirstname;
      },
      set(value) {
        this.setFirstname(value);
      },
    },
    lastname: {
      get() {
        return this.getLastname;
      },
      set(value) {
        this.setLastname(value);
      },
    },
    middlename: {
      get() {
        return this.getMiddlename;
      },
      set(value) {
        this.setMiddlename(value);
      },
    },
    mothersLastName: {
      get() {
        return this.getMothersLastName;
      },
      set(value) {
        this.setMothersLastName(value);
      },
    },
    birthdate: {
      get() {
        return this.getBirthdate;
      },
      set(value) {
        this.setBirthdate(value);
      },
    },
    phone: {
      get() {
        return this.getPhone;
      },
      set(value) {
        this.setPhone(value);
      },
    },
    email: {
      get() {
        return this.getEmail;
      },
      set(value) {
        this.setEmail(value);
      },
    },
    token: {
      get() {
        return this.getToken;
      },
      set(value) {
        this.setToken(value);
      },
    },
    role: {
      get() {
        return this.getRole;
      },
      set(value) {
        this.setRole(value);
      },
    },
    idType: {
      get() {
        return this.getIdType;
      },
      set(value) {
        // let arr = [value]
        this.setIdType(value);
      },
    },
    idNumber: {
      get() {
        return this.getIdNumber;
      },
      set(value) {
        this.setIdNumber(value);
      },
    },
    idPhoto: {
      get() {
        return this.getIdPhoto;
      },
      set(value) {
        this.setIdPhoto(value);
      },
    },
    address: {
      get() {
        return this.getAddress
      },
      set(value){
        this.setAddress(value)
      }
    },
    selfie:{
      get(){
        return this.getSelfie
      },
      set(value){
        this.setSelfie(value)
      }
    }
  },
  methods: {
    ...mapActions({
      handleIdTypeChange: "registration/handleIdTypeChange",
      save: "registration/save",
    }),
    ...mapMutations({
      setFirstname: "registration/SET_USER_FIRSTNAME",
      setLastname: "registration/SET_USER_LASTNAME",
      setMiddlename: "registration/SET_USER_MIDDLENAME",
      setBirthdate: "registration/SET_USER_BIRTHDATE",
      setMothersLastName: "registration/SET_MOTHERS_LAST_NAME",
      setPhone: "registration/SET_USER_PHONE",
      setEmail: "registration/SET_USER_EMAIL",
      setToken: "registration/SET_USER_TOKEN",
      setRole: "registration/SET_CLIENT_ROLE",
      setIdType: "registration/SET_ID_TYPE",
      setIdNumber: "registration/SET_ID_NUMBER",
      setIdPhoto: "registration/SET_ID_PHOTO",
      setAddress: "registration/SET_ADDRESS",
      setSelfie: "registration/SET_SELFIE",
    }),

    close() {
      this.showModal = !this.showModal;
    },

    modalShow() {
      if (this.acceptTos == 1) {
        this.showModal = false;
      }
    },

    next() {
      this.currentStep = this.currentStep += 1;
      this.lineStep = this.lineStep += 1;
      this.formSteps[this.lineStep - 1].text =
        "text-green-600 dark:text-green-500";
      this.formSteps[this.lineStep - 1].border = "border-green-600";
      this.formSteps[this.lineStep].text = "text-blue-600 dark:text-blue-500";
      this.formSteps[this.lineStep].border = "border-blue-600";
    },

    previous() {
      this.currentStep = this.currentStep -= 1;
      this.lineStep = this.lineStep -= 1;
      this.formSteps[this.lineStep + 1].text = "";
      this.formSteps[this.lineStep + 1].border = "border-gray-500";
      this.formSteps[this.lineStep].text = "text-blue-600 dark:text-blue-500";
      this.formSteps[this.lineStep].border = "border-blue-600";
    },

    validateCheck() {
      if (this.currentStep == 0) {
        if (
          this.firstname &&
          this.lastname &&
          this.middlename &&
          this.birthdate &&
          this.phone &&
          this.email
        ) {
          this.errors = {
            firstname: null,
            middlename: null,
            lastname: null,
            birthdate: null,
            phone: null,
            email: null,
          };
          return this.next();
        } else {
          if (!this.firstname) {
            this.errors["firstname"] = true;
          }
          if (!this.middlename) {
            this.errors["middlename"] = true;
          }
          if (!this.lastname) {
            this.errors["lastname"] = true;
          }
          if (this.birthdate == "dd/mm/yyy" || !this.birthdate) {
            this.errors["birthdate"] = true;
          }
          if (!this.phone) {
            this.errors["phone"] = true;
          }
          if (!this.email) {
            this.errors["email"] = true;
          }
        }
      } else if (this.currentStep == 1) {
        if (this.idType && this.idNumber && this.image) {
          this.errors = {
              idType: null,
              idNumber: null,
              idPhoto: null,
          }
          return this.next();
        } else {
            if (!this.idType) {
                this.errors["idType"] = true;
            }
            if (!this.idNumber) {
                this.errors["idNumber"] = true;
            }
            if (!this.idPhoto) {
                this.errors["idPhoto"] = true;
            }
        }
      } else if (this.currentStep == 2){
            
      }
    },

    openCamera(){
      this.photoModal = true
    },

    onFileChange(event) {
      // var files = event.target.files
      // if (!files.length) return;
      // this.createImage(files[0]);
      // let frame = document.getElementById("frame");
      // frame.src = URL.createObjectURL(event.target.files);
      // this.image = frame.src;
      this.$store.commit('registration/SET_ID_PHOTO', event.target.files)
    },

    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;     
        // console.log(vm.image)
      };
      reader.readAsDataURL(file);
      // console.log(reader)
    },

    cameraStop(){
      stream.getTracks().forEach(function(track) {
        track.stop();
      });
    }
  },
  mounted() {
    this.modalShow();
  },
  layout: "empty",
};
</script>
<!-- <style>
.formulate-input {
  margin-bottom: 1.5em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol
}

.formulate-input .formulate-input-label {
  display: block;
  line-height: 1.5;
  font-size: .9em;
  font-weight: 600;
  margin-bottom: .1em
}

.formulate-input .formulate-input-label--before+.formulate-input-help--before {
  margin-top: -.25em;
  margin-bottom: .75em
}

.formulate-input .formulate-input-element {
  max-width: 20em;
  margin-bottom: .1em
}

.formulate-input .formulate-input-help {
  color: #6d6d6d;
  font-size: .7em;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: .25em
}

.formulate-input .formulate-input-errors {
  list-style-type: none;
  padding: 0;
  margin: 0
}

.formulate-input .formulate-file-upload-error,
.formulate-input .formulate-input-error {
  color: #960505;
  font-size: .8em;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: .25em
}

.formulate-input:last-child {
  margin-bottom: 0
}

.formulate-input[data-classification=text] input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: .3em;
  border: 1px solid #cecece;
  box-sizing: border-box;
  background-color: transparent;
  font-size: .9em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  padding: .75em;
  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 1.2em;
  margin: 0
}

.formulate-input[data-classification=text] input::-moz-placeholder {
  color: #a8a8a8;
  line-height: normal
}

.formulate-input[data-classification=text] input:-ms-input-placeholder {
  color: #a8a8a8;
  line-height: normal
}

.formulate-input[data-classification=text] input::placeholder {
  color: #a8a8a8;
  line-height: normal
}

.formulate-input[data-classification=text] input:focus {
  outline: 0;
  border: 1px solid #41b883
}

.formulate-input[data-classification=text] .formulate-input-element--date input,
.formulate-input[data-classification=text] .formulate-input-element--datetime-local input,
.formulate-input[data-classification=text] .formulate-input-element--month input,
.formulate-input[data-classification=text] .formulate-input-element--week input {
  min-height: 2.2em
}

.formulate-input[data-classification=text] .formulate-input-element--search {
  position: relative
}

.formulate-input[data-classification=text] .formulate-input-element--search:before {
  content: "";
  width: 2em;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.99 72.9"><path fill="%236d6d6d" d="M71.77,66,53.87,48.1A29.94,29.94,0,1,0,30,60a29.52,29.52,0,0,0,18.1-6.1l18,17.8A4,4,0,0,0,69,72.9a4.18,4.18,0,0,0,2.9-1.2A4.09,4.09,0,0,0,71.77,66ZM30.07,51.9a21.9,21.9,0,1,1,15.5-37.4A21.37,21.37,0,0,1,52,30a22,22,0,0,1-6.4,15.5A21.54,21.54,0,0,1,30.07,51.9Z"/></svg>');
  background-size: 1em 1em;
  background-repeat: no-repeat;
  background-position: 50%;
  pointer-events: none
}

.formulate-input[data-classification=text] .formulate-input-element--search input {
  padding-left: 2em
}

.formulate-input[data-classification=text] input[type=color] {
  height: 1.1em;
  box-sizing: content-box;
  width: auto;
  min-width: 5em
}

.formulate-input[data-classification=text] input[type=color]::-webkit-color-swatch-wrapper {
  padding: 0 0 0 1.5em;
  display: flex;
  align-items: center;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.17 79.17"><path fill="%236d6d6d" d="M40.8,22.92c-3.4-3.4-4.76-8.44-1-12.24s8.84-2.44,12.24,1c5-5,10.69-13.33,18.81-11.31a11,11,0,0,1,7.62,14.34c-1.26,3.45-4.63,6.06-7.16,8.59-.92.93-3,2.26-3.46,3.46-.42,1,1.82,2.63,2.36,4a8,8,0,0,1-12.42,9.19c-.21-.16-1.35-1.51-1.59-1.51s-.83.83-1,1L49.71,44.9,32.43,62.18c-3.37,3.38-6.6,7.14-10.26,10.21a11,11,0,0,1-4.48,2.28c-1.25.3-3.11-.22-4.18.18-1.28.48-2.42,2.65-3.68,3.4-6.05,3.61-12.64-4-8.46-9.57.73-1,2.53-1.92,3-3a14.46,14.46,0,0,0-.09-2.52,10.75,10.75,0,0,1,3.14-6.77c.92-1,1.93-1.93,2.89-2.9Zm4.4-1.5c4.19,4,8.24,8.24,12.36,12.36,2.06,2.06,5,5.59,8,2.61,4.65-4.62-5-6.8-2.42-10.78C66.3,20.7,76.4,16.48,74.84,9.45,73.62,4,67.12,2.78,63.29,6.32c-2.55,2.36-4.93,4.94-7.39,7.4-.79.78-1.8,2.28-2.88,2.73-2.14.88-3.4-1.62-4.79-2.77-2.58-2.14-6.89-.82-6.53,3C41.89,18.68,43.87,20.09,45.2,21.42Zm-1.45,4.44L27.82,41.79C22,47.57,15.89,53.14,10.41,59.2a8.23,8.23,0,0,0-1.44,2c-.93,2,.25,4.14-.5,6S4.92,69.94,4.3,72a2.34,2.34,0,0,0,2.56,3c1.11-.17,2-1.33,2.71-2.07a11.17,11.17,0,0,1,2.08-2c1.68-.94,4,.17,5.93-.57C20,69.41,22,66.73,23.76,65L34.42,54.3,53.3,35.42Z"/></svg>');
  background-repeat: no-repeat;
  background-size: .9em .9em;
  background-position: left .1em
}

.formulate-input[data-classification=text] input[type=color]::-webkit-color-swatch {
  display: block;
  height: 1em;
  border-radius: .2em;
  border: 0;
  flex: auto
}

.formulate-input[data-classification=text] input[type=color]::-moz-color-swatch {
  display: block;
  height: 1em;
  border-radius: .2em;
  border: 0;
  flex: auto
}

.formulate-input[data-classification=slider] .formulate-input-element--range {
  display: flex;
  align-items: center
}

.formulate-input[data-classification=slider] .formulate-input-element-range-value {
  font-size: .9em;
  line-height: 1;
  margin-left: .5em;
  background-color: #efefef;
  padding: .25em .3em;
  border-radius: .25em;
  color: #6d6d6d;
  font-variant-numeric: tabular-nums
}

.formulate-input[data-classification=slider] input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  font-size: 1em;
  padding: .5em 0
}

.formulate-input[data-classification=slider] input:focus {
  outline: 0
}

.formulate-input[data-classification=slider] input::-webkit-slider-thumb {
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  width: 1em;
  height: 1em;
  border-radius: 1em;
  border: 0;
  background-color: #41b883;
  margin-top: calc(-.5em + 2px)
}

.formulate-input[data-classification=slider] input::-moz-range-thumb {
  cursor: pointer;
  -moz-appearance: none;
  appearance: none;
  width: 1em;
  height: 1em;
  border-radius: 1em;
  border: 0;
  background-color: #41b883;
  margin-top: calc(-.5em + 2px)
}

.formulate-input[data-classification=slider] input::-ms-thumb {
  cursor: pointer;
  appearance: none;
  width: 1em;
  height: 1em;
  border-radius: 1em;
  border: 0;
  background-color: #41b883;
  margin-top: calc(-.5em + 2px)
}

.formulate-input[data-classification=slider] input::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background-color: #efefef;
  border-radius: 3px;
  margin: 0;
  padding: 0
}

.formulate-input[data-classification=slider] input::-moz-range-track {
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background-color: #efefef;
  border-radius: 3px;
  margin: 0;
  padding: 0
}

.formulate-input[data-classification=textarea] textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: .3em;
  border: 1px solid #cecece;
  box-sizing: border-box;
  background-color: transparent;
  font-size: .9em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  padding: .75em;
  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 1.2em;
  margin: 0
}

.formulate-input[data-classification=textarea] textarea::-moz-placeholder {
  color: #a8a8a8;
  line-height: normal
}

.formulate-input[data-classification=textarea] textarea:-ms-input-placeholder {
  color: #a8a8a8;
  line-height: normal
}

.formulate-input[data-classification=textarea] textarea::placeholder {
  color: #a8a8a8;
  line-height: normal
}

.formulate-input[data-classification=textarea] textarea:focus {
  outline: 0;
  border: 1px solid #41b883
}

.formulate-input[data-classification=button] button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: .3em;
  box-sizing: border-box;
  background-color: transparent;
  font-size: .9em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  padding: .75em;
  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 1.2em;
  margin: 0;
  border: 1px solid #41b883;
  background-color: #41b883;
  color: #fff;
  min-width: 0;
  width: auto;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center
}

.formulate-input[data-classification=button] button::-moz-placeholder {
  color: #a8a8a8;
  line-height: normal
}

.formulate-input[data-classification=button] button:-ms-input-placeholder {
  color: #a8a8a8;
  line-height: normal
}

.formulate-input[data-classification=button] button::placeholder {
  color: #a8a8a8;
  line-height: normal
}

.formulate-input[data-classification=button] button:focus {
  outline: 0;
  border: 1px solid #41b883
}

.formulate-input[data-classification=button] button[disabled],
.formulate-input[data-classification=button] button[disabled]:active {
  background-color: #cecece;
  border-color: #cecece
}

.formulate-input[data-classification=button] button[data-ghost] {
  color: #41b883;
  background-color: transparent;
  border-color: currentColor
}

.formulate-input[data-classification=button] button[data-minor] {
  font-size: .75em;
  display: inline-block
}

.formulate-input[data-classification=button] button[data-danger] {
  background-color: #960505;
  border-color: #960505
}

.formulate-input[data-classification=button] button[data-danger][data-ghost] {
  color: #960505;
  background-color: transparent
}

.formulate-input[data-classification=button] button:active {
  background-color: #64c89b;
  border-color: #64c89b
}

.formulate-input[data-classification=select] .formulate-input-element {
  position: relative
}

.formulate-input[data-classification=select] .formulate-input-element:before {
  content: "";
  width: 0;
  height: 0;
  border-color: #cecece transparent transparent;
  border-style: solid;
  border-width: .3em .3em 0;
  top: 50%;
  margin-top: -.1em;
  right: 1em;
  position: absolute
}

.formulate-input[data-classification=select] .formulate-input-element[data-multiple]:before {
  display: none
}

.formulate-input[data-classification=select] select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: .3em;
  border: 1px solid #cecece;
  box-sizing: border-box;
  background-color: transparent;
  font-size: .9em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 1.2em;
  margin: 0;
  padding: .75em 2em .75em .75em
}

.formulate-input[data-classification=select] select::-moz-placeholder {
  color: #a8a8a8;
  line-height: normal
}

.formulate-input[data-classification=select] select:-ms-input-placeholder {
  color: #a8a8a8;
  line-height: normal
}

.formulate-input[data-classification=select] select::placeholder {
  color: #a8a8a8;
  line-height: normal
}

.formulate-input[data-classification=select] select:focus {
  outline: 0;
  border: 1px solid #41b883
}

.formulate-input[data-classification=select] select option {
  color: #000
}

.formulate-input[data-classification=select] select option:disabled {
  color: #a8a8a8
}

.formulate-input[data-classification=select] select[multiple] {
  padding: 0;
  overflow-y: auto
}

.formulate-input[data-classification=select] select[multiple] option {
  padding: .75em
}

.formulate-input[data-classification=select] select[data-placeholder-selected] {
  color: #a8a8a8
}

.formulate-input[data-classification=box] .formulate-input-wrapper {
  display: flex;
  align-items: center
}

.formulate-input[data-classification=box] .formulate-input-element {
  overflow: hidden;
  display: flex;
  align-items: center
}

.formulate-input[data-classification=box] .formulate-input-element input {
  position: absolute;
  left: -999px;
  opacity: 0;
  pointer-events: none
}

.formulate-input[data-classification=box] .formulate-input-element-decorator {
  display: block;
  width: 1em;
  height: 1em;
  border-radius: .25em;
  border: 1px solid #cecece;
  position: relative
}

.formulate-input[data-classification=box] .formulate-input-element-decorator:before {
  content: "";
  display: block;
  background-size: contain;
  background-position: 100%;
  width: calc(100% - .125em);
  height: calc(100% - .125em);
  box-sizing: border-box;
  position: absolute;
  top: .0625em;
  left: .0625em
}

.formulate-input[data-classification=box] .formulate-input-element[data-type=radio] .formulate-input-element-decorator {
  border-radius: 1em
}

.formulate-input[data-classification=box] .formulate-input-element[data-type=radio] .formulate-input-element-decorator:before {
  border-radius: 1em;
  width: calc(100% - .5em);
  height: calc(100% - .5em);
  top: .25em;
  left: .25em
}

.formulate-input[data-classification=box] .formulate-input-element input[type=checkbox]:checked~.formulate-input-element-decorator {
  border-color: #41b883
}

.formulate-input[data-classification=box] .formulate-input-element input[type=checkbox]:checked~.formulate-input-element-decorator:before {
  background-color: #41b883;
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M8.76,56.2c-6.38-6.34,3.26-16,9.64-9.69L38,65.88,80.56,23.29c6.38-6.38,16.07,3.32,9.69,9.69L42.84,80.37a6.83,6.83,0,0,1-9.65,0Z"/></svg>');
  mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M8.76,56.2c-6.38-6.34,3.26-16,9.64-9.69L38,65.88,80.56,23.29c6.38-6.38,16.07,3.32,9.69,9.69L42.84,80.37a6.83,6.83,0,0,1-9.65,0Z"/></svg>')
}

.formulate-input[data-classification=box] .formulate-input-element input[type=radio]:checked~.formulate-input-element-decorator {
  border-color: #41b883
}

.formulate-input[data-classification=box] .formulate-input-element input[type=radio]:checked~.formulate-input-element-decorator:before {
  background-color: #41b883
}

.formulate-input[data-classification=box] .formulate-input-element input:focus~.formulate-input-element-decorator {
  border-color: #41b883
}

.formulate-input[data-classification=box] .formulate-input-label--after {
  margin-left: .5em
}

.formulate-input[data-classification=box] .formulate-input-label--before {
  margin-right: .5em
}

.formulate-input[data-classification=group] .formulate-input-group-item,
.formulate-input[data-classification=group]>.formulate-input-wrapper>.formulate-input-label {
  margin-bottom: .5em
}

.formulate-input[data-classification=group] [data-is-repeatable] {
  padding: 1em;
  border: 1px solid #efefef;
  border-radius: .3em
}

.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-grouping {
  margin: -1em -1em 0
}

.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable {
  padding: 1em 3em 1em 1em;
  border-bottom: 1px solid #efefef;
  position: relative
}

.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove {
  position: absolute;
  display: block;
  top: calc(50% - .15em);
  width: 1.3em;
  height: 1.3em;
  background-color: #cecece;
  right: .85em;
  border-radius: 1.3em;
  cursor: pointer;
  transition: background-color .2s;
  overflow: hidden;
  text-indent: -1000px
}

.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove[data-disabled] {
  opacity: .2;
  pointer-events: none
}

.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:after,
.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:before {
  content: "";
  position: absolute;
  top: calc(50% - .1em);
  left: .325em;
  display: block;
  width: .65em;
  height: .2em;
  background-color: #fff;
  transform-origin: center center;
  transition: transform .25s
}

@media (pointer:fine) {
  .formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:hover {
    background-color: #dc2c2c
  }

  .formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:hover:after,
  .formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:hover:before {
    height: .2em;
    width: .75em;
    left: .25em;
    top: calc(50% - .075em)
  }

  .formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:hover:after {
    transform: rotate(45deg)
  }

  .formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable-remove:hover:before {
    transform: rotate(-45deg)
  }
}

.formulate-input[data-classification=group] [data-is-repeatable] .formulate-input-group-repeatable:last-child {
  margin-bottom: 1em
}

.formulate-input[data-classification=file] .formulate-input-upload-area {
  width: 100%;
  position: relative;
  padding: 2em 0
}

.formulate-input[data-classification=file] .formulate-input-upload-area input {
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  opacity: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5
}

.formulate-input[data-classification=file] .formulate-input-upload-area[data-has-files] {
  padding: 0
}

.formulate-input[data-classification=file] .formulate-input-upload-area[data-has-files] input {
  display: none
}

.formulate-input[data-classification=file] .formulate-input-upload-area-mask {
  border-radius: .4em;
  position: absolute;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border: 2px dashed #a8a8a8;
  z-index: 2
}

.formulate-input[data-classification=file] .formulate-input-upload-area-mask:before {
  content: "";
  background-color: #a8a8a8;
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58"><path d="M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z"/><polygon points="27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22"/></svg>');
  mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58"><path d="M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z"/><polygon points="27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22"/></svg>');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  width: 2em;
  height: 2em;
  position: absolute;
  pointer-events: none
}

.formulate-input[data-classification=file] .formulate-input-upload-area input:focus~.formulate-input-upload-area-mask,
.formulate-input[data-classification=file] .formulate-input-upload-area input:hover~.formulate-input-upload-area-mask,
.formulate-input[data-classification=file] .formulate-input-upload-area input[data-is-drag-hover]~.formulate-input-upload-area-mask {
  border-color: #41b883
}

.formulate-input[data-classification=file] .formulate-input-upload-area input:focus~.formulate-input-upload-area-mask:before,
.formulate-input[data-classification=file] .formulate-input-upload-area input:hover~.formulate-input-upload-area-mask:before,
.formulate-input[data-classification=file] .formulate-input-upload-area input[data-is-drag-hover]~.formulate-input-upload-area-mask:before {
  background-color: #41b883
}

.formulate-input[data-classification=file] .formulate-files {
  list-style-type: none;
  margin: 0;
  padding: 0
}

.formulate-input[data-classification=file] .formulate-files .formulate-file-add {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  min-width: 75px;
  border: 1px solid #41b883;
  color: #41b883;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  position: relative;
  font-size: 13px;
  background-color: transparent;
  cursor: pointer;
  margin: .5em 0
}

.formulate-input[data-classification=file] .formulate-files .formulate-file-add input {
  position: absolute;
  display: block;
  cursor: pointer
}

.formulate-input[data-classification=file] .formulate-files .formulate-file-add input::-webkit-file-upload-button {
  display: none
}

.formulate-input[data-classification=file] .formulate-files .formulate-file-progress {
  background-color: #cecece;
  height: .3em;
  border-radius: 1.25em;
  width: 5em;
  overflow: hidden;
  position: relative;
  flex: 0 0 5em;
  right: .75em;
  transition: height .25s, width .25s, flex-basis .25s;
  z-index: 2
}

.formulate-input[data-classification=file] .formulate-files .formulate-file-progress:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  opacity: 0;
  transform: scale(.08);
  background-color: #fff;
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M8.76,56.2c-6.38-6.34,3.26-16,9.64-9.69L38,65.88,80.56,23.29c6.38-6.38,16.07,3.32,9.69,9.69L42.84,80.37a6.83,6.83,0,0,1-9.65,0Z"/></svg>');
  mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M8.76,56.2c-6.38-6.34,3.26-16,9.64-9.69L38,65.88,80.56,23.29c6.38-6.38,16.07,3.32,9.69,9.69L42.84,80.37a6.83,6.83,0,0,1-9.65,0Z"/></svg>');
  -webkit-mask-size: 77%;
  mask-size: 77%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  z-index: 3
}

.formulate-input[data-classification=file] .formulate-files .formulate-file-progress[data-just-finished] {
  width: 1.25em;
  height: 1.25em;
  flex: 0 0 1.25em
}

.formulate-input[data-classification=file] .formulate-files .formulate-file-progress[data-just-finished]:before {
  transition: transform .25s .2s, opacity .25s .2s;
  transform: scale(1);
  opacity: 1
}

.formulate-input[data-classification=file] .formulate-files .formulate-file-progress[data-is-finished] {
  transition: height .25s, width .25s, left .25s, top, .25s, border-radius .25s;
  width: .3em;
  flex: 0 0 .3em;
  height: 100%;
  right: 0;
  border-radius: 0 .23em .23em 0
}

.formulate-input[data-classification=file] .formulate-files .formulate-file-progress[data-is-finished]:before {
  transition: opacity .1s;
  opacity: 0
}

.formulate-input[data-classification=file] .formulate-files .formulate-file-progress .formulate-file-progress-inner {
  background-color: #41b883;
  width: 1%;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 2
}

.formulate-input[data-classification=file] .formulate-files .formulate-file-name {
  padding-left: 1.5em;
  padding-right: 2em;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: auto
}

.formulate-input[data-classification=file] .formulate-files .formulate-file-name:before {
  position: absolute;
  left: .7em;
  top: 50%;
  margin-top: -.7em;
  background-color: #a8a8a8;
  content: "";
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.06 83.59"><path d="M55.94,83.59a8.16,8.16,0,0,0,8.12-8.16V19.12a1.77,1.77,0,0,0-.52-1.25L46.21.59A1.69,1.69,0,0,0,45.14.08L44.69,0l-.18,0H8.13A8.18,8.18,0,0,0,0,8.16V75.41a8.16,8.16,0,0,0,8.13,8.16H55.94ZM46.68,6,58.11,17.38H46.68ZM3.52,75.43V8.16A4.64,4.64,0,0,1,8.13,3.52h35V19.16a1.75,1.75,0,0,0,1.76,1.74H60.55V75.43a4.65,4.65,0,0,1-4.61,4.65H8.13A4.65,4.65,0,0,1,3.52,75.43Z"/></svg>');
  mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.06 83.59"><path d="M55.94,83.59a8.16,8.16,0,0,0,8.12-8.16V19.12a1.77,1.77,0,0,0-.52-1.25L46.21.59A1.69,1.69,0,0,0,45.14.08L44.69,0l-.18,0H8.13A8.18,8.18,0,0,0,0,8.16V75.41a8.16,8.16,0,0,0,8.13,8.16H55.94ZM46.68,6,58.11,17.38H46.68ZM3.52,75.43V8.16A4.64,4.64,0,0,1,8.13,3.52h35V19.16a1.75,1.75,0,0,0,1.76,1.74H60.55V75.43a4.65,4.65,0,0,1-4.61,4.65H8.13A4.65,4.65,0,0,1,3.52,75.43Z"/></svg>');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  width: 1.25em;
  height: 1.25em;
  display: inline-block;
  margin-right: .5em
}

.formulate-input[data-classification=file] .formulate-files .formulate-file-remove {
  width: 1.25em;
  height: 1.25em;
  border-radius: 1em;
  border: 1px solid #a8a8a8;
  background-color: #a8a8a8;
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.1 59.2"><path d="M1.6,57.7a5,5,0,0,0,3.5,1.5,4.85,4.85,0,0,0,3.5-1.5l21-21,21,21a5,5,0,0,0,3.5,1.5,4.85,4.85,0,0,0,3.5-1.5,5,5,0,0,0,0-7.1l-21-21,21-21a5,5,0,0,0,0-7.1,5,5,0,0,0-7.1,0l-21,21L8.6,1.7a5,5,0,0,0-7.1,0,5,5,0,0,0,0,7.1l21,21L1.6,50.7A4.83,4.83,0,0,0,1.6,57.7Z"/></svg>');
  mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.1 59.2"><path d="M1.6,57.7a5,5,0,0,0,3.5,1.5,4.85,4.85,0,0,0,3.5-1.5l21-21,21,21a5,5,0,0,0,3.5,1.5,4.85,4.85,0,0,0,3.5-1.5,5,5,0,0,0,0-7.1l-21-21,21-21a5,5,0,0,0,0-7.1,5,5,0,0,0-7.1,0l-21,21L8.6,1.7a5,5,0,0,0-7.1,0,5,5,0,0,0,0,7.1l21,21L1.6,50.7A4.83,4.83,0,0,0,1.6,57.7Z"/></svg>');
  -webkit-mask-size: .6em;
  mask-size: .6em;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  cursor: pointer;
  position: absolute;
  right: .75em;
  z-index: 1;
  transition: transform .25s
}

@media (pointer:fine) {
  .formulate-input[data-classification=file] .formulate-files .formulate-file-remove:hover {
    transform: scale(1.5)
  }
}

.formulate-input[data-classification=file] .formulate-files li {
  display: block
}

.formulate-input[data-classification=file] .formulate-files li[data-has-error] .formulate-file-progress {
  background-color: #dc2c2c
}

.formulate-input[data-classification=file] .formulate-files li[data-has-preview] .formulate-file-name:before {
  display: none
}

.formulate-input[data-classification=file] .formulate-files li+li {
  margin-top: .5em
}

.formulate-input[data-classification=file] .formulate-files .formulate-file {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: .3em;
  border: 1px solid #cecece;
  box-sizing: border-box;
  background-color: transparent;
  font-size: .9em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  padding: .75em;
  display: block;
  font-weight: 400;
  line-height: 1.2em;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative
}

.formulate-input[data-classification=file] .formulate-files .formulate-file::-moz-placeholder {
  color: #a8a8a8;
  line-height: normal
}

.formulate-input[data-classification=file] .formulate-files .formulate-file:-ms-input-placeholder {
  color: #a8a8a8;
  line-height: normal
}

.formulate-input[data-classification=file] .formulate-files .formulate-file::placeholder {
  color: #a8a8a8;
  line-height: normal
}

.formulate-input[data-classification=file] .formulate-files .formulate-file:focus {
  outline: 0;
  border: 1px solid #41b883
}

.formulate-input[data-classification=file] .formulate-files .formulate-file ::-webkit-progress-bar {
  -webkit-appearance: none;
  appearance: none;
  height: .5em;
  border-radius: .5em;
  overflow: hidden
}

.formulate-input[data-classification=file] .formulate-files .formulate-file-image-preview {
  width: 3em;
  height: 3em;
  flex: 0 0 3em;
  position: relative;
  z-index: 2;
  left: -1px;
  box-shadow: 0 0 0 1px #efefef;
  transition: transform .25s, box-shadow .25s, background-color .25s
}

@media (pointer:fine) {
  .formulate-input[data-classification=file] .formulate-files .formulate-file-image-preview:hover {
    transition-delay: .2s;
    transform: scale(3);
    background-color: #fff;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, .1)
  }
}

.formulate-input[data-classification=file] .formulate-files .formulate-file-image-preview img {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  -o-object-fit: contain;
  object-fit: contain;
  transition: all .25s
}

.formulate-input[data-classification=file] [data-type=image] .formulate-input-upload-area .formulate-input-upload-area-mask:before {
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 71.05"><path d="M82.89,0H7.1A7.12,7.12,0,0,0,0,7.11V64a7.11,7.11,0,0,0,7.1,7.1H82.9A7.11,7.11,0,0,0,90,64V7.11A7.12,7.12,0,0,0,82.89,0ZM69.28,39.35a5.44,5.44,0,0,0-8,0L50.58,50.74,32.38,30.88a5.31,5.31,0,0,0-7.92,0L4.74,52.4V7.11A2.37,2.37,0,0,1,7.11,4.74H82.9a2.37,2.37,0,0,1,2.36,2.37V56.3Z"/><circle cx="67.74" cy="22.26" r="8.53"/></svg>');
  mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 71.05"><path d="M82.89,0H7.1A7.12,7.12,0,0,0,0,7.11V64a7.11,7.11,0,0,0,7.1,7.1H82.9A7.11,7.11,0,0,0,90,64V7.11A7.12,7.12,0,0,0,82.89,0ZM69.28,39.35a5.44,5.44,0,0,0-8,0L50.58,50.74,32.38,30.88a5.31,5.31,0,0,0-7.92,0L4.74,52.4V7.11A2.37,2.37,0,0,1,7.11,4.74H82.9a2.37,2.37,0,0,1,2.36,2.37V56.3Z"/><circle cx="67.74" cy="22.26" r="8.53"/></svg>')
}

.formulate-form-errors {
  margin: .75em 0;
  padding: 0;
  list-style-type: none
}

.formulate-form-errors:first-child {
  margin-top: 0
}

.formulate-form-errors:last-child {
  margin-bottom: 0
}

.formulate-form-errors .formulate-form-error {
  color: #960505;
  font-size: .9em;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: .25em
}</style> -->