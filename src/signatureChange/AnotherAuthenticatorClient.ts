import { AuthenticationService } from './AuthenticationService'

export class AnotherAuthenticatorClient {
  unusedClientCode () {
    try {
      new AuthenticationService().isAuthenticated(3545)
    } catch (e) {
      console.error(e)
    }
  }
}
