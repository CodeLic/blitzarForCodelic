import { isPlainObject } from 'is-what'
import { Notify } from 'quasar'

/**
 * Show a toast at the bottom of the screen
 */
export function showToast(message: string, payload: any, origin?: any): void {
  if (origin === 'default') return
  if (isPlainObject(payload) && payload.origin === 'default') return
  const caption = isPlainObject(payload) ? JSON.stringify(payload) : payload
  Notify.create({ message, caption })
}
