#!/usr/bin/node

class Rectangle {
  constructor(w, h) {
    if (Number.isInteger(w) && w > 0 && Number.isInteger(h) && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      // create an empty object if w or h is not a positive integer
      return {};
    }
  }
}

