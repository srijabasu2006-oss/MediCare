module.exports = [
"[project]/OneDrive/Desktop/MediCare/frontend/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/MediCare/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/MediCare/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function Home() {
    const [medications, setMedications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activePortal, setActivePortal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('elder');
    const [newMedName, setNewMedName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [newMedSchedule, setNewMedSchedule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [locationStatus, setLocationStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [nearbyPlaces, setNearbyPlaces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Scanning State
    const [isScanning, setIsScanning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scanMessage, setScanMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Fetch medications
    const fetchMedications = async ()=>{
        try {
            const res = await fetch('http://localhost:8000/api/medications');
            const data = await res.json();
            setMedications(data);
        } catch (err) {
            console.error('Failed to load medicines', err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchMedications();
    }, []);
    // Add Medication
    const handleAddMedication = async (e)=>{
        e.preventDefault();
        if (!newMedName.trim() || !newMedSchedule.trim()) return;
        try {
            const res = await fetch('http://localhost:8000/api/medications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: newMedName,
                    schedule: newMedSchedule
                })
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
    const toggleMedication = async (id)=>{
        try {
            await fetch(`http://localhost:8000/api/medications/${id}/toggle`, {
                method: 'PUT'
            });
            fetchMedications();
            speakCompanion("Updated medicine status.");
        } catch (err) {
            console.error('Error updating status', err);
        }
    };
    // Delete Medication
    const handleDeleteMedication = async (id)=>{
        try {
            await fetch(`http://localhost:8000/api/medications/${id}`, {
                method: 'DELETE'
            });
            fetchMedications();
        } catch (err) {
            console.error('Error deleting medicine', err);
        }
    };
    // Simulate Prescription Image Scanning
    const handleImageUpload = (e)=>{
        const file = e.target.files[0];
        if (!file) return;
        setIsScanning(true);
        setScanMessage('Scanning prescription image...');
        // Simulate AI reading the paper prescription
        setTimeout(()=>{
            setIsScanning(false);
            setNewMedName('Amoxicillin 500mg');
            setNewMedSchedule('After Lunch (2:00 PM)');
            setScanMessage('Prescription scanned! Please review details below.');
        }, 2000);
    };
    const speakCompanion = (text)=>{
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const speech = new SpeechSynthesisUtterance(text);
            speech.rate = 0.85;
            speech.pitch = 1.05;
            window.speechSynthesis.speak(speech);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.lang = 'en-US';
            recognition.onstart = ()=>setIsListening(true);
            recognition.onend = ()=>setIsListening(false);
            recognition.onresult = ()=>{
                const pending = medications.filter((m)=>m.status !== 'taken');
                if (pending.length > 0) {
                    speakCompanion(`You have ${pending.length} pending medicines. Next is ${pending[0].name} at ${pending[0].schedule}.`);
                } else {
                    speakCompanion("All medicines taken for today!");
                }
            };
            recognitionRef.current = recognition;
        }
    }, [
        medications
    ]);
    const handleGetLocation = ()=>{
        if (!navigator.geolocation) {
            setLocationStatus('GPS unavailable.');
            return;
        }
        setLocationStatus('Locating nearby services...');
        navigator.geolocation.getCurrentPosition((pos)=>{
            const { latitude: lat, longitude: lng } = pos.coords;
            setLocationStatus(`Location found.`);
            setNearbyPlaces([
                {
                    title: 'Local Doctors & Clinics',
                    url: `https://www.google.com/maps/search/doctors+near+me/@${lat},${lng},14z`
                },
                {
                    title: '24/7 Pharmacies',
                    url: `https://www.google.com/maps/search/pharmacies+near+me/@${lat},${lng},14z`
                },
                {
                    title: 'Emergency Hospitals',
                    url: `https://www.google.com/maps/search/hospitals+near+me/@${lat},${lng},14z`
                }
            ]);
        }, ()=>setLocationStatus('Location access denied.'));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.36.0/tabler-icons.min.css"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    backgroundColor: '#0b132b',
                    color: '#f8fafc',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    minHeight: '100vh',
                    paddingBottom: '6rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        style: {
                            position: 'sticky',
                            top: 0,
                            zIndex: 100,
                            backgroundColor: 'rgba(11, 19, 43, 0.95)',
                            backdropFilter: 'blur(12px)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '1rem 2rem',
                            borderBottom: '1px solid #1c2541',
                            flexWrap: 'wrap',
                            gap: '1rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#0b132b',
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "ti ti-heart-handshake"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '1.4rem',
                                                    fontWeight: '900',
                                                    background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent'
                                                },
                                                children: "MediCare"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                lineNumber: 168,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.75rem',
                                                    color: '#34d399',
                                                    fontWeight: '700'
                                                },
                                                children: "● Online"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                lineNumber: 171,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    background: '#1c2541',
                                    borderRadius: '12px',
                                    padding: '4px',
                                    border: '1px solid #3a506b'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActivePortal('elder'),
                                        style: {
                                            padding: '0.6rem 1.2rem',
                                            border: 'none',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            fontWeight: '800',
                                            fontSize: '0.9rem',
                                            background: activePortal === 'elder' ? '#38bdf8' : 'transparent',
                                            color: activePortal === 'elder' ? '#0b132b' : '#94a3b8'
                                        },
                                        children: "👵 Elder View"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActivePortal('caregiver'),
                                        style: {
                                            padding: '0.6rem 1.2rem',
                                            border: 'none',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            fontWeight: '800',
                                            fontSize: '0.9rem',
                                            background: activePortal === 'caregiver' ? '#818cf8' : 'transparent',
                                            color: activePortal === 'caregiver' ? '#0b132b' : '#94a3b8'
                                        },
                                        children: "👨‍👦 Caregiver Portal"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    activePortal === 'elder' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        style: {
                            maxWidth: '900px',
                            margin: '0 auto',
                            padding: '2rem 1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'linear-gradient(135deg, #1c2541, #0b132b)',
                                    border: '2px solid #38bdf8',
                                    borderRadius: '24px',
                                    padding: '2.5rem 1.5rem',
                                    textAlign: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontSize: '2.4rem',
                                            fontWeight: '900',
                                            margin: '0 0 1rem',
                                            color: '#ffffff'
                                        },
                                        children: "Hello! I am MediCare 😊"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '1.2rem',
                                            color: '#cbd5e1',
                                            marginBottom: '2rem'
                                        },
                                        children: "Tap the big voice button below to check your schedule."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            speakCompanion("Hello! Ask me about your medicine schedule.");
                                            recognitionRef.current?.start();
                                        },
                                        style: {
                                            background: isListening ? '#ef4444' : 'linear-gradient(135deg, #0284c7, #38bdf8)',
                                            color: '#ffffff',
                                            border: 'none',
                                            padding: '1.4rem 3rem',
                                            borderRadius: '60px',
                                            fontSize: '1.4rem',
                                            fontWeight: '900',
                                            cursor: 'pointer',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '12px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "ti ti-microphone",
                                                style: {
                                                    fontSize: '2rem'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            isListening ? 'Listening...' : 'Tap to Talk to MediCare'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                style: {
                                    background: '#1c2541',
                                    padding: '2rem',
                                    borderRadius: '24px',
                                    border: '1px solid #3a506b'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '1.6rem',
                                            margin: '0 0 1.5rem',
                                            color: '#38bdf8',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "ti ti-pill"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, this),
                                            " Today's Medicines (",
                                            medications.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this),
                                    medications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#94a3b8',
                                            fontSize: '1.1rem'
                                        },
                                        children: "No medicines added yet. Caregivers can add them in the portal."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 231,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '1.25rem'
                                        },
                                        children: medications.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: '#0b132b',
                                                    padding: '1.5rem',
                                                    borderRadius: '18px',
                                                    border: '2px solid #3a506b',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    flexWrap: 'wrap',
                                                    gap: '1rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '1.6rem',
                                                                    fontWeight: '800',
                                                                    color: '#ffffff'
                                                                },
                                                                children: m.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                                lineNumber: 237,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '1.1rem',
                                                                    color: '#94a3b8',
                                                                    marginTop: '4px'
                                                                },
                                                                children: [
                                                                    "⏰ Time: ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: m.schedule
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                                        lineNumber: 238,
                                                                        columnNumber: 105
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                                lineNumber: 238,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                        lineNumber: 236,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>toggleMedication(m.id),
                                                        style: {
                                                            background: m.status === 'taken' ? 'rgba(52, 211, 153, 0.2)' : '#10b981',
                                                            color: m.status === 'taken' ? '#34d399' : '#ffffff',
                                                            border: m.status === 'taken' ? '2px solid #34d399' : 'none',
                                                            padding: '0.8rem 1.8rem',
                                                            borderRadius: '12px',
                                                            fontSize: '1.2rem',
                                                            fontWeight: '900',
                                                            cursor: 'pointer'
                                                        },
                                                        children: m.status === 'taken' ? '✓ Taken' : 'I Took This Pill'
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                        lineNumber: 241,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, m.id, true, {
                                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                lineNumber: 235,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 233,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                style: {
                                    background: '#1c2541',
                                    padding: '1.8rem',
                                    borderRadius: '24px',
                                    border: '1px solid #3a506b',
                                    textAlign: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleGetLocation,
                                        style: {
                                            background: 'linear-gradient(135deg, #0284c7, #38bdf8)',
                                            color: '#0b132b',
                                            border: 'none',
                                            padding: '1rem 2rem',
                                            borderRadius: '12px',
                                            fontSize: '1.1rem',
                                            fontWeight: '900',
                                            cursor: 'pointer'
                                        },
                                        children: "📍 Find Open Pharmacies & Doctors Near Me"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this),
                                    locationStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#34d399',
                                            fontSize: '1rem',
                                            marginTop: '1rem'
                                        },
                                        children: locationStatus
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 265,
                                        columnNumber: 34
                                    }, this),
                                    nearbyPlaces.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                            gap: '1rem',
                                            marginTop: '1.5rem'
                                        },
                                        children: nearbyPlaces.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: p.url,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                style: {
                                                    background: '#0b132b',
                                                    color: '#38bdf8',
                                                    padding: '1rem',
                                                    borderRadius: '12px',
                                                    textDecoration: 'none',
                                                    fontWeight: '800',
                                                    border: '1px solid #3a506b'
                                                },
                                                children: [
                                                    p.title,
                                                    " ↗"
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                lineNumber: 270,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 268,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this),
                    activePortal === 'caregiver' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        style: {
                            maxWidth: '950px',
                            margin: '0 auto',
                            padding: '2rem 1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#1c2541',
                                    padding: '2rem',
                                    borderRadius: '24px',
                                    border: '2px dashed #818cf8',
                                    textAlign: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            margin: '0 0 0.5rem',
                                            fontSize: '1.6rem',
                                            color: '#818cf8',
                                            fontWeight: '800'
                                        },
                                        children: "📷 Scan Doctor's Prescription"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#94a3b8',
                                            fontSize: '0.95rem',
                                            marginBottom: '1.5rem'
                                        },
                                        children: "Take a photo or upload a picture of a prescription to fill in the form automatically."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "image/*",
                                        capture: "environment",
                                        ref: fileInputRef,
                                        onChange: handleImageUpload,
                                        style: {
                                            display: 'none'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 293,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>fileInputRef.current?.click(),
                                        disabled: isScanning,
                                        style: {
                                            background: 'linear-gradient(135deg, #818cf8, #38bdf8)',
                                            color: '#0b132b',
                                            border: 'none',
                                            padding: '1rem 2.5rem',
                                            borderRadius: '14px',
                                            fontWeight: '900',
                                            fontSize: '1.1rem',
                                            cursor: 'pointer',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '10px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "ti ti-camera",
                                                style: {
                                                    fontSize: '1.5rem'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                lineNumber: 311,
                                                columnNumber: 17
                                            }, this),
                                            isScanning ? 'Scanning Prescription...' : 'Upload or Take Photo'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this),
                                    scanMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            marginTop: '1rem',
                                            color: scanMessage.includes('Scanned') ? '#34d399' : '#38bdf8',
                                            fontWeight: '700'
                                        },
                                        children: scanMessage
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 316,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#1c2541',
                                    padding: '2rem',
                                    borderRadius: '24px',
                                    border: '1px solid #3a506b'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            margin: '0 0 0.5rem',
                                            fontSize: '1.6rem',
                                            color: '#ffffff',
                                            fontWeight: '800'
                                        },
                                        children: "✍️ Add New Medicine"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#94a3b8',
                                            fontSize: '0.95rem',
                                            marginBottom: '1.5rem'
                                        },
                                        children: "Enter details manually or use the scanner above."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleAddMedication,
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                                            gap: '1rem',
                                            alignItems: 'end'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            display: 'block',
                                                            fontSize: '0.85rem',
                                                            color: '#cbd5e1',
                                                            marginBottom: '0.4rem',
                                                            fontWeight: '700'
                                                        },
                                                        children: "Medicine Name & Dosage"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                        lineNumber: 333,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "e.g. Paracetamol 500mg",
                                                        value: newMedName,
                                                        onChange: (e)=>setNewMedName(e.target.value),
                                                        style: {
                                                            width: '100%',
                                                            padding: '0.8rem',
                                                            borderRadius: '10px',
                                                            background: '#0b132b',
                                                            border: '1px solid #3a506b',
                                                            color: 'white',
                                                            fontSize: '1rem'
                                                        },
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                        lineNumber: 334,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                lineNumber: 332,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            display: 'block',
                                                            fontSize: '0.85rem',
                                                            color: '#cbd5e1',
                                                            marginBottom: '0.4rem',
                                                            fontWeight: '700'
                                                        },
                                                        children: "Time / Schedule"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                        lineNumber: 345,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "e.g. After Dinner (8:00 PM)",
                                                        value: newMedSchedule,
                                                        onChange: (e)=>setNewMedSchedule(e.target.value),
                                                        style: {
                                                            width: '100%',
                                                            padding: '0.8rem',
                                                            borderRadius: '10px',
                                                            background: '#0b132b',
                                                            border: '1px solid #3a506b',
                                                            color: 'white',
                                                            fontSize: '1rem'
                                                        },
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                        lineNumber: 346,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                lineNumber: 344,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                style: {
                                                    background: '#818cf8',
                                                    color: '#0b132b',
                                                    border: 'none',
                                                    padding: '0.85rem 1.5rem',
                                                    borderRadius: '10px',
                                                    fontWeight: '900',
                                                    fontSize: '1rem',
                                                    cursor: 'pointer'
                                                },
                                                children: "+ Save Medicine"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                lineNumber: 356,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 331,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#1c2541',
                                    padding: '2rem',
                                    borderRadius: '24px',
                                    border: '1px solid #3a506b'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            margin: '0 0 1.5rem',
                                            fontSize: '1.5rem',
                                            color: '#ffffff'
                                        },
                                        children: "All Saved Medicines"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 367,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '1rem'
                                        },
                                        children: medications.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: '#0b132b',
                                                    padding: '1.2rem 1.5rem',
                                                    borderRadius: '14px',
                                                    border: '1px solid #3a506b',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '1.2rem',
                                                                    fontWeight: '800',
                                                                    color: '#ffffff'
                                                                },
                                                                children: m.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                                lineNumber: 373,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '0.9rem',
                                                                    color: '#94a3b8',
                                                                    marginTop: '2px'
                                                                },
                                                                children: m.schedule
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                                lineNumber: 374,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                        lineNumber: 372,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$MediCare$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDeleteMedication(m.id),
                                                        style: {
                                                            background: 'rgba(239, 68, 68, 0.2)',
                                                            color: '#f87171',
                                                            border: '1px solid #f87171',
                                                            padding: '0.5rem 1rem',
                                                            borderRadius: '8px',
                                                            cursor: 'pointer',
                                                            fontWeight: '700'
                                                        },
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                        lineNumber: 377,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, m.id, true, {
                                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                                lineNumber: 371,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                                lineNumber: 366,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/MediCare/frontend/app/page.js",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/OneDrive/Desktop/MediCare/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/MediCare/frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=OneDrive_Desktop_MediCare_frontend_0pd4h0a._.js.map