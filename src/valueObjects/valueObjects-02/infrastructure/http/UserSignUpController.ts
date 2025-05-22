import { UserSignUpRequest, UserSignUpRequestArgs } from "../../application/users/signUp/UserSignUpRequest.ts";
import { UserSignUpAction } from "../../application/users/signUp/UserSignUpAction.ts";

export interface ControllerRequest {
  id: string
  email: string
  password: string
  name: string
}

export interface ControllerRespose {
  status: number
  message: string
}

export class UserSignUpController {
  constructor(private readonly userSignUpAction: UserSignUpAction) { }

  async signUp(request: ControllerRequest): Promise<ControllerRespose> {
    try {

      const actionRequest = UserSignUpRequest.create(this.buildUserSignUpRequestArgs(request));
      if (actionRequest.isFailure()) {
        return {
          status: 400,
          message: actionRequest.serializeErrors(),
        }
      }

      await this.userSignUpAction.signUp(actionRequest.value!);

      return {
        status: 200,
        message: `User registered successfully.`,
      };

    } catch (error) {
      return { status: 500, message: (error as Error).message };
    }
  }

  private buildUserSignUpRequestArgs(
    request: ControllerRequest): UserSignUpRequestArgs {

    return new UserSignUpRequestArgs(
      request.id,
      request.email,
      request.password,
      request.name
    );
  }
}
