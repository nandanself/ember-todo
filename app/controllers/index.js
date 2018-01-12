import Ember from 'ember';

export default Ember.Controller.extend({

    isAddModalOpen:false,

    actions:{
        openAddModal(){
            this.set('isAddModalOpen',true);
        }
    }
    
});
