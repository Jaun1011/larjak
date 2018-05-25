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
                    <li v-for="(session, index) in sessions">
                        {{index}} - {{session.user}}
                    </li>
                </ul>
            </div>
            <div class="eight columns">
                details
            </div>

        </div>
    </div>
</template>

<script>
    import SessionService from "../service/SessionService";

    export default {
        name: 'Cockpit',
        data() {
            return {
                sessions: SessionService.getSessions()
            }
        },
        methods: {
            route: function (route) {
                this.$router.push(route)
            }
        }
    }
</script>

