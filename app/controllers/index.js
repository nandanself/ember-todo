import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
    localStorage:service(),

    isAddModalOpen:false,
    isTodoList:true,

    todoList:Ember.computed('localStorage.getValue("todoList")',function(){
        let localStorage = this.get('localStorage');
        if (localStorage.getValue('todoList')){
            this.set('isTodoList',true);
            return JSON.parse(localStorage.getValue('todoList'));
        }else{
            this.set('isTodoList',false);
            return {};
        }
    }),    

    actions:{
        setNewTodoList(newTodoList){
            this.set('isTodoList',true);
            this.set('todoList',newTodoList);
        },

        openAddModal(){
            this.set('isAddModalOpen',true);
        }
    }
    
});
