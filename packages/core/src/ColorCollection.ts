import defaultColors from './common/defaultColors';

export type Colors = {
  [level: number]: {
    [key: string]: string;
  };
};

export default class ColorCollection {
  private colors: Colors;

  constructor(colors: Colors = defaultColors) {
    this.colors = colors;
  }

  all(): Colors {
    return this.colors;
  }

  get<L extends number>(level: L): Colors[L] {
    return this.colors[level];
  }
}
