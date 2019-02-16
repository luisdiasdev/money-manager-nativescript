<template>
  <Page class="page">
    <DefaultActionBar backButton />
    <StackLayout ~mainContent columns="*" rows="*">
      <StackLayout>
        <TransactionTypeSelect @typeSelected="onTypeChanged" />
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
        <StackLayout class="description-line" orientation="horizontal">
          <StackLayout
            class="category-icon"
            :style="{ 'background-color': selectedCategoryColor }"
          >
            <FontIcon
              type="mdi icon"
              :name="selectedCategory.icon"
              color="white"
              size="24"
            />
          </StackLayout>
          <StackLayout class="edit-icon">
            <FontIcon
              type="mdi icon"
              name="mdi-square-edit-outline"
              color="rgb(90, 90, 90)"
              size="18"
            />
          </StackLayout>
          <TextField
            v-model="selectedDescription"
            class="description"
            hint="Memorando"
          />
          <TextField
            class="value pull-right"
            editable="false"
            text="999999999.50"
          />
        </StackLayout>
        <GridKeyboard />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import { getRandomColor } from '~/shared/colors';
import DefaultActionBar from '~/components/common/DefaultActionBar';
import GridKeyboard from '~/components/common/gridKeyboard';
import TransactionTypeSelect from '~/components/transaction/TransactionTypeSelect';

export default {
  components: {
    DefaultActionBar,
    GridKeyboard,
    TransactionTypeSelect,
  },
  data() {
    return {
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
      selectedDescription: '',
      selectedCategoryColor: null,
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
      if (this.selectedCategory !== item) {
        const idx = this.categoriesByType[this.selectedType].indexOf(item);
        this.categoriesByType[this.selectedType][idx].selected = true;
        this.selectedCategory = item;
        this.selectedCategoryColor = getRandomColor();
      }
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
      border-radius: 23;
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
  background-color: $category-background-color;

  .description-line {
    width: 100%;
    padding: 10;
    padding-bottom: 8;
    border-bottom-width: 1;
    border-bottom-color: $common-border-color;

    .category-icon {
      border-radius: 20;
      width: 36;
      height: 36;
      padding: 4;
      margin: 4;
    }

    .edit-icon {
      margin-top: 16;
      margin-bottom: 16;
      margin-left: 4;
      margin-right: 4;
    }

    .description {
      width: 30%;
    }

    .value {
      width: 50%;
      text-align: right;
      font-size: 22;
    }

    TextField {
      background-color: transparent;
    }
  }
}
</style>
