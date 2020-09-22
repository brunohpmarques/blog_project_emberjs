import Ember from 'ember';

export default Ember.Component.extend({
    categoryService: Ember.inject.service(),
    categoryName: null,
    showAlert: false,
    isInvalid: Ember.computed('categoryName', function() {
        const categoryName = this.get('categoryName');
        return !categoryName;
    }),
    create() {
        this.set('showAlert', false);

        if(!this.isInvalid){
            this.categoryService.create({
                name: this.get('categoryName')
            })
            .then(category => {
                this.set('showAlert', true);
                this.set('categoryName', null);
                this.trigger('category-created', category);
            })
            .catch(error => console.error(error));
        }
    }
});