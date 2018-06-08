<template>
    <div class="container">
        <CockpitHeader title="Cockpit"></CockpitHeader>
        <div class="row">
            <div class="four columns">
                <ul>
                    <li v-for="(session, index) in sessions"
                        v-on:click=setSession(session)>
                        {{index}}: {{session.alias}}
                        <button v-on:click=connect(session) class="buttonSettings">
                            <i class="material-icons">launch</i>
                        </button>
                    </li>
                </ul>
            </div>
            <div class="eight columns sessionEdit" v-if=session>
                <Session :session=session></Session>
                <SessionCore :session=session></SessionCore>

                <div class="row">
                    <button v-on:click=remove(session) class="buttonSettingsLaunched">
                        <i class="material-icons">delete</i>
                    </button>
                    <button v-on:click=save(session) class="buttonSettingsLaunched">
                        <i class="material-icons">save</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CockpitHeader from './app/CockpitHeader.vue'

    import SessionService from "../service/SessionService";

    import Session from "./session/Session.vue";
    import SessionCore from "./session/SessionCore.vue";
    import axios from 'axios';



    export default {
        name: 'Cockpit',
        components: {
            CockpitHeader,
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
            setSession(session) {
                this.session = session;
            },
            remove(session) {
                SessionService.removeSession(session);
                this.session = null;
                this.sessions = SessionService.getSessions();
            },
            save(session) {
                SessionService.setSession(session)
            },
            connect(session){
                axios.get(`http://localhost:8081`)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.posts = response.data
                    })
                    .catch(e => {
                        console.log(e);
                    })

            }
        }
    }
</script>

