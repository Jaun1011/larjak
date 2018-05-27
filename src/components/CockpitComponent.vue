<style scoped>
    i.material-icons {
        margin-top: 7px;
    }
</style>

<template>
    <div class="container">
        <div class="row">
            <div class="eight columns">
                <h4>Larjak SSH Manager</h4>
            </div>
            <div class="four columns">
                <button v-on:click="route('default')">
                    <i class="material-icons">build</i>
                </button>
                <button v-on:click="route('new')">
                    <i class="material-icons">create</i>
                </button>
            </div>
        </div>

        <div class="row">
            <div class="four columns">
                <ul>
                    <li v-for="(session, index) in sessions"
                        v-on:click=setSession(session)>
                        {{index}} - {{session.user}}
                    </li>
                </ul>
            </div>
            <div class="eight columns" v-if=session >
                <Session :session=session ></Session>
                <SessionCore :session=session ></SessionCore>
                <div class="row">
                    <button v-on:click=save(session)>Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SessionService from "../service/SessionService";
    import Session from "./session/Session.vue";
    import SessionCore from "./session/SessionCore.vue";

    export default {
        name: 'Cockpit',
        components: {
            Session,
            SessionCore
        },
        data() {
            return {
                sessions: SessionService.getSessions(),
                session: null
            }
        },
        methods: {
            route(route) {
                this.$router.push(route)
            },
            setSession(session){
                this.session = session;
            },
            save(session) {
                SessionService.setSession(session)
            }
        }
    }
</script>

