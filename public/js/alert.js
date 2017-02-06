console.log('connected');
Vue.component('alert', {

	template: '#alert-template',

	data: function() {
		return {
			show: true
		};
	}
});

new Vue({
	el: 'body'
})