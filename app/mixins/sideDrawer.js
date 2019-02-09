export default {
  data() {
    return {
      gesturesEnabled: true,
    };
  },
  computed: {
    drawerElement() {
      return (this.$refs && this.$refs.drawer) || null;
    },
    drawer: {
      get() {
        return this.$store.getters.sideDrawer;
      },
      set(value) {
        return this.$store.commit('setSideDrawer', value);
      },
    },
  },
  watch: {
    drawer(value) {
      if (this.drawerElement) {
        return value
          ? this.drawerElement.nativeView.showDrawer()
          : this.drawerElement.nativeView.closeDrawer();
      }
    },
  },
  methods: {
    openDrawer() {
      this.drawer = true;
    },
    closeDrawer() {
      this.drawer = false;
    },
    onDrawerClosed() {
      this.$store.commit('setSideDrawer', false);
    },
  },
};
