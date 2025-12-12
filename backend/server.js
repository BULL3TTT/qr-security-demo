const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.static("."));

app.get("/data", (req, res) => {
  try {
    const filePath = path.join(__dirname, "data.json");
    
    if (!fs.existsSync(filePath)) {
      return res.json([]);
    }

    const raw = fs.readFileSync(filePath, "utf8").trim();
    if (!raw.length) {
      return res.json([]);
    }

    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return res.json(parsed);
    }
    
    return res.json([]);
  } catch (err) {
    res.status(500).json({ error: "Error reading data" });
  }
});

app.post("/save", (req, res) => {
  try {
    const data = req.body;
    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({ error: "Empty request body" });
    }

    const filePath = path.join(__dirname, "data.json");

    let fileData = [];
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf8").trim();
      if (raw.length) {
        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            fileData = parsed;
          }
        } catch (err) {
          fileData = [];
        }
      }
    }

    fileData.push({
      date: new Date().toISOString(),
      ...data,
    });

    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2), "utf8");

    res.json({ status: "success" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});