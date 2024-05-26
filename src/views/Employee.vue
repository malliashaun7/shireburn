<template>

    <div class="bg-white">

        <div class="row pt-4">

            <div class="col-md-6 mx-auto">
                <h1 class="display-4 fw-light text-center text-muted">Edit employee</h1>
            </div>

        </div>

        <EditEmployee 
          :employee="this.employee"
        />

    </div>

</template>

<script>
import { useRoute } from 'vue-router'
import EditEmployee from '../components/EditEmployee'

export default {
  name: 'Employee',
  inheritAttrs: false, // disable 'non-props' warning

  components: {
    EditEmployee,
  },

  data() {
    return {
      employee: {},
    }
  },

  methods: {

    /**
     * Fetches employees from json server
     */
    async fetchEmployee(id) {
      try {
        const response = await fetch(`${window.location.origin}/api/employees/${id}`);
        const data = await response.json();

        this.employee = data;
      }
      catch(error) {
        alert('Sorry, could not fetch employee');
      }
    },

  },

  created() {
    const route = useRoute();

    this.fetchEmployee( route.params.id );
  },
};
</script>