<template>
    <div class="row">
        <div class="row">
            <div class="two columns">
                <button class="button"
                        v-on:click="route('/')" >back
                </button>
            </div>
            <div class="ten columns">
                <h2>{{title}}</h2>
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

</style>