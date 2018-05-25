import {
    DEFAULTKEY
} from './../constants';
import Vue from 'vue';

export default {
    setDefaultSession: function (session) {
        console.log('Default saved');
        console.log(session);
        localStorage.setItem(DEFAULTKEY, JSON.stringify(session));
    },

    getDefaultSession: function () {
        return JSON.parse(localStorage.getItem(DEFAULTKEY));
    },

    getSessions: function () {
        let defaultSession = this.getDefaultSession();
        let sessions = JSON.parse(localStorage.getItem());
    },

    getSession: function () {
        values.push(localStorage.getItem(keys[i]));
    },

    setSession: function (session) {
        console.log('session saved');
        console.log(session);
        localStorage.setItem(session.id, JSON.stringify(session));
    }
}