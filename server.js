import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));   // <-- serves your HTML, CSS, JS files

// ✅ Make sure data.json is in the ROOT folder (same level as server.js)
const DATA_FILE = "./data.json";   // <-- correct path

// === Helper Functions ===
function loadData() {
  if (!fs.existsSync(DATA_FILE)) {
    return { admin: { username: "admin", password: "12345" }, candidates: [], votes: {}, elections: [] };
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// === Admin Login ===
app.post("/admin/login", (req, res) => {
  const data = loadData();
  const { username, password } = req.body;

  if (username === data.admin.username && password === data.admin.password) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// === Add Candidate ===
app.post("/admin/addCandidate", (req, res) => {
  const data = loadData();
  const { name, dept } = req.body;

  data.candidates.push({ name, dept });
  saveData(data);

  res.json({ success: true });
});

// === Get Candidates ===
app.get("/candidates", (req, res) => {
  const data = loadData();
  res.json(data.candidates);
});

// === Submit Vote ===
app.post("/vote", (req, res) => {
  const data = loadData();
  const { candidate } = req.body;

  if (!data.votes[candidate]) {
    data.votes[candidate] = 0;
  }
  data.votes[candidate]++;

  saveData(data);
  res.json({ success: true });
});

// === Results ===
app.get("/results", (req, res) => {
  const data = loadData();
  res.json(data.votes);
});

// === Elections API (if you add election start/end) ===
app.get("/elections", (req, res) => {
  const data = loadData();
  res.json(data.elections || []);
});

// === Start Server ===
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

