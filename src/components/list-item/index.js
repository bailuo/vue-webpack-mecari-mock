export default {
    name: 'ListItem',
    props: {
        id: { // id of the item
            type: String,
            default: '',
        },
        itemName: { // name of an item
            type: String,
            default: '',
        },
        itemClickHook: {
            type: Function,
            default: () => {},
        },
    },
    data() {
        return {};
    },
    methods: {
        onItemClick() {
            console.log('clicked');
            this.itemClickHook && this.itemClickHook();
        },
    },
}