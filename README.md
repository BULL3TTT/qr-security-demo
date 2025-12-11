## QR-Security-Demo
### Educational Demonstration for Digital Security Awareness

This project was created exclusively for **educational purposes** as part of a **digital security awareness conference/workshop**.
Its goal is to demonstrate how simply scanning a QR code can trigger unexpected actions—such as automatic redirections or basic browser data collection—without the user realizing it.

### 🎯Purpose of This Demonstration

The main goal is to help users:
  - Understand how QR codes or links can be used to execute hidden or unexpected actions.
  - Recognize the risks of interacting with untrusted QR codes.
  - See, transparently, what type of non-sensitive browser information can be collected by any website.
  - Become aware of the importance of verifying the origin of QR codes before scanning them.

### What This Project Does

  - Collects basic browser information(userAgent, language, platform, screen size, hardware concurrency, connection type, etc.)
  - Fetches the user's public IP address using an external open API.
  - Sends all collected data to the local server using navigator.sendBeacon().
  - Automatically redirects the user to YouTube, simulating how an attacker could hide malicious activity behind a normal redirect.
  - The server stores the collected data in data.json so it can be shown during the demonstration.
---
### 📂 Project Structure
~~~
/
├── index.html
├── server.js
├── data.json
└── README.md
~~~

### 🚀 How to Use

  1. Install dependencies
~~~
npm install express
~~~
  2. Start the server
~~~
node server.js
~~~
  3. Open the page or generate a QR code
~~~
http://localhost:3000
~~~
