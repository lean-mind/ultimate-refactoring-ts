import { AuthenticationService } from './AuthenticationService'
import { describe, expect, it } from 'vitest'

describe('AuthenticationService should', () => {
  it('distinguish administrator role', () => {
    const service = new AuthenticationService()
    const adminId = 12345
    expect(service.isAuthenticated(adminId)).toBeTruthy()
  })

  it('distinguish non admin role', () => {
    const service = new AuthenticationService()
    const adminId = 11111
    expect(service.isAuthenticated(adminId)).toBeFalsy()
  })
})
