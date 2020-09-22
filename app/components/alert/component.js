import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['alert', 'alert-dismissible', 'fade', 'show'],
    classNameBindings: ['variantClass'],
    variant: 'primary',
    message: null,

    variantClass: Ember.computed('variant', function(){
        return `alert-${this.get('variant')}`;
    }),
    close() {
        this.destroy();
    }
});