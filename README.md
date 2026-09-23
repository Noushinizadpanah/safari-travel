# Safari Atelier — Kenya Safari MVP

A simple static front-end MVP for a tailor-made Kenya safari website.

## Files
- `index.html`
- `styles.css`
- `app.js`

## Run locally
The simplest option is to double-click `index.html`.

For a better local development experience, use VS Code + Live Server.

## n8n integration
In `app.js`, find:

```js
const N8N_WEBHOOK_URL = "";
```

Replace it with your n8n Production Webhook URL.

The form will POST a JSON object with:
- regions
- trip style
- travel date
- duration
- experiences
- accommodation
- budget
- traveller information
- contact information

## GitHub
Example:

```bash
git init
git add .
git commit -m "Initial safari MVP"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

## Important before production
- Replace external Unsplash URLs with locally hosted licensed images.
- Add form validation.
- Add a privacy notice / consent text.
- Protect your n8n webhook.
- Add analytics.
- Review legal requirements before accepting payments or selling travel packages.
