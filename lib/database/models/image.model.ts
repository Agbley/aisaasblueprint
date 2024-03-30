import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string; // Assuming URL is stored as a string
  width?: number;
  height?: number;
  config?: object; // Consider defining a more specific interface if the config shape is known
  transformationUrl?: string; // Assumung URL is stored as a string
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstNAme: string;
    lastName: string;
  }; // Assuming the ObjectId is represented as a string in TypeScript
  createdAt?: Date;
  updatedAt?: Date;
}

const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformatonType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL, required: true },
  aspectRatio: { type: String },
  color: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
