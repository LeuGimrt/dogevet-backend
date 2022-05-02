import { Authorized, TypedRequestBody } from "./base";

// Get User

interface GetUserBody extends Authorized {}

export interface GetUserRequest extends TypedRequestBody<GetUserBody> {}

// Update User

interface UpdateUserBody extends Authorized {
  firstname: string;
  lastname: string;
  phone: string;
}

export interface UpdateUserRequest extends TypedRequestBody<UpdateUserBody> {}
