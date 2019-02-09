export default class {
  constructor(description, value) {
    this.description = description;
    this.value = value;
  }

  toArray() {
    return [this.description, this.value];
  }

  static fromRows(rows) {
    return rows.map(row => ({
      id: row[0],
      description: row[1],
      value: row[2],
    }));
  }
}
