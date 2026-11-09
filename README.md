# Cedi Plan

Offline-first budget app (installable PWA) with an AI proxy.

## Deploy (GitHub + Netlify)
1. Create a new GitHub repository and upload every file in this folder (keep the netlify folder).
2. On netlify.com choose Add new site > Import from GitHub, pick the repo. Leave the build command empty and publish directory as `.`
3. In Site settings > Environment variables add `ANTHROPIC_API_KEY` (from console.anthropic.com), then redeploy.
4. Open the Netlify link on your phone and use Add to Home screen.

Set a monthly spend limit in the Anthropic console, since anyone with the link can trigger AI calls.

GitHub Pages alone is static, so the AI buttons will not work there (the keyword fallback still does).
Data is stored in each person's browser (localStorage). A shared database is not included.
