<template>
  <Button class="default" :text="content" @tap="$emit('tap')" />
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/common';

.default {
  @extend .keyboard-button-item;
  padding-top: 6;
  font-size: 24;
}
</style>
