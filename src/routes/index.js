import Vue from 'vue';
import Router from 'vue-router';
import Category from '@containers/category/index.vue';
import Detail from '@containers/detail/index.vue';


Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Category',
        component: Category,
    }, {
        path: '/',
        name: 'Detail',
        component: Detail,
    }],
});