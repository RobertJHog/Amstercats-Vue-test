<template>
  <div class="sign-up-form">
      <section class="login-holder">
          <div class="login">
              <figure class="hr-logo"></figure>
              <form name="loginForm" v-on:submit.prevent="onSubmitHandler">
                  <div class="preview-block login-block submit-block">
                      <header class="preview-header">
                          <h2>Signup for AmsterCats</h2>
                      </header>
                      <div class="preview-content">
                          <ul class="form-layout">
                              <br>
                                  <label>Your e-mail address</label>
                                  <input v-model="auth.email" type="email" name="email" autofocus />
                              <br>
                              <br>
                                  <label>Your password</label>
                                  <input v-model="auth.password" type="password" name="password" />
                              <br>
                          </ul>
                          <error-message v-if="error" v-model="error"></error-message>
                      </div>
                  </div>
                  <input type="submit" value="Sign Up" />
              </form>
          </div>

        </section>
  </div>

</template>

<style>

  div.sign-up-form {
    text-align: center;
    height: 28em;
    padding: 3em;
    color: white;
    background-color: #ad2b34;
  }

  ul.form-layout {
    color: black;
  }

  h1 {
    color: white;
    font-size: 2em;
  }

  div.input {
    margin-bottom: .5em;
    color: black;
  }

  a.signup {
    font-size: 1.5em;
    padding-right: 10px;
  }

</style>

<script>

  export default {
    name: 'signup',

    data: () => {
      return {
        auth: {
          email: '',
          password: ''
        },
        error: false
      }
    },
    methods: {
      onSubmitHandler: function (e) {
        this.$http.post('/signup', this.auth).then(response => {
          console.log(this)
//        console.log('res', response)
//          this.$store.commit('user')
          this.$router.push('/signin')
        }, response => {
          this.error = true
        })
      }
    }
  }
</script>
