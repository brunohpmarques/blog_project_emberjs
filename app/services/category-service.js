import Ember from 'ember';

export default Ember.Service.extend({
    // ajax: Ember.inject.service(),
    loadCategories() {
        console.log(this.get('ajax'));
        // return this.get('ajax').request('http://localhost:8000/api/categories', {method: 'GET'});
    }
});