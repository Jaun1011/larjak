<template>
    <div class="container">
        <AppHeader :title=title></AppHeader>

        <SessionCore :session=session></SessionCore>

        <div class="row">
            <button v-on:click=save(session) ><i class="material-icons">save</i></button>
        </div>
    </div>
</template>

<script>
    import AppHeader from './app/AppHeader'
    import SessionService from '../service/SessionService'
    import SessionCore from './session/SessionCore'

    export default {
        components: {
            AppHeader,
            SessionCore
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
