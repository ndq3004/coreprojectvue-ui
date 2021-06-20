module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: "http://localhost:12039/api"
  }
}
