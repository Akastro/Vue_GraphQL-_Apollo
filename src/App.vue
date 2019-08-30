<template>
  <div id="app">
    <div v-if="$apollo.loading">Loading..</div>
    <div v-else>
      <h1>Name: {{viewer.name}}</h1>
      <p>Email: {{viewer.email }}</p>
      <p>Bio: {{viewer.bio }}</p>
      
    </div>
  </div>
</template>

<script>

import { gql } from "apollo-boost";
import myReposVue from './components/my-repos.vue';
export default {
    data: function() {
    return {
        //query data is added
      viewer: {}
    };
  },
  apollo: {
      //this query will update the `viewer` data property
    viewer: {
      query: gql`
        {
          viewer {
            name
            email
            bio
            
          }
        }`

    }
  }
};
</script>

