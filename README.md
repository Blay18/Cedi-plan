# Cedi Plan

A free, simple budgeting app built for young earners in Ghana. Works offline and installs on your phone like an app.

**Try it:** https://cedi-plan.netlify.app

## Features
- Add your income, and it splits automatically: 50% Needs, 30% Wants, 15% Savings, 5% Giving
- Add daily expenses in seconds
- AI sorts each expense into the right category
- Savings goals with progress, for example GH₵1,000 in 80 days
- Debt tracker for money you owe and money owed to you
- Monthly report of spent vs saved, with an AI review
- Works offline, no bank connection, all data stays on your phone
- In-app feedback and rating

## Install on your phone
Open the link in Chrome and choose Add to Home screen. On iPhone use Safari, then Share, then Add to Home Screen.

## Run it yourself
Fork this repo and deploy it on Netlify. Add an environment variable named GEMINI_API_KEY (free key from aistudio.google.com/apikey) to turn on the AI features.

## Tech
Plain HTML, CSS and JavaScript, a service worker for offline use, and one Netlify function for the AI.

## License
MIT
