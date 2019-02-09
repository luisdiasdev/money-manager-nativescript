<template>
  <StackLayout class="inner-list-group">
    <GridLayout class="list-group-header" rows="*" columns="*, *">
      <Label :text="transactions.date" col="0" />
      <Label col="1" class="pull-right">
        <FormattedString>
          <Span text="Despesas: " />
          <Span :text="transactions.total" />
        </FormattedString>
      </Label>
    </GridLayout>
    <StackLayout
      v-for="item in transactions.items"
      :key="item.date"
      orientation="horizontal"
      class="list-group-item"
    >
      <GridLayout columns="40, *, *" rows="*">
        <FontIcon
          class="pull-left"
          type="mdi"
          name="mdi-export"
          color="grey"
          size="28"
          col="0"
        />
        <Label :text="item.name" col="1" />
        <Label col="2" class="pull-right">
          <FormattedString>
            <Span v-if="item.type === 'expense'" text="- " />
            <Span :text="item.value" />
          </FormattedString>
        </Label>
      </GridLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
export default {
  props: {
    transactions: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.inner-list-group {
  margin-top: 8;
  margin-bottom: 4;
}
.list-group-header {
  border-color: rgba(228, 228, 228, 0.822);
  border-width: 1 1 1 1;
  padding: 4;
}
.list-group-item {
  border-color: rgba(228, 228, 228, 0.822);
  border-width: 1 1 1 1;
  padding: 8 16;
}
</style>
