import Ember from 'ember';
import DateUtil from '../../mixins/date-util';


export default Ember.Component.extend(
    DateUtil,
    {
    articleService: Ember.inject.service(),
    article: null,
    isLoading: true,

    createdDate: Ember.computed('article', function(){
        return this.getFormattedDate(this.get('article').createdAt);
    }),
    updatedDate: Ember.computed('article', function(){
        return this.getFormattedDate(this.get('article').updatedAt);
    }),

    loadArticle() {
        this.set('isLoading', true);
        this.articleService.detail(1)
        .then(response => {
            this.set('isLoading', false);
            this.set('article', response);
        })
        .catch(error => console.error(error));
    },

    init() {
        this._super();
        this.loadArticle();
    }
});