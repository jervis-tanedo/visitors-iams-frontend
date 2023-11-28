<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <div>
          <FormulateForm v-model="formValues">
            <FormulateInput class="" :placeholder="formValues.first_name" type="text" name="name" label="First name" />
            <FormulateInput type="email" name="email" label="Your email" :placeholder="formValues.email"/>
            <FormulateInput type="submit" label="Save" />
          </FormulateForm>
          {{ this.$auth.user.given_name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formValues: {
        first_name: this.$auth.user.given_name,
        email: this.$auth.user.email,
      }
    }
  },
  computed:{

  }
}
</script>