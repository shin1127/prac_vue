var app = new Vue({
    el: '#app',
    data: {
        order: false,
        list: [
            { id: 1, show: true, imgName: "flower_1.jpg" },
            { id: 2, show: true, imgName: "flower_2.jpg" },
            { id: 3, show: true, imgName: "flower_3.jpg" },
            { id: 4, show: true, imgName: "flower_4.jpg" },
            { id: 5, show: true, imgName: "flower_5.jpg" },
            { id: 6, show: true, imgName: "flower_6.jpg" },
            { id: 7, show: true, imgName: "flower_7.jpg" },
            { id: 8, show: true, imgName: "flower_8.jpg" },
            { id: 9, show: false, imgName: "blank.png" },
        ],
    },
    methods: {
        swapNum: function (event) {
            blankIndex = 0
            clickedObjectIndex = 0
            clickedObjectId = event.target.getAttribute("id")
            for (let i = 0; i < this.list.length; i++) {

                if (this.list[i].show === false) {
                    blankIndex = i;
                }

                if (this.list[i].id == clickedObjectId) {
                    clickedObjectIndex = i
                }
            }

            if (!isAllowedToChange(blankIndex, clickedObjectIndex)) {
                return
            }

            // blankとクリックされたオブジェクトを交換する
            const temp = this.list[blankIndex]

            this.$set(this.list, blankIndex, this.list[clickedObjectIndex])
            this.$set(this.list, clickedObjectIndex, temp)

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
                }
                let temp = this.list[blankIndex]
                this.$set(this.list, blankIndex, this.list[changing2])
                this.$set(this.list, changing2, temp)
            }
        },
        resetList: function () {
            this.list.sort(function (a, b) {
                if (a.id < b.id) return -1
                if (b.id < a.id) return 1
            })
            console.log(this.list)
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
        return false
    }
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
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
