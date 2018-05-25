<template>
    <div class="header">
        <AppHeader :title=title></AppHeader>

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
        <div class="row">
            <button v-on:click=save(session) >Save</button>
        </div>
    </div>
</template>

<script>
    import AppHeader from './app/AppHeader'
    import SessionService from '../service/SessionService'

    export default {
        components: {
            AppHeader
        },

        name: 'DefaultSession',
        data() {
            const defaultSession = SessionService.getDefaultSession();

            return {
                title: 'Defaults Session',
                session: {
                    user: defaultSession.user ? defaultSession.user : 'setDefaultMessage',
                    password: defaultSession.password ? defaultSession.password  :'setDefaultMessage',
                    script:  defaultSession.script ? defaultSession.script : 'setDefaultMessage',
                    keyfile:  defaultSession.keyfile ? defaultSession.keyfile : 'setDefaultMessage',
                }
            }
        },
        methods: {
            save: (session) => {
                SessionService.setDefaultSession(session)
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
