import { describe, expect, it } from 'vitest'
import { UserSignUpController, ControllerRequest, ControllerRespose } from "../infrastructure/http/UserSignUpController.ts";
import { InMemoryUserRepository } from "../infrastructure/repositories/InMemoryUserRepository.ts";
import { UserSignUpAction } from "../application/users/signUp/UserSignUpAction.ts";
import { FakePasswordHashingService } from "./FakePasswordHashingService.ts";

describe('UserSignUpController', () => {
  const userRepository = new InMemoryUserRepository();

  it('should create a new user', async () => {
    const userController = new UserSignUpController(
      new UserSignUpAction(
        userRepository,
        new FakePasswordHashingService()
      )
    );

    const request: ControllerRequest = {
      id: "c25aae6a-e45e-4ef9-90a3-0823916d774b",
      email: 'dumbledore@hogwarts.uk',
      password: 'bestMagover1.',
      name: 'Dumbledore'
    }

    const response: ControllerRespose = await userController.signUp(request)

    expect(response.status).toBe(200)
  })

  it('should NOT create a user when the email is not valid', async () => {
    const userController = new UserSignUpController(
      new UserSignUpAction(
        userRepository,
        new FakePasswordHashingService()
      )
    );

    const request: ControllerRequest = {
      id: "c25aae6a-e45e-4ef9-90a3-0823916d774b",
      email: 'dumbledore.hogwarts.uk',
      password: 'bestMagoEver1.',
      name: 'Dumbledore'
    }

    const response: ControllerRespose = await userController.signUp(request);

    expect(response.status).toBe(400)
    expect(response.message).toBe('[EmailInvalid]');
  })

  it('should NOT create a user when the password is not valid', async () => {
    const userController = new UserSignUpController(
      new UserSignUpAction(
        userRepository,
        new FakePasswordHashingService()
      )
    );

    const request: ControllerRequest = {
      id: "c25aae6a-e45e-4ef9-90a3-0823916d774b",
      email: 'dumbledore@hogwarts.uk',
      password: '1234',
      name: 'Dumbledore'
    }

    const response: ControllerRespose = await userController.signUp(request);

    expect(response.status).toBe(400)
    expect(response.message).toBe('[PasswordTooShort]');
  })

  it('should NOT create an already registered user', async () => {
    const userController = new UserSignUpController(
      new UserSignUpAction(
        userRepository,
        new FakePasswordHashingService()
      )
    );

    const request: ControllerRequest = {
      id: "c25aae6a-e45e-4ef9-90a3-0823916d774b",
      email: 'dumbledore@hogwarts.uk',
      password: 'bestMagoEver1.',
      name: 'Dumbledore'
    }

    const response: ControllerRespose = await userController.signUp(request);

    expect(response.status).toBe(500)
    expect(response.message).toBe('UserAlreadyExist')
  })
})
