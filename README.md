
# 📬 Contact Us – Single Page Responsive Form

This is a simple and elegant **Contact Us** web page that allows users to submit their details — including **Name**, **Phone Number**, **Email ID**, and an optional **Message**. The form submission is handled via **Formspree**, and the page is fully responsive for both desktop and mobile devices.

---

## 🚀 Features

- ✅ Clean and minimal design
- ✅ Company logo section (left on desktop, bottom on mobile)
- ✅ Real-time form validation (phone and email)
- ✅ JavaScript-powered submission (no page reload)
- ✅ Responsive layout (mobile-friendly)
- ✅ Hosted on GitHub Pages for free access

---

## 🧩 Technologies Used

- **HTML5**
- **CSS3**
- **Vanilla JavaScript (ES6)**
- **Formspree** (for handling form submissions)
- **GitHub Pages** (for hosting)

---
<!--
## 📸 Screenshots

> Desktop View  
![Desktop View](https://via.placeholder.com/800x300?text=Desktop+View)

> Mobile View  
![Mobile View](https://via.placeholder.com/300x600?text=Mobile+View)
-->
---

## 📝 How It Works

1. Users fill out the form with their name, phone number, email, and message.
2. JavaScript validates:
   - Phone must be at least **10 digits**
   - Email must be in proper format
3. Form data is submitted via `fetch()` to **Formspree**
4. On success, a **popup alert** shows: `"Thanks for contacting us!"`
5. Data reaches your **Formspree inbox/email**

---

## 📂 Folder Structure

```
contact-us/
├── index.html       # Main HTML structure
├── style.css        # All page styling
└── script.js        # Form validation and Formspree submission
```

---

## ⚙️ Setup Instructions

1. **Fork or clone** this repository.
2. Replace `YOUR_FORM_ID` in `script.js` with your actual Formspree ID:
   ```js
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", { ... });
   ```
3. (Optional) Replace the placeholder logo with your company’s logo in `index.html`:
   ```html
   <img src="your-logo.png" alt="Company Logo" class="logo" />
   ```
4. **Push to GitHub** and enable GitHub Pages in the repo settings.
5. Share the generated link to collect responses from users.

---

## 🌐 Live Demo

> 🧪 [Enable GitHub Pages](https://adityaraj81.github.io/ContactUS/).

---

## 🙏 Credits

Made with ❤️ by **Aditya Raj**

---

## 📧 Contact

If you have any feedback or want to collaborate:
- 📧 Email: [connect2rajaditya@gmail.com]
