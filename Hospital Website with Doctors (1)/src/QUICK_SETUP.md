# Quick Setup Guide - Google Forms Integration

## 🚀 Quick Start (5 Minutes)

### 1. Create Google Form
- Go to https://forms.google.com
- Create new form: "AID UR HEALTH - Appointment Request"
- Add these fields (in order):
  1. First Name (Short answer, Required)
  2. Last Name (Short answer, Required)  
  3. Email (Short answer, Required)
  4. Phone Number (Short answer, Required)
  5. Department (Dropdown, Required)
  6. Preferred Date (Date, Required)
  7. Preferred Time (Dropdown, Required)
  8. Insurance Provider (Short answer, Optional)
  9. Message (Paragraph, Optional)

### 2. Get Entry IDs
- Click ⋮ (three dots) → "Get pre-filled link"
- Fill in dummy data for all fields
- Click "Get Link"
- Copy the URL and extract entry IDs

**Example URL:**
```
https://docs.google.com/forms/d/e/1FAIpQL.../viewform?entry.123456=test&entry.789012=test...
```

### 3. Update Contact.tsx

Open `/components/Contact.tsx` and update these values at the top:

```typescript
const GOOGLE_FORM_ENABLED = true; // Change this to true!
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

const FIELD_IDS = {
  firstName: "entry.123456",      // Replace with your IDs
  lastName: "entry.789012",       // Replace with your IDs
  email: "entry.345678",          // Replace with your IDs
  phone: "entry.901234",          // Replace with your IDs
  department: "entry.567890",     // Replace with your IDs
  date: "entry.123789",           // Replace with your IDs
  time: "entry.456012",           // Replace with your IDs
  insurance: "entry.789345",      // Replace with your IDs
  message: "entry.012678",        // Replace with your IDs
};
```

### 4. Link to Google Sheets (For CSV Export)
- In Google Form → Responses tab
- Click green Sheets icon
- Name it "AID UR HEALTH - Appointments"
- Done! All submissions auto-save to the sheet

### 5. Download CSV
- Open the Google Sheet
- File → Download → CSV
- You now have all appointment data!

## ✅ Testing

1. Submit a test appointment on your website
2. Check Google Form responses
3. Check Google Sheet - data should appear
4. Download as CSV to verify

## 📝 Notes

- CORS errors in console are normal - form still submits!
- Check Google Form responses to confirm submissions
- Each form field matches exactly with website form
- Data automatically flows: Website → Google Form → Google Sheet → CSV

## 🔗 Full Documentation

For detailed instructions, see `/GOOGLE_FORMS_INTEGRATION_GUIDE.md`
