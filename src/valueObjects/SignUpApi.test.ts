import { describe, expect, it } from 'vitest'
import { UserController, UserSignUpResponse } from "./UserController.ts";
import { User } from './User.ts';
import { InMemoryUserRepository } from "./InMemoryUserRepository.ts";
import { UserService } from "./UserService.ts";

describe('SignUpApi', () => {
  it('should create a new user', () => {
    const userController = new UserController(new UserService(new InMemoryUserRepository()))

    const user: User = {
      id: 0,
      email: 'dumbledore@hogwarts.uk',
      password: 'bestMagoEver1.',
      name: 'Dumbledore',
      address: 'Hogwarts, despacho 1',
    }

    const response: UserSignUpResponse = userController.signUp(user)

    expect(response.status).toBe(200)
  })

  it('should NOT create a user when the email is not valid', () => {
    const userController = new UserController(new UserService(new InMemoryUserRepository()))

    const user: User = {
      id: 0,
      email: 'invalidEmail',
      password: 'bestMagoEver1.',
      name: 'Dumbledore',
      address: 'Hogwarts, despacho 1',
    }

    const response: UserSignUpResponse = userController.signUp(user)

    expect(response.status).toBe(500)
    expect(response.message).toBe('Error: Invalid email')
  })

  it('should NOT create a user when the password is not valid', () => {
    const userController = new UserController(new UserService(new InMemoryUserRepository()))

    const user: User = {
      id: 0,
      email: 'dumbledore@hogwarts.uk',
      password: '1234',
      name: 'Dumbledore',
      address: 'Hogwarts, despacho 1',
    }

    const response: UserSignUpResponse = userController.signUp(user)

    expect(response.status).toBe(500)
    expect(response.message).toBe('Error: Password too short')
  })

  it('should NOT create an already registered user', () => {
    const userController = new UserController(new UserService(new InMemoryUserRepository()))

    const user: User = {
      id: 0,
      email: 'dumbledore@hogwarts.uk',
      password: 'bestMagoEver1.',
      name: 'Dumbledore',
      address: 'Hogwarts, despacho 1',
    }

    userController.signUp(user)
    const response: UserSignUpResponse = userController.signUp(user)

    expect(response.status).toBe(500)
    expect(response.message).toBe('Error: User already exists')
  })
})
