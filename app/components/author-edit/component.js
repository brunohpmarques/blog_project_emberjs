import Ember from 'ember';

export default Ember.Component.extend({
    authorService: Ember.inject.service(),
    authorId: null,
    authorName: null,
    authorEmail: null,
    authorPassword: null,
    showAlert: false,
    isLoadingAuthor: false,
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

    loadAuthor() {
        this.set('isLoadingAuthor', true);
        this.authorService.detail(this.get('authorId'))
        .then(response => {
            this.set('isLoadingAuthor', false);
            this.set('authorName', response.name);
            this.set('authorEmail', response.email);
        })
        .catch(error => console.error(error));
    },
    edit() {
        this.set('showAlert', false);
        if(!this.isInvalid){
            this.set('isLoading', true);

            this.authorService.update({
                id: this.get('authorId'),
                name: this.get('authorName'),
                email: this.get('authorEmail'),
                password: this.get('authorPassword')
            })
            .then(author => {
                this.set('showAlert', true);
                this.set('authorPassword', null);
                this.trigger('author-edited', author);
            })
            .catch(error => console.error(error))
            .finally(() => this.set('isLoading', false));
        }
    },

    init() {
        this._super();
        this.loadAuthor();
    }
});