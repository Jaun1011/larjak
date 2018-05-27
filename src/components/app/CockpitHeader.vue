<template>
    <div class="row">
        <div class="eight columns">
            <h4>{{title}}</h4>
        </div>
        <div class="four columns">
            <button v-on:click="route('default')">
                <i class="material-icons">build</i>
            </button>
            <button v-on:click="route('new')">
                <i class="material-icons">create</i>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CockpitHeader",
        props:[
            'title'
        ],
        methods: {
            route: function (route) {
                this.$router.push(route)
            }
        }
    }
</script>

<style scoped>
    i.material-icons {
        margin-top: 7px;
    }
</style>
