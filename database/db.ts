import { data } from "./data";

class Database {
  constructor() {}

  async getAll(): Promise<TProduct[]> {
    const asArray = Object.values(data);
    await randomDelay();
    return asArray;
  }

  async getByID(id: string): Promise<TProduct | null> {
    if (!Object.prototype.hasOwnProperty.call(data, id)) {
      return null;
    }
    const entry = data[id];
    await randomDelay();

    return entry;
  }
}

const randomDelay = () =>
  new Promise((resolve) => {
    const max = 350;
    const min = 100;
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;

    setTimeout(resolve, delay);
  });

export { Database };
