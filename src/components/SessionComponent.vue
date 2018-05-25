<template>
    <div class="SessionComponent">

        <AppHeader :title=title></AppHeader>

        <div class="container">
            <form>
                <div class="row" name="ip">
                    <div class="six columns"><p> IP </p></div>
                    <div class="six columns"></div>
                </div>
                <div class="row" name="alias">
                    <div class="six columns"><p> Alias </p></div>
                    <div class="six columns"></div>
                </div>
                <div class="row" name="user">
                    <div class="six columns"><p> User </p></div>
                    <div class="six columns"></div>
                </div>
                <div v-model="password"
                        class="row"
                     name="password">
                    <div class="six columns"><p> Password </p></div>
                    <div class="six columns"></div>
                </div>
                <div class="row" name="script">
                    <div class="six columns"><p> Script </p></div>
                    <div class="six columns"></div>
                </div>
                <div class="row" name="key">
                    <div class="six columns"><p> Key </p></div>
                    <div class="six columns"></div>
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
