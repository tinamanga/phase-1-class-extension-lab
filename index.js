// Your code here
// Polygon class
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    // Getter for countSides: returns the number of sides
    get countSides() {
      return this.sides.length;
    }
  
    // Getter for perimeter: returns the sum of the sides
    get perimeter() {
      return this.sides.reduce((total, side) => total + side, 0);
    }
  }
  
  // Triangle class that inherits from Polygon
  class Triangle extends Polygon {
    constructor(sides) {
      super(sides); // Call the parent class constructor
    }
  
    // Getter to check if the triangle is valid
    get isValid() {
      const [a, b, c] = this.sides;
      // Check if the sum of two sides is greater than the third side
      return (a + b > c && a + c > b && b + c > a);
    }
  }
  
  // Square class that inherits from Polygon
  class Square extends Polygon {
    constructor(sides) {
      super(sides); // Call the parent class constructor
    }
  
    // Getter to check if the square is valid
    get isValid() {
      return this.sides.every(side => side === this.sides[0]);
    }
  
    // Getter to calculate the area of the square
    get area() {
      return this.sides[0] ** 2;
    }
  }
  
  // Example usage:
  
  // Polygon example (General polygon, not necessarily a shape)
  const polygon = new Polygon([3, 4, 5]);
  console.log(polygon.countSides);  // Output: 3
  console.log(polygon.perimeter);  // Output: 12
  
  // Triangle example
  const triangle = new Triangle([3, 4, 5]);
  console.log(triangle.countSides);  // Output: 3
  console.log(triangle.perimeter);  // Output: 12
  console.log(triangle.isValid);    // Output: true
  
  // Square example
  const square = new Square([4, 4, 4, 4]);
  console.log(square.countSides);  // Output: 4
  console.log(square.perimeter);  // Output: 16
  console.log(square.isValid);    // Output: true
  console.log(square.area);       // Output: 16
  