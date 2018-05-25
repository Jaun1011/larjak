<template>
    <p>
        User:
        <input v-model="session.user">
    <p>
        Password:
        <input v-model="session.password">
    </p>
    <p>
        Script:
        <textarea v-model="session.script"></textarea></p>
    <p>
        Key File:
        <input v-model="session.keyfile">
    </p>
</template>

<script>
    export default {
        name: "SessionCore",

        props:[
            'session'
        ],
    }
</script>

<style scoped>

</style>