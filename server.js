const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// 1. Correct Import for the brand-new @google/genai SDK
const { GoogleGenAI } = require('@google/genai');

const app = express();
const PORT = process.env.PORT || 5000;

// 2. Correct Initialization matching the new SDK syntax
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "MOCK_KEY" });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve all static files (HTML, CSS, JS) directly from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// In-memory array data store for your medicines
let medicineInventoryStore = [];

// API Route: Add medicine to local store
app.post('/api/medicines', (req, res) => {
  const { name, category, count, timings, notes } = req.body;
  if (!name || !count) {
    return res.status(400).json({ error: 'Missing core properties.' });
  }
  const identityRecord = {
    id: medicineInventoryStore.length + 1,
    name, category, count, timings: timings || [], notes
  };
  medicineInventoryStore.push(identityRecord);
  res.status(201).json({ success: true, record: identityRecord });
});

// API Route: Get all medicines
app.get('/api/medicines', (req, res) => {
  res.json(medicineInventoryStore);
});

// FIXED AI ROUTE: Using the clean, new SDK syntax
app.post('/api/ai-advice', async (req, res) => {
  const { medicineName, notes } = req.body;

  if (!medicineName) {
    return res.status(400).json({ error: 'Medicine name is required for AI analysis.' });
  }

  try {
    // Correct method call for the new SDK structure
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Provide a short, 2-sentence safe advisory tip for an undergraduate healthcare tracking app regarding the medicine: "${medicineName}". User note details: "${notes || 'None'}". Mention common standard precautions (e.g., take with food, avoid skipping, or standard timing notes). Disclaimer: Keep it educational.`,
    });

    res.json({ 
      success: true, 
      advice: response.text 
    });

  } catch (error) {
    console.error("AI Generation Error:", error);
    res.status(500).json({ error: "Failed to generate AI tips. Verify your GEMINI_API_KEY inside your .env file." });
  }
});

// Fallback route: Serves your index.html if someone types anything else
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Backend processing portal listening over: http://localhost:${PORT}`);
});