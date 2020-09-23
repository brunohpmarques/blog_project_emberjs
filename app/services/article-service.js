import Ember from 'ember';

export default Ember.Service.extend({
    ajax: Ember.inject.service(),
    getList() {
        return this.get('ajax').request('/articles', {method: 'GET'});
    },
    create(article) {
        return this.get('ajax').request(`/articles`, {method: 'POST', data: article});
    },
    detail(id) {
        return this.get('ajax').request(`/articles/${id}`, {method: 'GET'});
    },
    update(article) {
        return this.get('ajax').request(`/articles/${article.id}`, {method: 'PUT', data: article});
    },
    delete(article) {
        return this.get('ajax').request(`/articles/${article.id}`, {method: 'DELETE'});
    }
});