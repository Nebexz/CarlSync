# Software Requirements Specification (SRS)

## Invisible Caregiver

Version: 1.0  
Project Type: Mobile Application (MVP)  
Tagline: Helping families care together.

---

# 1\. Introduction

## 1.1 Purpose

Invisible Caregiver is a collaborative caregiving platform designed to centralize patient information, medications, appointments, tasks, emergency information, and family coordination in one simple application.

The system aims to reduce caregiver burden, improve communication, and help families coordinate care more efficiently.

---

## 1.2 Problem Statement

Caregiving information is often fragmented across:

* WhatsApp chats  
* Paper notes  
* Phone calls  
* Calendar apps  
* Human memory

This fragmentation leads to:

* Missed medications  
* Missed appointments  
* Communication gaps  
* Information overload  
* Caregiver stress and burnout

---

## 1.3 Objectives

The system aims to:

* Centralize caregiving information  
* Improve family collaboration  
* Reduce caregiver burden  
* Increase medication adherence  
* Improve emergency readiness  
* Promote caregiver wellbeing

---

# 2\. Scope

The MVP will provide:

### Patient Management

* Create care recipient profiles  
* Store medical information  
* Store emergency information

### Medication Management

* Schedule medications  
* Send reminders  
* Track medication status

### Appointment Management

* Schedule appointments  
* Send reminders  
* Store doctor instructions

### Task Management

* Create tasks  
* Assign tasks  
* Track completion

### Family Collaboration

* Invite family members  
* Share updates  
* Real-time activity timeline

### Wellbeing Monitoring

* Daily caregiver check-ins  
* Stress tracking

---

# 3\. Stakeholders

## Primary Users

* Family caregivers  
* Adult children  
* Spouses

## Secondary Users

* Family members  
* Caretakers  
* Doctors during consultations

## Care Recipients

* Elderly individuals  
* Disabled individuals  
* Chronically ill patients  
* Children requiring continuous care

---

# 4\. User Personas

## Sarah

Age: 42

Role: Primary Caregiver

Goals:

* Organize medications  
* Coordinate with siblings  
* Reduce stress

Pain Points:

* Information scattered everywhere  
* Everything depends on her

---

## James

Age: 35

Role: Family Member

Goals:

* Help remotely  
* Stay informed

Pain Points:

* Doesn't know what is happening

---

## John

Age: 78

Role: Care Recipient

Needs:

* Medication adherence  
* Appointment tracking  
* Emergency readiness

---

# 5\. Functional Requirements

# FR-01 User Registration

The system shall allow users to:

* Sign up  
* Sign in  
* Sign out  
* Recover password

Methods:

* Email  
* Google

---

# FR-02 Care Recipient Profile

The system shall allow caregivers to create profiles containing:

### Personal Information

* Photo  
* Full name  
* Age  
* Sex  
* Address  
* Weight  
* Marital status

### Medical Information

* Conditions  
* Allergies  
* Blood type  
* Medication history  
* Admission date

### Physical Assessment

HEENT:

* Head  
* Eyes  
* Ears  
* Nose  
* Throat

General Appearance

Vital Signs:

* Blood pressure  
* Temperature  
* Respiratory rate  
* BMI

### Emergency Contacts

* Name  
* Relationship  
* Phone number

---

# FR-03 Family Management

The system shall allow:

* Inviting family members  
* Assigning permissions

Roles:

### Admin

* Full access

### Caregiver

* Manage care activities

### Viewer

* View information only

---

# FR-04 Medication Management

The system shall allow caregivers to:

Create medication:

* Name  
* Dosage  
* Frequency  
* Time  
* Start date  
* End date

The system shall:

* Generate reminders  
* Allow marking medication as:  
  * Taken  
  * Missed

Future:

* Notify family if medication remains unmarked.

---

# FR-05 Appointment Management

The system shall allow:

Create appointment:

* Title  
* Doctor name  
* Location  
* Date  
* Time  
* Notes

The system shall:

