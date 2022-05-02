import { Authorized, TypedRequestBody, TypedRequest } from "./base";

// New Pet

interface NewPetBody extends Authorized {
  name: string;
  b_date: string;
  type: string;
  sex: "M" | "F";
  img: string;
}

export interface NewPetRequest extends TypedRequestBody<NewPetBody> {}

// Search Pet

export interface SearchPetRequest extends TypedRequest<{}, { name: string }> {}

// Get Pets

interface GetPetsBody extends Authorized {}

export interface GetPetsRequest extends TypedRequestBody<GetPetsBody> {}

// Pet Details

export interface PetDetailsRequest
  extends TypedRequest<{}, { petId: string }> {}
