<template>
  <div
    :style="{
      visibility: splashLoaded && abilityLoaded ? 'hidden' : 'visible',
    }"
    class="fallback"
  >
    <div class="spinner"></div>
  </div>
  <div
    :style="{
      visibility: splashLoaded && abilityLoaded ? 'visible' : 'hidden',
    }"
    class="content-wrapper"
  >
    <div class="champion-spotlight">
      <div class="champion-name">{{ dataPassed?.championName }}</div>
      <div class="champion-title">{{ dataPassed?.championTitle }}</div>
      <div class="champion-image">
        <img
          @load="handleLoad1"
          :src="getLoadingScreenImage()"
          :alt="dataPassed?.championName"
        />
      </div>
    </div>
    <div class="champion-build">
      <div class="first-row">
        <div class="role">
          <div class="section-title">Role</div>
          <div class="role-wrapper">
            <div class="role-image">
              <img
                width="75"
                height="75"
                :src="getRoleIcon()"
                :alt="dataPassed?.role"
              />
            </div>
            <div class="tooltip-name">{{ dataPassed?.role }}</div>
          </div>
        </div>
        <div class="summoners">
          <div class="section-title">Summoners</div>
          <div class="summoners-container">
            <div class="summoner-spell">
              <img
                class="summ-img"
                :src="getSummIcon(dataPassed?.summoners[0])"
                :alt="dataPassed?.summoners[0]"
              />
              <div class="tooltip-name">
                {{ dataPassed?.summoners[0] }}
              </div>
            </div>
            <div class="summoner-spell">
              <img
                class="summ-img"
                :src="getSummIcon(dataPassed?.summoners[1])"
                :alt="dataPassed?.summoners[1]"
              />
              <div class="tooltip-name">
                {{ dataPassed?.summoners[1] }}
              </div>
            </div>
          </div>
          <div class="summoners-wrapper"></div>
        </div>
        <div class="max-ability">
          <div class="section-title">Ability to Max</div>
          <div class="max-ability-wrapper">
            <div class="max-ability-image">
              <img
                class="max-img"
                @load="handleLoad2"
                :src="getMaxAbilityIcon()"
                :alt="dataPassed?.toMax.spellName"
              />
              <div class="max-ability-key">
                {{ dataPassed?.toMax.spellKey }}
              </div>
            </div>
            <div class="max-ability-name">
              {{ dataPassed?.toMax.spellName }}
            </div>
          </div>
        </div>
      </div>
      <div class="build">
        <div class="section-title">Build</div>
        <div class="build-wrapper">
          <div class="item-box">
            <span class="tooltip">{{ dataPassed?.build[0].itemName }}</span>
            <img
              :src="getItemIcon(dataPassed?.build[0].icon)"
              :alt="dataPassed?.build[0].itemName"
            />
          </div>
          <div class="item-box">
            <span class="tooltip">{{ dataPassed?.build[1].itemName }}</span>
            <img
              :src="getItemIcon(dataPassed?.build[1].icon)"
              :alt="dataPassed?.build[1].itemName"
            />
          </div>
          <div class="item-box">
            <span class="tooltip">{{ dataPassed?.build[2].itemName }}</span>
            <img
              :src="getItemIcon(dataPassed?.build[2].icon)"
              :alt="dataPassed?.build[2].itemName"
            />
          </div>
          <div class="item-box">
            <span class="tooltip">{{ dataPassed?.build[3].itemName }}</span>
            <img
              :src="getItemIcon(dataPassed?.build[3].icon)"
              :alt="dataPassed?.build[3].itemName"
            />
          </div>
          <div class="item-box">
            <span class="tooltip">{{ dataPassed?.build[4].itemName }}</span>
            <img
              :src="getItemIcon(dataPassed?.build[4].icon)"
              :alt="dataPassed?.build[4].itemName"
            />
          </div>
          <div class="item-box">
            <span class="tooltip">{{ dataPassed?.build[5].itemName }}</span>
            <img
              :src="getItemIcon(dataPassed?.build[5].icon)"
              :alt="dataPassed?.build[5].itemName"
            />
          </div>
        </div>
      </div>
      <div class="runes">
        <div class="section-title">Runes</div>
        <div class="runes-wrapper">
          <div class="keystone">
            <img
              :alt="Object.values(dataPassed?.runes.AA)[0]"
              :src="getRuneIcon(Object.keys(dataPassed?.runes.AA)[0])"
            />
            <div class="keystone-name">
              {{ Object.values(dataPassed?.runes.AA)[0] }}
            </div>
          </div>
          <div class="rest-runes">
            <div class="first-tree-runes">
              <div class="rune-container">
                <img
                  :alt="Object.values(dataPassed?.runes.AB)[0]"
                  :src="getRuneIcon(Object.keys(dataPassed?.runes.AB)[0])"
                />
                <div class="rune-name">
                  {{ Object.values(dataPassed?.runes.AB)[0] }}
                </div>
              </div>
              <div class="rune-container">
                <img
                  :alt="Object.values(dataPassed?.runes.AC)[0]"
                  :src="getRuneIcon(Object.keys(dataPassed?.runes.AC)[0])"
                />
                <div class="rune-name">
                  {{ Object.values(dataPassed?.runes.AC)[0] }}
                </div>
              </div>
              <div class="rune-container">
                <img
                  :alt="Object.values(dataPassed?.runes.AD)[0]"
                  :src="getRuneIcon(Object.keys(dataPassed?.runes.AD)[0])"
                />
                <div class="rune-name">
                  {{ Object.values(dataPassed?.runes.AD)[0] }}
                </div>
              </div>
            </div>
            <div class="second-tree-runes">
              <div class="rune-container">
                <img
                  :alt="Object.values(dataPassed?.runes.BA)[0]"
                  :src="getRuneIcon(Object.keys(dataPassed?.runes.BA)[0])"
                />
                <div class="rune-name">
                  {{ Object.values(dataPassed?.runes.BA)[0] }}
                </div>
              </div>
              <div class="rune-container">
                <img
                  :alt="Object.values(dataPassed?.runes.BB)[0]"
                  :src="getRuneIcon(Object.keys(dataPassed?.runes.BB)[0])"
                />
                <div class="rune-name">
                  {{ Object.values(dataPassed?.runes.BB)[0] }}
                </div>
              </div>
            </div>
            <div class="stat-runes">
              <div class="rune-container">
                <div class="circle">
                  <img
                    class="sec-rune"
                    :alt="Object.values(dataPassed?.runes.CA)[0]"
                    :src="getRuneIcon(Object.keys(dataPassed?.runes.CA)[0])"
                  />
                </div>
                <div class="rune-name">
                  {{ Object.values(dataPassed?.runes.CA)[0] }}
                </div>
              </div>
              <div class="rune-container">
                <div class="circle">
                  <img
                    class="sec-rune"
                    :alt="Object.values(dataPassed?.runes.CB)[0]"
                    :src="getRuneIcon(Object.keys(dataPassed?.runes.CB)[0])"
                  />
                </div>
                <div class="rune-name">
                  {{ Object.values(dataPassed?.runes.CB)[0] }}
                </div>
              </div>
              <div class="rune-container">
                <div class="circle">
                  <img
                    class="sec-rune"
                    :alt="Object.values(dataPassed?.runes.CC)[0]"
                    :src="getRuneIcon(Object.keys(dataPassed?.runes.CC)[0])"
                  />
                </div>
                <div class="rune-name">
                  {{ Object.values(dataPassed?.runes.CC)[0] }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuildShowcase',
  data() {
    return {
      version: '12.23.1',
    };
  },
  computed: {
    splashLoaded() {
      return this.$store.state.isChampImgLoaded;
    },
    abilityLoaded() {
      return this.$store.state.isAbilityImgLoaded;
    },
  },
  props: {
    dataPassed: Object,
  },
  methods: {
    getLoadingScreenImage() {
      return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.dataPassed?.championID}_0.jpg`;
    },
    getMaxAbilityIcon() {
      return `https://ddragon.leagueoflegends.com/cdn/${this.version}/img/spell/${this.dataPassed?.toMax.spellID}.png`;
    },
    getItemIcon(iconID) {
      return `https://ddragon.leagueoflegends.com/cdn/${this.version}/img/item/${iconID}`;
    },
    getRoleIcon() {
      return `../assets/roles/${this.dataPassed?.role}.svg`;
    },
    getSummIcon(summID) {
      return `../assets/summoners/${summID}.png`;
    },
    getRuneIcon(runeID) {
      return `../assets/runes/${runeID}.png`;
    },
    handleLoad1() {
      this.$store.commit('updateFirst', true);
    },
    handleLoad2() {
      this.$store.commit('updateSecond', true);
    },
  },
};
</script>

