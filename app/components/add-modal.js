import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
		closeSignUpModal(){
			this.set('closingProperty',false);
		}
	}
});
