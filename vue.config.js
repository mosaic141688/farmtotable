module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'My App',
    themeColor: '#000000',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      runtimeCaching: [{
        // Match any same-origin request that contains 'api'.
        urlPattern: /api/,
        // Apply a network-first strategy.
        handler: 'NetworkFirst'
      }]
      
      // ...other Workbox options...
    }
  }
}