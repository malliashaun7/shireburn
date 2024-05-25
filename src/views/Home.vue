<template>
    
    <div class="container bg-light p-3">

        <div class="row">

            <div class="col-md-6 mx-auto">
                <h1 class="display-1 text-center">Employees</h1>
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

      return data
    },

  },

  created() {
    this.employees = this.fetchEmployees();
  }
};
</script>