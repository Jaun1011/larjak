import {DEFAULTKEY, SESSIONKEY, DEFAULTSESSION} from './../constants';
import * as _ from 'lodash'

export default {
    initDefaultSession: function () {
        if (_.isNull(this.getDefaultSession()) || _.isUndefined(this.getDefaultSession())) {
            this.setDefaultSession(DEFAULTSESSION);
        }
    },

    setDefaultSession: function (session) {
        this.saveValueByKey(DEFAULTKEY, session);
    },

    getDefaultSession: function () {
        return this.getValueByKey(DEFAULTKEY);
    },

    getSessions: function () {
        const defaultSession = this.getDefaultSession();
        return Object.keys(localStorage).filter((key) => {
            return key !== DEFAULTKEY &&
                key.split('.')[0] === SESSIONKEY;
        }).map((sessionValue) => {
            return _.assign({}, defaultSession, this.getValueByKey(sessionValue));
        });
    },

    setSession: function (session) {
        this.saveValueByKey(SESSIONKEY + '.' + session.id, session);
    },

    getValueByKey: function(key){
        return JSON.parse(localStorage.getItem(key));
    },

    saveValueByKey: function(key, value){
        console.log('Saved Value');
        console.log(value);
        return localStorage.setItem(key, JSON.stringify(value));
    }
}