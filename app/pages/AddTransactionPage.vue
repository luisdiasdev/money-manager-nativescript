<template>
  <Page class="page">
    <DefaultActionBar backButton />
    <StackLayout ~mainContent columns="*" rows="*">
      <StackLayout>
        <DropDown
          :items="items"
          selectedIndex="0"
          class="item-drop-down"
          @selectedIndexChanged="onTypeChanged"
        />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import DefaultActionBar from '~/components/common/DefaultActionBar';

export default {
  components: {
    DefaultActionBar,
  },
  data() {
    return {
      items: ['Despesas', 'Renda'],
    };
  },
  methods: {
    onTypeChanged(args) {
      console.log(args);
    },
  },
};
</script>

<style lang="scss" scoped>
.item-drop-down {
  horizontal-align: left;
  font-size: 18;
  margin: 8 8;
  padding: 6 16;
  height: 40;
}
</style>
