import champions from '../data/champions.json';
import boots from '../data/boots.json';
import mythic from '../data/mythicItems.json';
import legendary from '../data/legendaryItems.json';
import roles from '../data/roles.json';
import runes from '../data/runes.json';
import summoners from '../data/summoners.json';

const randomizeBuild = () => {
  return drawRandomChampion();
};

const drawRandomChampion = () => {
  const randomIndex = Math.floor(Math.random() * 161);
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
  const randomAbilityIndex = Math.floor(
    Math.random() * championObject.abilities.length
  );
  return championObject.abilities[randomAbilityIndex];
};

const drawRandomRole = () => {
  const randomRoleIndex = Math.floor(Math.random() * 5);
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
    const randomSummIndex = Math.floor(Math.random() * copiedSummsArray.length);
    drewSummoners.push(copiedSummsArray[randomSummIndex]);
    drewSummoners.push('Smite');
  } else {
    for (let i = 0; i < 2; i++) {
      const randomSummIndex = Math.floor(
        Math.random() * copiedSummsArray.length
      );
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
    const randomBootIndex = Math.floor(Math.random() * 7);
    drewItems.push(copiedBootsArray[randomBootIndex]);
  }

  const randomMythicIndex = Math.floor(Math.random() * 25);
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

  if (championObject.rangeType !== 'ranged') {
    const runaansIndex = copiedLegendaryArray.findIndex(
      (item) => item.itemName == "Runaan's Hurricane"
    );
    copiedLegendaryArray.splice(runaansIndex, 1);
  }

  while (drewItems.length <= 5) {
    const randomLegendaryIndex = Math.floor(
      Math.random() * copiedLegendaryArray.length
    );

    const legendaryItem = copiedLegendaryArray[randomLegendaryIndex];

    drewItems.push(legendaryItem);
    copiedLegendaryArray.splice(randomLegendaryIndex, 1);

    const legendaryItemID = legendaryItem.icon;

    switch (legendaryItemID) {
      case '3031.png': {
        const guinsoosIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == "Guinsoo's Rageblade"
        );
        copiedLegendaryArray.splice(guinsoosIndex, 1);
        break;
      }
      case '3124.png': {
        const IEIndex = copiedLegendaryArray.findIndex(
          (item) => item.itemName == 'Infinity Edge'
        );
        copiedLegendaryArray.splice(IEIndex, 1);
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

  const randomPrimaryTreeIndex = Math.floor(
    Math.random() * copiedRunePaths.length
  );
  const drewPrimaryTree = copiedRunePaths[randomPrimaryTreeIndex];
  mainTrees.push(drewPrimaryTree);
  copiedRunePaths.splice(randomPrimaryTreeIndex, 1);

  const randomSecondaryTreeIndex = Math.floor(
    Math.random() * copiedRunePaths.length
  );
  const drewSecondaryTree = copiedRunePaths[randomSecondaryTreeIndex];
  mainTrees.push(drewSecondaryTree);

  //Getting random AA
  const possibleAAIndexes = [
    ...Array(
      copiedRunesArray[randomPrimaryTreeIndex][mainTrees[0]][0]['keystones']
        .length
    ).keys(),
  ];
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
    possibleAAIndexes[Math.floor(Math.random() * possibleAAIndexes.length)];

  //Getting random AB
  const possibleABIndexes = [
    ...Array(
      copiedRunesArray[randomPrimaryTreeIndex][mainTrees[0]][1]['firstRow']
        .length
    ).keys(),
  ];
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
    possibleABIndexes[Math.floor(Math.random() * possibleABIndexes.length)];

  //Getting random AC
  const randomACIndex = Math.floor(
    Math.random() *
      copiedRunesArray[randomPrimaryTreeIndex][mainTrees[0]][2]['secondRow']
        .length
  );

  //Getting random AD
  const possibleADIndexes = [
    ...Array(
      copiedRunesArray[randomPrimaryTreeIndex][mainTrees[0]][3]['thirdRow']
        .length
    ).keys(),
  ];
  if (!championObject.canRunUltimateHunter) {
    if (mainTrees[0] === 'Domination') {
      possibleADIndexes.splice(3, 1);
    }
  }
  const randomADIndex =
    possibleADIndexes[Math.floor(Math.random() * possibleADIndexes.length)];

  const secondaryRunePathOptions = [
    { firstRow: 'firstRow', index: 1 },
    { secondRow: 'secondRow', index: 2 },
    { thirdRow: 'thirdRow', index: 3 },
  ];

  const secondaryPaths = [];

  const randomBA = Math.floor(Math.random() * secondaryRunePathOptions.length);
  const drewBA = secondaryRunePathOptions[randomBA];
  secondaryPaths.push(drewBA);
  secondaryRunePathOptions.splice(randomBA, 1);
  const randomBB = Math.floor(Math.random() * secondaryRunePathOptions.length);
  const drewBB = secondaryRunePathOptions[randomBB];
  secondaryPaths.push(drewBB);

  //Getting random BA
  switch (Object.keys(secondaryPaths[0])[0]) {
    case 'firstRow':
      const possibleBA1Indexes = [
        ...Array(
          Object.values(
            copiedRunesArray[runePaths.indexOf(mainTrees[1])][mainTrees[1]][
              secondaryPaths[0].index
            ]
          )[0].length
        ).keys(),
      ];
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
        possibleBA1Indexes[
          Math.floor(Math.random() * possibleBA1Indexes.length)
        ];
      break;

    case 'secondRow':
      var randomBAIndex = Math.floor(
        Math.random() *
          Object.values(
            copiedRunesArray[runePaths.indexOf(mainTrees[1])][mainTrees[1]][2]
          )[0].length
      );
      break;

    case 'thirdRow':
      const possibleBA2Indexes = [
        ...Array(
          Object.values(
            copiedRunesArray[runePaths.indexOf(mainTrees[1])][mainTrees[1]][
              secondaryPaths[0].index
            ]
          )[0].length
        ).keys(),
      ];
      if (!championObject.canRunUltimateHunter) {
        if (mainTrees[1] === 'Domination') {
          possibleBA2Indexes.splice(3, 1);
        }
      }
      var randomBAIndex =
        possibleBA2Indexes[
          Math.floor(Math.random() * possibleBA2Indexes.length)
        ];
      break;
  }

  //Getting random BB
  switch (Object.keys(secondaryPaths[1])[0]) {
    case 'firstRow':
      const possibleBB1Indexes = [
        ...Array(
          Object.values(
            copiedRunesArray[runePaths.indexOf(mainTrees[1])][mainTrees[1]][
              secondaryPaths[1].index
            ]
          )[0].length
        ).keys(),
      ];
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
        possibleBB1Indexes[
          Math.floor(Math.random() * possibleBB1Indexes.length)
        ];
      break;

    case 'secondRow':
      var randomBBIndex = Math.floor(
        Math.random() *
          Object.values(
            copiedRunesArray[runePaths.indexOf(mainTrees[1])][mainTrees[1]][2]
          )[0].length
      );
      break;

    case 'thirdRow':
      const possibleBB2Indexes = [
        ...Array(
          Object.values(
            copiedRunesArray[runePaths.indexOf(mainTrees[1])][mainTrees[1]][
              secondaryPaths[1].index
            ]
          )[0].length
        ).keys(),
      ];
      if (!championObject.canRunUltimateHunter) {
        if (mainTrees[1] === 'Domination') {
          possibleBB2Indexes.splice(3, 1);
        }
      }
      var randomBBIndex =
        possibleBB2Indexes[
          Math.floor(Math.random() * possibleBB2Indexes.length)
        ];
      break;
  }

  const randomCAIndex = Math.floor(
    Math.random() * copiedRunesArray[5]['Stats'][0]['firstRow'].length
  );

  const randomCBIndex = Math.floor(
    Math.random() * copiedRunesArray[5]['Stats'][1]['secondRow'].length
  );

  const randomCCIndex = Math.floor(
    Math.random() * copiedRunesArray[5]['Stats'][2]['thirdRow'].length
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
