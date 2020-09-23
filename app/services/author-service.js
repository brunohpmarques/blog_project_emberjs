import Ember from 'ember';

export default Ember.Service.extend({
    ajax: Ember.inject.service(),
    getList() {
        return this.get('ajax').request('/users', {method: 'GET'});
    },
    create(authors) {
        return this.get('ajax').request(`/users`, {method: 'POST', data: authors});
    },
    update(authors) {
        return this.get('ajax').request(`/users/${authors.id}`, {method: 'PUT', data: authors});
    },
    delete(authors) {
        return this.get('ajax').request(`/users/${authors.id}`, {method: 'DELETE'});
    }
});