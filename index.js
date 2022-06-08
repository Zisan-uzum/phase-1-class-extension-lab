// Your code here
class Polygon {
    constructor(array) {
        this.sides = array;
    }
    get countSides() {
        return this.sides.length;
    }
    get perimeter() {
        return this.sides.reduce((acc, curr) => {
            return acc + curr;
        }, 0);
    }
}
class Triangle extends Polygon {
    get isValid() {
        let res = true;
        this.sides.sort((a, b) => a - b);
        if (this.sides[0] + this.sides[1] <= this.sides[2]) {
            res = false;
        }
        return res;
    }
}
class Square extends Polygon {
    get isValid() {
        if (!Array.isArray(this.sides) || this.countSides !== 4) return false;
        const [side1, side2, side3, side4] = this.sides;
        return side1 === side2 && side1 === side3 && side1 === side4;
    }

    get area() {
        if (!Array.isArray(this.sides) || this.countSides !== 4) return false;
        return this.sides[0] * this.sides[0];
    }
}
