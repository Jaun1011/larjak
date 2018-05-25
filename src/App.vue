<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import SessionService from "./service/SessionService";

export default {
    name: 'App',
    data(){
        SessionService.initDefaultSession();
        return{
            title: 'Larjak'
        }
    }
}
</script>

<style>
  @import "assets/custom.css";
</style>
