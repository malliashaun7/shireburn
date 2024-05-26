<template>

    <div class="form-floating" :class="this.columns">

        <input 
            :type="this.type" 
            class="form-control" 
            :class="this.error != '' ? this.class + ' is-invalid' : this.class"
            :id="this.id" 
            :placeholder="this.placeholder" 
            v-model="selected" 
            :disabled="this.disabled"
            :readonly="this.readonly"
        />

        <label :for="this.id">{{ this.label }}</label>

        <div v-if="this.error != ''" class="invalid-feedback fw-semibold">
            <i class="fa-solid fa-exclamation-circle pe-2"></i>{{ this.error }}
        </div>

    </div>

</template>

<script>
export default {

    props: {
        columns: {
            type: String,
            default: 'col-12'
        },
        type: {
            type: String,
            default: 'text'
        },
        id: String,
        label: String,
        placeholder: {
            type: String,
            default: ''
        },
        class: {
            type: String,
            default: ''
        },
        modelValue: [String, Number], //for parent v-model
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        error: {
            type: String,
            default: ''
        },
    },

    data() {
        return {
            isLoading: false,
            selected: this.modelValue, //set default selected depending on parent v-model
        }
    }, 

    watch: {
        /**
         * Watches a change from parent v-model
         * @param {*} updatedData 
         */
        async modelValue(updatedData) {
            this.selected = updatedData;
            this.isLoading = false;
        },

        /**
         * Emits an event to update parent v-model with user selected data
         * @param {*} updatedData 
         */
        async selected(updatedData) {
            this.$emit('update:modelValue', updatedData);
        },
    }

}
</script>