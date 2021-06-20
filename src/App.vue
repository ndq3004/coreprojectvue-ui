<template>
  <v-app id="inspire">
    <v-app-bar >
      <div>Đình Quân Developer</div>
      <v-app-bar-nav-icon v-if="isLoggedIn" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-if="isLoggedIn">Core Project</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn-toggle>

      </v-btn-toggle> -->
      <div v-if="isLoggedIn" class="d-flex justify-space-between" color="#F5F5F5" flat tile>
        <v-btn icon>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
          <v-btn icon>
        <v-badge color="green" content="5">
            <v-icon>mdi-bell-ring</v-icon>
        </v-badge>
          </v-btn>
        <v-btn icon>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>
      <div v-else>
        <v-btn :to="'/login'">Login</v-btn>
      </div>
    </v-app-bar>
    <div class="align-start px-0 d-flex flex-row" style="height: 100%; top:64px">
        <v-navigation-drawer
        v-if="isLoggedIn"
          v-model="drawer"
          :width="drawer?256:0"
          height="100%"

        >
          <v-list>
            <v-list-item-group v-model="group">
              <v-list-item v-for="(item, i) in navBarItems" :key="i" :to="item.link">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.name">

                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <!-- list tab -->
        </v-navigation-drawer>
      <v-main>
        <!--  -->
        <b v-if="!isLoggedIn">Bạn chưa đăng nhập. Vui lòng chọn đăng nhập để sử dụng phần mềm!</b>
        <router-view />
      </v-main>

    </div>

  </v-app>
</template>

<script>
export default {
  name: "App",
  computed : {
    isLoggedIn : function(){ return this.$store.getters.isAuthenticated}
  },
  data() {
    return {
      drawer: null,
      navBarItems:[
        {
          name: "Dashboard",
          link: "/dashboard",
          icon: "mdi-monitor-dashboard"
        },
        {
          name: "about",
          link: "/about",
          icon: "mdi-group"
        }
      ],
      group: 1
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
