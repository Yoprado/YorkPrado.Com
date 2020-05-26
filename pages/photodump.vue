<template>
  <Header :header-text="header"> </Header>
</template>

<script>
import Header from '~/components/Header.vue';
export default {
  components: { Header },
  data() {
    return {
      header: 'Photo Dump Project',
    };
  },
};
</script>

<style scoped></style>
