<template>
    <div class="header">
        <AppHeader :title=title ></AppHeader>

        <p>User: <input v-model="user"></p>
        <p>Password: <input v-model="password"></p>
        <p>Script: <textarea v-model="script"></textarea></p>
        <p>Key File: <textarea v-model="keyfile" placeholder="place your ssh private key here..."></textarea>
        <p>
            <button v-bind:disabled="isButtonDisabled">Save</button>
        </p>
    </div>
</template>

<script>
    import AppHeader from './AppHeader'

    export default {
        components: {
            AppHeader
        },

        name: 'DefaultSession',
        data() {
            return {
                title: 'Defaults Session',
                msg: 'Lars'
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
