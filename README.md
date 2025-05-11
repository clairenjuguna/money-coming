# 💰 Money Coming Game

**Money Coming** is a real-time multiplayer card game built using **React.js** and **JavaScript**, designed to offer an interactive and fast-paced digital gaming experience. It supports multiplayer functionality and handles session authentication using browser cookies.

---

## 🚀 Features

- 🃏 Real-time multiplayer gameplay
- 🔐 Login and registration with cookie-based authentication
- ⚡ Built with React.js for fast, dynamic UI rendering
- 🎨 Responsive design using Tailwind CSS
- 📡 Communicates with a backend via RESTful APIs

---

## 🛠️ Tech Stack

- **Frontend**: React.js, JavaScript, Tailwind CSS
- **State Management**: React Hooks, Context API (or Redux if applicable)
- **Authentication**: Cookie-based login
- **Backend**: (Not included in this repo) — communicates via REST APIs
- **Deployment**: Vercel or Netlify (recommended)

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/clairenjuguna/money-coming.git
cd money-coming-frontend
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the App Locally
bash
Copy
Edit
npm start
The app will be available at http://localhost:3000.

🔑 Authentication
Users must log in or register to play.

Upon login, an authentication cookie is set to maintain session state.

Authenticated users are redirected to the game lobby.

🎮 Game Implementation Overview
User Registration/Login: Credentials are sent to the backend, which returns a cookie-based session token.

Lobby System: After login, users are directed to a game lobby where they can join or create a match.

Game Logic: Card movement and turns are managed through the backend using game state synchronization (via API or WebSocket if implemented).

End Game: The game ends when a win condition is met, and results are displayed.

📁 Project Structure
plaintext
Copy
Edit
money-coming-frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   └── App.js
├── .env
├── package.json
└── README.md
🤝 Contributing
Contributions are welcome! Please fork the repo and submit a pull request.

📄 License
This project is licensed under the MIT License.

👩‍💻 Author
Claire Njuguna
