# Simple HR Email Response Tool

---

## **Project Overview**
This project is a simple web application to help HR send email responses to job candidates. Users can input candidate details, select their status (Selected/Rejected), and send appropriate email responses using predefined templates.

---

## **Features**
- Input candidate name, email, and position applied
- Select status: Selected or Rejected
- Preview and send email based on predefined templates
- Mobile-responsive and simple UI
- Backend handles form submission and email sending

---

## **Live UI Screenshots**
![Live UI Screenshot 1](assets/live-ui-1.png)  
![Live UI Screenshot 2](assets/live-ui-2.png)  

> Screenshots show the form layout, radio buttons for status, and the send email functionality.

---

## **Example Email Templates**

**Selection Email Template:**
Dear [Candidate Name],

We are pleased to inform you that you have been selected for the position of [Position].

Please reply to this email to confirm your acceptance.

Best regards,
HR Team

**Rejection Email Template:**
Dear [Candidate Name],

Thank you for applying for the position of [Position].

We regret to inform you that we have decided to move forward with other candidates.

Best regards,
HR Team

> `[Candidate Name]` and `[Position]` placeholders are replaced dynamically based on form input.

---

## **Setup Instructions**

1. **Clone the repository**
```bash
git clone https://github.com/Devraj02-hash/HR-Email-Response-Tool.git
cd HR-Email-Response-Tool

Install Python dependencies

pip install flask flask-cors

HR-Email-Response-Tool/
│
├── app.py               # Flask backend
├── templates/
│   └── index.html       # HTML UI
└── static/
    ├── style.css        # CSS file
    └── script.js        # JavaScript file

#Runserver
python app.py


