
# Getting Started with TA FASTAPI

## Prequerities
- Python 3.8

## To Start (First Time)
First create VENV
```
python -m venv venv
.\venv\Scripts\activate # Windows
source ./venv/bin/activate # Windows
python -m pip install --upgrade pip
pip install -r requirements.txt
```

Then run the app
```
py main.py
```

## To Start (After Instalation)
```
.\venv\Scripts\activate
py main.py
```

# Run MongoDB Instance on Docker
```
docker run --name mongo -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=password mongo:latest
```


# Create new DB
MongoDB only creates the database when you first store data in that database. This data could be a collection or a document
To add a document to your database, use the db.collection.insert() command.
```
use example
db.person.insert({id: 1, name: "Ada Lovelace", age: 45})
db.person.insert({id: 2, name: "Mark Miller", age: 24})
db.person.insert({id: 3, name: "Ben Markus", age: 34})
```
