<template>
    <div class="row">
        <div class="row appHeader">
            <div class="two columns">
                <button class="button appHeaderButton" v-on:click="route('/')" >
                    <i class="material-icons">backspace</i>
                </button>
            </div>
            <div class="ten columns">
                <h2 class="appHeaderTitle">{{title}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppHeader",

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
