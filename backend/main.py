from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from pymongo import MongoClient
import json
import os
from dotenv import load_dotenv
load_dotenv()

DB_URL = os.getenv("MONGODB_URL")
client = MongoClient(DB_URL)
db = client["example"]
print("Connection Successful")

app = FastAPI()

# origins = [
#     "http://localhost",
#     "http://localhost:3000",
# ]

origins = [
  "https://frontend-upwork.theojust.my.id",
  "https://theojust.my.id",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/ping')
async def ping():
  return "FastAPI is Healthy"

@app.get('/persons')
async def get_all_person():
  data = db.person.find()
  return_data = {}
  for x in data:
    return_data[x["id"]] = x
  return json.dumps(return_data, default=str)

@app.get('/persons/{id}')
async def get_person(id: int):
  data = db.person.find_one({"id": id})
  return json.dumps(data, default=str)

if __name__ == "__main__":
  uvicorn.run(app, host='0.0.0.0', port=8000)