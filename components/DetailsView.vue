<template>
    <div>
        <div class="grid grid-cols-3 gap-4">
            <div class="form-group mb-4">
                <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="firstname"
                    >
                      First Name
                </label>
                <span>{{ input.first_name }}</span>
            </div>
            <div class="form-group mb-4">
                <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="middlename"
                    >
                      Middle Name
                </label>
                <span>{{ input.middle_name }}</span>
            </div>
            <div class="form-group mb-4">
                <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="lastname"
                    >
                      Last Name
                </label>
                <span>{{ input.last_name }}</span>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div class="form-group mb-4">
                <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="dateofbirth"
                    >
                      Date of Birth
                </label>
                <span>{{ $moment(input.date_of_birth).format('MMM DD YYYY') }}</span>
            </div>  
            <div class="form-group mb-4">
                <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="phonenumber"
                    >
                      Phone Number
                </label>
                <span>{{ input.phone_number }}</span>
            </div>  
            <div class="form-group mb-4">
                <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="email"
                    >
                      Email
                </label>
                <span>{{ input.email }}</span>
            </div>  
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div class="form-group mb-4">
                <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="address"
                    >
                      Address
                </label>
                <span>{{ input.address_line_1 }}, </span><span v-if="input.address_line_2.length">{{ input.address_line_2 }}, </span><span>Brgy. {{ input.barangay }}, </span><span>{{ input.city }}, </span><span>{{ input.province }}, </span><span>{{ input.region }}. </span>
            </div>
            <div class="form-group mb-4">
                <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="idtype"
                    >
                      ID
                </label>
                <span>{{ input.id_type }}</span>
            </div>
            <div class="form-group mb-4">
                <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="idnumber"
                    >
                      ID Number
                </label>
                <span>{{ input.id_number }}</span>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-4">
                <label for="identification" class="block text-gray-700 text-sm font-bold mb-2">ID provided</label>
                <img id="identification" :src="imgUrl" class="h-96 w-100 border border-black"/>
                <!-- {{ pagination }} -->
            </div>
            <div class="form-group mb-4">
                <label for="selfImage" class="block text-gray-700 text-sm font-bold mb-2">Self Image</label>
                <img id="selfImage" :src="imgSelfieUrl" class="h-96 w-100 border border-black"/>
                <!-- {{ pagination }} -->
            </div>
        </div>
        <!-- <div class="grid grid-cols-1 gap-4">
            
        </div> -->
        <div class="grid grid-cols-1 gap-4">
            <DataTable
                :isLoading="dataLoading" 
                :isInitialLoad="initialLoad" 
                :tableFilterData="filterData" 
                :tableHeaders="headers" 
                :tableData="tableData" 
                :tableOptions="options" 
                :pagination=pagination
                @onUpdateOptions="handleOptionsUpdate" 
                @onUpdatePage="handlePagination"
                @onUpdateSorting="handleSortingUpdate"
            ></DataTable>
            <div class="grid grid-cols-1 gap-4 mb-4">
                <div class="sm:px-6 sm:flex sm:flex-row-reverse">
                    <button class="w-40 inline-flex justify-center bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded" @click.prevent="openRejectModal()">Reject</button>
                    <button class="w-40 inline-flex justify-center bg-uplbmaroon text-white font-bold py-2 px-4 rounded" @click.prevent="save()">Accept</button>
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
            {{ modal.content }}
          </template>
          <template slot="footer">
            <!-- <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" @click="confirmAction()">Confirm</button> -->
            <button type="button"  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="isModalOpen = false;">Ok</button>
          </template>
        </Modal>

        <Modal 
        :isOpen="isReasonModalOpen"
        iconType="info"
        >
            <template slot="content">
                    <!-- <label for="reason" class="block text-gray-700 text-sm font-bold mb-2">Reasons:</label>
                    <textarea class="" v-model="rejectReason"></textarea> -->
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea 
                        id="message" 
                        rows="4" 
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Write your reasons here..." 
                        v-model="rejectReason">
                    </textarea>
            </template>
            <template slot="footer">
                <div class="sm:px-6 sm:flex sm:flex-row-reverse">
                    <button class="w-40 inline-flex justify-center bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded" @click.prevent="reject();">Reject</button>
                    <button class="w-40 inline-flex justify-center bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded" @click.prevent="isReasonModalOpen = false">Cancel</button>
                </div>
            </template>
        </Modal>
    </div>
    
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
export default {
    data () {
        return {
            input: {
                id: null,
                first_name: "",
                middle_name: "",
                last_name: "",
                // sex: index.index.sex,
                date_of_birth: null,
                // civil_status: index.index.civil_status,
                // is_verified: index.index.is_verified,
                // is_active: index.index.is_active,
                phone_number: "",
                email: "",
                address: "",
                region: "",
                province: "",
                city: "",
                barangay: "",
                address_line_1: "",
                address_line_2: "",
                id_type: "",
                id_number: "",
                id_file: "",
                // action: "update"
            },
            rejectReason: null,
            img: null,
            headers: [
                {
                    name: "first_name",
                    sortable: true,
                    label: "First Name"
                },
                {
                    name: "middle_name",
                    sortable: true,
                    label: "Middle Name"
                },
                {
                    name: "last_name",
                    sortable: true,
                    label: "Last Name"
                },
                {
                    name: "email",
                    sortable: false,
                    label: "Email"
                },
                {
                    name: "date_of_birth",
                    sortable: false,
                    label: "Date of Birth"
                },
                {
                    name: "match",
                    sortable: false,
                    label: "Match"
                },
                // {
                //     name: "action",
                //     sortable: false,
                //     label: "Action"
                // }
            ],
            options: {
                page: 1,
                filters: {},
                numOfItems: 5
            },
            isModalOpen: false,
            modal: {
                title: '',
                content: ''
            },
            isReasonModalOpen: false,
            filters: [ //field -> db field/column; name -> name of key returned; type -> what type of filter; label -> label to be used
                { field: 'first_name', name: 'first_name', type: 'input', label: 'First Name' },
                { field: 'last_name', name: 'last_name', type: 'input', label: 'Last Name' },
            ],
        }
    },
    
    computed:{
        ...mapState({
            photo: state => state.requests.photo,
            filterData: state => state.mdms.filters,
            tableData: state => state.mdms.data.data,
            pagination: state => state.mdms.data,
            dataLoading: state => state.mdms.loading,
            initialLoad: state => state.mdms.initialLoad,
            coursesData: state => state.mdms.data,
            tableFilterValues: state => state.mdms.filterValues,
        }),

        ...mapGetters({
            getIdPhoto: "requests/getIdPhoto",
            getTableData: "mdms/getTableData",
            getSelfiePhoto: "requests/getSelfiePhoto",
        }),

        imgUrl: {
            get() {
                return this.getIdPhoto
            },
            set(value) {
                this.setIdPhoto(value)
            }
        },
        imgSelfieUrl: {
            get(){
                return this.getSelfiePhoto
            },
            set(value){
                this.setSelfiePhoto(value)
            }
        }
    },

    async fetch () {
      await this.updateFilterValues({}) // set the filter values to nothing every time a txn history is rendered
      await this.fetchTableData(this.options.page)
      await this.filters.forEach(filter => { // create the filter values that will be used for this txn history instance
          this.getFilters({ 
            link: this.module,
            data: {
                column_name: filter.field,
                distinct: 'true',
                order_type: 'ASC',
                order_field: filter.field
            }
          })
      });
    },

    methods: {
        ...mapActions({
            getData: 'mdms/getDataList',
            createData: 'mdms/create',
            updateData: 'mdms/update',
            getFilters: 'mdms/getFilters',
            viewPhoto: 'requests/viewPhoto',
            updateRegister: 'requests/update',
            addUserToKc: 'requests/saveToKeycloak',
            viewSelfie: 'requests/viewSelfie',
            // getUUID: 'requests/getUserId',
        }),

        ...mapMutations({
            setIdPhoto: 'requests/SET_ID_URL',
            updateNumOfItems: 'mdms/UPDATE_NUM_OF_ITEMS',
            updateFilterValues: 'mdms/UPDATE_FILTER_VALUES',
            updateOrderValues: 'mdms/UPDATE_ORDER_VALUES',
            setTableModule: 'mdms/SET_MODULE',
            setSelfiePhoto: 'requests/SET_SELFIE_URL',
        }),

        setDefault(data) {
            this.input.id = data.id;
            this.input.first_name = data.first_name;
            this.input.middle_name = data.middle_name;
            this.input.last_name = data.last_name;
            // this.input.sex = data.sex;
            // this.input.civil_status = data.civil_status;
            this.input.date_of_birth = data.date_of_birth;
            // this.input.is_verified = data.is_verified
            // this.input.is_active = data.is_active
            this.input.phone_number = data.phone_number;
            this.input.email = data.email;
            // this.input.address = data.address;
            this.input.id_type = data.id_type;
            this.input.id_number = data.id_number;
            this.input.id_file = data.id_file;
            this.input.region = data.region;
            this.input.province = data.province;
            this.input.city = data.city;
            this.input.barangay = data.barangay;
            this.input.address_line_1 = data.address_line_1;
            this.input.address_line_2 = data.address_line_2;
            this.fetchTableData(1);
            this.viewPhoto(this.input.id);
            this.viewSelfie(this.input.id);
        },

        applyFilter(data) { // apply the filter from the filters component
            console.log(data)
            this.updateFilterValues(data)
            this.fetchTableData(1)
        },

        changePage(page) {
            this.fetchTableData(page)
        },

        async fetchTableData(page) { // reusable function for getting the data to be displayed in txn history
            await this.getData({
                // link: this.module,
                data: {
                    page: page,
                    items: this.options.numOfItems,
                    validate_last_name: this.input.last_name,
                    validate_middle_last_name: this.input.last_name,
                    // validate_date_of_birth: this.input.date_of_birth,
                    // with_parent_name: true,
                    fields: [
                        // 'id',
                        'first_name',
                        'middle_name',
                        'last_name',
                        'email',
                        'date_of_birth',
                        // 'sex',
                        // 'date_of_birth',
                        // 'civil_status',
                        // 'is_verified',
                        // 'is_active'
                    ]
                }
            })
        },

        save(){
            this.addUserToKc({
                email: this.input.email,
                first_name: this.input.first_name,
                middle_name: this.input.middle_name,
                last_name: this.input.last_name,
                date_of_birth: this.input.date_of_birth,
                phone_number: this.input.phone_number,
                region: this.input.region,
                province: this.input.province,
                city: this.input.city,
                barangay: this.input.barangay,
                address_line_1: this.input.address_line_1,
                address_line_2: this.input.address_line_2,
            });
            // this.updateRegister({
            //     id: this.input.id,
            //     request_status: 'accepted',
            //     email: this.input.email,
            // });
            // this.isModalOpen = true
            // this.modal.title = 'Success'
            // this.modal.content = `User added successfuly`
        },

        openRejectModal(){
            this.isReasonModalOpen = true
        },

        reject(){
            this.updateRegister({
                id: this.input.id,
                request_status: 'rejected',
                reject_message: this.rejectReason,
                email: this.input.email,
            });
            this.isModalOpen = true
            this.modal.title = 'Success'
            this.modal.content = `Registration application rejected`

            setTimeout(() => {location.reload()}, 1000)
        },

        handleOptionsUpdate(options) {
            this.options.numOfItems = options.numOfItems
            this.updateFilterValues(options.filters)
            this.fetchTableData(1)
        },

        handleSortingUpdate(order) {
            this.options.order_type = order.order_type
            this.options.order_field = order.order_field
            this.updateOrderValues(order)
            this.fetchTableData(1)
        },
        handlePagination(page) {
            this.fetchTableData(page)
        },
    },
    watch: {
        update(newVal, oldVal) {
            this.changePage(1)
        }
    },
}
</script>