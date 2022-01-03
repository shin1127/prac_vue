var app = new Vue({
    el: '#app',
    data: {
        order: false,
        list: [
            // { id: 1, name: "ringo", price: 100 },

            // { id: 2, name: "banana", price: 200 },
            // { id: 3, name: "itigo", price: 300 }]
            { id: 1, name: "a", show: true },
            { id: 2, name: "b", show: true },
            { id: 3, name: "c", show: true },
            { id: 4, name: "d", show: true },
            { id: 5, name: "e", show: true },
            { id: 6, name: "f", show: true },
            { id: 7, name: "g", show: true },
            { id: 8, name: "h", show: true },
            { id: 9, name: "i", show: true },
        ],
    },
    methods: {
        swapNum: function (test) {
            console.log(test.target)
            for (i of this.list) {
                console.log(i.name)
            }
            temp = this.list[0]
            // this.list[0] = this.list[1]
            // this.list[1] = temp
            this.$set(this.list, 0, this.list[1])
            this.$set(this.list, 1, temp)
        }
    },
    computed: {
        sortedList: function () {
            // return _.orderBy(this.list, "id", this.order ? "desc" : "asc")
            return this.list
        },
    }
})


