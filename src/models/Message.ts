import { Schema, Document, models, model } from "mongoose";

export interface IMessage extends Document {
  email: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema: Schema<IMessage> = new Schema(
  {
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

// ✅ Prevent recompilation issue in Next.js
const Message = models.Message || model<IMessage>("Message", MessageSchema);
export default Message;
