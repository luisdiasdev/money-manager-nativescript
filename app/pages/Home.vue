<template lang="html">
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton
        text="Back"
        icon="res://ic_action_dehaze"
        @tap="openDrawer"
      />
      <Label class="action-bar-title" text="Money Manager Pro" />
    </ActionBar>

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
import sideDrawer from '~/mixins/sideDrawer';
export default {
  mixins: [sideDrawer],
  data() {
    return {
      text: 'Hello Home Page!',
    };
  },
  methods: {
    tapFab() {
      console.log('fab clicked');
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
