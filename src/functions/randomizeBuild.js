import champions from '../data/champions.json';
import boots from '../data/boots.json';
import items from '../data/items.json';
import roles from '../data/roles.json';
import runes from '../data/runes.json';
import summoners from '../data/summoners.json';
import smites from '../data/smites.json';
import supportItems from '../data/supportItems.json';

const getRandomIndex = (amount) => Math.floor(Math.random() * amount);

const randomizeBuild = () => drawRandomChampion();

const drawRandomChampion = () => {
  const randomIndex = getRandomIndex(champions.length);
  const drewChampionObject = champions[randomIndex];

  const drewAbility = drawRandomAbility(drewChampionObject);

  const { role, summoners } = drawRandomRole();

  const drewBuild = drawRandomBuild(drewChampionObject, role);

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

const drawRandomBuild = (championObject, championRole) => {
  const copiedBootsArray = [...boots];
  let copiedItemsArray = [...items];
  const copiedSupportItemsArray = [...supportItems];

  const drewItems = [];

  if (championObject.rangeType === 'melee') {
    copiedItemsArray = copiedItemsArray.filter(
      (item) => item.itemName !== "Runaan's Hurricane"
    );
  }

  if (championObject.canBuyBoots) {
    const randomBootIndex = getRandomIndex(copiedBootsArray.length);
    const selectedBoot = copiedBootsArray[randomBootIndex];
    drewItems.push(selectedBoot);
  }

  if (championRole === 'Support') {
    const randomSupportItemIndex = getRandomIndex(
      copiedSupportItemsArray.length
    );
    const selectedSupportItem = copiedSupportItemsArray[randomSupportItemIndex];
    drewItems.push(selectedSupportItem);
  }

  const itemRestrictions = {
    //Tear items
    '3040.png': [
      'Muramana',
      'Fimbulwinter',
      'Maw of Malmortius',
      "Sterak's Gage",
      'Immortal Shieldbow',
    ],
    '3042.png': ["Seraph's Embrace", 'Fimbulwinter'],
    '3121.png': ["Seraph's Embrace", 'Muramana'],

    // Armor pen items
    '3036.png': [
      "Serylda's Grudge",
      'Mortal Reminder',
      'Terminus',
      'Black Cleaver',
    ],
    '6694.png': [
      "Lord Dominik's Regards",
      'Mortal Reminder',
      'Terminus',
      'Black Cleaver',
    ],
    '3033.png': [
      "Serylda's Grudge",
      "Lord Dominik's Regards",
      'Terminus',
      'Black Cleaver',
    ],
    '3071.png': [
      "Serylda's Grudge",
      "Lord Dominik's Regards",
      'Terminus',
      'Mortal Reminder',
    ],

    // Magic pen items
    '3302.png': [
      "Serylda's Grudge",
      "Lord Dominik's Regards",
      'Mortal Reminder',
      'Black Cleaver',
      'Void Staff',
      'Cryptbloom',
    ],
    '3135.png': ['Terminus', 'Cryptbloom'],
    '3137.png': ['Terminus', 'Void Staff'],

    // Shield items
    '3156.png': ["Sterak's Gage", "Seraph's Embrace", 'Immortal Shieldbow'],
    '3053.png': ['Maw of Malmortius', "Seraph's Embrace", 'Immortal Shieldbow'],
    '6673.png': ['Maw of Malmortius', "Seraph's Embrace", "Sterak's Gage"],

    // Hydra items
    '3748.png': ['Ravenous Hydra', 'Profane Hydra'],
    '3074.png': ['Titanic Hydra', 'Profane Hydra'],
    '6698.png': ['Ravenous Hydra', 'Titanic Hydra'],

    // Movement items
    '3002.png': ["Dead Man's Plate"],
    '3742.png': ['Trailblazer'],

    // Tank items
    '3068.png': ['Hollow Radiance'],
    '6664.png': ['Sunfire Aegis'],

    // Spellshield items
    '3814.png': ["Banshee's Veil"],
    '3102.png': ['Edge of Night'],

    // Spellblade items
    '3508.png': ['Trinity Force', 'Lich Bane', 'Iceborn Gauntlet', 'Bloodsong'],
    '3078.png': [
      'Essence Reaver',
      'Lich Bane',
      'Iceborn Gauntlet',
      'Bloodsong',
    ],
    '3100.png': [
      'Essence Reaver',
      'Iceborn Gauntlet',
      'Bloodsong',
      'Trinity Force',
    ],
    '3877.png': [
      'Essence Reaver',
      'Iceborn Gauntlet',
      'Trinity Force',
      'Lich Bane',
      'Solstice Sleigh',
      'Celestial Opposition',
      "Zaz'Zak's Realmspike",
      'Dream Maker',
    ],
    '6662.png': ['Essence Reaver', 'Trinity Force', 'Lich Bane', 'Bloodsong'],
  };

  function removeItemByName(array, itemName) {
    const filteredArray = array.filter((item) => item.itemName !== itemName);
    return filteredArray;
  }

  function removeRestrictedItems(itemIcon, itemsArray) {
    if (!itemRestrictions[itemIcon]) {
      return itemsArray;
    }

    return itemRestrictions[itemIcon].reduce(
      (arr, itemName) => removeItemByName(arr, itemName),
      itemsArray
    );
  }

  while (drewItems.length < 6) {
    if (copiedItemsArray.length === 0) {
      break;
    }

    const randomItemIndex = getRandomIndex(copiedItemsArray.length);
    const selectedItem = copiedItemsArray[randomItemIndex];

    drewItems.push(selectedItem);

    const remainingItems = copiedItemsArray.filter(
      (_, index) => index !== randomItemIndex
    );
    copiedItemsArray = removeRestrictedItems(selectedItem.icon, remainingItems);
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
