import { Schema, Document, models, model } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string; // ✅ Slug added
  image: string;
  content: string;
  views:number,
  viewers:string,
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema<IBlog> = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true }, // ✅ unique slug
    image: { type: String, required: true },
    content: { type: String, required: true },
    views: { type: Number, default: 0 },
   viewers: [{ type: String }], // IPs store karne ke liye

  },
  { timestamps: true }
);

export default models.Blog || model<IBlog>("Blog", BlogSchema);
