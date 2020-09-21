import Ember from 'ember';

export default Ember.Component.extend({

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
            console.log('update category', category);
            this.toggleProperty('isEdit');
        }
    },
    remove(category) {
        console.log('remove category', category);
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