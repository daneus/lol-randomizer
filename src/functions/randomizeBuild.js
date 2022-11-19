import champions from '../data/champions.json';
import boots from '../data/boots.json';
import mythic from '../data/mythicItems.json';
import legendary from '../data/legendaryItems.json';
import roles from '../data/roles.json';
import runes from '../data/runes.json';
import summoners from '../data/summoners.json';

const getRandomIndex = (amount) => {
  return Math.floor(Math.random() * amount);
};

const randomizeBuild = () => {
  return drawRandomChampion();
};

const drawRandomChampion = () => {
  const randomIndex = getRandomIndex(161);
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
  const drewSummoners = [];
  if (role === 'Jungle') {
    copiedSummsArray.splice(7, 1);
    const randomSummIndex = getRandomIndex(copiedSummsArray.length);
    drewSummoners.push(copiedSummsArray[randomSummIndex]);
    drewSummoners.push('Smite');
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
  const copiedMythicArray = mythic.slice(0);
  const copiedLegendaryArray = legendary.slice(0);

  const drewItems = [];

  if (championObject.canBuyBoots) {
    const randomBootIndex = getRandomIndex(7);
    drewItems.push(copiedBootsArray[randomBootIndex]);
  }

  const randomMythicIndex = getRandomIndex(28);
  const drewMythic = copiedMythicArray[randomMythicIndex];

  drewItems.push(drewMythic);

  if (drewMythic.itemName === 'Immortal Shieldbow') {
    const mawIndex = copiedLegendaryArray.findIndex(
      (item) => item.itemName == 'Maw of Malmortius'
    );
    const steraksIndex = copiedLegendaryArray.findIndex(
      (item) => item.itemName == "Sterak's Gage"
    );
    copiedLegendaryArray.splice(mawIndex, 1);
    copiedLegendaryArray.splice(steraksIndex, 1);
  }

  if (drewMythic.itemName === 'Rod of Ages') {
    const abyssalIndex = copiedLegendaryArray.findIndex(
      (item) => item.itemName == 'Abyssal Mask'
    );
    copiedLegendaryArray.splice(abyssalIndex, 1);
  }

  if (championObject.rangeType !== 'ranged') {
    const runaansIndex = copiedLegendaryArray.findIndex(
      (item) => item.itemName == "Runaan's Hurricane"
    );
    copiedLegendaryArray.splice(runaansIndex, 1);
  }

  while (drewItems.length <= 5) {
    const randomLegendaryIndex = getRandomIndex(copiedLegendaryArray.length);

    const legendaryItem = copiedLegendaryArray[randomLegendaryIndex];

    drewItems.push(legendaryItem);
    copiedLegendaryArray.splice(randomLegendaryIndex, 1);

    const legendaryItemID = legendaryItem.icon;

    switch (legendaryItemID) {
      case '3031.png': {
        const guinsoosIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == "Guinsoo's Rageblade"
        );
        const navoriIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == 'Navori Quickblades'
        );
        copiedLegendaryArray.splice(guinsoosIndex, 1);
        copiedLegendaryArray.splice(navoriIndex, 1);
        break;
      }
      case '3124.png': {
        const IEIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == 'Infinity Edge'
        );
        const navoriIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == 'Navori Quickblades'
        );
        copiedLegendaryArray.splice(IEIndex, 1);
        copiedLegendaryArray.splice(navoriIndex, 1);
        break;
      }
      case '6675.png': {
        const IEIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == 'Infinity Edge'
        );
        const guinsoosIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == "Guinsoo's Rageblade"
        );
        const shojinIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == 'Spear of Shojin'
        );
        copiedLegendaryArray.splice(IEIndex, 1);
        copiedLegendaryArray.splice(guinsoosIndex, 1);
        copiedLegendaryArray.splice(shojinIndex, 1);
        break;
      }
      case '3161.png': {
        const navoriIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == 'Navori Quickblades'
        );
        copiedLegendaryArray.splice(navoriIndex, 1);
        break;
      }
      case '3040.png': {
        const muramanaIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == 'Muramana'
        );
        const fimbulwinter1Index = copiedLegendaryArray.findIndex(
          (item) => item.itemName == 'Fimbulwinter'
        );
        copiedLegendaryArray.splice(muramanaIndex, 1);
        copiedLegendaryArray.splice(fimbulwinter1Index, 1);
        break;
      }
      case '3042.png': {
        const seraphsIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == "Seraph's Embrace"
        );
        const fimbulwinter2Index = copiedLegendaryArray.findIndex(
          (item) => item.itemName == 'Fimbulwinter'
        );
        copiedLegendaryArray.splice(seraphsIndex, 1);
        copiedLegendaryArray.splice(fimbulwinter2Index, 1);
        break;
      }
      case '3121.png': {
        const seraphs2Index = copiedLegendaryArray.findIndex(
          (item) => item.itemName == "Seraph's Embrace"
        );
        const muramana2Index = copiedLegendaryArray.findIndex(
          (item) => item.itemName == 'Muramana'
        );
        copiedLegendaryArray.splice(seraphs2Index, 1);
        copiedLegendaryArray.splice(muramana2Index, 1);
        break;
      }
      case '3036.png': {
        const seryldasIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == "Serylda's Grudge"
        );
        copiedLegendaryArray.splice(seryldasIndex, 1);
        break;
      }
      case '6694.png': {
        const ldrIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == "Lord Dominik's Regards"
        );
        copiedLegendaryArray.splice(ldrIndex, 1);
        break;
      }
      case '3156.png': {
        const steraksIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == "Sterak's Gage"
        );
        copiedLegendaryArray.splice(steraksIndex, 1);
        break;
      }
      case '3053.png': {
        const mawIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == 'Maw of Malmortius'
        );
        copiedLegendaryArray.splice(mawIndex, 1);
        break;
      }
      case '3139.png': {
        const silvermereIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == 'Silvermere Dawn'
        );
        copiedLegendaryArray.splice(silvermereIndex, 1);
        break;
      }
      case '6035.png': {
        const scimitarIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == 'Mercurial Scimitar'
        );
        copiedLegendaryArray.splice(scimitarIndex, 1);
        break;
      }
      case '3748.png': {
        const ravenousIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == 'Ravenous Hydra'
        );
        copiedLegendaryArray.splice(ravenousIndex, 1);
        break;
      }
      case '3074.png': {
        const titanicIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == 'Titanic Hydra'
        );
        copiedLegendaryArray.splice(titanicIndex, 1);
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
