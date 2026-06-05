// Tab Switching System
function showTab(tabId, element) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.querySelectorAll('.nav-item').forEach(navItem => {
    navItem.classList.remove('active');
  });

  document.getElementById(tabId).classList.add('active');
  if (element) {
    element.classList.add('active');
  }
}

// Interactive Timing Configuration Selector
function toggleChip(element) {
  element.classList.toggle('selected');
}

// Dynamic Action Hook for Updates
function markTaken(button) {
  button.innerHTML = '<i class="ti ti-check"></i> Taken';
  button.style.background = '#EAF3DE';
  button.style.color = '#3B6D11';
  button.style.borderColor = '#C0DD97';
  button.style.pointerEvents = 'none';

  const reminderCard = button.closest('.reminder');
  if (reminderCard) {
    const statusDot = reminderCard.querySelector('.status-dot');
    if (statusDot) {
      statusDot.className = 'status-dot dot-taken';
    }
  }
}

// Real-Time Asynchronous Form Processor
// Real-Time Asynchronous Form Processor with Gemini Integration
async function handleFormSubmit(event) {
  event.preventDefault();
  
  const nameInput = document.getElementById('medName');
  const categorySelect = document.getElementById('medCategory');
  const countInput = document.getElementById('medCount');
  const notesInput = document.getElementById('medNotes');
  
  const selectedChips = document.querySelectorAll('#timingGrid .timing-chip.selected');
  const timings = Array.from(selectedChips).map(chip => chip.textContent.trim());

  if (!nameInput.value || !countInput.value) {
    alert('Please completely fill out the title name and tablet inventory metrics.');
    return;
  }

  const payload = {
    name: nameInput.value,
    category: categorySelect.value,
    count: parseInt(countInput.value),
    timings: timings,
    notes: notesInput.value
  };

  try {
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.innerHTML = "<i class='ti ti-loader-2 rotate'></i> Requesting AI Safety Check...";
    submitBtn.disabled = true;

    // 1. Submit medicine data to local store
    const response = await fetch('/api/medicines', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      // 2. Fetch safety tips from Gemini via our backend
      const aiResponse = await fetch('/api/ai-advice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ medicineName: nameInput.value, notes: notesInput.value })
      });

      const aiData = await aiResponse.json();
      
      if (aiData.success) {
        // Display the AI box smoothly
        const box = document.getElementById('aiAdviceBox');
        const txt = document.getElementById('aiAdviceText');
        txt.textContent = aiData.advice;
        box.style.display = 'block';
      }

      // 3. Complete presentation cleanup flow
      submitBtn.innerHTML = "<i class='ti ti-check'></i> Medicine Added Successfully!";
      submitBtn.style.background = "#639922";
      
      // Reset input items clean
      nameInput.value = '';
      countInput.value = '';
      notesInput.value = '';
      selectedChips.forEach(chip => chip.classList.remove('selected'));

      setTimeout(() => {
        submitBtn.innerHTML = '<i class="ti ti-circle-plus"></i> Add Medicine';
        submitBtn.style.background = "#185FA5";
        submitBtn.disabled = false;
        document.getElementById('aiAdviceBox').style.display = 'none'; // Hide it for the next entry
        showTab('medicines', document.querySelector('[onclick="showTab(\'medicines\',this)"]'));
      }, 5000); // 5 seconds display so you have time to view the AI text!
    }
  } catch (error) {
    console.error('API execution interruption occurred:', error);
    document.getElementById('submitBtn').disabled = false;
  }
}
// ==========================================
// VOICE ASSISTANT SYSTEM (MIC + AUDIO REPLY)
// ==========================================
function startVoiceQuery() {
  // Check if browser supports speech recognition
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Your browser does not support voice speech recognition. Try using Google Chrome.");
    return;
  }

  const recognition = new SpeechRecognition();
  const voiceStatus = document.getElementById('voiceStatus');
  const micIcon = document.getElementById('micIcon');
  const micBtn = document.getElementById('micBtn');

  // Visual cues when listening
  voiceStatus.innerHTML = "<span style='color: #EF9F27; font-weight: bold;'>Listening to you... Go ahead!</span>";
  micIcon.className = "ti ti-loader-2 rotate";
  micBtn.style.background = "#E24B4A";

  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  // When user stops speaking
  recognition.onresult = async function(event) {
    const speechToText = event.results[0][0].transcript.toLowerCase();
    voiceStatus.innerHTML = `<i>You said: "${speechToText}"</i>`;
    
    // Reset mic button look
    micIcon.className = "ti ti-microphone";
    micBtn.style.background = "#EF9F27";

    // Check if the user is asking about missed medicines
    if (speechToText.includes('missed') || speechToText.includes('miss') || speechToText.includes('which medicine')) {
      await checkAndSpeakMissedMedicines();
    } else {
      speakText("I am programmed to track your missed medication. Try asking, which medicine is missed?");
    }
  };

  // Handle errors or silence
  recognition.onerror = function(event) {
    voiceStatus.innerHTML = "<i class='ti ti-microphone'></i> Voice session timed out. Try again.";
    micIcon.className = "ti ti-microphone";
    micBtn.style.background = "#EF9F27";
  };
}

// Scans dashboard data and speaks results aloud
async function checkAndSpeakMissedMedicines() {
  try {
    // Fetch live inventory items from backend database
    const response = await fetch('/api/medicines');
    const medicines = await response.json();

    // Look at your hardcoded dashboard DOM structure to find real-time tracked missed labels
    // In your index.html template, Metformin 500mg is listed under the missed card status dot
    const missedReminders = [];
    
    document.querySelectorAll('.reminder').forEach(reminder => {
      const isMissed = reminder.querySelector('.dot-missed') || reminder.querySelector('.miss-btn');
      if (isMissed) {
        reminder.querySelectorAll('.med-pill').forEach(pill => {
          missedReminders.push(pill.textContent.trim());
        });
      }
    });

    // Generate response string
    if (missedReminders.length > 0) {
      // Remove duplicate text spaces if any
      const uniqueMeds = [...new Set(missedReminders)];
      const textToSpeak = `You missed your dose of ${uniqueMeds.join(' and ')}. Please check with your doctor before taking a double dose.`;
      speakText(textToSpeak);
      document.getElementById('voiceStatus').innerHTML = `<span style='color: #639922; font-weight:500;'><i class='ti ti-volume'></i> Speaking response...</span>`;
    } else {
      // Fallback message if no items are currently flagged as missed
      speakText("Great news! You have not missed any medicines today.");
      document.getElementById('voiceStatus').innerHTML = `<span style='color: #639922; font-weight:500;'><i class='ti ti-circle-check'></i> All caught up!</span>`;
    }

  } catch (error) {
    console.error("Voice processing error:", error);
    speakText("Sorry, I had trouble reading your medicine schedule record.");
  }
}

// Standard Speech Synthesizer output engine
function speakText(message) {
  if ('speechSynthesis' in window) {
    // Cancel any speech currently playing to avoid overlaps
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.rate = 1.0; // Normal conversational speed
    utterance.pitch = 1.0; 
    utterance.lang = 'en-US';
    
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Your browser does not support Text-to-Speech playback.");
  }
}