<template>
    
    <div class="bg-white">

        <div class="row mt-4">

            <div class="col-md-6 mx-auto">
                <h1 class="display-1 fw-light text-center text-muted">Welcome</h1>
            </div>

        </div>

        <Employees 
            :employees="this.employees"
        />

    </div>

</template>

<script>
import Employees from '../components/Employees'

export default {
  name: 'Home',
  inheritAttrs: false, // disable 'non-props' warning

  components: {
    Employees,
  },

  data() {
    return {
      employees: [],
    }
  },

  methods: {

    /**
     * Fetches employees from json server
     */
    async fetchEmployees() {
      const response = await fetch('api/employees');
      const data = await response.json();

      this.employees = data;
    },

  },

  created() {
    this.fetchEmployees();
  }
};
</script>