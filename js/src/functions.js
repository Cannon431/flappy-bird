export function random(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

export function randomElement(array) {
    return array[random(0, array.length - 1)];
}
