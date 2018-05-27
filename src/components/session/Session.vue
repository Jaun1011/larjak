<template>
    <div>
        <div class="row">
            <div class="six columns">Host</div>
            <div class="six columns">
                <input v-model="session.host">
            </div>
        </div>
        <div class="row">
            <div class="six columns">Alias</div>
            <div class="six columns">
                <input v-model="session.alias">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Session",
        props:[
            'session'
        ],
    }
</script>

<style scoped>

</style>