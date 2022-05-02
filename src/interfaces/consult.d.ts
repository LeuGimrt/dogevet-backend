import { TypedRequestBody, Authorized } from "./base";

// New Consult

interface NewConsultBody extends Authorized {
  pet_id: string;
  symptoms: string;
  medicine: string;
  cost: number;
  x_ray_img: string;
}

export interface NewConsultRequest extends TypedRequestBody<NewConsultBody> {}
