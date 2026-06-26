/** Vercel serverless visit counter. For persistent counts, add free Upstash Redis env vars. */
let memoryCount = 0

async function getUpstashCount(increment) {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null

  const endpoint = increment ? `${url}/incr/careerlens:visits` : `${url}/get/careerlens:visits`
  const response = await fetch(endpoint, {
    method: increment ? 'POST' : 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })

  if (!response.ok) return null
  const data = await response.json()
  return typeof data.result === 'number' ? data.result : Number(data.result) || 0
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  try {
    if (req.method === 'GET') {
      const upstash = await getUpstashCount(false)
      res.status(200).json({ total: upstash ?? memoryCount })
      return
    }

    if (req.method === 'POST') {
      const upstash = await getUpstashCount(true)
      if (upstash !== null) {
        res.status(200).json({ total: upstash })
        return
      }

      memoryCount += 1
      res.status(200).json({ total: memoryCount })
      return
    }

    res.status(405).json({ error: 'Method not allowed' })
  } catch {
    res.status(500).json({ error: 'Counter unavailable' })
  }
}
