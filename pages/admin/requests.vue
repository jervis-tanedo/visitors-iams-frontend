<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
        <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
            <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-12">
                <!-- {{ userLists }} -->
                <DataTable :isLoading="dataLoading" 
                    :isInitialLoad="initialLoad" 
                    :tableFilters="filters"
                    :tableHeaders="headers" 
                    :tableData="getUserLists" 
                    :tableOptions="options" 
                    :pagination=pagination
                    @onUpdateOptions="handleOptionsUpdate" @onUpdatePage="handlePagination"
                    @onUpdateSorting="handleSortingUpdate">
                    <template #action="index">
                        <button class="bg-green-500 text-white p-2 rounded mb-2 inline-flex items-center"
                            @click="updateDrawer(index)">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="23" height="23"
                                fill="#ffffff">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M22.764 20.476l-4.24-4.24a.81.81 0 0 0-1.144 0l-.218.219-1.465-1.465.192-.193a8.303 8.303 0 1 0-1.092 1.092l.193-.192 1.465 1.465-.219.218a.81.81 0 0 0 0 1.145l4.24 4.238a.808.808 0 0 0 1.143 0l1.145-1.143a.811.811 0 0 0 0-1.144zM9.496 16.8a7.241 7.241 0 0 1-5.155-2.137 7.299 7.299 0 1 1 10.775-.505L14.09 15.18a7.274 7.274 0 0 1-4.593 1.62zm11.552 5.121l-3.97-3.968.874-.873 3.97 3.968zM10 9h3v1h-3v3H9v-3H6V9h3V6h1z">
                                    </path>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                </g>
                            </svg>
                            View
                        </button>
                    </template>
                    <!-- <template #active="index">
                        <font-awesome-icon v-if="index.index.is_active" :icon="['fas', 'check']"  class="icon alt text-green-500"/>
                        <font-awesome-icon v-else :icon="['fas', 'x']"  class="icon alt text-red-500"/>
                    </template>
                    <template #verified="index">
                        <font-awesome-icon v-if="index.index.is_verified" :icon="['fas', 'check']"  class="icon alt text-green-500"/>
                        <font-awesome-icon v-else :icon="['fas', 'x']"  class="icon alt text-red-500"/>
                    </template> -->
                </DataTable>
            </div>
        </div>
        <div>
            <GenericDrawer :isOpen="showDrawer" @close="showDrawer = false">
                <template v-slot:content>
                    <div class="relative overflow-x-hidden items-top justify-center min-h-screen h-full bg-gray-100 pt-10">
                        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <DetailsView ref="viewRegistration" :registrationData="drawerData">

                            </DetailsView>
                        </div>
                    </div>
                </template>
            </GenericDrawer>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
import DataTable from '@/components/DataTable.vue';
export default {
    data() {
        return {
            showDrawer: false,
            uuid: null,
            drawerData: {},
            filters: [ //field -> db field/column; name -> name of key returned; type -> what type of filter; label -> label to be used
                { field: 'first_name', name: 'first_name', type: 'input', label: 'First Name' },
                { field: 'last_name', name: 'last_name', type: 'input', label: 'Last Name' },
            ],
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
                    name: "action",
                    sortable: false,
                    label: "Action"
                }
            ],
            options: {
                page: 1,
                filters: {},
                numOfItems: 5
            },
            modal: {
                title: '',
                content: ''
            },
        }
    },
    computed: {
        ...mapState({
            search: state => state.requests.search,
            filter: state => state.requests.filters,
            userLists: state => state.requests.userLists.data,
            kcUserLists: state => state.requests.kcUserList,
            totalPages: state => state.requests.last_page,
            currentPage: state => state.requests.current_page,
            numOfItems: state => state.requests.numOfItems,
            tableFilterValues: state => state.requests.filterValues,
            tableData: state => state.requests.data.data,
            pagination: state => state.requests.userLists,
            dataLoading: state => state.requests.loading,
            initialLoad: state => state.requests.initialLoad,
        }),

        ...mapGetters({
            getSearch: "requests/getSearch",
            getUserLists: "requests/getUserLists",
            // getTableData: "persons/getTableData"
        }),

        userLists: {
            get() {
                return this.getUserLists
            },
            set(value) {
                this.setUserLists(value)
            }
        },


    },

    async fetch() {
        this.getUserList(this.options.page)
        await this.updateFilterValues({})
        await this.filters.forEach(filter => {
            this.getFilters({
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
            userList: 'requests/userList',
            kcUserList: 'requests/kcUserList',
            getFilters: 'requests/getFilters',
        }),

        ...mapMutations({
            setUserLists: 'requests/SET_USER_LISTS',
            setSearch: 'requests/SET_SEARCH',
            updateFilterValues: 'requests/UPDATE_FILTER_VALUES',
            updateNumOfItems: 'requests/UPDATE_NUM_OF_ITEMS',
            updateOrderValues: 'requests/UPDATE_ORDER_VALUES',
        }),

        // openDrawer(user) {
        //     this.$refs.userViewComponent.getUserUuid(user)
        //     this.showDrawer = !this.showDrawer
        //     console.log(user)
        //     this.drawerData = user
        // },

        updateDrawer(index) {
            this.showDrawer = !this.showDrawer
            if (index) {
                this.index = index.index
            } else {
                this.index = null
            }
            // console.log(index)
            this.$refs.viewRegistration.setDefault({
                id: index.index.id,
                first_name: index.index.first_name,
                middle_name: index.index.middle_name,
                last_name: index.index.last_name,
                // sex: index.index.sex,
                date_of_birth: index.index.date_of_birth,
                // civil_status: index.index.civil_status,
                // is_verified: index.index.is_verified,
                // is_active: index.index.is_active,
                phone_number: index.index.phone_number,
                email: index.index.email,
                address: index.index.address,
                id_type: index.index.id_type,
                id_number: index.index.id_number,
                id_file: index.index.id_file,
            })
            this.editableForm = false
        },

        applyFilter(data) { // apply the filter from the filters component
            console.log(data)
            this.updateFilterValues(data)
            this.getUserList(1)
        },

        changePage(page) {
            this.getUserList(page)
        },

        getUserList(page) {
            this.userList({
                data: {
                    page: page,
                    items: this.numOfItems,
                    fields: [
                        'id',
                        'first_name',
                        'middle_name',
                        'last_name',
                        'phone_number',
                        'date_of_birth',
                        'email',
                        'address',
                        'id_type',
                        'id_number',
                        'id_file',
                        'request_status',
                    ]
                }
            })
        },

        handleOptionsUpdate(options) {
            this.options.numOfItems = options.numOfItems
            this.updateFilterValues(options.filters)
            this.getUserList(1)
        },

        handleSortingUpdate(order) {
            this.options.order_type = order.order_type
            this.options.order_field = order.order_field
            this.updateOrderValues(order)
            this.getUserList(1)
        },
        handlePagination(page) {
            this.getUserList(page)
        },

        
    },
    watch: {
        update(newVal, oldVal) {
            this.changePage(1)
        }
    },
    mounted() {
        // this.userList()
        // this.kcUserList()
    }
}
</script>