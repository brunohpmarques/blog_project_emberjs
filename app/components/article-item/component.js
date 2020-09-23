import Ember from 'ember';
import DateUtil from '../../mixins/date-util';

export default Ember.Component.extend(
    DateUtil,
    {
    article: null,
    createdDate: Ember.computed('article', function(){
        return this.getFormattedDate(this.get('article').createdAt);
    }),
    abstract: Ember.computed('article', function(){
        const charLimit = 255;
        const content = this.get('article').content;
        
        if(content.length > charLimit){
            return `${content.substring(0, 255)}...`;
        }
        
        return content;
    }),
});