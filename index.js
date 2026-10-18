/**
 * Host half of Paper Skin.
 *
 * Serves the journal cover artwork and Elsevier tree mark from ./assets so the
 * browser module can use the original editorial imagery without a build step.
 * It contributes no tools, no model-facing routes and no session context.
 */
import { readFile } from 'node:fs/promises'
import { extname, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

export const inject = ['webServer']

const ROUTE = '/paper-skin-assets'
const ASSET_ROOT = resolve(fileURLToPath(new URL('./assets/', import.meta.url)))
const MIME = Object.freeze({
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
})

function finish(res, status, headers = {}) {
  res.writeHead(status, {
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff',
    ...headers,
  })
  res.end()
}

async function serveAsset(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    finish(res, 405, { allow: 'GET, HEAD' })
    return
  }

  let pathname
  try {
    pathname = decodeURIComponent(new URL(req.url ?? ROUTE, 'http://dsh.local').pathname)
  } catch {
    finish(res, 400)
    return
  }

  const suffix = pathname.startsWith(`${ROUTE}/`) ? pathname.slice(ROUTE.length + 1) : ''
  const target = resolve(ASSET_ROOT, suffix)
  if (target !== ASSET_ROOT && !target.startsWith(`${ASSET_ROOT}${sep}`)) {
    finish(res, 403)
    return
  }

  try {
    const body = await readFile(target)
    res.writeHead(200, {
      'cache-control': 'public, max-age=31536000, immutable',
      'content-length': String(body.byteLength),
      'content-type': MIME[extname(target).toLowerCase()] ?? 'application/octet-stream',
      'x-content-type-options': 'nosniff',
    })
    res.end(req.method === 'HEAD' ? undefined : body)
  } catch (error) {
    if (error instanceof Error && 'code' in error
      && (error.code === 'ENOENT' || error.code === 'EISDIR')) {
      finish(res, 404)
      return
    }
    throw error
  }
}

export function apply(ctx) {
  ctx.effect(() => ctx.webServer.register({
    kind: 'prefix',
    path: ROUTE,
    handler: serveAsset,
  }), 'paper-skin: journal artwork route')
}
