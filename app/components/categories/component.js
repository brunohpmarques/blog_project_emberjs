import Ember from 'ember';

export default Ember.Component.extend({
    categoryService: Ember.inject.service(),
    categories: [],
    isLoading: true,

    loadCategories() {
        this.set('isLoading', true);
        this.categoryService.getList()
        .then(response => {
            this.set('isLoading', false);
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
    }
});