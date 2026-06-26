const API_PATH = '/api/visits'
const TIMEOUT_MS = 8000

async function requestVisits(method: 'GET' | 'POST'): Promise<number | null> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const response = await fetch(API_PATH, {
      method,
      signal: controller.signal,
      headers: method === 'POST' ? { 'Content-Type': 'application/json' } : undefined,
    })

    if (!response.ok) return null

    const data = (await response.json()) as { total?: number }
    return typeof data.total === 'number' ? data.total : null
  } catch {
    return null
  } finally {
    clearTimeout(timeout)
  }
}

export function pathToCounterKey(pathname: string): string {
  if (pathname === '/') return 'page-home'
  return `page-${pathname.replace(/^\//, '').replace(/\//g, '-')}`
}

export async function recordPageVisit(pathname: string): Promise<number | null> {
  const sessionKey = `careerlens-visit:${pathToCounterKey(pathname)}`
  const isNewSession = !sessionStorage.getItem(sessionKey)

  if (isNewSession) {
    sessionStorage.setItem(sessionKey, '1')
    return requestVisits('POST')
  }

  return requestVisits('GET')
}
