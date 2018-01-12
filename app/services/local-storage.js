import Ember from 'ember';

export default Ember.Service.extend({

    init() {
        this._super(...arguments);
        if (typeof(Storage) !== "undefined") {
            if (this.getValue() !== null){
                let todoList = this.getValue();
                this.setValue(todoList);
            }
        } else {
            alert('No support for Local Storage')
        }
    },

    setValue(value){
        localStorage.setItem('todoList',value);
    },

    getValue(){
        return localStorage.getItem('todoList',value);
    }

});
