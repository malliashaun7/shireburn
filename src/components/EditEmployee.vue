<template>

    <div v-if="this.isLoading" class="text-primary mt-4 text-center fs-2">
        <i class="fa-solid fa-spinner fa-spin"></i>
    </div>

    <template v-else>

        <div class="container">

            <div class="row my-4">
                <div class="col-12">
                    <h3 class="fw-normal text-primary">General details</h3>
                </div>
            </div>

            <div v-if="this.displayAlert" class="alert alert-success alert-dismissible fade show" role="alert">
                <span v-html="this.alertMessage"></span>
                <button @click="this.displayAlert = false" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            <form class="pb-3" @submit.prevent="onSubmit">

                <div class="row">

                    <Input columns="col-md-4 col-sm-12 mt-2" type="text" id="firstName" label="First name" v-model="this.formData.firstName" :error="this.errors.firstName" :readonly="true" />
                    <Input columns="col-md-4 col-sm-12 mt-2" type="text" id="lastName" label="Last name" v-model="this.formData.lastName" :error="this.errors.lastName" :readonly="true" />
                    <Input columns="col-md-4 col-sm-12 mt-2" type="text" id="gender" label="Gender" v-model="this.formData.gender" :error="this.errors.gender" :readonly="true" />
                
                </div>

                <div class="row">

                    <Input columns="col-md-4 col-sm-12 mt-2" type="text" id="occupation" label="Occupation" v-model="this.formData.occupation" :error="this.errors.occupation" :readonly="true" />
                    <Input columns="col-md-4 col-sm-12 mt-2" type="text" id="dateOfBirth" label="Date of birth" v-model="this.formData.dateOfBirth" :error="this.errors.dateOfBirth" :readonly="true" />

                </div>

                <div class="row">

                    <InputDate columns="col-md-6 col-sm-12 mt-2" id="employmentDate" label="Employment date" v-model="this.formData.employmentDate" :error="this.errors.employmentDate" />
                    <InputDate columns="col-md-6 col-sm-12 mt-2" id="terminationDate" label="Termination date" v-model="this.formData.terminationDate" :error="this.errors.terminationDate" />

                </div>

                <div class="row mt-2">

                    <div class="col-12 d-flex justify-content-end">
                        <router-link :to="{ name: 'Home' }">
                            <button type="button" class="btn btn-outline-primary me-2"><i class="pe-1 fa-solid fa-arrow-left" aria-hidden="true"></i>Back</button>
                        </router-link>

                        <SubmitButton
                            class="btn btn-primary" type="submit" icon="fa-solid fa-square-pen" text="Update"
                            :isLoading="this.isSubmitDisabled"
                        />
                    </div>

                </div>

            </form>

        </div>

    </template>

</template>

<script>
import 'flatpickr/dist/flatpickr.css';
import Input from './Form/Input'
import InputDate from './Form/InputDate'
import SubmitButton from './Form/SubmitButton'

export default {

    components: {
        Input, InputDate, SubmitButton
    },

    props: {
        employee: Object
    },

    data() {
        return {
            locale: document.getElementsByTagName('html')[0].getAttribute('lang'),
            isLoading: true,
            isSubmitDisabled: false,
            displayAlert: false,
            alertMessage: '',
            formData: {},
            errors: {}
        }
    },

    methods: {
        /**
         * Submits the form
         */
        onSubmit() {

            this.isSubmitDisabled = true;
            this.errors = {};

            // Filter out what to send to backend
            var formData = {
                employmentDate: this.formData.employmentDate,
                terminationDate: this.formData.terminationDate,
            };

            // Check dates to display in message
            //var today = new Date;
            //var employmentDate = new Date(formData.employmentDate);
            //var terminationDate = new Date(formData.terminationDate);

            console.log(formData);
        },
    },

    watch: {
        employee(updatedData) {
            this.isLoading = false;
            this.formData = updatedData;
        }
    }

}
</script>