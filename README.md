# Pole Pole Safari Website

Static HTML/CSS/JavaScript website for the Pole Pole Kenya & Tanzania safari brand.

## Run locally
Open `index.html` directly, or serve the folder with any static server.

## GitHub Pages
Push this folder to a GitHub repository and enable **Settings → Pages → Deploy from a branch**.

## n8n later
The enquiry flow is already prepared for a webhook.

In `app.js`, set:

```js
const N8N_WEBHOOK_URL = 'https://YOUR-N8N-DOMAIN/webhook/pole-pole-enquiry';
```

The form will POST the full planner data as JSON. Until a webhook URL is added, submission is logged in the browser console and the success page is shown.
