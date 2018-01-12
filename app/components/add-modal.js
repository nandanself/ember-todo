import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
	localStorage:service(),

	taskTitle:null,
	taskDescription:null,

    actions:{
		addTask(){
			let todoList = {};
			let localStorage = this.get('localStorage');
			const now = new Date().toUTCString();
			let { taskTitle, taskDescription } = this.getProperties('taskTitle','taskDescription');
			if (localStorage.getValue('counter') == null){
				let counter = 1;
				localStorage.setValue('counter',counter);
				todoList[counter] = {'title':taskTitle,'description':taskDescription,status:'Pending',time:now};
				localStorage.setValue('todoList',JSON.stringify(todoList));
			}else{
				let counter = parseInt(localStorage.getValue('counter')) + 1;
				localStorage.setValue('counter',counter);
				todoList  =  JSON.parse(localStorage.getValue('todoList'));
				todoList[counter] = {'title':taskTitle,'description':taskDescription,status:'Pending',time:now};
				localStorage.setValue('todoList',JSON.stringify(todoList));
			}

			this.sendAction('newTodoListAction',todoList);
			this.set('closingProperty',false);
		},

		closeSignUpModal(){
			this.set('closingProperty',false);
		}
	}
});
