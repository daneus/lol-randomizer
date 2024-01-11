<template>
  <main>
    <div class="button-wrapper">
      <button
        class="randomize-button"
        @click.once="handleButtonClick()"
        @click="
          randomize();
          handleReset();
        "
      >
        {{ message }}
      </button>
    </div>
    <BuildShowcase v-if="opened === true" :data-passed="randomizedBuild" />
  </main>
</template>

<script>
import BuildShowcase from './BuildShowcase.vue';
import randomizeBuild from '../functions/randomizeBuild.ts';
import store from '@/store';

export default {
  data() {
    return {
      message: 'Randomize!',
      opened: false,
      randomizedBuild: randomizeBuild(),
    };
  },
  name: 'MainComponent',
  components: {
    BuildShowcase,
  },
  methods: {
    handleButtonClick() {
      this.message = 'Reroll';
      this.opened = true;
    },
    randomize() {
      this.randomizedBuild = randomizeBuild();
    },
    handleReset() {
      store.commit('reset');
    },
  },
};
</script>

<style lang="scss">
@use '../sass/abstracts/colors' as *;
main {
  position: relative;
}
.randomize-button {
  width: 130px;
  height: 42px;
  font-size: 18px;
  border-radius: 8px;
  font-weight: 500;
  color: white;
  background-color: $light-blue;
  border: 0;
  cursor: pointer;
  transition: all 0.2s ease;
}
@media (hover: hover) {
  .randomize-button:hover {
    background-color: $hovered-light-blue;
  }
}
.button-wrapper {
  text-align: center;
  padding: 12px 0;
}
</style>
