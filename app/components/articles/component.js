import Ember from 'ember';

export default Ember.Component.extend({
    articleService: Ember.inject.service(),
    articles: [],
    isLoading: true,

    loadArticles() {
        this.set('isLoading', true);
        this.articleService.getList()
        .then(response => {
            this.set('isLoading', false);
            this.set('articles', response);
        })
        .catch(error => console.error(error));
    },

    init() {
        this._super();
        this.loadArticles();
    }
});