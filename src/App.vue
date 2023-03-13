<template>
  <v-app light>
    <!-- <v-toolbar class="white">
     <v-toolbar-side-icon><img :src="imageLink.logo" alt="Vuetify.js" height="100%"></v-toolbar-side-icon>
      <v-toolbar-title class="mx-0" v-text="title"></v-toolbar-title>
      <p>Beta</p>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>Open jobs</v-btn>
        <v-btn flat class="pink lighten-3">Sign In</v-btn>
      </v-toolbar-items>
    </v-toolbar> -->
    <v-content>
      <section>
        <v-parallax :src="getImageUrl('sub_main')" height="800">
          <v-layout column align-center justify-center class="white--text">
            <h1 class="white--text mb-2 display-2 text-xs-center" style="font-weight: 900; text-shadow: 3px 2px #000000">You are about to discover midas manifestation program</h1>
            <div class="white--text subheading mb-3 text-xs-center" style="font-weight: 900; font-size: larger; text-shadow: 2px 2px #000000">The way to manifest your dreams and discover your hidden past lives</div>
            <button class="mt-3">
              <v-img :src="getContentImageUrl()" max-height="350px" max-width="590px" cover @click="changeLocation"></v-img>
            </button>
            <v-btn style="background-color: #ffc700;" class="lighten-2 mt-5" dark large href="https://fd1439sfl9sl9y26x7nht0r0l4.hop.clickbank.net/?tid=google">
              See the secret
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The hidden knowledge used by elites will let you...</h2>
              <span class="subheading">
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="text-h6 text-xs-center">Generate wealth and prosperity</div>
                    </v-card-title>
                    <v-img
                      :src="getContentImageUrl(0)"
                      height="200px"
                      cover
                    ></v-img>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="text-h6">Rejuvinate your mind and body</div>
                    </v-card-title>
                    <v-img
                      :src="getContentImageUrl(1)"
                      height="200px"
                      cover
                    ></v-img>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="text-h6 text-xs-center">Attract lasting love and friendship</div>
                    </v-card-title>
                    <v-img
                      :src="getContentImageUrl(2)"
                      height="200px"
                      cover
                    ></v-img>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex xs12 sm4 class="my-3">
            <v-btn class="blue lighten-2 mt-5" dark large href="https://fd1439sfl9sl9y26x7nht0r0l4.hop.clickbank.net/?tid=google">
              Try it out while it is still available
            </v-btn>
          </v-flex>
        </v-layout>
      </section>

      <!-- <section>
        <v-parallax :src="imageLink.main" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Endorfine is a social network that allows everyone to reach a huge audience with a tap </div>
            <em>With the power of Endorfine you don't need to be famous or post pics of cute cats in order to get visibility</em>
            <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
              Get more info
            </v-btn>
          </v-layout>
        </v-parallax>
      </section> -->

       <!-- <section>
        <v-container grid-list-md>

        
          <v-layout row wrap>
          <v-flex xs12 text-xs-center class="mt-5">
           <div class="headline">Are you amazed? Stay tuned!</div>
           <br>
          <div>We are lunching the beta in a few time. If you want to be one of the first Endorfine users we will email you as soon as we're ready. In the beginning only few people will test before the launch. Let us know how Endorfine will help you!</div>
          </v-flex>
          <v-flex xs8 offset-xs2>

              <v-card class="elevation-0 transparent">

                <v-card-text>
                  <v-flex xs12 v-if="!subscribed">
                    <v-text-field box label="Email address" :rules="emailRules" v-model="email" hint="Enter your email!" persistent-hint></v-text-field>
                  </v-flex>
                  <v-flex xs12 v-if="!subscribed">
                    <v-text-field box multi-line label="Bio and curiosities"></v-text-field>
                  </v-flex>
                  <v-flex xs12 class="text-xs-center" v-if="!subscribed">
                    <v-btn class="blue lighten-2 mb-5" dark large @click="subscribe">Get in touch</v-btn>
                  </v-flex>
                   <v-flex xs12 class="text-xs-center" v-if="subscribed">
                    <v-btn class="green lighten-2 mb-5" dark large>Welcome on board!</v-btn>
                  </v-flex>
                </v-card-text>

             </v-card>

                </v-flex>
            </v-layout>
          </v-container>
      </section> -->
    </v-content>
</v-app>
</template>

<script>
import Vue from 'vue';
export default {
  name: "App",
  data: function() {
    return {
      title: "Endorfine",
      imageLink: {
        main:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fb13f0434-b228-11e6-8e5d-5252025056ab_web_scale_0.4666667_0.4666667__.jpg?alt=media&token=660df23e-599e-434b-9313-ba69c973eeea",
        sub_main:
          "./assets/images/MidasManifest/midasmanifestationBG.png",
        logo:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fandroid-chrome-512x512.png?alt=media&token=8a0a66f6-4741-4ff6-8f28-eb9ec74374df",
        social_cover:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fo-NIGHTCLUB-facebook.jpg?alt=media&token=cefc5c4c-9714-41da-9c22-f63caf5e89a4"
      },
      email: "",
      emailRules: [
        v => {
          return !!v || "E-mail is required";
        },
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      subscribed: false
    };
  },
  methods: {
    subscribe: function() {
      this.subscribed = !this.subscribed;
    },
    getImageUrl(img) {
      return require(`${this.imageLink[img]}`) 
    },
    getContentImageUrl: function(order) {
      switch(order){
        case 0: 
          return require(`./assets/images/MidasManifest/Generate-Wealth-f.jpg`)
        case 1:
          return require(`./assets/images/MidasManifest/rejuvinate.jpg`)
        case 2:
          return require(`./assets/images/MidasManifest/lastinglove.webp`)
        default:
          return require(`./assets/images/MidasManifest/past.png`)
      }
    },
    changeLocation: function(){
      location.href = "https://fd1439sfl9sl9y26x7nht0r0l4.hop.clickbank.net/?tid=google"
    }
  },

  computed: {
    imgHeight: function() {
      var offset = 320;
      console.log("new image height is " + (this.pageHeight - offset));
      return this.pageHeight - offset;
    }
  },

  mounted: function() {
    Vue.nextTick(() => {
      document.title = "Midas manifestation"
    })
  }
};
</script>

<style scoped>
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>
