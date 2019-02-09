<template>
  <ActionBar class="action-bar">
    <NavigationButton
      text="Back"
      icon="res://ic_action_dehaze"
      @tap="openDrawer"
    />
    <Label class="action-bar-title" text="Money Manager Pro" />
  </ActionBar>
</template>

<script>
import sideDrawer from '~/mixins/sideDrawer';
export default {
  mixins: [sideDrawer],
};
</script>
