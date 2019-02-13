import Vue from 'vue';

function isEmpty(value) {
    return value === null;
}

Vue.filter('firstLetterUpper', (value) => {
        if(isEmpty(value)){
            return '';
        }
        return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter('datePost', (date) => {
    if(isEmpty(date)) {
        return '';
    }
    return new Date(date).toUTCString();
    
});

Vue.filter('limitCharTitle', (value) => {
    if(value.length > 25) {
        return value.slice(0, 20) + '...';
    }
    return value;
});

Vue.filter('limitCharDesc', (value) => {
    if(value.length > 140) {
        return value.slice(0, 140) + '...';
    } else {
        return value;
    }
});

export default Vue.filter;