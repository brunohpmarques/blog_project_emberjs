import Ember from 'ember';

export default Ember.Component.extend({
    authorService: Ember.inject.service(),
    author: null,

    delete(author) {
        this.authorService.delete(author)
        .then(() => {
            this.trigger('author-deleted', author);
        })
        .catch(error => console.error(error));
    },
});