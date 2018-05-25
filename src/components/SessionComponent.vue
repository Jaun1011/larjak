<template>
    <div class="SessionComponent">

        <AppHeader :title=title></AppHeader>

        <div class="container">
            <form>
                <div class="row" id="ip">
                    <div class="six columns"><p> Host </p></div>
                    <div class="six columns"><input v-model="host"></div>
                </div>
                <div class="row" id="alias">
                    <div class="six columns"><p> Alias </p></div>
                    <div class="six columns"><input v-model="alias"></div>
                </div>
                <div class="row" id="user">
                    <div class="six columns"><p> User </p></div>
                    <div class="six columns"><input v-model="user"></div>
                </div>
                <div class="row" id="password">
                    <div class="six columns"><p> Password </p></div>
                    <div class="six columns"><input v-model="password"></div>
                </div>
                <div class="row" id="script">
                    <div class="six columns"><p> Script </p></div>
                  <div class="six columns"><textarea v-model="script"></textarea></div>
                </div>
                <div class="row" id="sshkey">
                    <div class="six columns"><p> SSH Key </p></div>
                  <div class="six columns"><textarea v-model="sshkey"></textarea></div>
                </div>
              <div class="row" id="button">
                <button v-bind:disabled="isButtonDisabled">Save</button>
              </div>
            </form>
        </div>
    </div>
</template>

<script>
    import AppHeader from './AppHeader'

    export default {
        components: {AppHeader},
        component:[
            AppHeader
        ],
        name: 'SessionComponent',
        data() {
            return {
                title: 'New Session'
            }
        },

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
