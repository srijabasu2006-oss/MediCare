'use client';

import { useState, useEffect, useRef } from 'react';

const TRANSLATIONS = {
  en: {
    speechLang: 'en-US',
    online: '● Online',
    elderView: '👵 Elder View',
    caregiverPortal: '👨‍👦 Caregiver Portal',
    greeting: 'Hello! I am MediCare 😊',
    voiceInstruction: 'Tap the big voice button below to check your schedule.',
    voiceBtnListening: 'Listening...',
    voiceBtnTalk: 'Tap to Talk to MediCare',
    todaysMeds: "Today's Medicines",
    noMedsElder: 'No medicines added yet. Caregivers can add them in the portal.',
    timeLabel: '⏰ Time:',
    statusTaken: '✓ Taken',
    statusPending: 'I Took This Pill',
    findNearbyBtn: '📍 Find Open Pharmacies & Doctors Near Me',
    scanTitle: "📷 Scan Doctor's Prescription",
    scanDesc: 'Take a photo or upload a picture of a prescription to fill in details automatically.',
    scanBtnScanning: 'Scanning Prescription...',
    scanBtnDefault: 'Upload or Take Photo',
    addTitle: '✍️ Add New Medicine',
    addDesc: 'Enter details manually or use the scanner above.',
    labelName: 'Medicine Name & Dosage',
    placeholderName: 'e.g. Paracetamol 500mg',
    labelSchedule: 'Time / Schedule',
    placeholderSchedule: 'e.g. After Dinner (8:00 PM)',
    labelStock: 'Pill Stock Count',
    labelInstructions: 'Diet / Intake Instructions',
    saveBtn: '+ Save Medicine',
    allMedsTitle: 'All Saved Medicines & Refill Tracker',
    deleteBtn: 'Delete',
    speechIntro: 'Hello! Ask me about your medicine schedule.',
    speechAllTaken: 'All medicines taken for today!',
    speechMedSaved: 'New medicine saved.',
    speechStatusUpdated: 'Updated medicine status.',
    pendingSpeech: (count, name, schedule) => `You have ${count} pending medicines. Next is ${name} at ${schedule}.`
  },
  hi: {
    speechLang: 'hi-IN',
    online: '● ऑनलाइन',
    elderView: '👵 बुजुर्ग दृश्य',
    caregiverPortal: '👨‍👦 देखभाल पोर्टल',
    greeting: 'नमस्ते! मैं मेडिकेयर हूँ 😊',
    voiceInstruction: 'अपना शेड्यूल देखने के लिए नीचे दिए गए बटन पर टैप करें।',
    voiceBtnListening: 'सुन रहा हूँ...',
    voiceBtnTalk: 'मेडिकेयर से बात करने के लिए टैप करें',
    todaysMeds: 'आज की दवाएं',
    noMedsElder: 'अभी कोई दवा नहीं जोड़ी गई है।',
    timeLabel: '⏰ समय:',
    statusTaken: '✓ ले ली गई',
    statusPending: 'मैंने यह दवा ले ली',
    findNearbyBtn: '📍 पास के डॉक्टर और फार्मेसी खोजें',
    scanTitle: '📷 डॉक्टर के पर्चे को स्कैन करें',
    scanDesc: 'फार्म भरने के लिए पर्चे की फोटो अपलोड करें।',
    scanBtnScanning: 'स्कैन हो रहा है...',
    scanBtnDefault: 'फोटो अपलोड करें',
    addTitle: '✍️ नई दवा जोड़ें',
    addDesc: 'विवरण दर्ज करें या स्कैनर का उपयोग करें।',
    labelName: 'दवा का नाम और खुराक',
    placeholderName: 'जैसे पैरासिटामोल 500mg',
    labelSchedule: 'समय / शेड्यूल',
    placeholderSchedule: 'जैसे रात के खाने के बाद (8:00 PM)',
    labelStock: 'दवा की खुराक की गिनती',
    labelInstructions: 'सेवन निर्देश',
    saveBtn: '+ दवा सुरक्षित करें',
    allMedsTitle: 'सभी सहेजी गई दवाएं',
    deleteBtn: 'हटाएं',
    speechIntro: 'नमस्ते! मुझसे अपनी दवा के बारे में पूछें।',
    speechAllTaken: 'आज की सभी दवाएं ले ली गई हैं!',
    speechMedSaved: 'नई दवा सुरक्षित की गई।',
    speechStatusUpdated: 'दवा की स्थिति अपडेट की गई।',
    pendingSpeech: (count, name, schedule) => `आपकी ${count} दवाएं बाकी हैं। अगली दवा ${name} ${schedule} बजे है।`
  },
  bn: {
    speechLang: 'bn-IN',
    online: '● অনলাইন',
    elderView: '👵 প্রবীণ ভিউ',
    caregiverPortal: '👨‍👦 পরিচর্যা পোর্টাল',
    greeting: 'হ্যালো! আমি মেডিক্যেয়ার 😊',
    voiceInstruction: 'আপনার ওষুধের সময়সূচী জানতে নিচের বোতামটি চাপুন।',
    voiceBtnListening: 'শুনছি...',
    voiceBtnTalk: 'মেডিক্যেয়ারের সাথে কথা বলুন',
    todaysMeds: 'আজকের ওষুধসমূহ',
    noMedsElder: 'এখনও কোনো ওষুধ যোগ করা হয়নি।',
    timeLabel: '⏰ সময়:',
    statusTaken: '✓ খাওয়া হয়েছে',
    statusPending: 'আমি এই ওষুধটি খেয়েছি',
    findNearbyBtn: '📍 কাছের ডাক্তার ও ফার্মেসি খুঁজুন',
    scanTitle: '📷 ডাক্তারের প্রেসক্রিপশন স্ক্যান করুন',
    scanDesc: 'ছবি তুলুন বা আপলোড করুন।',
    scanBtnScanning: 'স্ক্যান করা হচ্ছে...',
    scanBtnDefault: 'ছবি আপলোড করুন',
    addTitle: '✍️ নতুন ওষুধ যোগ করুন',
    addDesc: 'বিবরণ লিখুন বা স্ক্যানার ব্যবহার করুন।',
    labelName: 'ওষুধের নাম এবং ডোজ',
    placeholderName: 'যেমন প্যারাসিটামল ৫০০ মিগ্রা',
    labelSchedule: 'সময় / সময়সূচী',
    placeholderSchedule: 'যেমন রাতের খাবারের পর (রাত ৮:০০)',
    labelStock: 'স্টক সংখ্যা',
    labelInstructions: 'খাওয়ার নিয়মাবলী',
    saveBtn: '+ ওষুধ সংরক্ষণ করুন',
    allMedsTitle: 'সংরক্ষিত সমস্ত ওষুধ',
    deleteBtn: 'মুছে ফেলুন',
    speechIntro: 'হ্যালো! আপনার ওষুধের সময়সূচী সম্পর্কে জিজ্ঞাসা করুন।',
    speechAllTaken: 'আজকের সব ওষুধ খাওয়া সম্পন্ন হয়েছে!',
    speechMedSaved: 'নতুন ওষুধ সংরক্ষিত হয়েছে।',
    speechStatusUpdated: 'ওষুধের স্ট্যাটাস আপডেট করা হয়েছে।',
    pendingSpeech: (count, name, schedule) => `আপনার ${count} টি ওষুধ বাকি আছে। পরবর্তী ওষুধ ${name}, সময় ${schedule}।`
  },
  ta: {
    speechLang: 'ta-IN',
    online: '● ஆன்லைன்',
    elderView: '👵 முதியவர் பார்வை',
    caregiverPortal: '👨‍👦 பராமரிப்பாளர் போர்ட்டல்',
    greeting: 'வணக்கம்! நான் மெடிகேர் 😊',
    voiceInstruction: 'உங்கள் மருந்து அட்டவணையை அறிய கீழே உள்ள பொத்தானை அழுத்தவும்.',
    voiceBtnListening: 'கேட்கிறது...',
    voiceBtnTalk: 'மெடிகேருடன் பேச அழுத்தவும்',
    todaysMeds: 'இன்றைய மருந்துகள்',
    noMedsElder: 'இன்னும் மருந்துகள் சேர்க்கப்படவில்லை.',
    timeLabel: '⏰ நேரம்:',
    statusTaken: '✓ சாப்பிட்டாச்சு',
    statusPending: 'நான் இந்த மருந்தை சாப்பிட்டேன்',
    findNearbyBtn: '📍 அருகில் உள்ள மருந்தகங்கள் & மருத்துவர்களைக் கண்டறியவும்',
    scanTitle: '📷 மருத்துவ சீட்டை ஸ்கேன் செய்யவும்',
    scanDesc: 'விவரங்களை தானாக நிரப்ப மருத்துவ சீட்டின் புகைப்படத்தை பதிவேற்றவும்.',
    scanBtnScanning: 'ஸ்கேன் செய்யப்படுகிறது...',
    scanBtnDefault: 'புகைப்படத்தை பதிவேற்றவும்',
    addTitle: '✍️ புதிய மருந்தைச் சேர்க்கவும்',
    addDesc: 'விவரங்களை உள்ளிடவும் அல்லது ஸ்கேனரைப் பயன்படுத்தவும்.',
    labelName: 'மருந்தின் பெயர் & அளவு',
    placeholderName: 'எ.கா. பாராசிட்டமால் 500mg',
    labelSchedule: 'நேரம் / அட்டவணை',
    placeholderSchedule: 'எ.கா. இரவு உணவிற்கு பின் (8:00 PM)',
    labelStock: 'மீதமுள்ள மாத்திரைகள்',
    labelInstructions: 'உட்கொள்ளும் வழிமுறைகள்',
    saveBtn: '+ மருந்தை சேமிக்கவும்',
    allMedsTitle: 'சேமிக்கப்பட்ட அனைத்து மருந்துகள்',
    deleteBtn: 'நீக்கு',
    speechIntro: 'வணக்கம்! உங்கள் மருந்து அட்டவணை பற்றி என்னிடம் கேட்கலாம்.',
    speechAllTaken: 'இன்றைய அனைத்து மருந்துகளும் சாப்பிடப்பட்டுவிட்டன!',
    speechMedSaved: 'புதிய மருந்து சேமிக்கப்பட்டது.',
    speechStatusUpdated: 'மருந்து நிலை புதுப்பிக்கப்பட்டது.',
    pendingSpeech: (count, name, schedule) => `உங்களுக்கு ${count} மருந்துகள் மீதம் உள்ளன. அடுத்த மருந்து ${name}, நேரம் ${schedule}.`
  },
  ml: {
    speechLang: 'ml-IN',
    online: '● ഓൺലൈൻ',
    elderView: '👵 മുതിർന്നവരുടെ വ്യൂ',
    caregiverPortal: '👨‍👦 പരിചരണ പോർട്ടൽ',
    greeting: 'ഹലോ! ഞാൻ മെഡികെയർ 😊',
    voiceInstruction: 'നിങ്ങളുടെ മരുന്നുകളുടെ വിവരങ്ങൾ അറിയാൻ താഴെയുള്ള ബട്ടൺ അമർത്തുക.',
    voiceBtnListening: 'ശ്രദ്ധിക്കുന്നു...',
    voiceBtnTalk: 'മെഡികെയറോട് സംസാരിക്കാൻ അമർത്തുക',
    todaysMeds: 'ഇന്നത്തെ മരുന്നുകൾ',
    noMedsElder: 'മരുന്നുകളൊന്നും ചേർത്തിട്ടില്ല.',
    timeLabel: '⏰ സമയം:',
    statusTaken: '✓ കഴിച്ചു',
    statusPending: 'ഞാൻ ഈ മരുന്ന് കഴിച്ചു',
    findNearbyBtn: '📍 അടുത്തുള്ള ഡോക്ടർമാരെയും ഫാർമസികളെയും കണ്ടെത്തുക',
    scanTitle: '📷 പ്രിസ്ക്രിപ്ഷൻ സ്കാൻ ചെയ്യുക',
    scanDesc: 'വിവരങ്ങൾ പൂരിപ്പിക്കുന്നതിന് ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക.',
    scanBtnScanning: 'സ്കാൻ ചെയ്യുന്നു...',
    scanBtnDefault: 'ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക',
    addTitle: '✍️ പുതിയ മരുന്ന് ചേർക്കുക',
    addDesc: 'വിവരങ്ങൾ നൽകുക അല്ലെങ്കിൽ സ്കാനർ ഉപയോഗിക്കുക.',
    labelName: 'മരുന്നിന്റെ പേരും അളവും',
    placeholderName: 'ഉദാഹരണത്തിന്: പാരസെറ്റാമോൾ 500mg',
    labelSchedule: 'സമയം / ഷെഡ്യൂൾ',
    placeholderSchedule: 'ഉദാഹരണത്തിന്: അത്താഴത്തിന് ശേഷം (8:00 PM)',
    labelStock: 'സ്റ്റോക്ക്',
    labelInstructions: 'നിർദ്ദേശങ്ങൾ',
    saveBtn: '+ മരുന്ന് സേവ് ചെയ്യുക',
    allMedsTitle: 'സേവ് ചെയ്ത എല്ലാ മരുന്നുകളും',
    deleteBtn: 'ഡിലീറ്റ് ചെയ്യുക',
    speechIntro: 'ഹലോ! നിങ്ങളുടെ മരുന്നുകളെ കുറിച്ച് എന്നോട് ചോദിക്കൂ.',
    speechAllTaken: 'ഇന്നത്തെ എല്ലാ മരുന്നുകളും കഴിച്ചു കഴിഞ്ഞു!',
    speechMedSaved: 'പുതിയ മരുന്ന് സേവ് ചെയ്തു.',
    speechStatusUpdated: 'മരുന്നിന്റെ സ്റ്റാറ്റസ് മാറ്റിയിട്ടുണ്ട്.',
    pendingSpeech: (count, name, schedule) => `നിങ്ങൾക്ക് ${count} മരുന്നുകൾ ബാക്കിയുണ്ട്. അടുത്തത് ${name} ആണ്, സമയം ${schedule}.`
  },
  te: {
    speechLang: 'te-IN',
    online: '● ఆన్‌లైన్',
    elderView: '👵 వృద్ధుల వ్యూ',
    caregiverPortal: '👨‍👦 కేర్‌గివర్ పోర్టల్',
    greeting: 'హలో! నేను మెడికేర్ 😊',
    voiceInstruction: 'మీ మందుల వివరాలు తెలుసుకోవడానికి కింద ఉన్న బటన్‌ను నొక్కండి.',
    voiceBtnListening: 'వింటున్నాను...',
    voiceBtnTalk: 'మెడికేర్‌తో మాట్లాడటానికి నొక్కండి',
    todaysMeds: 'ఈరోజు వాడాల్సిన మందులు',
    noMedsElder: 'ఇంకా ఎటువంటి మందులు జోడించబడలేదు.',
    timeLabel: '⏰ సమయం:',
    statusTaken: '✓ వేసుకున్నాను',
    statusPending: 'నేను ఈ మందు వేసుకున్నాను',
    findNearbyBtn: '📍 దగ్గరలోని డాక్టర్లు & ఫార్మసీలను కనుగొనండి',
    scanTitle: '📷 డాక్టర్ ప్రిస్క్రిప్షన్‌ను స్కాన్ చేయండి',
    scanDesc: 'వివరాలను నింపడానికి ఫోటోను అప్‌లోడ్ చేయండి.',
    scanBtnScanning: 'స్కాన్ చేస్తోంది...',
    scanBtnDefault: 'ఫోటోను అప్‌లోడ్ చేయండి',
    addTitle: '✍️ కొత్త మందును జోడించండి',
    addDesc: 'వివరాలను నమోదు చేయండి.',
    labelName: 'మందు పేరు & మోతాదు',
    placeholderName: 'ఉదా. పారాసిటమాల్ 500mg',
    labelSchedule: 'సమయం / షెడ్యూల్',
    placeholderSchedule: 'ఉదా. రాత్రి భోజనం తర్వాత (8:00 PM)',
    labelStock: 'మిగిలిన నిల్వ',
    labelInstructions: 'సూచనలు',
    saveBtn: '+ మందును సేవ్ చేయండి',
    allMedsTitle: 'సేవ్ చేసిన అన్ని మందులు',
    deleteBtn: 'తొలగించు',
    speechIntro: 'హలో! మీ మందుల షెడ్యూల్ గురించి నన్ను అడగండి.',
    speechAllTaken: 'ఈరోజు వాడాల్సిన మందులన్నీ పూర్తయ్యాయి!',
    speechMedSaved: 'కొత్త మందు సేవ్ చేయబడింది.',
    speechStatusUpdated: 'మందుల స్టేటస్ నవీకరించబడింది.',
    pendingSpeech: (count, name, schedule) => `మీకు ఇంకా ${count} మందులు ఉన్నాయి. తదుపరి మందు ${name}, సమయం ${schedule}.`
  }
};

