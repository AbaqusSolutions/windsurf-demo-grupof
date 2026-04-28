from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

# Game state
WORLD_SIZE = 2000
NUM_AI_PLAYERS = 10
NUM_FOOD = 100

@app.route('/')
def index():
    return render_template('game.html')

@app.route('/game_state')
def game_state():
    return jsonify({
        'status': 'ok',
        'world_size': WORLD_SIZE,
        'num_ai_players': NUM_AI_PLAYERS,
        'num_food': NUM_FOOD
    })

@app.route('/update_player', methods=['POST'])
def update_player():
    data = request.get_json()
    if data is None:
        return jsonify({'error': 'Request body must be valid JSON'}), 400
    if 'x' not in data or 'y' not in data:
        return jsonify({'error': 'Missing required fields: x, y'}), 400
    if not isinstance(data['x'], (int, float)) or not isinstance(data['y'], (int, float)):
        return jsonify({'error': 'Fields x and y must be numeric'}), 400
    return jsonify({'status': 'ok', 'received': data})

@app.errorhandler(400)
def bad_request(e):
    return jsonify({'error': 'Bad request', 'message': str(e)}), 400


@app.errorhandler(500)
def internal_error(e):
    return jsonify({'error': 'Internal server error'}), 500


if __name__ == '__main__':
    app.run(debug=True)