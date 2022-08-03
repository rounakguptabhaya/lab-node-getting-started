class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a > b ? 1 : -1);
    this.length = this.items.length;
  }
  get(i) {
    if (i >= this.items.length) {
      throw new Error('OutOfBounds')
    }
    return this.items[i];
  }
  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    else {
      return Math.max(...this.items);
    }
  }
  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }

    else {
      return Math.min(...this.items);
    }
  }
  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    else {
      var s = 0;
      this.items.forEach(function (item) {
        s = s + item;
      })
      return s / this.items.length;
    }

  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    else {
      var s = 0;
      this.items.forEach(function (item) {
        s = s + item;
      })
      return s;
    }

  }

};

module.exports = SortedList;
