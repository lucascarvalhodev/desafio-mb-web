export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    test: function () {
      this.count = this.count + 1;
    },
  },
  template: `
    <div class="box">
        <div>count is {{ count }}</div>
        <div>
            <button @click="test">
                count++
            </button>
        </div>
    </div>`,
};
