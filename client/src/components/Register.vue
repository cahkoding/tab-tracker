<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="red" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            placeholder="email"
          ></v-text-field>
          <!-- <br> -->
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            type="password"
            placeholder="password"
          ></v-text-field>
          <!-- <br> -->
          <div class="message" v-html="message"></div>
          <br>
          <v-btn
            class="red"
            @click="validate">
            Register
          </v-btn>
          </v-form>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: '',
      message: null,
      alert: true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Min 8 characters',
        v => v.length <= 32 || 'Max 32 characters'
      ]
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.register()
      }
    },
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.message = 'Succesfully Registered'
        console.log(response.data)
      } catch (err) {
        this.message = err.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.message {
  color: green;
}
</style>
