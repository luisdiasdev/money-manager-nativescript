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
      <StackLayout class="category-list-group" :class="{ collapsed }">
        <RadListView
          for="category in categoriesByType[selectedType]"
          layout="staggered"
          gridSpanCount="4"
          @itemTap="onCategorySelected"
        >
          <v-template>
            <StackLayout class="item">
              <StackLayout class="icon-wrapper">
                <FontIcon
                  type="mdi icon"
                  :name="category.icon"
                  color="rgb(90, 90, 90)"
                  size="34"
                />
              </StackLayout>
              <Label class="item-text" :text="category.name" />
            </StackLayout>
          </v-template>
        </RadListView>
      </StackLayout>
      <StackLayout v-if="collapsed" class="expense-input">
        <Label :text="selectedCategory.name" />
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
          { name: 'Comida', icon: 'mdi-silverware-variant' },
          { name: 'Transporte', icon: 'mdi-bus' },
          { name: 'Casa', icon: 'mdi-home' },
          { name: 'Carro', icon: 'mdi-car' },
          { name: 'Compras', icon: 'mdi-shopping' },
        ],
        [
          { name: 'Salário', icon: 'mdi-cash-multiple' },
          { name: 'Prêmios', icon: 'mdi-cash-usd' },
          { name: 'Venda', icon: 'mdi-sale' },
          { name: 'Aluguel', icon: 'mdi-home-currency-usd' },
          { name: 'Reembolsos', icon: 'mdi-cash-refund' },
        ],
      ],
      selectedCategory: null,
    };
  },
  computed: {
    collapsed() {
      return this.selectedCategory != null;
    },
  },
  methods: {
    onTypeChanged(args) {
      this.selectedType = args.newIndex;
    },
    onCategorySelected({ item }) {
      item.selected = true;
      this.selectedCategory = item;
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
  margin: 8;

  &.collapsed {
    height: 40%;
  }
  .item {
    text-align: center;
    margin: 4;
    padding: 4;
    padding-bottom: 16;

    .icon-wrapper {
      padding: 2;
      border-radius: 20;
      border-color: $category-background-color;
      background-color: $category-background-color;
      height: 45;
      width: 45;
    }

    .item-text {
      margin-top: 2;
      color: $category-line-color;
    }
  }
}
.expense-input {
  height: 100%;
}
</style>
