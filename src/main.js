import Vue from 'vue'
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost'
import App from './App.vue'

Vue.use(VueApollo);

//creating apollo client
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: 'Bearer '+'e97f3f3ddfa302bfd24c0494d32aa59821d69f1e'
      },
    });
  }
});

const apolloProvider = new VueApollo({
  defaultClient: client,
})

//injecting apolloProvider to root vue instance
new Vue({
  render: h => h(App),
  apolloProvider,
}).$mount('#app')
