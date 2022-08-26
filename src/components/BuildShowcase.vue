<template>
  <div class="content-wrapper">
    <div class="champion-spotlight">
      <div class="champion-name">{{ dataPassed?.championName }}</div>
      <div class="champion-title">{{ dataPassed?.championTitle }}</div>
      <div class="champion-image">
        <img :src="getLoadingScreenImage()" />
      </div>
    </div>
    <div class="champion-build">
      <div class="first-row">
        <div class="role">
          <div class="section-title">Role</div>
          <div class="role-wrapper">
            <div class="role-image">
              <img width="75" height="75" :src="getRoleIcon()" />
            </div>
            <div class="tooltip-name">{{ dataPassed?.role }}</div>
          </div>
        </div>
        <div class="summoners">
          <div class="section-title">Summoners</div>
          <div class="summoners-container">
            <div class="summoner-spell">
              <img :src="getSummIcon(dataPassed?.summoners[0])" />
              <div class="tooltip-name">
                {{ dataPassed?.summoners[0] }}
              </div>
            </div>
            <div class="summoner-spell">
              <img :src="getSummIcon(dataPassed?.summoners[1])" />
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
              <img :src="getMaxAbilityIcon()" />
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
          <template v-for="item in dataPassed?.build" v-bind:key="item.icon">
            <img :src="getItemIcon(item.icon)" />
          </template>
        </div>
      </div>
      <div class="runes">
        <div class="section-title">Runes</div>
        <div class="runes-wrapper">
          <div class="keystone">
            <img :src="getRuneIcon(Object.keys(dataPassed?.runes.AA)[0])" />
            <div class="keystone-name">
              {{ Object.values(dataPassed?.runes.AA)[0] }}
            </div>
          </div>
          <div class="rest-runes">
            <div class="first-tree-runes">
              <div class="rune-container">
                <img :src="getRuneIcon(Object.keys(dataPassed?.runes.AB)[0])" />
                <div class="rune-name">
                  {{ Object.values(dataPassed?.runes.AB)[0] }}
                </div>
              </div>
              <div class="rune-container">
                <img :src="getRuneIcon(Object.keys(dataPassed?.runes.AC)[0])" />
                <div class="rune-name">
                  {{ Object.values(dataPassed?.runes.AC)[0] }}
                </div>
              </div>
              <div class="rune-container">
                <img :src="getRuneIcon(Object.keys(dataPassed?.runes.AD)[0])" />
                <div class="rune-name">
                  {{ Object.values(dataPassed?.runes.AD)[0] }}
                </div>
              </div>
            </div>
            <div class="second-tree-runes">
              <div class="rune-container">
                <img :src="getRuneIcon(Object.keys(dataPassed?.runes.BA)[0])" />
                <div class="rune-name">
                  {{ Object.values(dataPassed?.runes.BA)[0] }}
                </div>
              </div>
              <div class="rune-container">
                <img :src="getRuneIcon(Object.keys(dataPassed?.runes.BB)[0])" />
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
      version: '12.16.1',
    };
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
  },
};
</script>

<style scoped lang="scss">
@use '../sass/abstracts/colors' as *;
@use '../sass/typography/font-sizes' as *;
* {
  color: white;
}
.section-title {
  font-size: 30px;
  font-weight: 600;
  color: $light-blue;
  padding: 5px;
}
.content-wrapper {
  display: flex;
  flex-direction: row;
  padding: 20px 0;
  justify-content: center;
  gap: 30px;
}
.champion-spotlight {
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
}
.champion-image > img {
  border-radius: 20px;
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
}
.role {
  text-align: center;
}
.role-wrapper {
  background-color: $light-background-color;
  padding: 10px 12px;
  border-radius: 12px;
}
.role-image > img {
  margin: auto;
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
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 10px;
  border-radius: 10px;
}
.max-ability-image {
  border-radius: 10px;
  width: max-content;
  position: relative;
  padding: 0 15px;
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
  padding-right: 15px;
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
.build-wrapper > img {
  border-radius: 10px;
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
</style>
