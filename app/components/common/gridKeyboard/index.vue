<template>
  <GridLayout columns="*, *, *, *" rows="*, *, *, *">
    <GridKeyboardItem
      v-for="(position, index) in grid"
      :key="index"
      :row="position.row"
      :col="position.column"
      :text="position.text"
      :type="position.type"
      @keyTapped="onKeyTapped"
    />
  </GridLayout>
</template>

<script>
import GridKeyboardItem from '~/components/common/gridKeyboard/GridKeyboardItem';
import Grid from './grid';

export default {
  components: {
    GridKeyboardItem,
  },
  data() {
    return {
      grid: Grid,
    };
  },
  methods: {
    onKeyTapped: ({ value, type, event }) => {
      console.log(value, type, event);
    },
  },
};
</script>

<style></style>
