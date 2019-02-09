<template>
  <ActionBar class="action-bar">
    <NavigationButton
      v-if="backButton"
      android.systemIcon="ic_menu_back"
      @tap="$navigateBack()"
    />
    <NavigationButton
      v-else
      text="Menu"
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
  props: {
    backButton: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
