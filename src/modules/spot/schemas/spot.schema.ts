import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { SpotType } from "src/modules/spot-type/schemas/spot-type.schema";

export type SpotDocument = HydratedDocument<Spot>;

@Schema()
export class Spot {
  @Prop()
  name: string;

  @Prop()
  spotType: SpotType;

  @Prop()
  url: string;

  @Prop()
  location: string;

  @Prop()
  latitude: string;

  @Prop()
  longitude: string;

  @Prop()
  tags: string[];
}

export const SpotSchema = SchemaFactory.createForClass(Spot);