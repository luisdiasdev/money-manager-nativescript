<template>
  <Button class="mdi icon" @tap="$emit('tap')">
    {{ 'mdi-backspace-outline' | fonticon }}
  </Button>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/common';

.icon {
  @extend .keyboard-button-item;
  padding-right: 0;
  padding-top: -18;
  font-size: 28;
}
</style>
