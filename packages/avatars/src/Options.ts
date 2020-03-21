export type DefaultOptions = {
  radius?: number;
  base64?: boolean;
  width?: number | string;
  height?: number | string;
  margin?: number;
  background?: string;
  userAgent?: string;
};

export default class Options<T = {}, O = DefaultOptions & T> {
  private options: O;
  private defaults: Partial<O>;

  constructor(options: O, defaults: Partial<O> = {}) {
    this.options = options;
    this.defaults = defaults;
  }

  setDefaults(defaults: Partial<O>, override = true) {
    this.defaults = override ? { ...this.defaults, ...defaults } : { ...defaults, ...this.defaults };

    return this;
  }

  has<K extends keyof O>(key: K): boolean {
    return this.options[key] !== undefined;
  }

  get<K extends keyof O>(key: K, defaultValue = this.defaults[key]): O[K] {
    return this.options[key] || defaultValue;
  }

  set<K extends keyof O>(key: K, value: O[K]): O[K] {
    return (this.options[key] = value);
  }

  delete<K extends keyof O>(key: K): boolean {
    return delete this.options[key];
  }
}
