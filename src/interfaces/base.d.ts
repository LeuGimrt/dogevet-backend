import { User } from "@prisma/client";
import { Request } from "express";

export interface TypedRequestBody<T> extends Request {
  body: T;
}

export interface TypedRequest<T, K> extends Request<K, {}, T> {
  params: K;
  body: T;
}

// For extending requests with an authorized user
export interface Authorized {
  user: User;
}
