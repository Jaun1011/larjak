<template>
  <div class="SessionComponent">
    <div class="header">
      <button class="button"
              v-on:click="route('/')" >back
      </button>
      <h2>{{msg}}</h2>
    </div>
    <div class="container">
      <div class="row" id="ip">
        <div class="six columns"> <p> IP:  </p> </div>
        <div class="six columns"> <input v-model="user"> </div>
      </div>
      <div class="row" id="alias">
        <div class="six columns"> <p> Alias </p> </div>
        <div class="six columns"> <input v-model="alias"> </div>
      </div>
      <div class="row" id="user">
        <div class="six columns"> <p> User </p> </div>
        <div class="six columns"> <input v-model="user"> </div>
      </div>
      <div class="row" id="password">
        <div class="six columns"> <p> Password </p> </div>
        <div class="six columns"> <input v-model="password"> </div>
      </div>
      <div class="row" id="script">
        <div class="six columns"> <p> Script </p> </div>
        <div class="six columns"> <input v-model="script"> </div>
      </div>
      <div class="row" id="sshkey">
        <div class="six columns"> <p> SSH Key </p> </div>
        <div class="six columns"> <input v-model="sshkey"> </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'SessionComponent',
        data () {
            return {
                msg: 'New Session'
            }
        },
        methods: {
            route: function (route) {
                this.$router.push(route)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
