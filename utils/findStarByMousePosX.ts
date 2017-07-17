const findStarByMousePosX = (mousePosX: number, stars: Array<IRating>): number  => {
    let min = 0;
    let max = stars.length - 1;
    let guess;

    while (min <= max) {
        guess = Math.floor((min + max) / 2);
        if (mousePosX >= stars[guess].left && mousePosX <= stars[guess].right) {
            return guess;
        } else if (mousePosX > stars[guess].right) {
            min = guess + 1;
        } else if (mousePosX < stars[guess].left) {
            max = guess - 1;
        }
    }
    return -1;
};

export default findStarByMousePosX;