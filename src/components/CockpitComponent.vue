<template>
    <div class="Cockpit">

        <button v-on:click="route('default')" >Default Settings</button>
        <button v-on:click="route('new')" >New Session</button>
    </div>
</template>

<script>
    export default {
        name: 'Cockpit',
        data() {
            return {
                count: 0,
                msg: ''
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
