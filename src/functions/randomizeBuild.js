import champions from '../data/champions.json';
import boots from '../data/boots.json';
import items from '../data/items.json';
import roles from '../data/roles.json';
import runes from '../data/runes.json';
import summoners from '../data/summoners.json';
import smites from '../data/smites.json';

const getRandomIndex = (amount) => Math.floor(Math.random() * amount);

const randomizeBuild = () => drawRandomChampion();

const drawRandomChampion = () => {
  const randomIndex = getRandomIndex(champions.length);
  const drewChampionObject = champions[randomIndex];

  const drewAbility = drawRandomAbility(drewChampionObject);

  const { role, summoners } = drawRandomRole();

  const drewBuild = drawRandomBuild(drewChampionObject);

  const drewRunes = drawRandomRunes(drewChampionObject, summoners);

  return {
    championID: drewChampionObject.championID,
    championName: drewChampionObject.championName,
    championTitle: drewChampionObject.championTitle,
    toMax: drewAbility,
    role: role,
    summoners: summoners,
    build: drewBuild,
    runes: drewRunes,
  };
};

const drawRandomAbility = (championObject) => {
  const randomAbilityIndex = getRandomIndex(championObject.abilities.length);
  return championObject.abilities[randomAbilityIndex];
};

const drawRandomRole = () => {
  const randomRoleIndex = getRandomIndex(5);
  const drewRole = roles[randomRoleIndex];
  const drewSummoners = drawRandomSummoners(drewRole);
  return {
    role: drewRole,
    summoners: drewSummoners,
  };
};

const drawRandomSummoners = (role) => {
  const copiedSummsArray = summoners.slice(0);
  const copiedSmitesArray = smites.slice(0);
  const drewSummoners = [];
  if (role === 'Jungle') {
    copiedSummsArray.splice(7, 1);
    const randomSummIndex = getRandomIndex(copiedSummsArray.length);
    drewSummoners.push(copiedSummsArray[randomSummIndex]);
    const randomSmiteIndex = getRandomIndex(copiedSmitesArray.length);
    drewSummoners.push(copiedSmitesArray[randomSmiteIndex]);
  } else {
    for (let i = 0; i < 2; i++) {
      const randomSummIndex = getRandomIndex(copiedSummsArray.length);
      const summIndex = copiedSummsArray.indexOf(summoners[randomSummIndex]);
      drewSummoners.push(copiedSummsArray[randomSummIndex]);
      copiedSummsArray.splice(summIndex, 1);
    }
  }
  return drewSummoners;
};

