<template>

    <div v-if="this.isLoading" class="text-primary mt-4 text-center fs-2">
        <i class="fa-solid fa-spinner fa-spin"></i>
    </div>

    <template v-else>

        <div class="container">

            <div class="row mt-4">
                <div class="col-12">
                    <h3 class="fw-normal text-primary">Employees</h3>
                </div>
            </div>

            <div class="row mt-4">
                <div class="offset-lg-9 col-lg-3 offset-md-6 col-md-6 col-sm-12">
                    <label for="search" class="form-label">Search</label>
                    <input v-model="this.searchValue" type="text" class="form-control" id="search">
                </div>
            </div>

            <div class="row mt-3">
                
                <div class="col-12 d-none d-sm-none d-md-none d-lg-block">

                    <EasyDataTable class="table"
                        empty-message="No records found"
                        rows-per-page-message="Rows per page"
                        rows-of-page-separator-message="of"
                        :rows-per-page=10
                        :headers="this.tableHeaders"
                        :items="this.tableItems"
                        :search-field="this.searchField"
                        :search-value="this.searchValue"
                        table-class-name="table"
                        alternating
                    >

                        <template #item-dateOfBirth="item">
                            {{ this.toLocaleDate(item.dateOfBirth) }}
                        </template>

                        <template #item-ActionsSlot="item">
                            <router-link :to="{ name: 'Employee', params: { id: item.id }}"><i class="text-success fa-solid fa-square-pen" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit employee"></i></router-link>
                        </template>

                    </EasyDataTable>

                </div>

                <div class="col-12 d-block d-lg-none">

                    <EasyDataTable class="table"
                        empty-message="No records found"
                        rows-per-page-message="Rows per page"
                        rows-of-page-separator-message="of"
                        :rows-per-page=10
                        :headers="this.mobileTableHeaders"
                        :items="this.tableItems"
                        :search-field="this.searchField"
                        :search-value="this.searchValue"
                        table-class-name="table"
                        alternating
                    >

                        <template #expand="item">
                            <table class="table mt-2">
                                <tbody>
                                    <tr><td><strong>Gender</strong></td><td>{{ item.gender }}</td></tr>
                                    <tr><td><strong>Occupation</strong></td><td>{{ item.occupation }}</td></tr>
                                    <tr><td><strong>Date of birth</strong></td><td>{{ this.toLocaleDate(item.dateOfBirth) }}</td></tr>
                                    <tr><td><strong>Actions</strong></td><td><router-link :to="{ name: 'Employee', params: { id: item.id }}"><i class="text-success fa-solid fa-square-pen" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit employee"></i></router-link></td></tr>
                                </tbody>
                            </table>
                        </template>

                    </EasyDataTable>

                </div>
                
            </div>

        </div>

    </template>

</template>

<script>
import '../assets/css/easydatable.css';
import EasyDataTable from 'vue3-easy-data-table';

export default {
    components: {
        EasyDataTable,
    },

    props: {
        employees: Array
    },

    data() {
        return {
            locale: document.getElementsByTagName('html')[0].getAttribute('lang'),
            isLoading: true,
            tableHeaders: [
                { text: 'First name', value: "firstName", sortable: true },
                { text: 'Last name', value: "lastName", sortable: true },
                { text: 'Gender', value: "gender", sortable: true },
                { text: 'Occupation', value: "occupation", sortable: true },
                { text: 'Date of birth', value: "dateOfBirth", sortable: true },
                { text: 'Actions', value: "ActionsSlot", sortable: true },
            ],
            mobileTableHeaders: [
                { text: 'First name', value: "firstName", sortable: true },
                { text: 'Last name', value: "lastName", sortable: true },
            ],
            tableItems: [],
            searchField: ['firstName', 'lastName', 'gender', 'occupation'],
            searchValue: '',
        }
    },

    methods: {
        /**
         * @param {*} dateString 
         */
         toLocaleDate(dateString) {
            if(!dateString) { return ''; }

            var date = new Date(dateString);
            if(!date ||!date.getTime()) { return ''; }
            return date.toLocaleDateString( this.locale );
        },
    },

    watch: {
        employees(updatedData) {
            this.isLoading = false;
            this.tableItems = updatedData;
        }
    }
}
</script>