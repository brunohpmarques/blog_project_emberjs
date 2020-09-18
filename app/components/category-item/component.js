import Ember from 'ember';

export default Ember.Component.extend({

    category: null,
    isEdit: false,
    toString: Ember.computed('category', function() {
        const category = this.get('category');
        return category ? `#${category.id} ${category.name}` : '';
    }),
    observer: Ember.observer('isEdit', function() {
        const isEdit = this.get('isEdit');
        const category = this.get('category');
        console.log('edit category', isEdit, category);
    }),
    actions: {
        toggleEdit() {
            this.toggleProperty('isEdit');
        }
    }

});