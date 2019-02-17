<template>
  <StackLayout class="category">
    <StackLayout
      class="icon"
      :backgroundColor="activeBackgroundColor"
      :borderColor="activeCactiveBackgroundColor"
    >
      <FontIcon type="mdi" :name="icon" :color="color" size="34" />
    </StackLayout>
    <Label class="text" :text="name" />
  </StackLayout>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    activeBackgroundColor: {
      type: String,
      default: 'rgb(241, 241, 241)',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    color() {
      return this.active ? 'white' : 'rgb(90, 90, 90)';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/common';

.category {
  text-align: center;
  margin: 4;
  padding: 4;
  padding-bottom: 16;

  .icon {
    padding: 2;
    border-radius: 23;
    height: 45;
    width: 45;
  }

  .text {
    margin-top: 2;
    color: $category-line-color;
  }
}
</style>
