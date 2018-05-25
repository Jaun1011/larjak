import {DEFAULTKEY, SESSIONKEY, DEFAULTSESSION} from './../constants';
import * as _ from 'lodash'

export default {
    initDefaultSession: function () {
        if (_.isNull(this.getDefaultSession()) || _.isUndefined(this.getDefaultSession())) {
            this.setDefaultSession(DEFAULTSESSION);
        }
    },

    setDefaultSession: function (session) {
        console.log('Default saved');
        console.log(session);

        localStorage.setItem(DEFAULTKEY, JSON.stringify(session));
    },

    getDefaultSession: function () {
        return JSON.parse(localStorage.getItem(DEFAULTKEY));
    },

    getSessions: function () {
        const defaultSession = this.getDefaultSession();
        return Object.keys(localStorage).filter((key) => {
            return key !== DEFAULTKEY &&
                key.split('.')[0] === SESSIONKEY;
        }).map((key) => {
            return _.assign({}, defaultSession, defaultSession);
        });
    },

    setSession: function (session) {
        console.log("save session");
        localStorage.setItem(SESSIONKEY + '.' + session.id, JSON.stringify(session));
    }
}