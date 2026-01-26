# 📧 Contact Form Setup Guide

Your contact form has been debugged and upgraded! Currently, it uses a **mailto** fallback that opens the user's email client. To receive messages directly to your inbox, follow one of the setup methods below.

---

## 🚀 Quick Setup Options (Choose One)

### ✅ **RECOMMENDED: Formspree** (Easiest & Free)

**Best for:** Simple setup, no coding required

1. Go to [https://formspree.io/](https://formspree.io/)
2. Click **"Get Started"** (free plan available)
3. Create an account (GitHub login available)
4. Click **"+ New Form"**
5. Enter your email: `rumarcatalan@gmail.com`
6. Copy your **Form ID** (looks like: `xyzabc123`)

**Setup in your code:**

Open `scripts/app.js`, find the `sendEmail` function (around line 160), and:

1. **Comment out** the METHOD 4 (mailto) section:
```javascript
// METHOD 4: Using mailto (Fallback - opens email client)
/*
const mailtoLink = `mailto:rumarcatalan@gmail.com...`;
window.location.href = mailtoLink;
return { success: true };
*/
```

2. **Uncomment** METHOD 1 and replace `YOUR_FORM_ID`:
```javascript
// METHOD 1: Using Formspree
const response = await fetch('https://formspree.io/f/xyzabc123', {  // ← Replace with your ID
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message
    })
});

return { success: response.ok };
```

**Done!** Messages will now go to `rumarcatalan@gmail.com`

---

### ⚡ **Web3Forms** (No Registration Required)

**Best for:** Quick testing, anonymous setup

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Click **"Get Free Access Key"**
3. Enter your email: `rumarcatalan@gmail.com`
4. Check your email and copy the **Access Key**

**Setup in your code:**

In `scripts/app.js`, uncomment METHOD 3 and add your key:

```javascript
// METHOD 3: Using Web3Forms
const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        access_key: 'YOUR_ACCESS_KEY_HERE',  // ← Paste your key
        name: name,
        email: email,
        subject: subject,
        message: message
    })
});

const result = await response.json();
return { success: result.success };
```

---

### 🔥 **EmailJS** (More Features)

**Best for:** Custom email templates, multiple recipients

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a free account
3. **Add Email Service:**
   - Dashboard → Email Services → Add New Service
   - Choose Gmail or your email provider
   - Connect your `rumarcatalan@gmail.com` account
   - Note your **Service ID**

4. **Create Email Template:**
   - Dashboard → Email Templates → Create New Template
   - Design your template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Subject
     - `{{message}}` - Message content
   - Note your **Template ID**

5. **Get Public Key:**
   - Dashboard → Account → API Keys
   - Copy your **Public Key**

**Setup in your code:**

1. Add EmailJS SDK to your HTML (`index.html`) before closing `</body>`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    (function(){
        emailjs.init("YOUR_PUBLIC_KEY"); // ← Paste your public key
    })();
</script>
<script src="scripts/app.js"></script>
```

2. In `scripts/app.js`, uncomment METHOD 2:
```javascript
// METHOD 2: Using EmailJS
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
    to_email: "rumarcatalan@gmail.com"
}, "YOUR_PUBLIC_KEY")
.then(() => {
    return { success: true };
})
.catch(() => {
    return { success: false };
});
```

---

## 🧪 Testing Your Form

1. Open your website
2. Navigate to **Contact** section
3. Fill out the form
4. Click **Send Message**
5. Check your email inbox at `rumarcatalan@gmail.com`

**Expected Behavior:**
- ✅ Form shows "Sending..." while processing
- ✅ Success message appears in green
- ✅ Form clears after successful send
- ✅ Email arrives in your inbox
- ❌ Error message shows if something fails

---

## 🎯 Current Setup (Fallback)

Right now, your form uses **METHOD 4** (mailto), which means:
- ✅ Works without any setup
- ✅ Opens user's default email client (Outlook, Gmail app, etc.)
- ❌ Requires user to have email client configured
- ❌ Less convenient for users
- ❌ You don't receive messages automatically

**Recommendation:** Switch to **Formspree** (METHOD 1) for the best user experience!

---

## 🛠️ Troubleshooting

**Form shows error message:**
- Check your API key/form ID is correct
- Verify your email service is active
- Check browser console for errors (F12)

**No email received:**
- Check spam/junk folder
- Verify email address in service settings
- Test with a simple message first

**"Access denied" or CORS errors:**
- Make sure you're testing on a live website (not `file://`)
- Use a local server or deploy to GitHub Pages/Netlify

---

## 📝 Need Help?

1. Check the service documentation:
   - [Formspree Docs](https://help.formspree.io/)
   - [Web3Forms Docs](https://docs.web3forms.com/)
   - [EmailJS Docs](https://www.emailjs.com/docs/)

2. Feel free to test with the current mailto setup - it works!

---

**Last Updated:** January 26, 2026
