// Keeps your Anthropic key on the server. Set ANTHROPIC_API_KEY in Netlify.
exports.handler = async (e) => {
  if (e.httpMethod !== 'POST') return { statusCode: 405, body: '' };
  let b; try { b = JSON.parse(e.body); } catch { return { statusCode: 400, body: '' }; }
  const prompt = String(b.prompt || '').slice(0, 6000);
  if (!prompt) return { statusCode: 400, body: '' };
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: process.env.AI_MODEL || 'claude-haiku-5-5', max_tokens: b.quick ? 60 : 400, messages: [{ role: 'user', content: prompt }] })
  });
  if (!r.ok) return { statusCode: r.status === 429 ? 429 : 502, body: '' };
  const d = await r.json();
  return { statusCode: 200, headers: { 'content-type': 'application/json' }, body: JSON.stringify({ text: (d.content || []).map(c => c.text || '').join('') }) };
};
