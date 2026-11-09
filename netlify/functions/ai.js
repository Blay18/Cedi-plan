// Free AI proxy using Google Gemini. Set GEMINI_API_KEY in Netlify.
exports.handler = async (e) => {
  if (e.httpMethod !== 'POST') return { statusCode: 405, body: '' };
  let b; try { b = JSON.parse(e.body); } catch { return { statusCode: 400, body: '' }; }
  const prompt = String(b.prompt || '').slice(0, 6000);
  if (!prompt) return { statusCode: 400, body: '' };
  const model = process.env.AI_MODEL || 'gemini-flash-lite-latest';
  const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-goog-api-key': process.env.GEMINI_API_KEY },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: b.quick ? 200 : 700 }
    })
  });
  if (!r.ok) return { statusCode: r.status === 429 ? 429 : 502, body: '' };
  const d = await r.json();
  const text = ((d.candidates && d.candidates[0] && d.candidates[0].content && d.candidates[0].content.parts) || []).map(p => p.text || '').join('');
  return { statusCode: 200, headers: { 'content-type': 'application/json' }, body: JSON.stringify({ text }) };
};
