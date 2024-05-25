<template>

    <div v-if="this.isLoading" class="text-primary mt-4 text-center fs-2">
        <i class="fa-solid fa-spinner fa-spin"></i>
    </div>

</template>

<script>
export default {
    props: {
        employees: Array
    },

    data() {
        return {
            isLoading: true,
        }
    },

    watch: {
        employees(updatedData) {
            if(updatedData.length > 0) {
                this.isLoading = true;
            }
        }
    }
}
</script>