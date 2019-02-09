<template>
  <Page class="page">
    <DefaultActionBar />
    <GridLayout ~mainContent columns="*" rows="*">
      <Label class="message" text="Pagina de adicionar" col="0" row="0" />
    </GridLayout>
  </Page>
</template>

<script>
import DefaultActionBar from '~/components/common/DefaultActionBar';

export default {
  components: {
    DefaultActionBar,
  },
};
</script>

<style></style>
