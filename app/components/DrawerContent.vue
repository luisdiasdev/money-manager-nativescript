<template lang="html">
  <ScrollView>
    <StackLayout width="100%">
      <Label class="drawer-header" text="Drawer" />

      <Label
        v-for="(page, i) in pages"
        :key="i"
        class="drawer-item"
        :text="page.name"
        @tap="goToPage(page.component)"
      />
    </StackLayout>
  </ScrollView>
</template>

<script>
import sideDrawer from '~/mixins/sideDrawer';
export default {
  mixins: [sideDrawer],
  data() {
    return {
      // define our pages, making sure the component matches that defined in /app/router/index.js
      pages: [{ name: 'Home', component: this.$routes.Home }],
    };
  },
  methods: {
    goToPage(pageComponent) {
      // use the manual navigation method
      this.$navigateTo(pageComponent);
      // and we probably want to close the drawer when changing pages
      this.closeDrawer();
    },
  },
};
</script>

<style lang="scss">
.drawer-header {
  padding: 50 16 16 16;
  margin-bottom: 16;
  background-color: #333333;
  color: #ffffff;
  font-size: 24;
}

.drawer-item {
  padding: 8 16;
  color: #333333;
  font-size: 16;
}
</style>
