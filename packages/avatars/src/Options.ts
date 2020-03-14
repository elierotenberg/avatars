export default class Options<O extends {}> {
  private options: O;

  constructor(options: O) {
    this.options = options;
  }

  has<K extends keyof O>(key: K): boolean {
    return this.options[key] !== undefined;
  }

  get<K extends keyof O, D = null>(key: K, defaultValue: D = null): O[K] | D {
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
