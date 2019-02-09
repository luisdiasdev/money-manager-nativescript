<template lang="html">
  <Page class="page">
    <DefaultActionBar />
    <GridLayout ~mainContent columns="*" rows="*">
      <Label class="message" :text="text" col="0" row="0" />
      <FloatingActionButton
        icon="res://ic_add_white"
        rippleColor="#f1f1f1"
        class="fab-button"
        @tap="tapFab"
      />
    </GridLayout>
  </Page>
</template>

<script>
import DefaultActionBar from '~/components/common/DefaultActionBar';
import sideDrawer from '~/mixins/sideDrawer';
export default {
  components: {
    DefaultActionBar,
  },
  mixins: [sideDrawer],
  data() {
    return {
      text: 'Hello Home Page!',
    };
  },
  methods: {
    goToPage(pageComponent) {
      this.$navigateTo(pageComponent);
      this.closeDrawer();
    },
    tapFab() {
      this.goToPage(this.$routes.AddTransactionPage);
    },
  },
};
</script>

<style scoped lang="scss">
.fab-button {
  height: 70;
  width: 70; /// this is required on iOS - Android does not require width so you might need to adjust styles
  margin: 15;
  background-color: rgb(223, 192, 21);
  horizontal-align: right;
  vertical-align: bottom;
}
</style>
