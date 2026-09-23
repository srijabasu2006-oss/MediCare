'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activePortal, setActivePortal] = useState('elder');
  const [medications, setMedications] = useState([]);

  // Fetch medications directly from Python/SQL backend
  const fetchMedications = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/medications');
      if (res.ok) {
        const data = await res.json();
        setMedications(data);
      }
    } catch (err) {
      console.error('API Error:', err);
    }
  };

  useEffect(() => {
    fetchMedications();
  }, []);

  return (
    <div style={{ backgroundColor: '#0B1B3D', color: '#FFFFFF', minHeight: '100vh', padding: '2rem', fontFamily: 'sans-serif' }}>
      
      {/* HEADER SWITCH */}
      <header style={{ display: 'flex', gap: '10px', marginBottom: '2rem' }}>
        <button
          onClick={() => setActivePortal('elder')}
          style={{
            padding: '0.8rem 1.5rem',
            borderRadius: '10px',
            border: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            background: activePortal === 'elder' ? '#FF6600' : '#162A52',
            color: '#FFFFFF',
          }}
        >
          👵 Elder View
        </button>

        <button
          onClick={() => setActivePortal('caregiver')}
          style={{
            padding: '0.8rem 1.5rem',
            borderRadius: '10px',
            border: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            background: activePortal === 'caregiver' ? '#FF6600' : '#162A52',
            color: '#FFFFFF',
          }}
        >
          👨‍👦 Caregiver Portal
        </button>
      </header>

      {/* ELDER VIEW */}
      {activePortal === 'elder' ? (
        <main style={{ maxWidth: '800px', margin: '0 auto', background: '#162A52', padding: '2rem', borderRadius: '16px' }}>
          <h1 style={{ color: '#FFCC00', margin: '0 0 1rem 0' }}>Today's Medicines</h1>
          {medications.length === 0 ? (
            <p>No medicines found from backend database.</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {medications.map((med) => (
                <li key={med.id} style={{ background: '#0B1B3D', margin: '0.8rem 0', padding: '1rem', borderRadius: '10px', border: '1px solid #1E3A70' }}>
                  <strong style={{ fontSize: '1.2rem' }}>{med.name}</strong> - {med.schedule}
                </li>
              ))}
            </ul>
          )}
        </main>
      ) : (
        /* CAREGIVER VIEW */
        <main style={{ maxWidth: '800px', margin: '0 auto', background: '#162A52', padding: '2rem', borderRadius: '16px' }}>
          <h1 style={{ color: '#FFCC00', margin: '0 0 1rem 0' }}>Caregiver Dashboard</h1>
          <p>Medication inventory and logs connected directly to SQL database.</p>
        </main>
      )}

    </div>
  );
}