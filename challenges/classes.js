// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerRefactor {
  constructor(cuboidMakerAttrs) {
    this.length = cuboidMakerAttrs.length;
    this.width = cuboidMakerAttrs.width;
    this.height = cuboidMakerAttrs.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class CubeMaker extends CuboidMakerRefactor {
  constructor(cubeMakerAttrs) {
    super(cubeMakerAttrs);
  }
  volume() {
    return this.width * this.width * this.width;
  }
  surfaceArea() {
    return 6 * (this.width * this.width);
  } 
}

const cuboidRefactor = new CuboidMakerRefactor ({
  length: 4, 
  width: 5,
  height: 5
});

const cube = new CuboidMakerRefactor ({
  length: 5,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(cuboidRefactor.volume()); // 100
console.log(cuboidRefactor.surfaceArea()); // 130
console.log(cube.volume());
console.log(cube.surfaceArea());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.





