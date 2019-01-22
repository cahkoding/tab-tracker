<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs12 sm6 md3>
      <panel title="Registration">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          autocomplete="off"
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
          autocomplete = "new-password"
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
      </panel>
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
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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
