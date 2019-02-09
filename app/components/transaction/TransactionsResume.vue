<template>
  <GridLayout rows="*" columns="*, *, *" class="quick-info">
    <StackLayout col="0">
      <Label text="Renda" />
      <Label text="0" />
    </StackLayout>
    <StackLayout col="1">
      <Label text="Despesas" />
      <Label text="842.4" />
    </StackLayout>
    <StackLayout col="2">
      <Label text="Equilíbrio" />
      <Label text="842.4" />
    </StackLayout>
  </GridLayout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.quick-info {
  border-color: rgba(228, 228, 228, 0.822);
  border-width: 1 1 1 1;
  padding: 16 16;
  margin-bottom: 4;
}
</style>
