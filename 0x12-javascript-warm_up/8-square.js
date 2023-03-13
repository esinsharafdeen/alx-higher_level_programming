#!/usr/bin/node
const size = process.argv[2];

const sizeInt = parseInt(size);

if (isNaN(sizeInt)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < sizeInt; i++) {
    console.log("X".repeat(sizeInt));
  }
}
