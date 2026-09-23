from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="MediCare API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Expanded In-Memory Database
medications_db = [
    {
        "id": 1, 
        "name": "Paracetamol 500mg", 
        
        "schedule": "After Breakfast (9:00 AM)", 
        "status": "pending",
        "stock": 15,
        "instructions": "Take with food",
        "missed_alert": False
    },
    {
        "id": 2, 
        "name": "Amoxicillin 500mg", 
        "schedule": "After Lunch (2:00 PM)", 
        "status": "taken",
        "stock": 3,  # Low stock trigger
        "instructions": "Take with full glass of water",
        "missed_alert": False
    }
]

vitals_db = []

# Data Models
class MedicationItem(BaseModel):
    name: str
    schedule: str
    stock: int = 30
    instructions: str = "Take as directed"

class AgeCheckRequest(BaseModel):
    medication_name: str
    age: int

class VitalLog(BaseModel):
    blood_pressure: str
    blood_sugar: str
    notes: str

# --- Endpoints ---

@app.get("/api/medications")
def get_medications():
    return medications_db

@app.post("/api/medications")
def add_medication(item: MedicationItem):
    new_id = max([m["id"] for m in medications_db], default=0) + 1
    new_med = {
        "id": new_id,
        "name": item.name,
        "schedule": item.schedule,
        "stock": item.stock,
        "instructions": item.instructions,
        "status": "pending",
        "missed_alert": False
    }
    medications_db.append(new_med)
    return new_med

@app.put("/api/medications/{med_id}/toggle")
def toggle_medication(med_id: int):
    for med in medications_db:
        if med["id"] == med_id:
            if med["status"] == "pending":
                med["status"] = "taken"
                med["stock"] = max(0, med["stock"] - 1)
            else:
                med["status"] = "pending"
                med["stock"] += 1
            return med
    return {"error": "Medication not found"}

@app.delete("/api/medications/{med_id}")
def delete_medication(med_id: int):
    global medications_db
    medications_db = [m for m in medications_db if m["id"] != med_id]
    return {"success": True}

# Vitals Endpoint
@app.get("/api/vitals")
def get_vitals():
    return vitals_db

@app.post("/api/vitals")
def log_vital(vital: VitalLog):
    vitals_db.append(vital.dict())
    return {"success": True, "vitals": vitals_db}

# Age Check Endpoint
@app.post("/api/check-age-safety")
def check_age_safety(req: AgeCheckRequest):
    med = req.medication_name.strip().lower()
    age = req.age
    
    if age < 12:
        if "aspirin" in med:
            return {
                "safe": False,
                "warning": "⚠️ High Risk: Aspirin is contraindicated for children under 12 due to Reye's Syndrome risk.",
                "recommendation": "Consult a pediatrician before giving Aspirin."
            }
        if "ibuprofen" in med and age < 1:
            return {
                "safe": False,
                "warning": "⚠️ Caution: Ibuprofen is generally not recommended for infants under 6 months.",
                "recommendation": "Consult a doctor for pediatric dosing."
            }

    if age >= 65:
        beers_list = ["benadryl", "diphenhydramine", "diazepam", "valium", "xanax", "alprazolam", "zolpidem", "indomethacin"]
        if any(drug in med for drug in beers_list):
            return {
                "safe": False,
                "warning": "⚠️ Caution (Beers Criteria Warning): Higher risk for adults aged 65 and older.",
                "recommendation": "May cause dizziness or fall risks in seniors. Ask for safer alternatives."
            }

    return {
        "safe": True,
        "warning": f"✅ No major age-based contraindications flagged for age {age}.",
        "recommendation": "Always follow prescribed dosage."
    }

# Drug Interaction Checker
@app.get("/api/check-interactions")
def check_interactions():
    names = [m["name"].lower() for m in medications_db]
    interactions = []
    
    has_aspirin = any("aspirin" in n for n in names)
    has_ibuprofen = any("ibuprofen" in n for n in names)
    has_warfarin = any("warfarin" in n or "blood thinner" in n for n in names)
    
    if has_aspirin and has_ibuprofen:
        interactions.append("⚠️ Alert: Combining Aspirin and Ibuprofen may increase stomach bleeding risks.")
    if (has_aspirin or has_ibuprofen) and has_warfarin:
        interactions.append("⚠️ Critical Alert: Combining NSAIDs with Blood Thinners severely increases hemorrhage risks.")
        
    return {"interactions": interactions}