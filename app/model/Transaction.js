export default class {
  constructor(category, description, amount, date) {
    this.category = category;
    this.description = description;
    this.amount = amount;
    this.date = date;
  }

  toArray() {
    return [this.category, this.description, this.amount, this.date];
  }

  static fromRow(row) {
    return {
      id: row[0],
      category: row[1],
      description: row[2],
      amount: row[3],
      date: row[4],
    };
  }
}
