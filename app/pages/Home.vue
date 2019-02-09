<template lang="html">
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Home" />
    </ActionBar>

    <GridLayout ~mainContent columns="*" rows="*">
      <Label class="message" :text="text" col="0" row="0" />

      <Label
        class="info"
        horizontalAlignment="center"
        verticalAlignment="center"
      >
        <FormattedString>
          <Span class="fa" text.decode="&#xf135; " />
          <Span :text="text" />
        </FormattedString>
      </Label>
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

<style scoped lang="scss">
@import '../app-variables';
// Custom styles
.fa {
  color: $success-dark;
}
.info {
  font-size: 20;
}
</style>
