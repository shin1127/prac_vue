var app = new Vue({
    el: '#app',
    data: {
        order: false,
        list: [
            // { id: 1, name: "ringo", price: 100 },

            // { id: 2, name: "banana", price: 200 },
            // { id: 3, name: "itigo", price: 300 }]
            { id: 1, name: "あ", show: true },
            { id: 2, name: "　", show: false },
            { id: 3, name: "い", show: true },
            { id: 4, name: "う", show: true },
            { id: 5, name: "え", show: true },
            { id: 6, name: "お", show: true },
            { id: 7, name: "か", show: true },
            { id: 8, name: "き", show: true },
            { id: 9, name: "く", show: true },
        ],
    },
    methods: {
        swapNum: function (test) {
            console.log(test.target)
            // クリックされた文字列の属性を取り出す
            console.log(test.target.getAttribute("id"))
            for (i of this.list) {
                console.log(i.name)
            }
            temp = this.list[0]
            // this.list[0] = this.list[1]
            // this.list[1] = temp
            this.$set(this.list, 0, this.list[1])
            this.$set(this.list, 1, temp)
        },
        swapNum2: function (event) {
            blankIndex = 0
            clickedObjectIndex = 0
            clickedObjectId = event.target.getAttribute("id")

            console.log("objectId is " + clickedObjectId)

            console.log(event.target.getAttribute("id"))
            for (let i = 0; i < this.list.length; i++) {
                console.log("current thisList.id is " + this.list[i].id)

                if (this.list[i].show === false) {
                    blankIndex = i;
                }
                // if (this.list[i].id === clickedObjectId) {
                // 　this.list[i].idはnumber型として扱われてる
                // 　clickedObjectIdはstring型として扱われてる
                // 　このため、===で比較するとfalseが返る
                // console.log(typeof this.list[i].id)
                // console.log(typeof clickedObjectId)

                if (this.list[i].id == clickedObjectId) {
                    clickedObjectIndex = i
                }
            }

            console.log("blankIndex is " + blankIndex)
            console.log("clickedObjIndex is " + clickedObjectIndex)

            // blankとクリックされたオブジェクトを交換する
            temp = this.list[blankIndex]

            this.$set(this.list, blankIndex, this.list[clickedObjectIndex])
            this.$set(this.list, clickedObjectIndex, temp)

            console.log("debug")
            for (i of this.list) {
                console.log(i.name)
            }
        }
    },
    computed: {
        sortedList: function () {
            // return _.orderBy(this.list, "id", this.order ? "desc" : "asc")
            return this.list
        },
    }
})


