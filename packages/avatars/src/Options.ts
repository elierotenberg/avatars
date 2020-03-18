export type DefaultOptions = {
  radius?: number;
  base64?: boolean;
  width?: number | string;
  height?: number | string;
  margin?: number;
  background?: string;
  userAgent?: string;
};

export default class Options<T, O = T & DefaultOptions> {
  private options: O;
  private defaults: O;

  constructor(options: O, defaults?: O) {
    this.options = options;
    this.defaults = defaults;
  }

  setDefaults(defaults: O) {
    this.defaults = defaults;

    return this;
  }

  has<K extends keyof O>(key: K): boolean {
    return this.options[key] !== undefined;
  }

  get<K extends keyof O>(key: K, defaultValue: any = this.defaults && this.defaults[key]): O[K] | any {
    if (false === this.has(key)) {
      return defaultValue;
    }

    return this.options[key];
  }

  set<K extends keyof O>(key: K, value: any): O[K] {
    return (this.options[key] = value);
  }

  delete<K extends keyof O>(key: K): boolean {
    return delete this.options[key];
  }

  includes<K extends keyof O>(key: K, searchElement: any, fallback = true) {
    if (this.has(key)) {
      const value = this.get(key);

      if (Array.isArray(value)) {
        return value.includes(searchElement);
      }
    }

    return fallback;
  }
}
