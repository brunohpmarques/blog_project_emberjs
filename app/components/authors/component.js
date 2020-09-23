import Ember from 'ember';

export default Ember.Component.extend({
    authorService: Ember.inject.service(),
    authors: [],
    isLoading: true,

    loadAuthors() {
        this.set('isLoading', true);
        this.authorService.getList()
        .then(response => {
            this.set('isLoading', false);
            this.set('authors', response);
        })
        .catch(error => console.error(error));
    },
    init() {
        this._super();
        this.loadAuthors();
    }
});