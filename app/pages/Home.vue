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
      <FontIcon type="mdi" name="mdi-file" size="30" />
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
};
</script>
