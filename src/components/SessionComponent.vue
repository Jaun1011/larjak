<template>
    <div class="container">
        <AppHeader :title=title></AppHeader>
        <Session :session=session ></Session>
        <SessionCore :session=session ></SessionCore>
        <div class="row">
            <button v-on:click="validate">Save</button>
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
            return {
                title: 'New Session',
                session: {
                    id: uuidv4(),
                    alias: "",
                    host: "",
                    user: "",
                    password: "",
                    script: "",
                    keyfile: ""
                }
            }
        },
        methods: {
            save: (session) => {
                SessionService.setSession(session)
            },
            validate: function(e) {
                if(this.session.alias && this.session.user && this.session.password && this.session.host) {
                    console.log("ok");
                    return true;
                }
                else {
                    if(!this.session.alias) {
                        console.log("alias missing");
                    }
                    if(!this.session.host) {
                        console.log("host missing");
                    }
                    if(!this.session.user) {
                        console.log("user missing");
                    }
                    if(!this.session.password) {
                        console.log("password missing");
                    }
                } e.preventDefault();
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
