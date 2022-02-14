new Vue({
  el: '#app',
  data: {
    list: [
      { id: 1, show: true, msg: "家具の写真", attributes: ["家", "at2"], picpath: "1.jpg" },
      { id: 2, show: true, msg: "とりの写真", attributes: ["鳥", "木", "動物"], picpath: "2.jpg" },
      { id: 3, show: true, msg: "piyo", attributes: ["at2"], picpath: "3.jpg" },
      { id: 4, show: true, msg: "piyo", attributes: ["猫", "動物"], picpath: "4.jpg" },
      { id: 5, show: true, msg: "piyo", attributes: ["家", "砂浜", "海"], picpath: "5.jpg" },
    ],
    selected: [
      { id: 1, selected: true, attribute: "家" },
      { id: 2, selected: true, attribute: "動物" },
      { id: 3, selected: true, attribute: "猫" },
      { id: 4, selected: true, attribute: "鳥" },
    ],
  },
  methods: {
    showAll: function () {
      console.log("executed showall")
      for (obj of this.list) {
        obj.show = true;
      }
      for (obj of this.selected) {
        obj.selected = true;
      }
    },
    hideAll: function () {
      console.log("executed hideAll")
      for (obj of this.list) {
        obj.show = false;
      }
      for (obj of this.selected) {
        obj.selected = false;
      }
    },
    showChangeAttribute: function (attribute) {
      console.log("aaa")
      console.log(attribute)
      for (obj of this.list) {
        if (obj.attributes.includes(attribute)) {
          obj.show = true;
        }
        else {
          obj.show = false;
        }
      }
      for (obj of this.selected) {
        if (obj.attribute === attribute) {
          obj.selected = true;
        }
        else {
          obj.selected = false;
        }
      }
    },
    hoge3: function () {
      console.log("hoge3")
    },
    changeSelected: function (attribute) {
      console.log("exe changesele")
      for (obj of this.list) {
        if (obj.attributes.includes(attribute)) {
          obj.show = true;
        }
      }
    }
  }
})

function hoge2() {
  console.log("hoge2")
}

hoge = function () {
  console.log("hoge")
}
