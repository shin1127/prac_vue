var app = new Vue({
    el: '#app',
    data: {
        hands: [
            { id: 1, name: "gu" },
            { id: 2, name: "choki" },
            { id: 3, name: "pa" },
        ],
        result: "gu",
        result2: "result2",
        enemyHand: "enemyHand",
    },
    created: function () {
        const hand = getRandomInt(3);
        switch (hand) {
            case 0:
                this.enemyHand = "gu";
                break;
            case 1:
                this.enemyHand = "choki";
                break;
            case 2:
                this.enemyHand = "pa";
                break;
        }


    },
    methods: {
        click: function (event) {
            // 決定時に選択していたラジオボタンの値をとってなんかする
            // console.log(this.result)
            // console.log("this is" + event.target.value)
            console.log("this is" + this.result)
            // this.result2 = judge("gu", this.result)
            this.result2 = checkJanken(this.enemyHand, this.result)
        },
    }
})

function checkJanken(a, b) {

    a = getNumberOfHands(a)
    b = getNumberOfHands(b)
    var c = (a - b + 3) % 3;
    if (c == 0) {
        return "DRAW";
    } else if (c == 2) {
        return "LOSE";
    } else {
        return "WIN";
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getNumberOfHands(hand) {
    if (hand === "gu") return 0;
    if (hand === "choki") return 1;
    if (hand === "pa") return 2;
}
