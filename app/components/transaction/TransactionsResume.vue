<template>
  <GridLayout rows="*" columns="*, *, *" class="quick-info">
    <StackLayout col="0" class="divider">
      <Label text="Renda" />
      <Label :text="income" />
    </StackLayout>
    <StackLayout col="1" class="divider">
      <Label text="Despesas" />
      <Label :text="expense" />
    </StackLayout>
    <StackLayout col="2">
      <Label text="Restante" />
      <Label :text="remaining" />
    </StackLayout>
  </GridLayout>
</template>

<script>
export default {
  props: {
    items: {
      type: [Object],
      required: true,
    },
  },
  computed: {
    income() {
      return (
        this.items &&
        this.items
          .filter(item => item.amount > 0.0)
          .reduce((prev, current) => prev + current.amount, 0.0)
      );
    },
    expense() {
      return (
        this.items &&
        Math.abs(
          this.items
            .filter(item => item.amount < 0.0)
            .reduce((prev, current) => prev + current.amount, 0.0)
        )
      );
    },
    remaining() {
      const income = this.income;
      const expense = this.expense;
      return income && expense && Math.abs(income + expense);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/common';

.quick-info {
  border-color: $common-border-color;
  border-width: 1 1 1 1;
  padding: 16 16;
  margin-bottom: 4;
  text-align: center;

  .divider {
    border-color: $common-border-color;
    border-right-width: 1;
  }
}
</style>
