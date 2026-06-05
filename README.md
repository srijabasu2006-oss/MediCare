# 💊 MediCare — Medicine Reminder & Tracker

MediCare is an interactive, AI-powered healthcare dashboard designed to help users track their daily medications, log adherence, and manage schedules safely. It includes a built-in voice assistant capable of identifying missed doses using microphone input.

---

## 🛠️ Tech Stack

### Frontend
* **HTML5 & CSS3** — Responsive layout, grid structures, and smooth UI transitions.
* **JavaScript (Vanilla ES6)** — DOM manipulation, state management, and API integration.
* **Web Speech API** — Browser-native `SpeechRecognition` for listening to user input and `SpeechSynthesis` for audio-voice replies.
* **Tabler Icons** — Webfont icons for dashboard analytics.

### Backend
* **Node.js & Express** — REST API framework handling medicine logging, inventory persistence, and client routing.
* **@google/genai SDK** — Next-generation SDK used to interface with the **Gemini 2.5 Flash** model for smart, context-aware safety advisory alerts.
* **Dotenv** — Environment variable separation to secure sensitive API keys.

---

## 🚀 Features

* **Real-time Tracker Dashboard:** Monitor daily medication adherence states (Taken, Pending, Missed).
* **AI Safety Tips:** Uses the Gemini 2.5 Flash model to dynamically read user notes and output personalized medical precaution advice.
* **Voice Assistant Interface:** Hands-free microphone tracking. Users can click the mic button and ask *"Which medicine is missed?"* to receive spoken feedback directly through their speakers.
* **Compliance Analytics:** Clean progress counters showing daily compliance metrics.