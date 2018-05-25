<template>
    <div class="SessionComponent">

        <AppHeader :title=title></AppHeader>

        <div class="container">
            <form>
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
                <div class="row">
                    <button>Save</button>
                </div>
            </form>
        </div>
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
        name: 'SessionComponent',
        data() {
            const defaultSession = SessionService.getDefaultSession();
            return {
                title: 'New Session',
                session: {
                    id: uuidv4(),
                    alias: 'alias',
                    host: 'host',
                    user: defaultSession.user,
                    password: defaultSession.password,
                    script: defaultSession.script,
                    keyfile: defaultSession.keyfile
                }
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
