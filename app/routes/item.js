import Ember from 'ember';
import RSVP from 'rsvp';

const { service } = Ember.inject;

export default Ember.Route.extend({
    localStorage:service(),

    model(params){
        let id = params.item_id;
        let localStorage = this.get('localStorage');
        let todoList = JSON.parse(localStorage.getValue('todoList'));
        let item = todoList[id];
        return RSVP.hash({
            item:item,
            params:params,
        });
    }
});
