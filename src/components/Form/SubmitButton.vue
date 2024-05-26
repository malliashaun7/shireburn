<template>

    <button v-if="isLoading" :type="this.type" :class="this.class" disabled>
        <i class="me-2 fas fa-spinner fa-pulse" aria-hidden="true"></i>
        <i :class="'pe-1 ' + this.icon" aria-hidden="true"></i>{{ this.text }}
    </button>

    <button v-else :type="this.type" :class="this.class">
        <i :class="'pe-1 ' + this.icon" aria-hidden="true"></i>{{ this.text }}
    </button>

</template>

<script>
export default {
    props: {
        class: String,
        type: String,
        icon: String,
        text: String,
        isLoading: Boolean,
    }, 
}
</script>