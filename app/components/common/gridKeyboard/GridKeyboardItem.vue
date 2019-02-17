<template>
  <StackLayout class="keyboard-item">
    <component
      :is="componentType"
      :content="text"
      @tap="$emit('keyTapped', { type, value: text, event: $event })"
    />
  </StackLayout>
</template>

<script>
import DefaultKey from './keys/DefaultKey';
import EraseKey from './keys/EraseKey';
import MinusKey from './keys/MinusKey';
import PlusKey from './keys/PlusKey';
import SuccessKey from './keys/SuccessKey';
import SelectDateKey from './keys/SelectDateKey';

export default {
  components: {
    DefaultKey,
    EraseKey,
    MinusKey,
    PlusKey,
    SuccessKey,
    SelectDateKey,
  },
  props: {
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    componentType() {
      switch (this.type) {
        case 'date':
          return 'SelectDateKey';
        case 'erase':
          return 'EraseKey';
        case 'minus':
          return 'MinusKey';
        case 'plus':
          return 'PlusKey';
        case 'save':
          return 'SuccessKey';
        default:
        case 'default':
          return 'DefaultKey';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/common';

.keyboard-item {
  background-color: $category-background-color;
  border-width: 1;
  border-color: $common-border-color;
}
</style>
