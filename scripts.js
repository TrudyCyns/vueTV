const app = Vue.createApp({
  data() {
    return {
      isOff: true,
      index: 0,
      vids: [
        './images/mon.mp4',
        './images/tue.mp4',
        './images/wed.mp4',
        './images/thu.mp4',
        './images/fri.mp4',
      ],
    };
  },
  methods: {
    tvSwitch() {
      this.isOff = !this.isOff;
    },
    next() {
      this.index++;
      if (this.index > this.vids.length - 1) {
        this.index = 0;
      }
    },
    prev() {
      this.index--;
      if (this.index <= 0) {
        this.index = this.vids.length - 1;
      }
    },
  },
});

app.mount('#app');
