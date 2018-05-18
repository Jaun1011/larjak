<template>
  <div class="SessionComponent">
    <h1>{{ msg }}</h1>
    <h2>SessionComponent</h2>
    <div class="container">
      <form>
        <div class="row" name="ip">
          <div class="six columns"> <p> IP </p> </div>
          <div class="six columns"> </div>
        </div>
        <div class="row" name="alias">
          <div class="six columns"> <p> Alias </p> </div>
          <div class="six columns"> </div>
        </div>
        <div class="row" name="user">
          <div class="six columns"> <p> User </p> </div>
          <div class="six columns"> </div>
        </div>
        <div class="row" name="password">
          <div class="six columns"> <p> Password </p> </div>
          <div class="six columns"> </div>
        </div>
        <div class="row" name="script">
          <div class="six columns"> <p> Script </p> </div>
          <div class="six columns"> </div>
        </div>
        <div class="row" name="key">
          <div class="six columns"> <p> Key </p> </div>
          <div class="six columns"> </div>
        </div>
      </form>
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
