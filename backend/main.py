from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import Base, engine, get_db

app = FastAPI()

# Enable CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database Table Schema
class MedicationModel(Base):
    __tablename__ = "medications"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    schedule = Column(String)
    status = Column(String, default="pending")

# Create Database Tables automatically
Base.metadata.create_all(bind=engine)

# Pydantic Schemas for API Requests
class MedicationCreate(BaseModel):
    name: str
    schedule: str

class MedicationResponse(BaseModel):
    id: int
    name: str
    schedule: str
    status: str

    class Config:
        from_attributes = True

# --- API ENDPOINTS ---

# 1. Get all medications from Database
@app.get("/api/medications", response_model=list[MedicationResponse])
def get_medications(db: Session = Depends(get_db)):
    return db.query(MedicationModel).all()

# 2. Add new medication to Database
@app.post("/api/medications", response_model=MedicationResponse)
def add_medication(med: MedicationCreate, db: Session = Depends(get_db)):
    db_med = MedicationModel(name=med.name, schedule=med.schedule, status="pending")
    db.add(db_med)
    db.commit()
    db.refresh(db_med)
    return db_med

# 3. Toggle medication status (Taken / Pending)
@app.put("/api/medications/{med_id}/toggle")
def toggle_medication(med_id: int, db: Session = Depends(get_db)):
    db_med = db.query(MedicationModel).filter(MedicationModel.id == med_id).first()
    if not db_med:
        raise HTTPException(status_code=404, detail="Medication not found")
    
    db_med.status = "taken" if db_med.status == "pending" else "pending"
    db.commit()
    return db_med

# 4. Delete medication from Database
@app.delete("/api/medications/{med_id}")
def delete_medication(med_id: int, db: Session = Depends(get_db)):
    db_med = db.query(MedicationModel).filter(MedicationModel.id == med_id).first()
    if not db_med:
        raise HTTPException(status_code=404, detail="Medication not found")
    
    db.delete(db_med)
    db.commit()
    return {"message": "Deleted successfully"}