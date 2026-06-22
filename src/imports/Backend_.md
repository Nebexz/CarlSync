# Architecture

Mobile App (Figma Make)

       ↓

Authentication

       ↓

Supabase

├── Database (Postgres)

├── Auth

├── Storage

└── Realtime

---

# Database Schema

### users

id

name

email

avatar\_url

created\_at

### patients

id

name

photo\_url

age

sex

address

weight

blood\_type

allergies

conditions

created\_by

created\_at

### caregiver\_members

id

patient\_id

user\_id

role

Roles:

* admin  
* caregiver  
* viewer

---

### medications

id

patient\_id

name

dosage

frequency

time

start\_date

end\_date

status

---

### appointments

id

patient\_id

title

doctor\_name

location

date

time

notes

---

### tasks

id

patient\_id

title

description

priority

due\_date

status

assigned\_to

---

### timeline\_events

id

patient\_id

type

description

created\_by

created\_at

---

### documents

id

patient\_id

title

file\_url

type

uploaded\_by

created\_at

---

### wellbeing\_logs

id

user\_id

mood

note

created\_at

---

# API Thinking

### Authentication

POST /signup

POST /login

POST /logout

### Patient

GET /patients

POST /patients

PATCH /patients/:id

### Medications

GET /patients/:id/medications

POST /medications

PATCH /medications/:id

### Tasks

GET /tasks

POST /tasks

PATCH /tasks/:id

### Timeline

GET /timeline

POST /timeline

---

# Realtime Features

Supabase Realtime can make the demo feel magical.

Example:

Sarah marks:

Amoxicillin Taken

Immediately:

James sees:

Sarah marked Amoxicillin as taken.

Judges love this kind of collaboration.

---

# Storage

Use Supabase Storage for:

* Patient photos  
* Prescriptions  
* Lab reports  
* Insurance documents

---

# Notifications

For MVP:

Fake notifications are acceptable.

For a more complete demo:

Supabase Database

     ↓

Edge Function

     ↓

Push Notification

---

# What I'd actually build in 24 hours

### Real

✅ Auth

✅ Patient creation

✅ Medication CRUD

✅ Task CRUD

✅ Timeline CRUD

✅ Realtime updates

### Simulated

⚠️ Push notifications

⚠️ Calendar sync

⚠️ Offline mode

⚠️ AI insights

