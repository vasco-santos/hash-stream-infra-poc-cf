import { json } from 'itty-router'

/**
 * Get gateway API version information.
 */
export function versionGet(request: Request): Response {
  return json({
    version: '0.0.0',
  })
}
