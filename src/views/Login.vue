<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-alert v-model="showError" type="error">Đăng nhập lỗi</v-alert>
              <v-card-text>
                <v-form>
                  <div class="d-flex">
                    <v-icon>mdi-logout</v-icon>
                    <v-text-field
                      class="pl-4"
                      name="login"
                      label="Login"
                      type="text"
                      v-model="form.username"
                    ></v-text-field>
                  </div>
                  <div class="d-flex">
                    <v-icon>mdi-logout</v-icon>
                    <v-text-field
                      class="pl-4"
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      v-model="form.password"
                    ></v-text-field>
                  </div>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="submit()">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  props: {
    source: String,
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showError: false,
      showMessage: true,
    };
  },
  methods: {
    ...mapActions(["login"]),
    async submit() {
      const user = {
        username: this.form.username,
        password: this.form.password,
      };
      //   user.append("username", this.form.username);
      //   user.append("password", this.form.password);
      try {
        await this.login(user);
        this.showError = false;
        if (this.$store.getters.isAuthenticated) {
          this.$router.push("/");
        }
      } catch (error) {
        console.log(error);
        this.showError = true;
      }
    },
  },
  mounted() {
    if (this.$store.getters.isAuthenticated) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
