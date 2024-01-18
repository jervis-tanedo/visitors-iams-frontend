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
                  </div>
                  <div class="mb-4">
                    <FormulateInput
                    type="text"
                    label="Middle Name"
                    v-model="middlename"
                    validation="required"
                    error-class="text-red-500"
                    label-class="block text-gray-700 text-sm font-bold mb-2"
                    input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                    </FormulateInput>
                  </div>
                  <div class="mb-4">
                    <FormulateInput
                    type="text"
                    label="Last Name"
                    v-model="lastname"
                    validation="required"
                    error-class="text-red-500"
                    label-class="block text-gray-700 text-sm font-bold mb-2"
                    input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                    </FormulateInput>
                  </div>
                </div>
                <div class="grid grid-cols-3 gap-4">
                  <div class="mb-4">
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
                  <div class="mb-4">
                    <FormulateInput
                    type="select"
                    label="Sex"
                    v-model="sex"
                    placeholder="Choose..."
                    :options="sexOption"
                    validation="required"
                    error-class="text-red-500"
                    label-class="block text-gray-700 text-sm font-bold mb-2"
                    input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                    ></FormulateInput>
                  </div>
                  <div class="mb-4">
                    <FormulateInput
                    type="select"
                    label="Civil Status"
                    placeholder="Choose..."
                    :options="['Single', 'Married', 'Widowed', 'Legally Seperated']"
                    v-model="civilStatus"
                    validation="required"
                    error-class="text-red-500"
                    label-class="block text-gray-700 text-sm font-bold mb-2"
                    input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                    ></FormulateInput>
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
                <div class="grid grid-cols-1 gap-4 h-95">
                  <div class="form-group mb-4">
                      <FormulateInput
                      type="image"
                      name="idPhoto"
                      label="Upload scanned copy of your ID"
                      validation="required|mime:image/png,image/jpeg,image/gif"
                      validation-name="ID"
                      input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                      upload-behavior="live"
                      help="pdf not supported"
                      image-behavior="preview"
                      error-class="text-red-500"
                      label-class="form-control block text-gray-700 text-sm font-bold mb-2"
                      help-class="text-sm text-gray-400 italic"
                      image-class="aspect-auto"
                      :uploader="uploadImage"
                      upload-area-class="w-full border"
                      upload-area-mask-class="w-full"     
                      file-image-preview-class="p-2"          
                      file-image-preview-image="border border-black"                  
                      ></FormulateInput>
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-4">
                  <div class="form-group mb-4">
                    <span class="form-control block text-gray-700 text-sm font-bold mb-2">
                      Address indicated in your ID
                    </span>
                    <label class="form-control block text-gray-700 text-sm font-thin mb-2">Region</label>
                    <select 
                      id="Region"
                      @change="handleProvince"
                      aria-placeholder="Choose..."
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                        <option disabled selected>Select Region</option>
                        <option v-for="region in regions" :value="region.region_code" :key="region.region_code">{{
                            region.region_name
                            }}
                        </option>
                    </select>
                    <label for="Province" class="form-control block text-gray-700 text-sm font-thin mb-2">Province</label>
                    <select 
                      id="Province"
                      @change="handleCity"
                      placeholder="Choose..."
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                        <option disabled selected>Select Province</option>
                        <option v-for="province in provinces" :value="province.province_code" :key="province.province_code">{{
                            province.province_name
                            }}
                        </option>
                    </select>
                    <label for="City" class="form-control block text-gray-700 text-sm font-thin mb-2">City</label>
                    <select 
                      id="City"
                      @change="handleBarangay"
                      placeholder="Choose..."
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                        <option disabled selected>Select City</option>
                        <option v-for="city in cities" :value="city.city_code" :key="city.city_code">{{
                            city.city_name
                            }}
                        </option>
                    </select>
                    <label for="Barangay" class="form-control block text-gray-700 text-sm font-thin mb-2">Barangay</label>
                    <select 
                      id="Barangay"
                      @change="barangayChange"
                      placeholder="Choose..."
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                        <option disabled selected>Select Barangay</option>
                        <option v-for="barangay in barangays" :value="barangay.brgy_code" :key="barangay.brgy_code">{{
                            barangay.brgy_name
                            }}
                        </option>
                    </select>

                    <FormulateInput
                    type="text"
                    label="Address Line 1"
                    validation="required"
                    v-model="addressLine1"
                    error-class="text-red-500"
                    label-class="form-control block text-gray-700 text-sm font-thin mb-2"
                    input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                    ></FormulateInput>
                    <FormulateInput
                    type="text"
                    label="Address Line 2"
                    v-model="addressLine2"
                    error-class="text-red-500"
                    label-class="form-control block text-gray-700 text-sm font-thin mb-2"
                    input-class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                    ></FormulateInput>
                </div>
                </div>
                <div class="grid grid-cols-2 gap-4 h-95">
                  <div class="form-group mb-4">
                    <label
                      for="selfie"
                      class="form-control block text-gray-700 text-sm font-bold mb-2"
                      >Selfie:</label
                    >
                    <Camera v-if="currentStep == 1"></Camera>
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
                <div class="grid grid-cols-4 gap-4">
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
                    <div class="form-group mb-4">
                        <label for="sCivilStatus"
                        class="form-control block text-gray-700 text-sm font-bold mb-2"
                        >Phone Number</label>
                        <span name="sCivilStatus">{{ civilStatus }}</span>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div class="form-group mb-4">
                        <label for="sMothersLastName"
                        class="form-control block text-gray-700 text-sm font-bold mb-2"
                        >ID</label>
                        <span name="sMothersLastName">{{ mothersLastName }}</span>
                    </div>
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
                    <span name="sAddress">{{ addressLine1 }}, </span><span v-if="addressLine2">{{ addressLine2 }},</span><span>Brgy. {{ barangay }}, {{ city }}, {{ province }}, {{ region }}</span>
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-4">
                    <div class="form-group mb-4">
                        <label for="sIdPhoto"
                        class="form-control block text-gray-700 text-sm font-bold mb-2"
                        >ID Photo</label>
                        <img id="frame" alt="" class="h-100 w-100 border border-black"/>

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
        <Modal
          :isOpen="isModalOpen"
          iconType="info"
        >
          <template slot="title">
            {{ modal.title }}
          </template>
          <template slot="content">
            <!-- {{ modal.content }} -->
            <div class="relative overflow-x-hidden items-top justify-center min-h-screen h-full bg-gray-100 pt-10">
              <TermsOfService @closeModal="close"></TermsOfService>
            </div>
          </template>
          <template slot="footer">
            <!-- <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" @click="confirmAction()">Confirm</button> -->
            <button type="button"  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="isModalOpen = false;">Ok</button>
          </template>
        </Modal>
      </div>
    </div>
  </div>