const drawRandomBuild = (championObject) => {
  const copiedBootsArray = boots.slice(0);
  const copiedItemsArray = items.slice(0);

  const drewItems = [];

  if (championObject.canBuyBoots) {
    const randomBootIndex = getRandomIndex(7);
    drewItems.push(copiedBootsArray[randomBootIndex]);
  }

  if (championObject.rangeType !== 'ranged') {
    const runaansIndex = copiedItemsArray.findIndex(
      (item) => item.itemName == "Runaan's Hurricane"
    );
    copiedItemsArray.splice(runaansIndex, 1);
  }

  while (drewItems.length <= 5) {
    const randomItemIndex = getRandomIndex(copiedItemsArray.length);

    const item = copiedItemsArray[randomItemIndex];

    drewItems.push(item);
    copiedItemsArray.splice(randomItemIndex, 1);

    const itemID = item.icon;

    switch (itemID) {
      case '3040.png': {
        const muramanaIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Muramana'
        );
        const fimbulwinter1Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Fimbulwinter'
        );
        const maw1Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Maw of Malmortius'
        );
        const steraks1Index = copiedItemsArray.findIndex(
          (item) => item.itemName == "Sterak's Gage"
        );
        const shieldbow1Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Immortal Shieldbow'
        );
        copiedItemsArray.splice(muramanaIndex, 1);
        copiedItemsArray.splice(fimbulwinter1Index, 1);
        copiedItemsArray.splice(maw1Index, 1);
        copiedItemsArray.splice(steraks1Index, 1);
        copiedItemsArray.splice(shieldbow1Index, 1);
        break;
      }
      case '3042.png': {
        const seraphsIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == "Seraph's Embrace"
        );
        const fimbulwinter2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Fimbulwinter'
        );
        copiedItemsArray.splice(seraphsIndex, 1);
        copiedItemsArray.splice(fimbulwinter2Index, 1);
        break;
      }
      case '3121.png': {
        const seraphs2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == "Seraph's Embrace"
        );
        const muramana2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Muramana'
        );
        copiedItemsArray.splice(seraphs2Index, 1);
        copiedItemsArray.splice(muramana2Index, 1);
        break;
      }
      case '3036.png': {
        const seryldas1Index = copiedItemsArray.findIndex(
          (item) => item.itemName == "Serylda's Grudge"
        );
        const mortalIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Mortal Reminder'
        );
        const terminus1Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Terminus'
        );
        const blackCleaver1Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Black Cleaver'
        );
        copiedItemsArray.splice(seryldas1Index, 1);
        copiedItemsArray.splice(mortalIndex, 1);
        copiedItemsArray.splice(terminus1Index, 1);
        copiedItemsArray.splice(blackCleaver1Index, 1);
        break;
      }
      case '6694.png': {
        const ldrIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == "Lord Dominik's Regards"
        );
        const mortalIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Mortal Reminder'
        );
        const terminus2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Terminus'
        );
        const blackCleaver2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Black Cleaver'
        );
        copiedItemsArray.splice(ldrIndex, 1);
        copiedItemsArray.splice(mortalIndex, 1);
        copiedItemsArray.splice(terminus2Index, 1);
        copiedItemsArray.splice(blackCleaver2Index, 1);
        break;
      }
      case '3033.png': {
        const seryldas2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == "Serylda's Grudge"
        );
        const ldrIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == "Lord Dominik's Regards"
        );
        const terminus3Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Terminus'
        );
        const blackCleaver3Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Black Cleaver'
        );
        copiedItemsArray.splice(seryldas2Index, 1);
        copiedItemsArray.splice(ldrIndex, 1);
        copiedItemsArray.splice(terminus3Index, 1);
        copiedItemsArray.splice(blackCleaver3Index, 1);
        break;
      }
      case '3071.png': {
        const seryldas3Index = copiedItemsArray.findIndex(
          (item) => item.itemName == "Serylda's Grudge"
        );
        const ldrIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == "Lord Dominik's Regards"
        );
        const terminus4Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Terminus'
        );
        const mortalIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Mortal Reminder'
        );
        copiedItemsArray.splice(seryldas3Index, 1);
        copiedItemsArray.splice(ldrIndex, 1);
        copiedItemsArray.splice(terminus4Index, 1);
        copiedItemsArray.splice(mortalIndex, 1);
        break;
      }
      case '3302.png': {
        const seryldas4Index = copiedItemsArray.findIndex(
          (item) => item.itemName == "Serylda's Grudge"
        );
        const ldrIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == "Lord Dominik's Regards"
        );
        const mortalIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Mortal Reminder'
        );
        const blackCleaver4Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Black Cleaver'
        );
        const voidIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Void Staff'
        );
        const cryptIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Cryptbloom'
        );
        copiedItemsArray.splice(seryldas4Index, 1);
        copiedItemsArray.splice(ldrIndex, 1);
        copiedItemsArray.splice(mortalIndex, 1);
        copiedItemsArray.splice(blackCleaver4Index, 1);
        copiedItemsArray.splice(voidIndex, 1);
        copiedItemsArray.splice(cryptIndex, 1);
        break;
      }
      case '3135.png': {
        const terminus5Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Terminus'
        );
        const cryptIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Cryptbloom'
        );
        copiedItemsArray.splice(terminus5Index, 1);
        copiedItemsArray.splice(cryptIndex, 1);
        break;
      }
      case '3137.png': {
        const terminus6Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Terminus'
        );
        const voidIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Void Staff'
        );
        copiedItemsArray.splice(terminus6Index, 1);
        copiedItemsArray.splice(voidIndex, 1);
        break;
      }
      case '3156.png': {
        const steraks2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == "Sterak's Gage"
        );
        const seraphs3Index = copiedItemsArray.findIndex(
          (item) => item.itemName == "Seraph's Embrace"
        );
        const shieldbow2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Immortal Shieldbow'
        );
        copiedItemsArray.splice(steraks2Index, 1);
        copiedItemsArray.splice(seraphs3Index, 1);
        copiedItemsArray.splice(shieldbow2Index, 1);
        break;
      }
      case '3053.png': {
        const maw2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Maw of Malmortius'
        );
        const seraphs4Index = copiedItemsArray.findIndex(
          (item) => item.itemName == "Seraph's Embrace"
        );
        const shieldbow3Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Immortal Shieldbow'
        );
        copiedItemsArray.splice(maw2Index, 1);
        copiedItemsArray.splice(seraphs4Index, 1);
        copiedItemsArray.splice(shieldbow3Index, 1);
        break;
      }
      case '6673.png': {
        const maw3Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Maw of Malmortius'
        );
        const seraphs5Index = copiedItemsArray.findIndex(
          (item) => item.itemName == "Seraph's Embrace"
        );
        const steraks2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == "Sterak's Gage"
        );
        copiedItemsArray.splice(maw3Index, 1);
        copiedItemsArray.splice(seraphs5Index, 1);
        copiedItemsArray.splice(steraks2Index, 1);
        break;
      }
      case '3748.png': {
        const ravenous1Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Ravenous Hydra'
        );
        const profane1Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Profane Hydra'
        );
        copiedItemsArray.splice(ravenous1Index, 1);
        copiedItemsArray.splice(profane1Index, 1);
        break;
      }
      case '3074.png': {
        const titanic1Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Titanic Hydra'
        );
        const profane2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Profane Hydra'
        );
        copiedItemsArray.splice(titanic1Index, 1);
        copiedItemsArray.splice(profane2Index, 1);
        break;
      }
      case '6698.png': {
        const ravenous2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Ravenous Hydra'
        );
        const titanic2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Titanic Hydra'
        );
        copiedItemsArray.splice(ravenous2Index, 1);
        copiedItemsArray.splice(titanic2Index, 1);
        break;
      }
      case '3031.png': {
        const navoriIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Navori Quickblades'
        );
        copiedItemsArray.splice(navoriIndex, 1);
        break;
      }
      case '6675.png': {
        const infinityIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Infinity Edge'
        );
        copiedItemsArray.splice(infinityIndex, 1);
        break;
      }
      case '3002.png': {
        const deadMansIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == "Dead Man's Plate"
        );
        copiedItemsArray.splice(deadMansIndex, 1);
        break;
      }
      case '3742.png': {
        const trailblazerIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Trailblazer'
        );
        copiedItemsArray.splice(trailblazerIndex, 1);
        break;
      }
      case '3068.png': {
        const hollowIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Hollow Radiance'
        );
        copiedItemsArray.splice(hollowIndex, 1);
        break;
      }
      case '6664.png': {
        const sunfireIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Aunfire Aegis'
        );
        copiedItemsArray.splice(sunfireIndex, 1);
        break;
      }
      case '3814.png': {
        const bansheeIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == "Banshee's Veil"
        );
        copiedItemsArray.splice(bansheeIndex, 1);
        break;
      }
      case '3102.png': {
        const edgeIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Edge of Night'
        );
        copiedItemsArray.splice(edgeIndex, 1);
        break;
      }
      case '3508.png': {
        const trinityIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Trinity Force'
        );
        const lichIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Lich Bane'
        );
        const icebornIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Iceborn Gauntlet'
        );
        const bloodsongIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Bloodsong'
        );
        copiedItemsArray.splice(trinityIndex, 1);
        copiedItemsArray.splice(lichIndex, 1);
        copiedItemsArray.splice(icebornIndex, 1);
        copiedItemsArray.splice(bloodsongIndex, 1);
        break;
      }
      case '3078.png': {
        const essenceIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Essence Reaver'
        );
        const lich2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Lich Bane'
        );
        const iceborn2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Iceborn Gauntlet'
        );
        const bloodsong2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Bloodsong'
        );
        copiedItemsArray.splice(essenceIndex, 1);
        copiedItemsArray.splice(lich2Index, 1);
        copiedItemsArray.splice(iceborn2Index, 1);
        copiedItemsArray.splice(bloodsong2Index, 1);
        break;
      }
      case '3100.png': {
        const essence2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Essence Reaver'
        );
        const iceborn3Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Iceborn Gauntlet'
        );
        const bloodsong3Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Bloodsong'
        );
        const trinity2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Trinity Force'
        );
        copiedItemsArray.splice(essence2Index, 1);
        copiedItemsArray.splice(iceborn3Index, 1);
        copiedItemsArray.splice(bloodsong3Index, 1);
        copiedItemsArray.splice(trinity2Index, 1);
        break;
      }
      case '3877.png': {
        const essence3Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Essence Reaver'
        );
        const iceborn4Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Iceborn Gauntlet'
        );
        const trinity3Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Trinity Force'
        );
        const lich3Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Lich Bane'
        );
        const solsticeIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Solstice Sleigh'
        );
        const celestialIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Celestial Opposition'
        );
        const zakzakIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == "Zaz'Zak's Realmspike"
        );
        const dreamIndex = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Dream Maker'
        );
        copiedItemsArray.splice(essence3Index, 1);
        copiedItemsArray.splice(iceborn4Index, 1);
        copiedItemsArray.splice(trinity3Index, 1);
        copiedItemsArray.splice(lich3Index, 1);
        copiedItemsArray.splice(solsticeIndex, 1);
        copiedItemsArray.splice(celestialIndex, 1);
        copiedItemsArray.splice(zakzakIndex, 1);
        copiedItemsArray.splice(dreamIndex, 1);
        break;
      }
      case '6662.png': {
        const essence4Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Essence Reaver'
        );
        const trinity4Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Trinity Force'
        );
        const lich4Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Lich Bane'
        );
        const bloodsong4Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Bloodsong'
        );
        copiedItemsArray.splice(essence4Index, 1);
        copiedItemsArray.splice(trinity4Index, 1);
        copiedItemsArray.splice(lich4Index, 1);
        copiedItemsArray.splice(bloodsong4Index, 1);
        break;
      }
      case '3876.png': {
        const celestial2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Celestial Opposition'
        );
        const zakzak2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == "Zaz'Zak's Realmspike"
        );
        const dream2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Dream Maker'
        );
        const bloodsong4Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Bloodsong'
        );
        copiedItemsArray.splice(celestial2Index, 1);
        copiedItemsArray.splice(zakzak2Index, 1);
        copiedItemsArray.splice(dream2Index, 1);
        copiedItemsArray.splice(bloodsong4Index, 1);
        break;
      }
      case '3869.png': {
        const zakzak3Index = copiedItemsArray.findIndex(
          (item) => item.itemName == "Zaz'Zak's Realmspike"
        );
        const dream3Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Dream Maker'
        );
        const bloodsong5Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Bloodsong'
        );
        const solstice2Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Solstice Sleigh'
        );
        copiedItemsArray.splice(zakzak3Index, 1);
        copiedItemsArray.splice(dream3Index, 1);
        copiedItemsArray.splice(bloodsong5Index, 1);
        copiedItemsArray.splice(solstice2Index, 1);
        break;
      }
      case '3871.png': {
        const dream4Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Dream Maker'
        );
        const bloodsong6Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Bloodsong'
        );
        const solstice3Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Solstice Sleigh'
        );
        const celestial3Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Celestial Opposition'
        );
        copiedItemsArray.splice(dream4Index, 1);
        copiedItemsArray.splice(bloodsong6Index, 1);
        copiedItemsArray.splice(solstice3Index, 1);
        copiedItemsArray.splice(celestial3Index, 1);
        break;
      }
      case '3867.png': {
        const bloodsong7Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Bloodsong'
        );
        const solstice4Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Solstice Sleigh'
        );
        const celestial4Index = copiedItemsArray.findIndex(
          (item) => item.itemName == 'Celestial Opposition'
        );
        const zakzak4Index = copiedItemsArray.findIndex(
          (item) => item.itemName == "Zaz'Zak's Realmspike"
        );
        copiedItemsArray.splice(bloodsong7Index, 1);
        copiedItemsArray.splice(solstice4Index, 1);
        copiedItemsArray.splice(celestial4Index, 1);
        copiedItemsArray.splice(zakzak4Index, 1);
        break;
      }
    }
  }

  return drewItems;
};

