import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [//'@nuxtjs/apollo'//
  '@nuxtjs/tailwindcss', 'nuxt-graphql-client'],


  

  // runtimeConfig: {
  //   public: {
  //     GQL_HOST: 'https://api.escuelajs.co/graphql'
  //   }
  // }

  // apollo: {
  //   clientConfigs: {
  //     default: {
  //       httpEndpoint: 'https://api.escuelajs.co/graphql',
  //     },
  //   },
  // },
});