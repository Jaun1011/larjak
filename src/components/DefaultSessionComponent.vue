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
        <p>
            <button v-on:click=save(session)>Save
            </button>
        </p>
    </div>
</template>

<script>
    import AppHeader from './AppHeader'
    import SessionService from '../service/SessionService'
    import uuidv4 from 'uuid/v4'

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
                    user: defaultSession.user ? defaultSession.user : 'user',
                    password: defaultSession.password ? defaultSession.password  :'password ',
                    script:  defaultSession.script ? defaultSession.script : 'script',
                    keyfile:  defaultSession.keyfile ? defaultSession.keyfile : 'keyfile',
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
