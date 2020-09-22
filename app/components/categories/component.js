import Ember from 'ember';

export default Ember.Component.extend({
    categoryService: Ember.inject.service(),
    categories: [],

    loadCategories() {
        this.categoryService.getList()
        .then(response => {
            this.set('categories', response);
        })
        .catch(error => console.error(error));
    },

    init() {
        this._super();
        this.loadCategories();
        this.on('category-deleted', function(category){
            this.get('categories').removeObject(category);
        });
        this.on('category-created', function(category){
            this.get('categories').pushObject(category);
        });
    }
});