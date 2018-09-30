import ListItem from '@components/list-item/index.vue';
export default {
    name: 'Category',
    components: {
        'list-item': ListItem,
    },
    data() {
        return {};
    },
    methods: {
        onItemClick() {
            console.log('clicked')
        },
    },
}