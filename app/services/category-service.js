import Ember from 'ember';

export default Ember.Service.extend({
    ajax: Ember.inject.service(),
    getList() {
        return this.get('ajax').request('/categories', {method: 'GET'});
    },
    update(category) {
        return this.get('ajax').request(`/categories/${category.id}`, {method: 'PUT', data: category});
    },
    delete(category) {
        return this.get('ajax').request(`/categories/${category.id}`, {method: 'DELETE'});
    }
});