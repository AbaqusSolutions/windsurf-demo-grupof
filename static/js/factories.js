import { getRandomPosition } from './utils.js';
import { AI_STARTING_SCORE } from './config.js';

export function createFood() {
    const pos = getRandomPosition();
    return {
        x: pos.x,
        y: pos.y,
        color: `hsl(${Math.random() * 360}, 50%, 50%)`
    };
}

export function createAI(name) {
    const pos = getRandomPosition();
    return {
        x: pos.x,
        y: pos.y,
        score: AI_STARTING_SCORE,
        color: `hsl(${Math.random() * 360}, 70%, 50%)`,
        direction: Math.random() * Math.PI * 2,
        name: name
    };
}

export function createPlayerCell(x, y, score) {
    return {
        x: x,
        y: y,
        score: score,
        velocityX: 0,
        velocityY: 0
    };
}
