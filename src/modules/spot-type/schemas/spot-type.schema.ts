import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SpotTypeDocument = HydratedDocument<SpotType>;

@Schema()
export class SpotType {
  @Prop()
  name: string;
}

export const SpotTypeSchema = SchemaFactory.createForClass(SpotType);