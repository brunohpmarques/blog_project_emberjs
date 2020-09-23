import Ember from 'ember';

export default Ember.Component.extend({
    articleService: Ember.inject.service(),
    authorService: Ember.inject.service(),
    categoryService: Ember.inject.service(),

    categories: [],
    authors: [],

    articleTitle: null,
    articleImage: null,
    articleContent: null,
    articleAuthor: null,
    articleCategory: null,
    showAlert: false,
    isLoading: false,

    isInvalidTitle: Ember.computed('articleTitle', function() {
        const articleTitle = this.get('articleTitle');
        return !articleTitle;
    }),
    isInvalidImage: Ember.computed('articleImage', function() {
        const articleImage = this.get('articleImage');
        return !articleImage || (articleImage.indexOf('http') === -1);
    }),
    isInvalidContent: Ember.computed('articleContent', function() {
        const articleContent = this.get('articleContent');
        return !articleContent;
    }),
    isInvalidAuthor: Ember.computed('articleAuthor', function() {
        const articleAuthor = this.get('articleAuthor');
        return !articleAuthor;
    }),
    isInvalidCategory: Ember.computed('isInvalidCategory', function() {
        const articleCategory = this.get('articleCategory');
        return !articleCategory;
    }),
    isInvalid: Ember.computed('isInvalidTitle', 'isInvalidImage', 'isInvalidContent', 'isInvalidAuthor', 'isInvalidCategory', function() {
        const isInvalidTitle = this.get('isInvalidTitle');
        const isInvalidImage = this.get('isInvalidImage');
        const isInvalidContent = this.get('isInvalidContent');
        const isInvalidAuthor = this.get('isInvalidAuthor');
        const isInvalidCategory = this.get('isInvalidCategory');

        return isInvalidTitle || isInvalidImage || isInvalidContent || isInvalidAuthor || isInvalidCategory;
    }),

    onSelectCategory(categoryIndex){
        this.set('articleCategory', this.get('categories')[categoryIndex]);
    },
    onSelectAuthor(authorIndex){
        this.set('articleAuthor', this.get('authors')[authorIndex]);
    },
    loadCategories() {
        this.categoryService.getList()
        .then(response => {
            this.set('categories', response);
        })
        .catch(error => console.error(error));
    },
    loadAuthors() {
        this.authorService.getList()
        .then(response => {
            this.set('authors', response);
        })
        .catch(error => console.error(error));
    },
    create() {
        this.set('showAlert', false);
        if(!this.isInvalid){
            this.set('isLoading', true);
            this.articleService.create({
                title: this.get('articleTitle'),
                image: this.get('articleImage'),
                content: this.get('articleContent'),
                authorId: this.get('articleAuthor').id,
                categoryId: this.get('articleCategory').id
            })
            .then(article => {
                this.set('showAlert', true);
                this.set('articleTitle', null);
                this.set('articleImage', null);
                this.set('articleContent', null);
                this.set('articleAuthor', null);
                this.set('articleCategory', null);
                this.trigger('article-created', article);
            })
            .catch(error => console.error(error))
            .finally(() => this.set('isLoading', false));
        }
    },

    init(){
        this._super();
        this.loadAuthors();
        this.loadCategories();
    }
});