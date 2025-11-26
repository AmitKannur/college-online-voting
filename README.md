# 🎓 College Online Voting System  
A complete online voting system with admin panel, candidate management, voting page, and result page.

---

## 🚀 Features
- Admin Login  
- Add Candidates  
- Set Election Start & End Date  
- Student Voting Page  
- Live Voting Results (JSON Database)  
- Stylish UI (HTML + CSS)

---

## 📦 Project Setup

### 1️⃣ Install Node.js  
Download: https://nodejs.org/

### 2️⃣ Install dependencies
Run inside project folder:

```bash
npm install
3️⃣ Start the server
bash
Copy code
node server.js
4️⃣ Open in browser
arduino
Copy code
http://localhost:3000
📂 Project Structure
pgsql
Copy code
server.js
data.json
README.md
/public
   ├── index.html
   ├── admin.html
   ├── addCandidate.html
   ├── vote.html
   ├── result.html
   ├── style.css
   └── script.js
🔧 Configuration
Admin credentials are in data.json:

json
Copy code
{
  "admin": { "username": "admin", "password": "12345" },
  "candidates": [],
  "votes": {},
  "elections": []
}
You can change username/password here.

🌐 Deployment (Render.com)
Upload project to GitHub

Go to https://render.com

Create new Web Service

Select Node runtime

Build command → npm install

Start command → node server.js

🙌 Author
Project created by Amit for College Mini Project.