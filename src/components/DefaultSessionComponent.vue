<template>
  <div class="Default Session">
    <h1>{{ msg }}</h1>
    <h2>Default Session</h2>
  </div>
</template>

<script>
export default {
  name: 'DefaultSession',
  data () {
    return {
      msg: 'New Session'
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
