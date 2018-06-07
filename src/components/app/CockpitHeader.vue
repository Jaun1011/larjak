<template>
    <div class="row cockpitHeader">
        <div class="eight columns">
            <h4 class="cockpitHeaderTitle">{{title}}</h4>
        </div>
        <div class="four columns cockpitHeaderButtons">
            <button v-on:click="route('default')">
                <i class="material-icons">edit</i>
            </button>
            <button v-on:click="route('new')">
                <i class="material-icons">add</i>
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
