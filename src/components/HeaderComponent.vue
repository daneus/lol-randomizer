<template>
  <header>
    <div class="title">
      <span class="first-word">LoL</span><span>&nbsp;</span>
      <span class="second-word">Randomizer</span>
    </div>
    <div class="subtitle">
      <span>
        Test out your skills by trying this League of Legends Randomizer!
      </span>
    </div>
  </header>
  <MainComponent />
</template>

<script>
import MainComponent from './MainComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    MainComponent,
  },
};
</script>

<style scoped lang="scss">
@use '../sass/abstracts/colors' as *;
@use '../sass/typography/font-sizes' as *;
* {
  color: white;
}
.title {
  font-weight: 600;
  font-size: $big-font;
  padding: 0 1rem;
  max-width: max-content;
  margin: 20px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.first-word {
  color: $light-blue;
}
.subtitle {
  padding: 0 1rem;
  font-size: $regular-font;
  font-weight: 500;
  text-align: center;
}
</style>
