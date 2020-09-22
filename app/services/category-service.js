import Ember from 'ember';

export default Ember.Service.extend({
    ajax: Ember.inject.service(),
    loadCategories() {
        return this.get('ajax').request('/categories', {method: 'GET'});
    }
});