* Send reminders  
* Sync with device calendar  
* Store instructions

---

# FR-06 Task Management

The system shall allow:

Create task:

* Title  
* Description  
* Priority  
* Due date  
* Assignee

Status:

* Pending  
* In Progress  
* Completed

Users may:

* Comment  
* Update status

Only caregivers may edit tasks.

---

# FR-07 Family Timeline

The system shall provide an activity feed.

Example:

Sarah marked medication taken.

James completed Buy Medicine.

Emily scheduled appointment.

The timeline shall:

* Display activities chronologically  
* Allow comments

---

# FR-08 Emergency Card

The emergency card shall display:

* Name  
* Age  
* Blood type  
* Conditions  
* Allergies  
* Medications  
* Emergency contacts

The emergency card shall be accessible quickly from the dashboard.

---

# FR-09 Document Management

Users may upload:

* Prescriptions  
* Lab reports  
* Medical images  
* Insurance documents

Documents are optional.

---

# FR-10 Notifications

The system shall provide:

* Medication reminders  
* Appointment reminders  
* Task notifications  
* Timeline notifications  
* Wellbeing reminders

Users may:

* Enable notifications  
* Disable notifications

---

# FR-11 Caregiver Wellbeing

The system shall ask:

How are you feeling?

Options:

* Good  
* Tired  
* Exhausted  
* Overburdened  
* Sleep problems  
* Trust issues  
* Patient cooperation issues

The system shall:

* Record responses  
* Display stress patterns

---

# 6\. Non-Functional Requirements

## Performance

Dashboard loading:  
\< 2 seconds

Notification delivery:  
\< 5 seconds

---

## Availability

Application availability:  
99%

---

## Security

* Authentication required  
* Role-based permissions  
* Encrypted medical information

---

## Usability

* Mobile-first design  
* Simple navigation  
* Minimal learning curve

---

## Scalability

Support:

* Multiple caregivers  
* Multiple patients (future)

---

# 7\. Information Architecture

Home

├── Patient Profile

├── Medication

├── Tasks

├── Calendar

├── Timeline

├── Emergency Card

└── Settings

---

# 8\. User Flow

Sign Up

↓

Create Patient

↓

Invite Family

↓

Dashboard

├── Medication

├── Tasks

├── Calendar

├── Timeline

├── Profile

└── Emergency

---

# 9\. Database Entities

## User

id

name

email

role

avatar

created\_at

## Patient

id

name

age

gender

weight

blood\_type

allergies

conditions

## Medication

id

patient\_id

name

dosage

frequency

time

status

## Appointment

id

patient\_id

doctor

location

date

time

notes

## Task

id

title

description

priority

due\_date

status

assigned\_to

## TimelineEvent

id

patient\_id

type

description

created\_by

timestamp

## WellbeingLog

id

user\_id

mood

description

created\_at

---

# 10\. MVP Screens

1. Splash Screen  
2. Sign Up  
3. Create Patient  
4. Dashboard  
5. Medication Manager  
6. Task Manager  
7. Calendar  
8. Family Timeline  
9. Patient Profile  
10. Emergency Card  
11. Settings

---

# 11\. Acceptance Criteria

### Medication

Given medication exists,  
When reminder arrives,  
Then caregiver can mark Taken or Missed.

### Tasks

Given task exists,  
When assigned,  
Then assignee receives notification.

### Appointment

Given appointment exists,  
When time approaches,  
Then reminder is sent.

### Timeline

Given activity occurs,  
Then timeline updates immediately.

### Emergency Card

Given emergency card is opened,  
Then critical information appears instantly.

---

# 12\. Future Enhancements

* Offline emergency access  
* Doctor portal  
* Wearable integration  
* Medication adherence analytics  
* AI recommendations  
* Voice assistant  
* Multi-patient dashboard  
* Hospital integrations

---

# Unique Value Proposition

Invisible Caregiver simplifies caregiving by bringing medications, appointments, tasks, emergency information, and family coordination into one easy-to-use platform, helping families care together from one place.

