'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [medications, setMedications] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [activePortal, setActivePortal] = useState('elder');

  const [newMedName, setNewMedName] = useState('');
  const [newMedSchedule, setNewMedSchedule] = useState('');

  const [locationStatus, setLocationStatus] = useState('');
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  // Scanning State
  const [isScanning, setIsScanning] = useState(false);
  const [scanMessage, setScanMessage] = useState('');
  const fileInputRef = useRef(null);

  const recognitionRef = useRef(null);

  // Fetch medications
  const fetchMedications = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/medications');
      const data = await res.json();
      setMedications(data);
    } catch (err) {
      console.error('Failed to load medicines', err);
    }
  };

  useEffect(() => {
    fetchMedications();
  }, []);

  // Add Medication
  const handleAddMedication = async (e) => {
    e.preventDefault();
    if (!newMedName.trim() || !newMedSchedule.trim()) return;

    try {
      const res = await fetch('http://localhost:8000/api/medications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newMedName, schedule: newMedSchedule }),
      });

      if (res.ok) {
        setNewMedName('');
        setNewMedSchedule('');
        fetchMedications();
        speakCompanion("New medicine saved.");
      }
    } catch (err) {
      console.error('Error adding medicine', err);
    }
  };

  // Toggle Status
  const toggleMedication = async (id) => {
    try {
      await fetch(`http://localhost:8000/api/medications/${id}/toggle`, {
        method: 'PUT',
      });
      fetchMedications();
      speakCompanion("Updated medicine status.");
    } catch (err) {
      console.error('Error updating status', err);
    }
  };

  // Delete Medication
  const handleDeleteMedication = async (id) => {
    try {
      await fetch(`http://localhost:8000/api/medications/${id}`, {
        method: 'DELETE',
      });
      fetchMedications();
    } catch (err) {
      console.error('Error deleting medicine', err);
    }
  };

  // Simulate Prescription Image Scanning
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsScanning(true);
    setScanMessage('Scanning prescription image...');

    // Simulate AI reading the paper prescription
    setTimeout(() => {
      setIsScanning(false);
      setNewMedName('Amoxicillin 500mg');
      setNewMedSchedule('After Lunch (2:00 PM)');
      setScanMessage('Prescription scanned! Please review details below.');
    }, 2000);
  };

  const speakCompanion = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const speech = new SpeechSynthesisUtterance(text);
      speech.rate = 0.85;
      speech.pitch = 1.05;
      window.speechSynthesis.speak(speech);
    }
  };

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = () => {
        const pending = medications.filter((m) => m.status !== 'taken');
        if (pending.length > 0) {
          speakCompanion(`You have ${pending.length} pending medicines. Next is ${pending[0].name} at ${pending[0].schedule}.`);
        } else {
          speakCompanion("All medicines taken for today!");
        }
      };
      recognitionRef.current = recognition;
    }
  }, [medications]);

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

      <div style={{ backgroundColor: '#0b132b', color: '#f8fafc', fontFamily: 'Inter, system-ui, sans-serif', minHeight: '100vh', paddingBottom: '6rem' }}>
        
        {/* Navigation */}
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
              <div style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: '700' }}>● Online</div>
            </div>
          </div>

          <div style={{ display: 'flex', background: '#1c2541', borderRadius: '12px', padding: '4px', border: '1px solid #3a506b' }}>
            <button
              onClick={() => setActivePortal('elder')}
              style={{
                padding: '0.6rem 1.2rem', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '800', fontSize: '0.9rem',
                background: activePortal === 'elder' ? '#38bdf8' : 'transparent',
                color: activePortal === 'elder' ? '#0b132b' : '#94a3b8'
              }}
            >
              👵 Elder View
            </button>
            <button
              onClick={() => setActivePortal('caregiver')}
              style={{
                padding: '0.6rem 1.2rem', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '800', fontSize: '0.9rem',
                background: activePortal === 'caregiver' ? '#818cf8' : 'transparent',
                color: activePortal === 'caregiver' ? '#0b132b' : '#94a3b8'
              }}
            >
              👨‍👦 Caregiver Portal
            </button>
          </div>
        </header>

        {/* Elder View */}
        {activePortal === 'elder' && (
          <main style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ background: 'linear-gradient(135deg, #1c2541, #0b132b)', border: '2px solid #38bdf8', borderRadius: '24px', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
              <h1 style={{ fontSize: '2.4rem', fontWeight: '900', margin: '0 0 1rem', color: '#ffffff' }}>
                Hello! I am MediCare 😊
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '2rem' }}>
                Tap the big voice button below to check your schedule.
              </p>

              <button
                onClick={() => {
                  speakCompanion("Hello! Ask me about your medicine schedule.");
                  recognitionRef.current?.start();
                }}
                style={{
                  background: isListening ? '#ef4444' : 'linear-gradient(135deg, #0284c7, #38bdf8)',
                  color: '#ffffff', border: 'none', padding: '1.4rem 3rem', borderRadius: '60px',
                  fontSize: '1.4rem', fontWeight: '900', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '12px'
                }}
              >
                <i className="ti ti-microphone" style={{ fontSize: '2rem' }}></i> {isListening ? 'Listening...' : 'Tap to Talk to MediCare'}
              </button>
            </div>

            <section style={{ background: '#1c2541', padding: '2rem', borderRadius: '24px', border: '1px solid #3a506b' }}>
              <h2 style={{ fontSize: '1.6rem', margin: '0 0 1.5rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="ti ti-pill"></i> Today's Medicines ({medications.length})
              </h2>

              {medications.length === 0 ? (
                <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>No medicines added yet. Caregivers can add them in the portal.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {medications.map((m) => (
                    <div key={m.id} style={{ background: '#0b132b', padding: '1.5rem', borderRadius: '18px', border: '2px solid #3a506b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#ffffff' }}>{m.name}</div>
                        <div style={{ fontSize: '1.1rem', color: '#94a3b8', marginTop: '4px' }}>⏰ Time: <strong>{m.schedule}</strong></div>
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
                        {m.status === 'taken' ? '✓ Taken' : 'I Took This Pill'}
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
                📍 Find Open Pharmacies & Doctors Near Me
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
          <main style={{ maxWidth: '950px', margin: '0 auto', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            {/* SCANNER SECTION */}
            <div style={{ background: '#1c2541', padding: '2rem', borderRadius: '24px', border: '2px dashed #818cf8', textAlign: 'center' }}>
              <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.6rem', color: '#818cf8', fontWeight: '800' }}>
                📷 Scan Doctor's Prescription
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Take a photo or upload a picture of a prescription to fill in the form automatically.
              </p>

              <input
                type="file"
                accept="image/*"
                capture="environment"
                ref={fileInputRef}
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />

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
                {isScanning ? 'Scanning Prescription...' : 'Upload or Take Photo'}
              </button>

              {scanMessage && (
                <p style={{ marginTop: '1rem', color: scanMessage.includes('Scanned') ? '#34d399' : '#38bdf8', fontWeight: '700' }}>
                  {scanMessage}
                </p>
              )}
            </div>

            {/* FORM SECTION */}
            <div style={{ background: '#1c2541', padding: '2rem', borderRadius: '24px', border: '1px solid #3a506b' }}>
              <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.6rem', color: '#ffffff', fontWeight: '800' }}>
                ✍️ Add New Medicine
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Enter details manually or use the scanner above.
              </p>

              <form onSubmit={handleAddMedication} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', alignItems: 'end' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '700' }}>Medicine Name & Dosage</label>
                  <input
                    type="text"
                    placeholder="e.g. Paracetamol 500mg"
                    value={newMedName}
                    onChange={(e) => setNewMedName(e.target.value)}
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', background: '#0b132b', border: '1px solid #3a506b', color: 'white', fontSize: '1rem' }}
                    required
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: '700' }}>Time / Schedule</label>
                  <input
                    type="text"
                    placeholder="e.g. After Dinner (8:00 PM)"
                    value={newMedSchedule}
                    onChange={(e) => setNewMedSchedule(e.target.value)}
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', background: '#0b132b', border: '1px solid #3a506b', color: 'white', fontSize: '1rem' }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  style={{ background: '#818cf8', color: '#0b132b', border: 'none', padding: '0.85rem 1.5rem', borderRadius: '10px', fontWeight: '900', fontSize: '1rem', cursor: 'pointer' }}
                >
                  + Save Medicine
                </button>
              </form>
            </div>

            {/* LIST SECTION */}
            <div style={{ background: '#1c2541', padding: '2rem', borderRadius: '24px', border: '1px solid #3a506b' }}>
              <h2 style={{ margin: '0 0 1.5rem', fontSize: '1.5rem', color: '#ffffff' }}>All Saved Medicines</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {medications.map((m) => (
                  <div key={m.id} style={{ background: '#0b132b', padding: '1.2rem 1.5rem', borderRadius: '14px', border: '1px solid #3a506b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff' }}>{m.name}</div>
                      <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '2px' }}>{m.schedule}</div>
                    </div>

                    <button
                      onClick={() => handleDeleteMedication(m.id)}
                      style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#f87171', border: '1px solid #f87171', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '700' }}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </main>
        )}

      </div>
    </>
  );
}