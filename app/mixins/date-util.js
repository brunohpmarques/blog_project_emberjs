import Mixin from '@ember/object/mixin';

export default Mixin.create({
    getFormattedDate(date){
        const formattedDate = new Date(date);
        const options = {year: 'numeric', month: '2-digit', day: '2-digit', hour12: false, hour: '2-digit', minute: '2-digit'};
        return formattedDate.toLocaleDateString('en-US', options);
    }
});
