import { Authorized, TypedRequestBody, TypedRequest } from "./base";

// New Dog

interface NewDogBody extends Authorized {
  name: string;
  b_date: string;
  type: string;
  sex: "M" | "F";
  img: string;
}

export interface NewDogRequest extends TypedRequestBody<NewDogBody> {}

// Search Dog

export interface SearchDogRequest extends TypedRequest<{}, { name: string }> {}

// Get Dogs

interface GetDogsBody extends Authorized {}

export interface GetDogsRequest extends TypedRequestBody<GetDogsBody> {}

// Dog Details

export interface DogDetailsRequest
  extends TypedRequest<{}, { dogId: string }> {}
