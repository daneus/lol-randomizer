interface Champion {
  championID: string;
  championName: string;
  championTitle: string;
  abilities: string[];
  canBuyBoots: boolean;
  rangeType: 'melee' | 'ranged';
  hasImmobilizingEffects: boolean;
  resourceType: 'mana' | 'energy' | 'rage' | 'nothing' | string;
  canRunUltimateHunter: boolean;
}

interface Item {
  itemName: string;
  icon: string;
}

interface Role {
  role: string;
}

interface RuneObject {
  [key: string]: string;
}

interface RuneRow {
  [key: string]: RuneObject[];
}

interface RunePath {
  keystones: RuneObject[];
  firstRow: RuneObject[];
  secondRow: RuneObject[];
  thirdRow: RuneObject[];
}

interface RuneData {
  [key: string]: {
    [key: string]: RunePath | RuneRow;
  };
}

interface BuildResult {
  championID: string;
  championName: string;
  championTitle: string;
  toMax: string;
  role: string;
  summoners: string[];
  build: Item[];
  runes: {
    AA: RuneObject;
    AB: RuneObject;
    AC: RuneObject;
    AD: RuneObject;
    BA: RuneObject;
    BB: RuneObject;
    CA: RuneObject;
    CB: RuneObject;
    CC: RuneObject;
  };
}