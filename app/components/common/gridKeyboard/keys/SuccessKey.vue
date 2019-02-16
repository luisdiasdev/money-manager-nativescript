<template>
  <Button class="mdi icon" @tap="$emit('tap')">
    {{ 'mdi-check' | fonticon }}
  </Button>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/common';

.icon {
  @extend .keyboard-button-item;
  padding-left: -10;
  padding-right: 0;
  padding-top: -18;
  font-size: 28;
  color: white;
  background-color: $accent;
  border-color: $accent;
}
</style>
