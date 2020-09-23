import Ember from 'ember';

export default Ember.Component.extend({
    authorService: Ember.inject.service(),
    authorName: null,
    authorEmail: null,
    authorPassword: null,
    showAlert: false,
    isLoading: false,

    isInvalidName: Ember.computed('authorName', function() {
        const authorName = this.get('authorName');
        return !authorName;
    }),
    isInvalidEmail: Ember.computed('authorEmail', function() {
        const authorEmail = this.get('authorEmail');
        return !authorEmail || (authorEmail.indexOf('@') === -1);
    }),
    isInvalidPassword: Ember.computed('authorPassword', function() {
        const authorPassword = this.get('authorPassword');
        return !authorPassword || authorPassword.length < 8;
    }),
    isInvalid: Ember.computed('isInvalidName', 'isInvalidEmail', 'isInvalidPassword', function() {
        const isInvalidName = this.get('isInvalidName');
        const isInvalidEmail = this.get('isInvalidEmail');
        const isInvalidPassword = this.get('isInvalidPassword');

        return isInvalidName || isInvalidEmail || isInvalidPassword;
    }),

    create() {
        this.set('showAlert', false);
        if(!this.isInvalid){
            this.set('isLoading', true);
            this.authorService.create({
                name: this.get('authorName'),
                email: this.get('authorEmail'),
                password: this.get('authorPassword')
            })
            .then(author => {
                this.set('showAlert', true);
                this.set('authorName', null);
                this.set('authorEmail', null);
                this.set('authorPassword', null);
                this.trigger('author-created', author);
            })
            .catch(error => console.error(error))
            .finally(() => this.set('isLoading', false));
        }
    }
});