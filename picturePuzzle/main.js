var app = new Vue({
    el: '#app',
    data: {
        order: false,
        list: [
            // { id: 1, name: "ringo", price: 100 },

            // { id: 2, name: "banana", price: 200 },
            // { id: 3, name: "itigo", price: 300 }]
            { id: 1, name: "あ", show: true, imgName: "flower_1.jpg" },
            { id: 2, name: "　", show: true, imgName: "flower_2.jpg" },
            { id: 3, name: "い", show: true, imgName: "flower_3.jpg" },
            { id: 4, name: "う", show: true, imgName: "flower_4.jpg" },
            { id: 5, name: "え", show: true, imgName: "flower_5.jpg" },
            { id: 6, name: "お", show: true, imgName: "flower_6.jpg" },
            { id: 7, name: "か", show: true, imgName: "flower_7.jpg" },
            { id: 8, name: "き", show: true, imgName: "flower_8.jpg" },
            { id: 9, name: "く", show: false, imgName: "blank.png" },
        ],
    },
    methods: {
        // swapNum: function (test) {
        //     console.log(test.target)
        //     // クリックされた文字列の属性を取り出す
        //     console.log(test.target.getAttribute("id"))
        //     for (i of this.list) {
        //         console.log(i.name)
        //     }
        //     temp = this.list[0]
        //     // this.list[0] = this.list[1]
        //     // this.list[1] = temp
        //     this.$set(this.list, 0, this.list[1])
        //     this.$set(this.list, 1, temp)
        // },
        swapNum2: function (event) {
            blankIndex = 0
            clickedObjectIndex = 0
            clickedObjectId = event.target.getAttribute("id")

            // console.log("objectId is " + clickedObjectId)

            // console.log(event.target.getAttribute("id"))


            for (let i = 0; i < this.list.length; i++) {
                // console.log("current thisList.id is " + this.list[i].id)

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

            if (!isAllowedToChange(blankIndex, clickedObjectIndex)) {
                console.log("交換可能対象ではない")
                return
            }
            console.log("交換可能対象である")



            // console.log("blankIndex is " + blankIndex)
            // console.log("clickedObjIndex is " + clickedObjectIndex)

            // blankとクリックされたオブジェクトを交換する
            const temp = this.list[blankIndex]

            this.$set(this.list, blankIndex, this.list[clickedObjectIndex])
            this.$set(this.list, clickedObjectIndex, temp)

            console.log("debug")
            for (i of this.list) {
                console.log(i.name)
            }
        },
        unsort: function (times) {
            for (let t = 0; t < times; t++) {
                let blankIndex = 0;
                for (let i = 0; i < this.list.length; i++) {
                    if (this.list[i].show === false) {
                        blankIndex = i
                        break
                    }
                }
                let changing2 = getRandomInt(this.list.length - 1)
                while (!isAllowedToChange(blankIndex, changing2)) {
                    changing2 = getRandomInt(this.list.length - 1)
                    console.log(blankIndex + " and " + changing2 + " sort")

                }
                console.log("finally" + blankIndex + " and " + changing2 + " sort")
                let temp = this.list[blankIndex]
                this.$set(this.list, blankIndex, this.list[changing2])
                this.$set(this.list, changing2, temp)

            }
        }
    },
    computed: {
        sortedList: function () {
            return this.list
        },
    }
})

isAllowedToChange = function (blank, b) {
    // blankの座標a, 交換したい座標bの位置が次のとき、交換できる
    blank += 1
    b += 1
    list = [blank - 1, blank + 1, blank - 3, blank + 3]
    if (!list.includes(b)) {
        console.log("上下左右ではない")
        return false
    }

    // return true

    if (blank % 3 == 0) {
        if (blank + 1 == b) {
            console.log('1')
            return false
        }
    }
    if (blank % 3 == 1) {
        if (blank - 1 == b) {
            console.log('2')
            return false
        }
    }
    if (blank <= 3) {
        if (blank - 3 == b) {
            console.log('3')
            return false
        }
        if (blank >= 7) {
            if (blank - 3 == b) {
                console.log('4')
                return false
            }
        }
    }
    return true
    // return trueを忘れるとundifinedが返る
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// function getBlankIndex() {
//     for (let i = 0; i < this.list.length; i++) {
//         // console.log("current thisList.id is " + this.list[i].id)

//         if (this.list[i].show === false) {
//             blankIndex = i;
//             break;
//         }
//         // if (this.list[i].id === clickedObjectId) {
//         // 　this.list[i].idはnumber型として扱われてる
//         // 　clickedObjectIdはstring型として扱われてる
//         // 　このため、===で比較するとfalseが返る
//         // console.log(typeof this.list[i].id)
//         // console.log(typeof clickedObjectId)
//     }
//     return blankIndex;

// }
