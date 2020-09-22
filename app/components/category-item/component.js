import Ember from 'ember';

export default Ember.Component.extend({
    categoryService: Ember.inject.service(),
    category: null,
    isEdit: false,
    isInvalid: Ember.computed('category.name', function() {
        const category = this.get('category');
        return !(category && category.name);
    }),
    observer: Ember.observer('isEdit', function() {
        const isEdit = this.get('isEdit');
        const category = this.get('category');
        console.log('edit category', isEdit, category);
    }),
    toggleEdit() {
        if(!this.isInvalid){
            this.toggleProperty('isEdit');
        }
    },
    update(category) {
        if(!this.isInvalid){
            this.categoryService.update(category)
            .then(() => {
                this.toggleProperty('isEdit');
            })
            .catch(error => console.error(error));
        }
    },
    delete(category) {
        this.categoryService.delete(category)
        .then(() => {
            this.trigger('category-deleted', category);
        })
        .catch(error => console.error(error));
    },

    init() {
        this._super();
        console.log('init');
    },
    didInsertElement() {
        this._super();
        console.log('didInsertElement');
    },
    willDestroyElement() {
        this._super();
        console.log('willDestroyElement');
    }

});