export default function Home() {
  const [lang, setLang] = useState('en');
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const [medications, setMedications] = useState([]);
  const [vitals, setVitals] = useState([]);
  const [interactions, setInteractions] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [activePortal, setActivePortal] = useState('elder');

  // Form States
  const [newMedName, setNewMedName] = useState('');
  const [newMedSchedule, setNewMedSchedule] = useState('');
  const [newMedStock, setNewMedStock] = useState(30);
  const [newMedInstructions, setNewMedInstructions] = useState('Take with food');

  // Vitals State
  const [bp, setBp] = useState('');
  const [sugar, setSugar] = useState('');
  const [vitalNotes, setVitalNotes] = useState('');

  // Location State
  const [locationStatus, setLocationStatus] = useState('');
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  // Scanning State
  const [isScanning, setIsScanning] = useState(false);
  const [scanMessage, setScanMessage] = useState('');
  const fileInputRef = useRef(null);

  // Age Checker State
  const [checkAge, setCheckAge] = useState('');
  const [checkMed, setCheckMed] = useState('');
  const [ageResult, setAgeResult] = useState(null);

  const recognitionRef = useRef(null);

  const fetchMedications = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/medications');
      const data = await res.json();
      setMedications(data);
      checkInteractions();
    } catch (err) {
      console.error('Failed to load medicines', err);
    }
  };

  const fetchVitals = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/vitals');
      const data = await res.json();
      setVitals(data);
    } catch (err) {
      console.error('Failed to load vitals', err);
    }
  };

  const checkInteractions = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/check-interactions');
      const data = await res.json();
      setInteractions(data.interactions || []);
    } catch (err) {
      console.error('Failed interaction check', err);
    }
  };

  useEffect(() => {
    fetchMedications();
    fetchVitals();
  }, []);

  const handleAddMedication = async (e) => {
    e.preventDefault();
    if (!newMedName.trim() || !newMedSchedule.trim()) return;

    try {
      const res = await fetch('http://localhost:8000/api/medications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: newMedName, 
          schedule: newMedSchedule,
          stock: parseInt(newMedStock, 10) || 30,
          instructions: newMedInstructions 
        }),
      });

      if (res.ok) {
        setNewMedName('');
        setNewMedSchedule('');
        fetchMedications();
        speakCompanion(t.speechMedSaved);
      }
    } catch (err) {
      console.error('Error adding medicine', err);
    }
  };

  const handleAddVital = async (e) => {
    e.preventDefault();
    if (!bp && !sugar) return;

    try {
      const res = await fetch('http://localhost:8000/api/vitals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blood_pressure: bp, blood_sugar: sugar, notes: vitalNotes }),
      });

      if (res.ok) {
        setBp('');
        setSugar('');
        setVitalNotes('');
        fetchVitals();
      }
    } catch (err) {
      console.error('Error saving vitals', err);
    }
  };

  const toggleMedication = async (id) => {
    try {
      await fetch(`http://localhost:8000/api/medications/${id}/toggle`, { method: 'PUT' });
      fetchMedications();
      speakCompanion(t.speechStatusUpdated);
    } catch (err) {
      console.error('Error updating status', err);
    }
  };

  const handleDeleteMedication = async (id) => {
    try {
      await fetch(`http://localhost:8000/api/medications/${id}`, { method: 'DELETE' });
      fetchMedications();
    } catch (err) {
      console.error('Error deleting medicine', err);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsScanning(true);
    setScanMessage('Scanning prescription image...');

    setTimeout(() => {
      setIsScanning(false);
      setNewMedName('Amoxicillin 500mg');
      setNewMedSchedule('After Lunch (2:00 PM)');
      setScanMessage('Prescription scanned! Details filled below.');
    }, 1800);
  };

  const handleAgeCheck = async (e) => {
    e.preventDefault();
    if (!checkAge || !checkMed) return;

    try {
      const res = await fetch('http://localhost:8000/api/check-age-safety', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ medication_name: checkMed, age: parseInt(checkAge, 10) })
      });
      const data = await res.json();
      setAgeResult(data);
    } catch (err) {
      console.error('Age safety check error', err);
    }
  };

  const speakCompanion = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = t.speechLang;
      speech.rate = 0.85;
      speech.pitch = 1.05;
      window.speechSynthesis.speak(speech);
    }
  };

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = t.speechLang;
      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = () => {
        const pending = medications.filter((m) => m.status !== 'taken');
        if (pending.length > 0) {
          speakCompanion(t.pendingSpeech(pending.length, pending[0].name, pending[0].schedule));
        } else {
          speakCompanion(t.speechAllTaken);
        }
      };
      recognitionRef.current = recognition;
    }
  }, [medications, lang]);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus('GPS unavailable.');
      return;
    }
    setLocationStatus('Locating nearby services...');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        setLocationStatus(`Location found.`);
        setNearbyPlaces([
          { title: 'Local Doctors & Clinics', url: `https://www.google.com/maps/search/doctors+near+me/@${lat},${lng},14z` },
          { title: '24/7 Pharmacies', url: `https://www.google.com/maps/search/pharmacies+near+me/@${lat},${lng},14z` },
          { title: 'Emergency Hospitals', url: `https://www.google.com/maps/search/hospitals+near+me/@${lat},${lng},14z` }
        ]);
      },
      () => setLocationStatus('Location access denied.')
    );
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.36.0/tabler-icons.min.css" />

      {/* Styled with overflowY auto for smooth scrolling */}
      <div style={{ backgroundColor: '#0b132b', color: '#f8fafc', fontFamily: 'Inter, system-ui, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        
        {/* Navigation Bar */}
        <header style={{
          position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(11, 19, 43, 0.95)', backdropFilter: 'blur(12px)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderBottom: '1px solid #1c2541', flexWrap: 'wrap', gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', width: '42px', height: '42px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0b132b', fontSize: '1.5rem', fontWeight: 'bold' }}>
              <i className="ti ti-heart-handshake"></i>
            </div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: '900', background: 'linear-gradient(90deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                MediCare
              </div>
              <div style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: '700' }}>{t.online}</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button 
              onClick={() => window.print()}
              style={{ background: '#1c2541', color: '#38bdf8', border: '1px solid #3a506b', padding: '0.6rem 1rem', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}
            >
              🖨️ Export PDF
            </button>

            {/* Language Selector Dropdown */}
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              style={{
                background: '#1c2541', color: '#38bdf8', border: '1px solid #3a506b',
                padding: '0.6rem 0.8rem', borderRadius: '8px', fontWeight: '700', cursor: 'pointer'
              }}
            >
              <option value="en">🌐 English</option>
              <option value="hi">🌐 हिंदी (Hindi)</option>
              <option value="bn">🌐 বাংলা (Bengali)</option>
              <option value="ta">🌐 தமிழ் (Tamil)</option>
              <option value="ml">🌐 മലയാളം (Malayalam)</option>
              <option value="te">🌐 తెలుగు (Telugu)</option>
            </select>

            <div style={{ display: 'flex', background: '#1c2541', borderRadius: '12px', padding: '4px', border: '1px solid #3a506b' }}>
              <button
                onClick={() => setActivePortal('elder')}
                style={{
                  padding: '0.6rem 1.2rem', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '800', fontSize: '0.9rem',
                  background: activePortal === 'elder' ? '#38bdf8' : 'transparent',
                  color: activePortal === 'elder' ? '#0b132b' : '#94a3b8'
                }}
              >
                {t.elderView}
              </button>
              <button
                onClick={() => setActivePortal('caregiver')}
                style={{
                  padding: '0.6rem 1.2rem', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '800', fontSize: '0.9rem',
                  background: activePortal === 'caregiver' ? '#818cf8' : 'transparent',
                  color: activePortal === 'caregiver' ? '#0b132b' : '#94a3b8'
                }}
              >
                {t.caregiverPortal}
              </button>
            </div>
          </div>
        </header>

        {/* Global Interaction Banner */}
        {interactions.length > 0 && (
          <div style={{ background: '#7f1d1d', color: '#fca5a5', padding: '0.8rem 2rem', borderBottom: '1px solid #ef4444', textAlign: 'center', fontWeight: 'bold' }}>
            {interactions.map((warn, i) => <div key={i}>{warn}</div>)}
          </div>
        )}

        {/* Elder View */}
        {activePortal === 'elder' && (
          <main style={{ maxWidth: '900px', width: '100%', margin: '0 auto', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', flex: 1 }}>
            <div style={{ background: 'linear-gradient(135deg, #1c2541, #0b132b)', border: '2px solid #38bdf8', borderRadius: '24px', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
              <h1 style={{ fontSize: '2.4rem', fontWeight: '900', margin: '0 0 1rem', color: '#ffffff' }}>
                {t.greeting}
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '2rem' }}>
                {t.voiceInstruction}
              </p>

              <button
                onClick={() => {
                  speakCompanion(t.speechIntro);
                  recognitionRef.current?.start();
                }}
                style={{
                  background: isListening ? '#ef4444' : 'linear-gradient(135deg, #0284c7, #38bdf8)',
                  color: '#ffffff', border: 'none', padding: '1.4rem 3rem', borderRadius: '60px',
                  fontSize: '1.4rem', fontWeight: '900', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '12px'
                }}
              >
                <i className="ti ti-microphone" style={{ fontSize: '2rem' }}></i> {isListening ? t.voiceBtnListening : t.voiceBtnTalk}
              </button>
            </div>

            <section style={{ background: '#1c2541', padding: '2rem', borderRadius: '24px', border: '1px solid #3a506b' }}>
              <h2 style={{ fontSize: '1.6rem', margin: '0 0 1.5rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="ti ti-pill"></i> {t.todaysMeds} ({medications.length})
              </h2>

              {medications.length === 0 ? (
                <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>{t.noMedsElder}</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {medications.map((m) => (
                    <div key={m.id} style={{ background: '#0b132b', padding: '1.5rem', borderRadius: '18px', border: '2px solid #3a506b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#ffffff' }}>{m.name}</div>
                        <div style={{ fontSize: '1.1rem', color: '#94a3b8', marginTop: '4px' }}>{t.timeLabel} <strong>{m.schedule}</strong></div>
                        {m.instructions && <div style={{ fontSize: '0.95rem', color: '#38bdf8', marginTop: '4px' }}>📌 {m.instructions}</div>}
                      </div>

                      <button
                        onClick={() => toggleMedication(m.id)}
                        style={{
                          background: m.status === 'taken' ? 'rgba(52, 211, 153, 0.2)' : '#10b981',
                          color: m.status === 'taken' ? '#34d399' : '#ffffff',
                          border: m.status === 'taken' ? '2px solid #34d399' : 'none',
                          padding: '0.8rem 1.8rem', borderRadius: '12px', fontSize: '1.2rem', fontWeight: '900', cursor: 'pointer'
                        }}
                      >
                        {m.status === 'taken' ? t.statusTaken : t.statusPending}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section style={{ background: '#1c2541', padding: '1.8rem', borderRadius: '24px', border: '1px solid #3a506b', textAlign: 'center' }}>
              <button
                onClick={handleGetLocation}
                style={{ background: 'linear-gradient(135deg, #0284c7, #38bdf8)', color: '#0b132b', border: 'none', padding: '1rem 2rem', borderRadius: '12px', fontSize: '1.1rem', fontWeight: '900', cursor: 'pointer' }}
              >
                {t.findNearbyBtn}
              </button>
              {locationStatus && <p style={{ color: '#34d399', fontSize: '1rem', marginTop: '1rem' }}>{locationStatus}</p>}

              {nearbyPlaces.length > 0 && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
                  {nearbyPlaces.map((p, i) => (
                    <a key={i} href={p.url} target="_blank" rel="noreferrer" style={{ background: '#0b132b', color: '#38bdf8', padding: '1rem', borderRadius: '12px', textDecoration: 'none', fontWeight: '800', border: '1px solid #3a506b' }}>
                      {p.title} ↗
                    </a>
                  ))}
                </div>
              )}
            </section>
          </main>
        )}

        {/* Caregiver Portal */}
        {activePortal === 'caregiver' && (
          <main style={{ maxWidth: '950px', width: '100%', margin: '0 auto', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '2.5rem', flex: 1 }}>
            
            {/* AI AGE SAFETY CHECKER */}
            <div style={{ background: '#1c2541', padding: '2rem', borderRadius: '24px', border: '2px solid #38bdf8' }}>
              <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.6rem', color: '#38bdf8', fontWeight: '800' }}>
                🩺 AI Age Safety & Medication Harm Checker
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.2rem' }}>
                Enter the user's age and medicine name to evaluate age safety and potential side effects.
              </p>

              <form onSubmit={handleAgeCheck} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'end' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '700' }}>User Age</label>
                  <input
                    type="number"
                    placeholder="e.g. 70"
                    value={checkAge}
                    onChange={(e) => setCheckAge(e.target.value)}
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', background: '#0b132b', border: '1px solid #3a506b', color: 'white' }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '700' }}>Medication Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Aspirin or Benadryl"
                    value={checkMed}
                    onChange={(e) => setCheckMed(e.target.value)}
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', background: '#0b132b', border: '1px solid #3a506b', color: 'white' }}
                    required
                  />
                </div>
                <button type="submit" style={{ background: '#38bdf8', color: '#0b132b', border: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '900', cursor: 'pointer' }}>
                  Analyze Safety
                </button>
              </form>

              {ageResult && (
                <div style={{ marginTop: '1.2rem', padding: '1rem', borderRadius: '12px', background: ageResult.safe ? 'rgba(52, 211, 153, 0.15)' : 'rgba(239, 68, 68, 0.15)', border: ageResult.safe ? '1px solid #34d399' : '1px solid #f87171' }}>
                  <p style={{ fontWeight: 'bold', margin: '0 0 0.5rem', color: ageResult.safe ? '#34d399' : '#f87171' }}>{ageResult.warning}</p>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#cbd5e1' }}><strong>AI Recommendation:</strong> {ageResult.recommendation}</p>
                </div>
              )}
            </div>

            {/* VITALS & SYMPTOMS LOGGING */}
            <div style={{ background: '#1c2541', padding: '2rem', borderRadius: '24px', border: '1px solid #3a506b' }}>
              <h2 style={{ margin: '0 0 1rem', fontSize: '1.5rem', color: '#ffffff' }}>📊 Vitals & Symptoms Diary</h2>
              <form onSubmit={handleAddVital} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'end' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>Blood Pressure</label>
                  <input type="text" placeholder="120/80 mmHg" value={bp} onChange={(e) => setBp(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', background: '#0b132b', border: '1px solid #3a506b', color: 'white' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>Blood Sugar</label>
                  <input type="text" placeholder="95 mg/dL" value={sugar} onChange={(e) => setSugar(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', background: '#0b132b', border: '1px solid #3a506b', color: 'white' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>Notes / Symptoms</label>
                  <input type="text" placeholder="Slight headache" value={vitalNotes} onChange={(e) => setVitalNotes(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', background: '#0b132b', border: '1px solid #3a506b', color: 'white' }} />
                </div>
                <button type="submit" style={{ background: '#34d399', color: '#0b132b', border: 'none', padding: '0.85rem', borderRadius: '10px', fontWeight: '900', cursor: 'pointer' }}>
                  Log Vitals
                </button>
              </form>

              {vitals.length > 0 && (
                <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {vitals.map((v, i) => (
                    <div key={i} style={{ background: '#0b132b', padding: '0.8rem 1rem', borderRadius: '8px', fontSize: '0.9rem', border: '1px solid #3a506b' }}>
                      <strong>BP:</strong> {v.blood_pressure || 'N/A'} | <strong>Sugar:</strong> {v.blood_sugar || 'N/A'} | <em>{v.notes}</em>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* SCANNER SECTION */}
            <div style={{ background: '#1c2541', padding: '2rem', borderRadius: '24px', border: '2px dashed #818cf8', textAlign: 'center' }}>
              <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.6rem', color: '#818cf8', fontWeight: '800' }}>
                {t.scanTitle}
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                {t.scanDesc}
              </p>

              <input type="file" accept="image/*" capture="environment" ref={fileInputRef} onChange={handleImageUpload} style={{ display: 'none' }} />

              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isScanning}
                style={{
                  background: 'linear-gradient(135deg, #818cf8, #38bdf8)', color: '#0b132b', border: 'none',
                  padding: '1rem 2.5rem', borderRadius: '14px', fontWeight: '900', fontSize: '1.1rem', cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: '10px'
                }}
              >
                <i className="ti ti-camera" style={{ fontSize: '1.5rem' }}></i>
                {isScanning ? t.scanBtnScanning : t.scanBtnDefault}
              </button>

              {scanMessage && (
                <p style={{ marginTop: '1rem', color: scanMessage.includes('scanned') ? '#34d399' : '#38bdf8', fontWeight: '700' }}>
                  {scanMessage}
                </p>
              )}
            </div>

            {/* ADD MEDICINE FORM */}
            <div style={{ background: '#1c2541', padding: '2rem', borderRadius: '24px', border: '1px solid #3a506b' }}>
              <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.6rem', color: '#ffffff', fontWeight: '800' }}>
                {t.addTitle}
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                {t.addDesc}
              </p>

              <form onSubmit={handleAddMedication} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'end' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '700' }}>{t.labelName}</label>
                  <input type="text" placeholder={t.placeholderName} value={newMedName} onChange={(e) => setNewMedName(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', background: '#0b132b', border: '1px solid #3a506b', color: 'white' }} required />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '700' }}>{t.labelSchedule}</label>
                  <input type="text" placeholder={t.placeholderSchedule} value={newMedSchedule} onChange={(e) => setNewMedSchedule(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', background: '#0b132b', border: '1px solid #3a506b', color: 'white' }} required />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '700' }}>{t.labelStock}</label>
                  <input type="number" value={newMedStock} onChange={(e) => setNewMedStock(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', background: '#0b132b', border: '1px solid #3a506b', color: 'white' }} required />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '700' }}>{t.labelInstructions}</label>
                  <input type="text" value={newMedInstructions} onChange={(e) => setNewMedInstructions(e.target.value)} style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', background: '#0b132b', border: '1px solid #3a506b', color: 'white' }} required />
                </div>

                <button type="submit" style={{ background: '#818cf8', color: '#0b132b', border: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '900', fontSize: '1rem', cursor: 'pointer' }}>
                  {t.saveBtn}
                </button>
              </form>
            </div>

            {/* MEDICINE LIST WITH REFILL ALERTS */}
            <div style={{ background: '#1c2541', padding: '2rem', borderRadius: '24px', border: '1px solid #3a506b' }}>
              <h2 style={{ margin: '0 0 1.5rem', fontSize: '1.5rem', color: '#ffffff' }}>{t.allMedsTitle}</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {medications.map((m) => (
                  <div key={m.id} style={{ background: '#0b132b', padding: '1.2rem 1.5rem', borderRadius: '14px', border: '1px solid #3a506b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff' }}>{m.name}</div>
                      <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '2px' }}>{m.schedule}</div>
                      
                      {/* Refill Trigger */}
                      <div style={{ fontSize: '0.85rem', marginTop: '6px' }}>
                        Stock: <strong style={{ color: m.stock <= 5 ? '#f87171' : '#34d399' }}>{m.stock} pills remaining</strong>
                        {m.stock <= 5 && <span style={{ marginLeft: '10px', color: '#f87171', fontWeight: 'bold' }}>⚠️ Low Stock - Refill Soon!</span>}
                      </div>
                    </div>

                    <button onClick={() => handleDeleteMedication(m.id)} style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#f87171', border: '1px solid #f87171', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '700' }}>
                      {t.deleteBtn}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </main>
        )}

        {/* CUSTOM FOOTER */}
        <footer style={{
          backgroundColor: '#0b132b',
          borderTop: '1px solid #1c2541',
          padding: '1.5rem',
          textAlign: 'center',
          color: '#cbd5e1',
          fontSize: '1rem',
          fontWeight: '500',
          marginTop: 'auto'
        }}>
          by Srija |{' '}
          <a
            href="https://www.linkedin.com/in/srija-basu-881b9b383"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#38bdf8', textDecoration: 'underline', fontWeight: 'bold' }}
          >
            Linkedin
          </a>
        </footer>

      </div>
    </>
  );
}