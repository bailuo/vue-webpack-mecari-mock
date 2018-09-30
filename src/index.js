
import Vue from 'vue';
import Entry from './index.vue';
import router from './routes';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        Entry,
    },
    template: '<Entry />'
})
