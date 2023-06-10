<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  ><Alert/>
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 bg-white shadow sm:rounded-lg p-6">
        <div>
          <div class="card py-1">
            <div class="card-header bg-white rounded p-2 m-1 h-100">
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
                    <label
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
                    />
                    <div v-if="errors.firstname == true">
                      <span class="text-red-500">Required</span>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label
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
                    />
                    <div v-if="errors.middlename">
                      <span class="text-red-500">Required</span>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label
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
                    />
                    <div v-if="errors.lastname">
                      <span class="text-red-500">Required</span>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div class="mb-4">
                    <label
                      class="form-control block text-gray-700 text-sm font-bold mb-2"
                      for="birthdate"
                    >
                      Birthdate
                    </label>
                    <input
                      :placeholder="'(Required)'"
                      tabindex="5"
                      class="datepicker shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                      v-model="birthdate"
                      type="date"
                    />
                    <div v-if="errors.birthdate">
                      <span class="text-red-500">Required</span>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label
                      class="form-control block text-gray-700 text-sm font-bold mb-2"
                      for="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      :placeholder="'(Required)'"
                      tabindex="6"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                      v-model="phone"
                      type="tel"
                      pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                    />
                    <div v-if="errors.phone">
                      <span class="text-red-500">Required</span>
                    </div>
                  </div>
                </div>
                <div class="form-group mb-4">
                  <div class="mb-4">
                    <label
                      class="form-control block text-gray-700 text-sm font-bold mb-2"
                      for="phone"
                    >
                      Email
                    </label>
                    <input
                      tabindex="7"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                      v-model="email"
                      type="email"
                    />
                    <div v-if="errors.email">
                      <span class="text-red-500">Required</span>
                    </div>
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
                    <label
                      class="form-control block text-gray-700 text-sm font-bold mb-2"
                      for="identification"
                      >ID</label
                    >
                    <input
                      class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
                      type="text"
                      v-model="idType"
                      list="idList"
                    />
                    <datalist id="idList">
                      <option value="Philippine Passport"></option>
                      <option value="Driver's License"></option>
                      <option value="SSS ID or SSS UMID Card"></option>
                      <option value="GSIS ID or GSIS UMID Card"></option>
                      <option
                        value="Professional Regulatory Commission ID"
                      ></option>
                      <option
                        value="Overseas Workers Welfare Administration ID"
                      ></option>
                      <option
                        value="Department of Labor and Employment iDOLE Card"
                      ></option>
                      <option value="Voter's ID"></option>
                      <option value="Senior Citizen's ID"></option>
                      <option value="Persons with Disability ID"></option>
                      <option value="NBI Clearance"></option>
                      <option value="PhilHealth ID"></option>
                    </datalist>
                    <div v-if="errors.idType">
                      <span class="text-red-500">Required</span>
                    </div>
                  </div>
                  <div class="form-group mb-4">
                    <label
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
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4 h-95">
                  <div class="form-group mb-4">
                    <!-- <input type="file" name="idPhoto" id=""> -->
                    <label
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
                        />
                  </div>
                  <div class="form-group mb-4">
                    <label
                      for="frame"
                      class="form-control block text-gray-700 text-sm font-bold mb-2"
                      >Preview:</label
                    >
                    <img alt="" id="frame" class="h-64 w-96 border border-black">
                  </div>
                </div>
                <div class="py-1">
                  <span class="block text-gray-700 text-xl font-bold mb-2"
                    >Address in indicated in your ID</span
                  >
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
                        <label for="sIdPhoto"
                        class="form-control block text-gray-700 text-sm font-bold mb-2"
                        >ID Photo</label>
                        <img :src="image" alt="" class="h-100 w-100 border border-black"/>
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
                  class="w-40 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  @click.prevent="save()"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
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
      getPhone: "registration/getPhone",
      getEmail: "registration/getEmail",
      getToken: "registration/getToken",
      getRole: "registration/getRole",
      getIdType: "registration/getIdType",
      getIdNumber: "registration/getIdNumber",
      getIdPhoto: "registration/getIdPhoto",
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
      setPhone: "registration/SET_USER_PHONE",
      setEmail: "registration/SET_USER_EMAIL",
      setToken: "registration/SET_USER_TOKEN",
      setRole: "registration/SET_CLIENT_ROLE",
      setIdType: "registration/SET_ID_TYPE",
      setIdNumber: "registration/SET_ID_NUMBER",
      setIdPhoto: "registration/SET_ID_PHOTO",
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
      } 
    },

    onFileChange(event) {
      var files = event.target.files
      if (!files.length) return;
      this.createImage(files[0]);
      let frame = document.getElementById("frame");
      frame.src = URL.createObjectURL(event.target.files[0]);
      this.image = frame.src;
      this.$store.commit('registration/SET_ID_PHOTO', event.target.files[0])
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
  },
  mounted() {
    this.modalShow();
  },
  layout: "noLayout",
};
</script>
