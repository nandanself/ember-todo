import Ember from 'ember';

export default Ember.Service.extend({

    init() {
        this._super(...arguments);
        if (typeof(Storage) !== "undefined") {
            if (this.getValue('counter') !== null){
                let todoList = this.getValue('todoList');
                this.setValue('todoList',todoList);
                let counter = this.getValue('counter');
                this.setValue('counter',counter);
            }
        } else {
            alert('No support for Local Storage')
        }
    },

    setValue(key,value){
        localStorage.setItem(key,value);
    },

    getValue(value){
        return localStorage.getItem(value);
    }

});
