export default {
  data() {
    return {
      forceBack: false
    }
  },

  created() {
    window.addEventListener('popstate', this.onPopState);
  },

  beforeDestroy() {
    window.removeEventListener('popstate', this.onPopState);
  },

  beforeRouteEnter (to, from, next) {
    next(vm => vm.forceBack = false);
  },

  beforeRouteUpdate (to, from, next) {
    this.forceBack = to.path === from.path;
    next();
  },

  methods: {
    onPopState(e) {
      this.forceBack && this.$router.back();
      this.forceBack = true;
    },
  }
}