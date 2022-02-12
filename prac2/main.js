new Vue({
  el: '#app',
  data: {
    list: [
      { id: 1, show: true, msg: "hoge", attributes: ["at1", "at2"] },
      { id: 2, show: true, msg: "fuga", attributes: ["at1"] },
      { id: 3, show: true, msg: "piyo", attributes: ["at2"] },
      { id: 4, show: true, msg: "piyo", attributes: ["at2", "at3"] },
      { id: 5, show: true, msg: "piyo", attributes: ["at2", "at4"] },
    ]
  },
  methods: {
    showAll: function () {
      console.log("executed showall")
      for (obj of this.list) {
        obj.show = true;
      }
    },
    hideAll: function () {
      console.log("executed hideAll")
      for (obj of this.list) {
        obj.show = false;
      }
    },
    hasAttribute: function (attribute) {
      for (obj of this.list) {
        if (obj.attributes.includes(attribute)) {
          obj.show = true;
        }
        else {
          obj.show = false;
        }
      }
    },
    getEvent: function (event) {
      tmp = event.target.getAttribute("attributes")
    }
  }
})

function hoge2() {
  console.log("hoge2")
}

hoge = function () {
  console.log("hoge")
}
