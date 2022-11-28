export default class Bet {
  constructor(name, amount, returns) {
    this._name = name;
    this._amount = amount;
    this._returns = returns;
    this.calcIfIsPositive();
  }

  calcIfIsPositive() {
    this._isPositive = this._returns > this._amount;
  }

  get name() {
    return this._name;
  }

  get amount() {
    return this._amount;
  }

  get returns() {
    return this._returns;
  }

  get isPositive() {
    return this._isPositive;
  }
}
