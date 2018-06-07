<template>
    <div class="container">
        <AppHeader :title=title></AppHeader>
        <Session :session=session ></Session>
        <SessionCore :session=session ></SessionCore>
        <div class="row">
            <button v-on:click=save(session)><i class="material-icons">save</i></button>
        </div>
    </div>
</template>

<script>
    import AppHeader from './app/AppHeader'
    import Session from './session/Session.vue'
    import SessionCore from './session/SessionCore.vue'


    import SessionService from '../service/SessionService'
    import uuidv4 from 'uuid/v4'

    export default {
        components: {
            AppHeader,
            Session,
            SessionCore
        },
        name: 'SessionComponent',
        data() {
            const defaultSession = SessionService.getDefaultSession();
            return {
                title: 'New Session',
                session: {
                    id: uuidv4(),
                    alias: "alias",
                    host: "host",
                    user: defaultSession.user,
                    password: defaultSession.password,
                    script: defaultSession.script,
                    keyfile: defaultSession.keyfile
                }
            }
        },
        methods: {
            save: (session) => {
                SessionService.setSession(session)
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