</template>
<script>
// import GenericModal from "@/components/GenericModal.vue";
import TermsOfService from "@/components/TermsOfService.vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import {regions, provinces, cities, barangays} from 'select-philippines-address';

export default {
  name: "Registration",
  auth: false,
  components: { TermsOfService },
  data() {
    return {
      isModalOpen: true,
      modal: {
        title: 'Privacy Policy',
        content: '',
      },
      image: "",
      imageDetails:{},
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
        "Drivers License",
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
      ],
      sexOption: [
        'Male',
        'Female'
      ],
      regions: [],
      provinces: [],
      cities: [],
      barangays: [],
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
      getSex: "registration/getSex",
      getToken: "registration/getToken",
      getRole: "registration/getRole",
      getIdType: "registration/getIdType",
      getIdNumber: "registration/getIdNumber",
      getIdPhoto: "registration/getIdPhoto",
      getAddress: "registration/getAddress",
      validated: "emailValidate/validated",
      getSelfie: "registration/getSelfie",
      getRegion: "registration/getRegion",
      getProvince: "registration/getProvince",
      getCity: "registration/getCity",
      getBarangay: "registration/getBarangay",
      getAddressLine1: "registration/getAddressLineOne",
      getAddressLine2: "registration/getAddressLineTwo",
      getCivilStatus: "registration/getCivilStatus",
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
    },
    sex:{
      get(){
        return this.getSex
      },
      set(value){
        this.setSex(value)
      }
    },
    region: {
      get(){
        return this.getRegion
      },
      set(value){
        this.setRegion(value)
      }
    },
    province: {
      get(){
        return this.getProvince
      },
      set(value){
        this.setProvince(value)
      }
    },
    city: {
      get(){
        return this.getCity
      },
      set(value){
        this.setCity(value)
      }
    },
    barangay: {
      get(){
        return this.getBarangay
      },
      set(value){
        this.setBarangay(value)
      }
    },
    addressLine1: {
      get(){
        return this.getAddressLine1
      },
      set(value){
        this.setAddressLine1(value)
      }
    },
    addressLine2: {
      get(){
        return this.getAddressLine2
      },
      set(value){
        this.setAddressLine2(value)
      }
    },

    civilStatus:{
      get(){
        return this.getCivilStatus
      },
      set(value){
        this.setCivilStatus(value)
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
      setSex: "registration/SET_SEX",
      setRegion: "registration/SET_REGION",
      setProvince: "registration/SET_PROVINCE",
      setCity: "registration/SET_CITY",
      setBarangay: "registration/SET_BARANGAY",
      setAddressLine1: "registration/SET_ADDRESS_LINE_ONE",
      setAddressLine2: "registration/SET_ADDRESS_LINE_TWO",
      setCivilStatus: "registration/SET_CIVIL_STATUS"
    }),

    uploadImage(file, progress, error, option) {
      this.imageDetails = {file, progress, error, option};
      // console.log(this.image);
      console.log(this.imageDetails);
      // if (!this.imageDetails.file.length) return;
      let frame = document.getElementById("frame");
      frame.src = URL.createObjectURL(this.imageDetails.file)
      // console.log(imageObject)
      this.$store.commit('registration/SET_ID_PHOTO', file)
      // console.log(this.idPhoto)
    },

    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;     
        console.log(vm.image)
      };
      reader.readAsDataURL(file);
      console.log(reader)
    },

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
      this.next()
    },

    openCamera(){
      this.photoModal = true
    },

    onFileChange(event) {
      var files = event.target.files
      console.log(event.target.files)
      if (!files.length) return;
      this.createImage(files[0]);
      let frame = document.getElementById("frame");
      frame.src = window.URL.createObjectURL(new Blob(event.target.files));
      this.image = frame.src;
      this.$store.commit('registration/SET_ID_PHOTO', event.target.files)
    },

    cameraStop(){
      stream.getTracks().forEach(function(track) {
        track.stop();
      });
    },

    handleProvince(e){
      this.region = e.target.selectedOptions[0].text;
      provinces(e.target.value).then(response => {
          this.provinces = response;
          console.log(this.provinces)
      });
    },

    handleCity(e) {
      this.province = e.target.selectedOptions[0].text;
      cities(e.target.value).then(response => {
          this.cities = response;
          console.log(this.cities)
      });
    },

    handleBarangay(e) {
      this.city = e.target.selectedOptions[0].text;
      barangays(e.target.value).then(response => {
          this.barangays = response;
          console.log(this.barangays)
      });
    },

    barangayChange(e){
      this.barangay = e.target.selectedOptions[0].text
      console.log(this.barangay)
    }
  },

  mounted() {
    this.modalShow();
  },

  created() {
    regions().then(response => {
      this.regions = response
      console.log(response)
    })
  },

  layout: "empty",
};
</script>
