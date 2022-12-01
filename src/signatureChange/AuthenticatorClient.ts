import { AuthenticationService } from './AuthenticationService'

export class AuthenticatorClient {
  // eslint-disable-next-line no-useless-constructor
  constructor (private authenticationService: AuthenticationService) {}

  static main () {
    new AuthenticatorClient(new AuthenticationService()).run()
  }

  run () {
    const authenticated = this.authenticationService.isAuthenticated(33)
    console.log(`33 is authenticated = ${authenticated}`)
  }
}
