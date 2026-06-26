import fs from 'node:fs'
import path from 'node:path'
import type { Plugin, ViteDevServer } from 'vite'

const COUNTER_FILE = path.resolve('data', 'visit-count.json')

function ensureCounterFile() {
  if (!fs.existsSync(COUNTER_FILE)) {
    fs.mkdirSync(path.dirname(COUNTER_FILE), { recursive: true })
    fs.writeFileSync(COUNTER_FILE, JSON.stringify({ total: 0, updatedAt: null }, null, 2))
  }
}

function readCount(): number {
  ensureCounterFile()
  const data = JSON.parse(fs.readFileSync(COUNTER_FILE, 'utf-8')) as { total?: number }
  return typeof data.total === 'number' ? data.total : 0
}

function writeCount(total: number) {
  ensureCounterFile()
  fs.writeFileSync(
    COUNTER_FILE,
    JSON.stringify({ total, updatedAt: new Date().toISOString() }, null, 2),
  )
}

function sendJson(res: import('http').ServerResponse, status: number, body: unknown) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}

function handleVisits(req: import('http').IncomingMessage, res: import('http').ServerResponse) {
  if (req.method === 'GET') {
    sendJson(res, 200, { total: readCount() })
    return
  }

  if (req.method === 'POST') {
    const total = readCount() + 1
    writeCount(total)
    sendJson(res, 200, { total })
    return
  }

  sendJson(res, 405, { error: 'Method not allowed' })
}

export function visitCounterPlugin(): Plugin {
  return {
    name: 'visit-counter',
    configureServer(server: ViteDevServer) {
      server.middlewares.use('/api/visits', handleVisits)
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/visits', handleVisits)
    },
  }
}
