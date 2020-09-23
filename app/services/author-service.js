import Ember from 'ember';

export default Ember.Service.extend({
    ajax: Ember.inject.service(),
    getList() {
        return this.get('ajax').request('/users', {method: 'GET'});
    },
    create(author) {
        return this.get('ajax').request(`/users`, {method: 'POST', data: author});
    },
    detail(id) {
        return this.get('ajax').request(`/users/${id}`, {method: 'GET'});
    },
    update(author) {
        return this.get('ajax').request(`/users/${author.id}`, {method: 'PUT', data: author});
    },
    delete(author) {
        return this.get('ajax').request(`/users/${author.id}`, {method: 'DELETE'});
    }
});