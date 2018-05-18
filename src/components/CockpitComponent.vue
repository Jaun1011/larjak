<template>
  <div class="Cockpit">
    <h1>{{ msg }}</h1>
    <h2>Cockpit</h2>
    <h2>Cockpit</h2>
  </div>
</template>

<script>
export default {
  name: 'Cockpit',
  data () {
    return {
      msg: 'Welcome to Youasdfasdfr Vue.js App'
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
