var App = {
  data: function () {
    return {
      message: "Wooo calculate things.",
      number1: 0,
      number2: 0,
      number3: 0,
      sum: 0,
      result: 0,
      product: 0,
      answer: 0,
      random: 0,
    };
  },
  methods: {
    computeSum: function () {
      this.sum = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    },
    multproduct: function () {
      this.product = parseInt(this.number1) * parseInt(this.number2) * parseInt(this.number3);
    },
    numdivide: function () {
      this.result = parseInt(this.number1) / parseInt(this.number2) / parseInt(this.number3);
    },
    minusnum: function () {
      this.answer = parseInt(this.number1) - parseInt(this.number2) - parseInt(this.number3);
    },
    weirdnumber: function () {
      this.random =
        parseInt(this.number1) * parseInt(this.number2) -
        parseInt(this.number3) +
        parseInt(this.number2) / parseInt(this.number3);
    },
  },
};

Vue.createApp(App).mount("#app");
