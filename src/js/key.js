class KeyId {
  // corresponds to a physical key (placement on the board)
  constructor() {
    this.value = Date.now(); // Create a new unique ID based on current timestamp
  }
  // Add methods to make it work well with Sets
  valueOf() {
    return this.value;
  }

  toString() {
    return this.value.toString();
  }

  [Symbol.toPrimitive]() {
    return this.value;
  }
}

export default KeyId;
