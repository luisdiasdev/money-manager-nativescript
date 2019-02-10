<template>
  <Page class="page">
    <DefaultActionBar backButton />
    <StackLayout ~mainContent columns="*" rows="*">
      <StackLayout>
        <DropDown
          :items="items"
          :selectedIndex="selectedType"
          class="item-drop-down"
          @selectedIndexChanged="onTypeChanged"
        />
      </StackLayout>
      <StackLayout class="hr-light" />
      <StackLayout class="category-list-group">
        <RadListView for="category in categoriesByType[selectedType]">
          <v-template>
            <StackLayout class="item">
              <Label :text="category.name" />
            </StackLayout>
          </v-template>
        </RadListView>
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
      selectedType: 0,
      categoriesByType: [
        [
          { name: 'Comida' },
          { name: 'Transporte' },
          { name: 'Casa' },
          { name: 'Carro' },
          { name: 'Compras' },
        ],
        [
          { name: 'Salário' },
          { name: 'Prêmios' },
          { name: 'Venda' },
          { name: 'Aluguel' },
          { name: 'Reembolsos' },
        ],
      ],
    };
  },
  methods: {
    onTypeChanged(args) {
      this.selectedType = args.newIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/common';

.item-drop-down {
  horizontal-align: left;
  font-size: 18;
  margin: 8 8;
  padding: 6 16;
  height: 40;
}
.category-list-group {
  margin: 8 16;
  .item {
    margin: 4;
    padding: 8;
    border-color: $common-border-color;
    border-top-width: 1;
  }
}
</style>
