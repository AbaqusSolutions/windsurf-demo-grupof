import { getSize, calculateCenterOfMass } from './utils.js';
import { WORLD_SIZE, COLORS, FOOD_SIZE } from './config.js';

const DEFAULT_MINIMAP_SIZE = 150;

export class GameRenderer {
    constructor(gameState, canvasElements, { minimapSize = DEFAULT_MINIMAP_SIZE } = {}) {
        this.gameState = gameState;
        this.canvas = canvasElements.gameCanvas;
        this.ctx = this.canvas.getContext('2d');
        this.minimapCanvas = canvasElements.minimapCanvas;
        this.minimapCtx = this.minimapCanvas.getContext('2d');
        this.scoreElement = canvasElements.scoreElement;
        this.leaderboardContent = canvasElements.leaderboardContent;
        this.minimapSize = minimapSize;

        this.resizeCanvas();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    _drawCircle(x, y, value, color, isFood) {
        const size = isFood ? value : getSize(value);
        this.ctx.beginPath();
        this.ctx.arc(x, y, size, 0, Math.PI * 2);
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }

    _drawCellWithName(x, y, score, color, name) {
        const size = getSize(score);

        this.ctx.beginPath();
        this.ctx.arc(x, y, size, 0, Math.PI * 2);
        this.ctx.fillStyle = color;
        this.ctx.fill();

        if (size > 20) {
            this.ctx.save();

            const fontSize = Math.max(12, Math.min(20, size / 2));
            this.ctx.font = `bold ${fontSize}px Arial`;
            this.ctx.fillStyle = 'white';
            this.ctx.strokeStyle = 'black';
            this.ctx.lineWidth = 3;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';

            this.ctx.strokeText(name, x, y);
            this.ctx.fillText(name, x, y);

            this.ctx.restore();
        }
    }

    drawGame() {
        if (!this.ctx) return;

        const { gameState } = this;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const centerOfMass = calculateCenterOfMass(gameState.playerCells);
        gameState.camera.x = centerOfMass.x - this.canvas.width / 2;
        gameState.camera.y = centerOfMass.y - this.canvas.height / 2;

        gameState.food.forEach(food => {
            const screenX = food.x - gameState.camera.x;
            const screenY = food.y - gameState.camera.y;

            if (screenX >= -FOOD_SIZE && screenX <= this.canvas.width + FOOD_SIZE &&
                screenY >= -FOOD_SIZE && screenY <= this.canvas.height + FOOD_SIZE) {
                this._drawCircle(screenX, screenY, FOOD_SIZE, food.color, true);
            }
        });

        gameState.aiPlayers.forEach(ai => {
            const screenX = ai.x - gameState.camera.x;
            const screenY = ai.y - gameState.camera.y;
            const size = getSize(ai.score);

            if (screenX >= -size && screenX <= this.canvas.width + size &&
                screenY >= -size && screenY <= this.canvas.height + size) {
                this._drawCellWithName(screenX, screenY, ai.score, ai.color, ai.name);
            }
        });

        gameState.playerCells.forEach(cell => {
            const screenX = cell.x - gameState.camera.x;
            const screenY = cell.y - gameState.camera.y;
            const size = getSize(cell.score);

            if (screenX >= -size && screenX <= this.canvas.width + size &&
                screenY >= -size && screenY <= this.canvas.height + size) {
                this._drawCellWithName(screenX, screenY, cell.score, COLORS.PLAYER, gameState.playerName);
            }
        });

        this.scoreElement.textContent = `Score: ${Math.floor(gameState.playerCells.reduce((sum, cell) => sum + cell.score, 0))}`;
    }

    drawMinimap() {
        if (!this.minimapCtx) return;

        const { gameState, minimapSize } = this;
        const scale = minimapSize / WORLD_SIZE;

        this.minimapCtx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        this.minimapCtx.fillRect(0, 0, minimapSize, minimapSize);

        const viewWidth = this.canvas.width * scale;
        const viewHeight = this.canvas.height * scale;
        const viewX = gameState.camera.x * scale;
        const viewY = gameState.camera.y * scale;
        this.minimapCtx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        this.minimapCtx.strokeRect(viewX, viewY, viewWidth, viewHeight);

        gameState.aiPlayers.forEach(ai => {
            this.minimapCtx.beginPath();
            this.minimapCtx.arc(
                ai.x * scale,
                ai.y * scale,
                2,
                0,
                Math.PI * 2
            );
            this.minimapCtx.fillStyle = COLORS.MINIMAP.OTHER;
            this.minimapCtx.fill();
        });

        gameState.playerCells.forEach(cell => {
            this.minimapCtx.beginPath();
            this.minimapCtx.arc(
                cell.x * scale,
                cell.y * scale,
                3,
                0,
                Math.PI * 2
            );
            this.minimapCtx.fillStyle = COLORS.MINIMAP.PLAYER;
            this.minimapCtx.fill();
        });
    }

    updateLeaderboard() {
        if (!this.leaderboardContent) return;

        const { gameState } = this;
        const playerTotalScore = gameState.playerCells.reduce((sum, cell) => sum + cell.score, 0);

        const allPlayers = [
            {
                name: gameState.playerName,
                score: playerTotalScore,
                isPlayer: true
            },
            ...gameState.aiPlayers.map(ai => ({
                name: ai.name,
                score: ai.score,
                isPlayer: false
            }))
        ];

        allPlayers.sort((a, b) => a.score - b.score);

        this.leaderboardContent.innerHTML = allPlayers
            .slice(0, 5)
            .map((player, index) => `
            <div class="leaderboard-item">
                <span class="${player.isPlayer ? 'player-name' : ''}">${index + 1}. ${player.name}</span>
                <span>${Math.floor(player.score)}</span>
            </div>
        `)
            .join('');
    }
}
