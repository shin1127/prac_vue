var app = new Vue({
    el: '#app',
    data: {
        hands: [
            { id: 1, name: "gu" },
            { id: 2, name: "choki" },
            { id: 3, name: "pa" },
        ],
        result: "gu"
    },
    methods: {
        click: function () {
            // 決定時に選択していたラジオボタンの値をとってなんかする
        }
    }


})
