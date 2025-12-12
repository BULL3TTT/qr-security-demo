# QR-Security-Demo
### Educational Demonstration for Digital Security Awareness

This project was created exclusively for **educational purposes** as part of a **digital security awareness conference/workshop**.
Its goal is to demonstrate how simply scanning a QR code can trigger unexpected actions—such as automatic redirections or basic browser data collection—without the user realizing it.

## 🎯 Purpose of This Demonstration

The main goal is to help users:
- Understand how QR codes or links can be used to execute hidden or unexpected actions.
- Recognize the risks of interacting with untrusted QR codes.
- See, transparently, what type of non-sensitive browser information can be collected by any website.
- Become aware of the importance of verifying the origin of QR codes before scanning them.

## ⚠️ Important Disclaimer

**This project is for EDUCATIONAL PURPOSES ONLY.**
- Do not use this code in production environments.
- Do not use this to collect data from users without explicit consent.
- This demonstration should only be used in controlled, educational settings with informed participants.
- The authors are not responsible for misuse of this code.

## 📂 Project Structure

```
/
├── backend/
│   ├── data.json          
│   ├── dockerfile         
│   ├── package.json       
│   └── server.js          
│
├── frontend/
│   ├── admin.html         
│   ├── dockerfile         
│   ├── index.html         
│   └── nginx.conf         
│
└── docker-compose.yml     
```

## 🚀 How to Use

### 1. Clone or download this repository

### 2. Build and start the containers

```bash
docker compose up --build
```

### 3. Access the application

- **Main page** (scan this URL as QR code): `http://localhost`
- **Admin dashboard**: `http://localhost/admin.html`

### 4. Stop the containers

```bash
docker compose down
```

## What This Project Does

When a user visits the main page (`index.html`), the application:

1. **Collects basic browser information**:
   - User Agent
   - Language preferences
   - Platform/OS
   - Screen resolution
   - Window size
   - Hardware concurrency (CPU cores)
   - Device memory (if available)
   - Connection type and speed
   - Online status

2. **Fetches public IP address** using an external API (ipify.org)

3. **Sends all collected data** to the local server using `fetch()` API

4. **Automatically redirects** the user to YouTube, simulating how an attacker could hide malicious activity behind a normal redirect

5. **Stores the data** in `backend/data.json` for demonstration purposes

6. **Displays collected data** in the admin dashboard (`admin.html`) in real-time

## 📄 License

This project is provided as-is for educational purposes only.

## 🤝 Contributing

This is an educational demonstration project. Suggestions and improvements are welcome, but please keep in mind the educational nature of this project.

---

**Remember**: Always verify the source of QR codes before scanning them, especially in public places or from unknown sources.

