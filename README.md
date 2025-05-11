

# Xeno Assignment Frontend

## 📋 Local Setup Instructions

### Prerequisites
- Node.js (v18+)
- npm (v9+)
- Backend server 

### Steps
1. Clone the repository
   
   git clone https://github.com/girishgubba/xeno_frontend.git
   cd xeno_frontend
   

2. Install dependencies
   npm install
  

3. Set up environment variables
   
     cp .env.example .env
    

4. Run the app
  
   npm run dev
   
   Open `http://localhost:3000` in your browser.

---

## 🗺️ Architecture Diagram


                          +-------------------+
                          |     Frontend      |
                          | (Next.js/React)   |
                          +---------+---------+
                                    |
                                    | API Calls
                                    |
+----------------+         +--------+--------+        +-------------------+
|   AI Services  +<------->|   Backend API   +<------>|   MySQL Database  |
| (OpenAI, Gemini)|         | (Node.js/Express)|        |  (Railway Hosted) |
+----------------+         +------------------+        +-------------------+


Key Flow:
1. Frontend sends requests to the backend.
2. Backend processes requests, interacts with MySQL, and calls AI APIs.
3. AI results are returned to the frontend via the backend.

---

🛠️ Tech Stack & AI Tools

### Frontend
- Framework: Next.js (React)
- Styling:  CSS
- State Management: React Context
- Routing: Next.js Router

### Backend
- Framework: Node.js
- Database: MySQL 
- Auth: Google OAuth 2.0



### Deployment
- Frontend: Vercel
- Backend: Railway

---

## ⚠️ Known Limitations & Assumptions

### Limitations
1. Performance: Image processing with Gemini may be slow on low-end devices.
2. Scalability: Backend is monolithic and not optimized for high traffic.
3. Error Handling: Limited retry logic for failed API calls to AI services.
4. Mobile UI: Not fully responsive on all screen sizes.

### Assumptions
1. Authentication: Users have a Google account for OAuth login.
2. API Keys: OpenAI and Gemini keys are provided via environment variables.
3. ]Backend Availability: Backend server is running at `http://localhost:3000`.
4. Rate Limits: AI APIs are assumed to have sufficient quota for demo usage.

---

## 🔗 Links
- [Backend Repository](https://github.com/girishgubba/xeno_backend)
- [Live Demo](https://xenocrmassign.netlify.app/login)

---
