import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
    localStorage:service(),

    item:Ember.computed(function(){
        return (this.get('model.item'));
    }),

    isPending:Ember.computed(function(){
        if (this.get('item.status') === "Pending"){
            return true;
        }else{
            return false;
        }
    }),

    actions:{
        changeStatus(status){
            let id = this.get('model.params.item_id');
            let localStorage = this.get('localStorage');
            let todoList = JSON.parse(localStorage.getValue('todoList'));
            todoList[id]['status'] = status;
            this.set('item',todoList[id]);
            let isPending = this.get('isPending');
            this.set('isPending',!isPending);
            localStorage.setValue('todoList',JSON.stringify(todoList))
        },

        removeItem(){
            let id = this.get('model.params.item_id');
            let localStorage = this.get('localStorage');
            let todoList = JSON.parse(localStorage.getValue('todoList'));
            delete todoList[id];
            if (todoList == {}){
                localStorage.setValue('todoList',null);
            }else{
                localStorage.setValue('todoList',JSON.stringify(todoList));
            }
            window.location = "/";
        }
    }
});