<style scoped lang="scss">
@use '../sass/abstracts/colors' as *;
@use '../sass/typography/font-sizes' as *;
* {
  color: white;
}
.fallback {
  position: absolute;
  margin-top: 70px;
  width: 100%;
  height: inherit;
  background-color: transparent;
  height: 90%;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  padding-top: 20vh;
}
.spinner {
  background-color: transparent;
  width: 10rem;
  height: 10rem;
  border: 20px solid #ddd;
  border-top-color: $light-blue;
  border-radius: 50%;
  animation: spinner 0.8s cubic-bezier(0.13, 0.57, 0.84, 0.43) infinite;
}
@keyframes spinner {
  to {
    transform: rotate(1turn);
  }
}
.section-title {
  font-size: 30px;
  font-weight: 600;
  color: $light-blue;
  padding: 5px;
}
.content-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 5px 0 25px;
  margin: auto;
  justify-content: center;
  max-width: max-content;
  gap: 30px;
}
.champion-spotlight {
  padding: 0 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.champion-name {
  font-size: $big-font;
  color: $light-blue;
  font-weight: 600;
}
.champion-title {
  font-size: 25px;
  margin-top: -12px;
}
.champion-image {
  padding-top: 25px;
  & > img {
    border-radius: 20px;
  }
}
.champion-build {
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
}
.first-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}
.role {
  text-align: center;
}
.role-wrapper {
  background-color: $light-background-color;
  padding: 10px 12px;
  border-radius: 12px;
}
.role-image {
  & > img {
    margin: auto;
  }
}
.tooltip-name {
  font-size: 18px;
  font-weight: 500;
  padding-top: 8px;
}
.summoners {
  text-align: center;
}
.summoners-container {
  border-radius: 10px;
  padding: 15px 10px 9px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: $light-background-color;
}
.summoner-spell {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
}
.summoner-spell > .tooltip-name {
  padding-top: 15px;
}
.summoner-spell > img {
  border-radius: 10px;
}
.max-ability {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.max-ability-wrapper {
  background-color: $light-background-color;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  border-radius: 10px;
  gap: 15px;
}
.max-ability-image {
  border-radius: 10px;
  width: max-content;
  position: relative;
}
.max-ability-image > img {
  border-radius: 10px;
}
.max-ability-key {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  -webkit-text-stroke: 2px #000;
  font-weight: 700;
}
.max-ability-name {
  max-width: 200px;
}
.build {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.build-wrapper {
  display: grid;
  grid-template-columns: repeat(6, 64px);
  gap: 25px;
  justify-content: space-between;
  align-items: center;
  background-color: $light-background-color;
  padding: 15px 15px;
  border-radius: 10px;
  max-width: max-content;
}
.item-box > img {
  border-radius: 10px;
}
.item-box {
  position: relative;
  cursor: pointer;
  border-radius: 10px;
}
.item-box,
.summ-img,
.max-img {
  box-shadow: 3px 3px 5px #111;
}
@media (hover: hover) {
  .item-box:hover {
    & .tooltip {
      top: -90%;
      visibility: visible;
      opacity: 1;
    }
  }
}
.tooltip {
  pointer-events: none;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  white-space: nowrap;
  background-color: #555;
  padding: 0.7rem;
  border-radius: 10px;
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 90%;
    transform: translateX(-50%);
    border: 15px solid;
    border-color: #555 #0000 #0000 #0000;
  }
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s ease;
}
.runes > .section-title {
  text-align: center;
}
.runes-wrapper {
  background-color: $light-background-color;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-radius: 12px;
  margin: auto;
}
.keystone {
  display: flex;
  flex-direction: row;
  padding: 0 40px 0 20px;
  gap: 20px;
  align-items: center;
}
.keystone > img {
  width: 100px;
  height: 100px;
}
.keystone-name {
  font-size: $keystone-title-font;
  font-weight: 600;
  letter-spacing: 0.4px;
}
.rest-runes {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 36px;
}
.rune-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px 14px;
}
.rune-container > img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #1585e0;
}
.rune-name {
  padding-left: 10px;
}
.circle {
  width: 40px;
  height: 40px;
  border: 2px solid #bb9834;
  border-radius: 50%;
  position: relative;
  background-color: $background-color;
}
.circle > img {
  position: absolute;
  width: 22px;
  height: 22px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/*Media queries*/
@media screen and (max-width: 365px) {
  .keystone {
    flex-direction: column;
    align-items: center;
    gap: 0;
    padding: 0;
  }
  .runes-wrapper {
    gap: 5px;
    text-align: center;
    padding-bottom: 0;
  }
  .rune-container {
    flex-direction: column;
  }
  .rune-name {
    padding: 0;
  }
}
@media screen and (max-width: 840px) {
  .build-wrapper {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-content: space-evenly;
    align-items: center;
  }
  .second-tree-runes,
  .stat-runes {
    margin-top: -8px;
  }
  .rest-runes {
    flex-direction: column;
  }
  .runes-wrapper {
    max-width: max-content;
  }
  .build {
    margin: 15px 0;
  }
  .rune-container {
    margin-bottom: 16px;
  }
  // .rune-name {
  //   padding-bottom: 8px;
  // }
}
@media screen and (max-width: 740px) {
  .champion-build {
    padding: 0 30px;
  }
  .first-row {
    flex-direction: column;
  }
}
@media screen and (max-width: 1160px) {
  .content-wrapper {
    flex-direction: column;
  }
  .first-row {
    justify-content: center;
    gap: 30px;
  }
}
// @media (hover: hover) {
//   dwd
// }
</style>