const drawRandomRunes = (championObject, summoners) => {
  const copiedRunesArray = runes.slice(0);

  const runePaths = [
    'Precision',
    'Sorcery',
    'Domination',
    'Resolve',
    'Inspiration',
  ];
  const copiedRunePaths = runePaths.slice(0);

  const mainTrees = [];

  const randomPrimaryTreeIndex = getRandomIndex(copiedRunePaths.length);
  const drewPrimaryTree = copiedRunePaths[randomPrimaryTreeIndex];
  mainTrees.push(drewPrimaryTree);
  copiedRunePaths.splice(randomPrimaryTreeIndex, 1);

  const randomSecondaryTreeIndex = getRandomIndex(copiedRunePaths.length);
  const drewSecondaryTree = copiedRunePaths[randomSecondaryTreeIndex];
  mainTrees.push(drewSecondaryTree);

  const returnPrimArray = (idx, runePath) => {
    return [
      ...Array(
        copiedRunesArray[randomPrimaryTreeIndex][mainTrees[0]][idx][runePath]
          .length
      ).keys(),
    ];
  };

  const possibleAAIndexes = returnPrimArray(0, 'keystones');
  if (championObject.championID === 'Cassiopeia') {
    if (mainTrees[0] === 'Domination') {
      possibleAAIndexes.splice(1, 1);
    }
  }
  if (!championObject.hasImmobilizingEffects) {
    if (mainTrees[0] === 'Resolve') {
      possibleAAIndexes.splice(1, 1);
    } else if (mainTrees[0] === 'Inspiration') {
      possibleAAIndexes.splice(0, 1);
    }
  }
  const randomAAIndex =
    possibleAAIndexes[getRandomIndex(possibleAAIndexes.length)];

  const possibleABIndexes = returnPrimArray(1, 'firstRow');
  if (championObject.championID === 'Cassiopeia') {
    if (mainTrees[0] === 'Inspiration') {
      const magFootIndex = copiedRunesArray[randomPrimaryTreeIndex][
        mainTrees[0]
      ][1]['firstRow'].findIndex(
        (item) => Object.keys(item)[0] == 'MagicalFootwear'
      );
      possibleABIndexes.splice(magFootIndex, 1);
    }
  }
  if (!summoners.includes('Flash')) {
    if (mainTrees[0] === 'Inspiration') {
      const hexFlashIndex = copiedRunesArray[randomPrimaryTreeIndex][
        mainTrees[0]
      ][1]['firstRow'].findIndex(
        (item) => Object.keys(item)[0] == 'HextechFlashtraption'
      );
      possibleABIndexes.splice(hexFlashIndex, 1);
    }
  }
  if (championObject.resourceType !== 'mana') {
    if (mainTrees[0] === 'Sorcery') {
      possibleABIndexes.splice(1, 1);
    }
  }
  if (championObject.resourceType === 'nothing') {
    if (mainTrees[0] === 'Precision') {
      possibleABIndexes.splice(2, 1);
    }
  }
  const randomABIndex =
    possibleABIndexes[getRandomIndex(possibleABIndexes.length)];

  const randomACIndex = getRandomIndex(
    copiedRunesArray[randomPrimaryTreeIndex][mainTrees[0]][2]['secondRow']
      .length
  );

  const possibleADIndexes = returnPrimArray(3, 'thirdRow');
  if (!championObject.canRunUltimateHunter) {
    if (mainTrees[0] === 'Domination') {
      possibleADIndexes.splice(3, 1);
    }
  }
  const randomADIndex =
    possibleADIndexes[getRandomIndex(possibleADIndexes.length)];

  const secondaryRunePathOptions = [
    { firstRow: 'firstRow', index: 1 },
    { secondRow: 'secondRow', index: 2 },
    { thirdRow: 'thirdRow', index: 3 },
  ];

  const secondaryPaths = [];

  const randomBA = getRandomIndex(secondaryRunePathOptions.length);
  const drewBA = secondaryRunePathOptions[randomBA];
  secondaryPaths.push(drewBA);
  secondaryRunePathOptions.splice(randomBA, 1);
  const randomBB = getRandomIndex(secondaryRunePathOptions.length);
  const drewBB = secondaryRunePathOptions[randomBB];
  secondaryPaths.push(drewBB);

  const returnSecArray = (idx) => {
    return [
      ...Array(
        Object.values(
          copiedRunesArray[runePaths.indexOf(mainTrees[1])][mainTrees[1]][
            secondaryPaths[idx].index
          ]
        )[0].length
      ).keys(),
    ];
  };

  switch (Object.keys(secondaryPaths[0])[0]) {
    case 'firstRow':
      const possibleBA1Indexes = returnSecArray(0);
      if (championObject.championID === 'Cassiopeia') {
        if (mainTrees[1] === 'Inspiration') {
          const magFootIndex = Object.values(
            copiedRunesArray[runePaths.indexOf(mainTrees[1])][mainTrees[1]][
              secondaryPaths[0].index
            ]
          )[0].findIndex((item) => Object.keys(item)[0] == 'MagicalFootwear');
          possibleBA1Indexes.splice(magFootIndex, 1);
        }
      }
      if (!summoners.includes('Flash')) {
        if (mainTrees[1] === 'Inspiration') {
          const hexFlashIndex = Object.values(
            copiedRunesArray[runePaths.indexOf(mainTrees[1])][mainTrees[1]][
              secondaryPaths[0].index
            ]
          )[0].findIndex(
            (item) => Object.keys(item)[0] == 'HextechFlashtraption'
          );
          possibleBA1Indexes.splice(hexFlashIndex, 1);
        }
      }
      if (championObject.resourceType !== 'mana') {
        if (mainTrees[1] === 'Sorcery') {
          possibleBA1Indexes.splice(1, 1);
        }
      }
      if (championObject.resourceType === 'nothing') {
        if (mainTrees[1] === 'Precision') {
          possibleBA1Indexes.splice(2, 1);
        }
      }
      var randomBAIndex =
        possibleBA1Indexes[getRandomIndex(possibleBA1Indexes.length)];
      break;

    case 'secondRow':
      var randomBAIndex = getRandomIndex(
        Object.values(
          copiedRunesArray[runePaths.indexOf(mainTrees[1])][mainTrees[1]][2]
        )[0].length
      );
      break;

    case 'thirdRow':
      const possibleBA2Indexes = returnSecArray(0);
      if (!championObject.canRunUltimateHunter) {
        if (mainTrees[1] === 'Domination') {
          possibleBA2Indexes.splice(3, 1);
        }
      }
      var randomBAIndex =
        possibleBA2Indexes[getRandomIndex(possibleBA2Indexes.length)];
      break;
  }

  switch (Object.keys(secondaryPaths[1])[0]) {
    case 'firstRow':
      const possibleBB1Indexes = returnSecArray(1);
      if (championObject.championID === 'Cassiopeia') {
        if (mainTrees[1] === 'Inspiration') {
          const magFootIndex = Object.values(
            copiedRunesArray[runePaths.indexOf(mainTrees[1])][mainTrees[1]][
              secondaryPaths[1].index
            ]
          )[0].findIndex((item) => Object.keys(item)[0] == 'MagicalFootwear');
          possibleBB1Indexes.splice(magFootIndex, 1);
        }
      }
      if (!summoners.includes('Flash')) {
        if (mainTrees[1] === 'Inspiration') {
          const hexFlashIndex = Object.values(
            copiedRunesArray[runePaths.indexOf(mainTrees[1])][mainTrees[1]][
              secondaryPaths[1].index
            ]
          )[0].findIndex(
            (item) => Object.keys(item)[0] == 'HextechFlashtraption'
          );
          possibleBB1Indexes.splice(hexFlashIndex, 1);
        }
      }
      if (championObject.resourceType !== 'mana') {
        if (mainTrees[1] === 'Sorcery') {
          possibleBB1Indexes.splice(1, 1);
        }
      }
      if (championObject.resourceType === 'nothing') {
        if (mainTrees[1] === 'Precision') {
          possibleBB1Indexes.splice(2, 1);
        }
      }
      var randomBBIndex =
        possibleBB1Indexes[getRandomIndex(possibleBB1Indexes.length)];
      break;

    case 'secondRow':
      var randomBBIndex = getRandomIndex(
        Object.values(
          copiedRunesArray[runePaths.indexOf(mainTrees[1])][mainTrees[1]][2]
        )[0].length
      );
      break;

    case 'thirdRow':
      const possibleBB2Indexes = returnSecArray(1);
      if (!championObject.canRunUltimateHunter) {
        if (mainTrees[1] === 'Domination') {
          possibleBB2Indexes.splice(3, 1);
        }
      }
      var randomBBIndex =
        possibleBB2Indexes[getRandomIndex(possibleBB2Indexes.length)];
      break;
  }

  const randomCAIndex = getRandomIndex(
    copiedRunesArray[5]['Stats'][0]['firstRow'].length
  );

  const randomCBIndex = getRandomIndex(
    copiedRunesArray[5]['Stats'][1]['secondRow'].length
  );

  const randomCCIndex = getRandomIndex(
    copiedRunesArray[5]['Stats'][2]['thirdRow'].length
  );

  return {
    AA: copiedRunesArray[randomPrimaryTreeIndex][mainTrees[0]][0]['keystones'][
      randomAAIndex
    ],
    AB: copiedRunesArray[randomPrimaryTreeIndex][mainTrees[0]][1]['firstRow'][
      randomABIndex
    ],
    AC: copiedRunesArray[randomPrimaryTreeIndex][mainTrees[0]][2]['secondRow'][
      randomACIndex
    ],
    AD: copiedRunesArray[randomPrimaryTreeIndex][mainTrees[0]][3]['thirdRow'][
      randomADIndex
    ],
    BA: Object.values(
      copiedRunesArray[runePaths.indexOf(mainTrees[1])][mainTrees[1]][
        secondaryPaths[0].index
      ]
    )[0][randomBAIndex],
    BB: Object.values(
      copiedRunesArray[runePaths.indexOf(mainTrees[1])][mainTrees[1]][
        secondaryPaths[1].index
      ]
    )[0][randomBBIndex],
    CA: copiedRunesArray[5]['Stats'][0]['firstRow'][randomCAIndex],
    CB: copiedRunesArray[5]['Stats'][1]['secondRow'][randomCBIndex],
    CC: copiedRunesArray[5]['Stats'][2]['thirdRow'][randomCCIndex],
  };
};

export default randomizeBuild;
