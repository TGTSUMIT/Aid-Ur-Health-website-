# Google Forms Integration Setup Guide

This guide will help you integrate the appointment form with Google Forms to automatically save submissions to a CSV file.

## Step 1: Create a Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Create a new form with the following fields (names must match exactly):
   - First Name (Short answer)
   - Last Name (Short answer)
   - Email (Short answer)
   - Phone Number (Short answer)
   - Department (Dropdown or Multiple choice)
   - Preferred Date (Date)
   - Preferred Time (Dropdown with options: Morning, Afternoon, Evening)
   - Insurance Provider (Short answer)
   - Message (Paragraph)

## Step 2: Get the Form Action URL

1. Click "Send" in your Google Form
2. Click the link icon to get the form URL
3. Copy the form URL (it will look like: `https://docs.google.com/forms/d/e/FORM_ID/viewform`)
4. Replace `/viewform` with `/formResponse` to get the action URL
5. This is your `GOOGLE_FORM_ACTION_URL`

## Step 3: Get Field Entry IDs

1. Open your Google Form in preview mode
2. Right-click on the page and select "Inspect" or "View Page Source"
3. Search for `entry.` in the source code
4. Find the entry IDs for each field (they look like `entry.123456789`)
5. Map each entry ID to the corresponding form field

Example mapping:
```
entry.123456789 = First Name
entry.987654321 = Last Name
entry.111222333 = Email
... etc
```

## Step 4: Update the Contact.tsx File

1. Open `/components/Contact.tsx`
2. Find the commented code block starting with `/* Example Google Forms submission`
3. Uncomment the code
4. Replace `YOUR_FORM_ID` with your actual form ID
5. Replace each `YOUR_FIELDNAME_ID` with the corresponding entry ID from Step 3

Example:
```typescript
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc.../formResponse";

const formBody = new URLSearchParams({
  "entry.123456789": formData.firstName,
  "entry.987654321": formData.lastName,
  "entry.111222333": formData.email,
  // ... etc
});
```

## Step 5: Link to Google Sheets

1. In your Google Form, click on "Responses" tab
2. Click the Google Sheets icon to create a spreadsheet
3. All form submissions will now automatically save to this spreadsheet
4. You can download the spreadsheet as CSV at any time by:
   - Opening the Google Sheet
   - Going to File > Download > Comma Separated Values (.csv)

## Step 6: Test the Integration

1. Submit a test appointment through your website
2. Check the Google Sheet to verify the data was received
3. Verify that all fields are mapping correctly

## Important Notes

- The form uses `mode: "no-cors"` which means you won't receive a response confirmation from Google
- The success message is shown immediately after submission
- CORS restrictions prevent direct access to the Google Forms API response
- All data will be automatically saved to your Google Sheet
- You can set up email notifications in Google Forms to be notified of new submissions

## Export to CSV

To export your appointment data to CSV:

1. Open your Google Sheet (linked to the form)
2. File > Download > Comma Separated Values (.csv)
3. The CSV file will contain all appointment submissions with timestamps

## Alternative: Using Google Apps Script

For more advanced integration with real-time validation, consider using Google Apps Script:

1. Create a Google Apps Script web app
2. Deploy it as a web app with access set to "Anyone"
3. Use the web app URL instead of the formResponse URL
4. This allows you to get actual response confirmations and custom validation

Refer to [Google Apps Script documentation](https://developers.google.com/apps-script) for more details.
