<template>
    <div>
        <div class="row">
            <div class="six columns">User</div>
            <div class="six columns">
                <input v-model="session.user">
            </div>
        </div>
        <div class="row">
            <div class="six columns">Password</div>
            <div class="six columns">
                <input v-model="session.password">
            </div>
        </div>
        <div class="row">
            <div class="six columns">Script</div>
            <div class="six columns">
                <textarea v-model="session.script"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="six columns">SSH Key</div>
            <div class="six columns">
                <input v-model="session.keyfile">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SessionCore",

        props:[
            'session'
        ]
    }
</script>

<style scoped>

</style>