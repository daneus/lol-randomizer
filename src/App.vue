<template>
  <HeaderComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
};
</script>

<style lang="scss">
@use 'sass/base';
@use 'sass/typography';
@use 'sass/abstracts/colors' as *;

html {
  background-color: $background-color;
}
</style>
