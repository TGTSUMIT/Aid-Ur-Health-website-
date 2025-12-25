# Google Forms Integration Guide for AID UR HEALTH

This guide will help you create a Google Form and integrate it with your appointment scheduling system.

## Step 1: Create Your Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click the **+ Blank** button to create a new form
3. Title it: "AID UR HEALTH - Appointment Request"

## Step 2: Add Form Fields

Add the following questions in **SHORT ANSWER** format (unless specified otherwise):

1. **First Name** (Short answer, Required)
2. **Last Name** (Short answer, Required)
3. **Email** (Short answer, Required, Email validation)
4. **Phone Number** (Short answer, Required)
5. **Department** (Dropdown, Required)
   - Options: General Medicine, Cardiology, Neurology, Pediatrics, Emergency Medicine, Orthopedics, Ophthalmology, Medicare Support
6. **Preferred Date** (Date, Required)
7. **Preferred Time** (Dropdown, Required)
   - Options: Morning (8AM - 12PM), Afternoon (12PM - 5PM), Evening (5PM - 8PM)
8. **Insurance Provider** (Short answer, Optional)
9. **Message** (Paragraph, Optional)

## Step 3: Get Form Field IDs

### Method 1: Using Pre-filled Link (Recommended)

1. In your Google Form, click the three dots menu (⋮) in the top right
2. Click **"Get pre-filled link"**
3. Fill in dummy data for each field (e.g., "test" for text fields)
4. Click **"Get Link"** at the bottom
5. Copy the generated URL - it will look like:
   ```
   https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?usp=pp_url&entry.123456789=test&entry.987654321=test...
   ```
6. Extract the **entry IDs** from the URL:
   - `entry.123456789` is the ID for the first field
   - `entry.987654321` is the ID for the second field
   - And so on...

### Method 2: Using Browser Inspector

1. Open your published Google Form in a browser
2. Right-click on a field and select "Inspect Element"
3. Look for the `name` attribute in the HTML - it will be something like `entry.123456789`

## Step 4: Get Your Form Action URL

1. In your Google Form editor, click **Send** button (top right)
2. Or right-click on your published form and view page source
3. The form action URL format is:
   ```
   https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
   ```
4. Replace `YOUR_FORM_ID` with your actual form ID (visible in the form URL)

## Step 5: Configure the Website Integration

Open `/components/Contact.tsx` and replace the placeholder values at the top of the file:

```typescript
// Replace these with your actual Google Form details
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
const GOOGLE_FORM_ENABLED = true; // Set to true to enable

const FIELD_IDS = {
  firstName: "entry.YOUR_FIRSTNAME_ID",
  lastName: "entry.YOUR_LASTNAME_ID",
  email: "entry.YOUR_EMAIL_ID",
  phone: "entry.YOUR_PHONE_ID",
  department: "entry.YOUR_DEPARTMENT_ID",
  date: "entry.YOUR_DATE_ID",
  time: "entry.YOUR_TIME_ID",
  insurance: "entry.YOUR_INSURANCE_ID",
  message: "entry.YOUR_MESSAGE_ID",
};
```

### Example Configuration:

If your pre-filled link looks like:
```
https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform?entry.12345=test&entry.67890=test...
```

Your configuration would be:
```typescript
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc.../formResponse";
const GOOGLE_FORM_ENABLED = true;

const FIELD_IDS = {
  firstName: "entry.12345",
  lastName: "entry.67890",
  // ... and so on
};
```

## Step 6: Link Form to Google Sheets (Automatic CSV Export)

1. In your Google Form, click the **Responses** tab
2. Click the green Google Sheets icon to create a spreadsheet
3. Name it "AID UR HEALTH - Appointments"
4. All form submissions will now automatically appear in this spreadsheet

### To Download as CSV:

1. Open your Google Sheet with responses
2. Go to **File** → **Download** → **Comma Separated Values (.csv)**
3. The CSV will contain all appointment data

## Step 7: Test the Integration

1. Fill out the appointment form on your website
2. Submit the form
3. Check your Google Form responses - you should see the new entry
4. Check your connected Google Sheet - the data should appear there too

## Troubleshooting

### Form Not Submitting
- Double-check that all entry IDs match your Google Form fields
- Ensure `GOOGLE_FORM_ENABLED` is set to `true`
- Check browser console for any errors

### Data Not Appearing in Google Sheets
- Make sure you've linked the form to Google Sheets (Step 6)
- Refresh the Google Sheet page

### CORS Errors in Console
- These are expected! We use `mode: "no-cors"` which prevents reading the response
- The form should still submit successfully even with CORS errors
- Check your Google Form responses to confirm submissions are being received

## Privacy Notice

Remember that this form collects personal health information. Make sure to:
- Add a privacy policy to your Google Form
- Comply with relevant healthcare privacy regulations (HIPAA, etc.)
- Inform users how their data will be used
- Keep form responses secure and limit access

## Additional Features

### Email Notifications
1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Add a script to send email notifications when new appointments are submitted
3. Or use **Form** → **Settings** → Enable "Email me a copy of responses"

### Automatic Confirmations
You can enable automatic email confirmations in Google Forms:
1. Click the three dots menu (⋮) in the form editor
2. Click **Settings**
3. Under **Presentation**, enable "Show link to submit another response"
4. Customize the confirmation message

---

**Need Help?** Check the Google Forms documentation at https://support.google.com/docs/answer/7322334
