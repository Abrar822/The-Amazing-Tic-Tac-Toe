# 🎮 Tic Tac Toe — Smart AI Edition

A modern, beautifully styled **Tic Tac Toe game** built with **React**, featuring both **Two-Player mode** and an **Unbeatable AI powered by the Minimax algorithm**.

This project focuses on **clean component architecture**, **game logic correctness**, and **engaging user experience**.

---

## ✨ Features

### 🧠 Game Modes

* **You vs AI**

  * AI uses **Minimax algorithm** (perfect play)
  * Impossible to beat 😈
* **Two-Player Mode**

  * Play locally with a friend
  * Randomized starting player

### 🎨 UI / UX Highlights

* Glassmorphism design
* Smooth hover & click animations
* Highlighted winning cells
* Turn indicators
* Clean modal-style messages
* Fully responsive layout

### 🔁 Game Controls

* Play Again
* New Game
* Back to Mode Selection

---

## 🛠️ Tech Stack

* **React (Hooks)**
* **JavaScript (ES6+)**
* **CSS3 (Glassmorphism + Animations)**

No external libraries.
Everything is built **from scratch**.

---

## 🧠 AI Logic (Minimax)

The AI player (`O`) uses the **Minimax algorithm** to always choose the optimal move.

### Scoring Logic:

| Outcome           | Score |
| ----------------- | ----- |
| AI wins (`O`)     | `+1`  |
| Player wins (`X`) | `-1`  |
| Draw              | `0`   |

The AI:

* Explores all possible game states
* Maximizes its score
* Minimizes the human player's chances
* Guarantees at least a draw

> ⚠️ Result: **AI is unbeatable**

---

## 📂 Project Structure

```
src/
│── App.jsx          # Main app logic & state
│── Board.jsx        # Two-player board
│── BoardAI.jsx      # AI board (Minimax)
│── Input.jsx        # Player name input
│── Starter.jsx     # Mode selection
│── Msg.jsx          # Game messages
│── TurnMsg.jsx      # Turn indicator
│── App.css          # Complete styling
```

Each component has a **single responsibility**, making the project easy to scale and maintain.

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/your-username/tic-tac-toe-ai.git
cd tic-tac-toe-ai
npm install
npm run dev
```

Open your browser at:

```
http://localhost:5173
```

---

## 🧪 Future Improvements

* Difficulty levels (Easy / Medium / Hard)
* Alpha-Beta pruning optimization
* Move history & undo feature
* Sound effects

---

## 👨‍💻 Author

**Shekh Abrar**
Computer Engineering Student
Passionate about **Frontend, Algorithms & Game Logic**
