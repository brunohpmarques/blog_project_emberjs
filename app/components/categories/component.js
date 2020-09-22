import Ember from 'ember';

export default Ember.Component.extend({
    categoryService: Ember.inject.service(),
    categories: [],

    loadCategories() {
        this.categoryService.loadCategories()
        .then(response => {
            this.set('categories', response);
        })
        .catch(error => console.error(error));
    },

    init() {
        this._super();
        this.loadCategories();
    }
});