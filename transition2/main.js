var app = new Vue({
    el: '#app',
    data: {
        order: false,
        list: [
            // { id: 1, name: "ringo", price: 100 },

            // { id: 2, name: "banana", price: 200 },
            // { id: 3, name: "itigo", price: 300 }]
            { id: 1, name: "hogehogehogehoge", show: true },
            { id: 2, name: "foofoofoofoofoo", show: false },
            { id: 3, name: "fugafugafugafuga", show: true },
            { id: 4, name: "piyopiyopiyopiyo", show: true },
        ],
    },
    methods: {
        changeShow: function () {
            for (item of this.list) {
                if (item.id === 2) {
                    item.show = !item.show
                }
            }
        },
    },
    computed: {
        sortedList: function () {
            return _.orderBy(this.list, "id", this.order ? "desc" : "asc")
        },
    }
})


