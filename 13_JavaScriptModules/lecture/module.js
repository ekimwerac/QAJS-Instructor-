// module.js

export function areaCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

export function areaTriangle(base, height) {
    return 0.5 * base * height;
}

export function areaSquare(side) {
    return side * side;
}

export function areaRectangle(length, width) {
    return length * width;
}
